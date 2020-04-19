import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';
import molly from './molly.png';

class PostCard extends React.Component{
    render(){
        return(
            <React.Fragment>
                <CardDeck>

                    <Card>
                        <CardImg top width='100%' src={molly} />
                        <CardBody>
                            <CardTitle><b>Maulana Ucup</b></CardTitle>
                            <CardText>Halo nama gua ucup</CardText>
                            <Button color='info'>Edit</Button>{' '}
                            <Button color='danger'>Hapus</Button>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width='100%' src={molly} />
                        <CardBody>
                            <CardTitle>Maulana Ucup</CardTitle>
                            <CardText>Halo nama gua ucup</CardText>
                            <Button color='danger'>Hapus</Button>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width='100%' src={molly} />
                        <CardBody>
                            <CardTitle>Maulana Ucup</CardTitle>
                            <CardText>Halo nama gua ucup</CardText>
                            <Button color='danger'>Hapus</Button>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width='100%' src={molly} />
                        <CardBody>
                            <CardTitle>Maulana Ucup</CardTitle>
                            <CardText>Halo nama gua ucup</CardText>
                            <Button color='danger'>Hapus</Button>
                        </CardBody>
                    </Card>
                    
                </CardDeck>
            </React.Fragment>
        )
    }
}

export default PostCard;