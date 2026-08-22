#!/usr/bin/env bash
# Compress and resize images in public/images using macOS `sips`.
# Originals are assumed to be backed up in ./image-backup already.
#
# - Caps the LONGEST side at MAX_DIM (handles portrait & landscape), keeps aspect ratio
# - Re-encodes JPEGs at JPEG_QUALITY
# - Resizes PNGs (big photo PNGs shrink a lot just from downscaling)
# - Only replaces a file if the processed version is smaller
set -euo pipefail

MAX_DIM=1600
JPEG_QUALITY=60
IMG_DIR="public/images"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

total_before=0
total_after=0

while IFS= read -r -d '' f; do
  ext="${f##*.}"
  ext_lc="$(echo "$ext" | tr '[:upper:]' '[:lower:]')"

  before=$(stat -f%z "$f")
  tmpfile="$TMP/work.$ext_lc"
  cp "$f" "$tmpfile"

  # Cap the longest side (Z = max of width/height) at MAX_DIM. sips only shrinks.
  sips -Z "$MAX_DIM" "$tmpfile" >/dev/null 2>&1 || true

  # Re-encode JPEGs with quality setting
  if [[ "$ext_lc" == "jpg" || "$ext_lc" == "jpeg" ]]; then
    sips -s format jpeg -s formatOptions "$JPEG_QUALITY" "$tmpfile" >/dev/null 2>&1 || true
  fi

  after=$(stat -f%z "$tmpfile")

  if (( after < before )); then
    cp "$tmpfile" "$f"
    total_before=$(( total_before + before ))
    total_after=$(( total_after + after ))
    printf '%-52s %6s KB -> %6s KB\n' "$(basename "$f")" "$(( before/1024 ))" "$(( after/1024 ))"
  else
    total_before=$(( total_before + before ))
    total_after=$(( total_after + before ))
  fi
done < <(find "$IMG_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0)

echo "----------------------------------------"
echo "Total before: $(( total_before/1024/1024 )) MB"
echo "Total after:  $(( total_after/1024/1024 )) MB"
