import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const List = () => {
    const renderCard = () => {
        return (
            <Card
                style={{ width: '18rem' }}
                bg='dark'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png" />
                <Card.Body>c
                    {/*<Card.Title>Card Title</Card.Title>*/}
                    <Card.Text>
                        some text
                    </Card.Text>
                    {/*<Button variant="primary">Go somewhere</Button>*/}
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    };

    const a = [1,1,1,1,1,1,1,1,1];

    return (
        <div>
            {a.map(item => (renderCard()))}
        </div>
    );
};

export default List;
