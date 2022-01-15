import {Card} from "react-bootstrap";

function WWD(props) {
  return (
    <Card className="mx-auto">
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WWD;
