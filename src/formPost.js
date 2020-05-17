import React from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

class FormPost extends React.Component{
    
    // state = {
    //     postSementara: {
    //         "userId": 1,
    //         "id": 1,
    //         "title": "",
    //         "body": ""
    //     }
    // }

    render(){
        // Ternary Operator
        console.log(this.props.statusButton.isEdit?'INI BENAR':'INI SALAH')
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <Form>
                    <FormGroup>
                         <Label>Title: </Label>
                         <Input name="title" onChange={(event) => this.props.handleForm(event)} type='text' placeholder='isi disini' value={this.props.postSementara.title} />
                    </FormGroup>

                    <FormGroup>
                         <Label>Body: </Label>
                         <Input name="body" onChange={(event) => this.props.handleForm(event)} type='textarea' placeholder='isi disini' value={this.props.postSementara.body} />
                    </FormGroup>

                    <FormGroup>
                        <Button onClick={() => this.props.handleButtonCreate(this.props.postSementara)} color='primary'>{this.props.statusButton.isEdit?'Edit':'Submit'}</Button>
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
