import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, Col } from 'reactstrap';
import molly from './molly.png';

class PostCard extends React.Component{

    render(){
        // console.log(this.props.data)
        return(
                <CardDeck>
                    {
                        this.props.data.map((data) => {
                            return(
                                <Col md="3">
                                    <Card key={data.id} >
                                        <CardImg top width='100%' src={molly} />
                                        <CardBody>
                                            <CardTitle><b>{data.title}</b></CardTitle>
                                            <CardText>{data.body}</CardText>
                                            <Button onClick={() => this.props.handleButtonEdit(data)} color='info'>Edit</Button>{' '}
                                            <Button onClick={() => this.props.handleButtonDelete(data.id)} color='danger'>Delete</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </CardDeck>
        )
    }
}

export default PostCard;