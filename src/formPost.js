import React from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

class FormPost extends React.Component{
    
    state = {
        postSementara: {
            "userId": 1,
            "id": 1,
            "title": "",
            "body": ""
        }
    }

    handleForm = (event) => {
        console.log(event.target.name)

        let postSementaraNew = {...this.state.postSementara}

        // Rubah title atau body
        postSementaraNew[event.target.name] = event.target.value

        // Rubah id
        postSementaraNew['id'] = Date.now()
        
        // console.log(postSementara)
        this.setState({postSementara: postSementaraNew}, () => {
            console.log(this.state.postSementara)
        })
    }

    render(){
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <Form>
                    <FormGroup>
                         <Label>Title: </Label>
                         <Input name="title" onChange={(event) => this.handleForm(event)} type='text' placeholder='isi disini' />
                    </FormGroup>

                    <FormGroup>
                         <Label>Body: </Label>
                         <Input name="body" onChange={(event) => this.handleForm(event)} type='textarea' placeholder='isi disini' />
                    </FormGroup>

                    <FormGroup>
                        <Button onClick={() => this.props.handleButtonCreate(this.state.postSementara)} color='primary'>Submit</Button>
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
