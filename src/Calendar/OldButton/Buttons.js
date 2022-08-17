import { collection } from 'firebase/firestore';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Modals from './Modals';

function Buttons(props){
    <Container>
        <Button variant="primary">
            <a href = {props.link}>{props.text}</a>
        </Button>
    </Container>
    

    /** const [modalShow, setModalShow] = React.useState(false);
    return(
        <Container>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            {props.text}
        </Button>
        
        <Modals
            show={modalShow}
            onHide={() => setModalShow(false)} 
        />
        </Container>
        
    ); */
}
export default Buttons;