import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';
import molly from './molly.png';

class PostCard extends React.Component{
    render(){
        console.log(this.props.nama)
        return(
            <React.Fragment>
                <CardDeck>

                    {
                        this.props.data.map((data) => {
                            return(
                                <Card key={data.id} >
                                    <CardImg top width='100%' src={molly} />
                                    <CardBody>
                                        <CardTitle><b>{data.title}</b></CardTitle>
                                        <CardText>{data.text}</CardText>
                                        <Button color='info'>Edit</Button>{' '}
                                        <Button color='danger'>Hapus</Button>
                                    </CardBody>
                                </Card>
                            )
                        })
                    }
                    
                </CardDeck>
            </React.Fragment>
        )
    }
}

export default PostCard;