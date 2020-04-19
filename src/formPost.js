import React from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

class FormPost extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <Form>
                    <FormGroup>
                         <Label>Title: </Label>
                         <Input type='text' placeholder='isi disini' />
                    </FormGroup>

                    <FormGroup>
                         <Label>Body: </Label>
                         <Input type='textarea' placeholder='isi disini' />
                    </FormGroup>

                    <FormGroup>
                        <Button color='primary'>Submit</Button>
                    </FormGroup>
                </Form>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
            </React.Fragment>
        )
    }

}

export default FormPost
