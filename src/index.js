import React from 'react';
import ReactDOM from 'react-dom';
import FormPost from './formPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import PostCard from './postCard';
import Axios from 'axios'; 
// import LearnState from './learnState'

class App extends React.Component{

    state = {
        // posts: [
        //     {
        //         id: 1,
        //         title: 'Maulana Ucup',
        //         text: 'Halo nama gua ucup'
        //     },
        //     {
        //         id: 2,
        //         title: 'Alif',
        //         text: 'Halo nama gua Alif'
        //     },
        //     // {
        //     //     id: 3
        //     //     title: 'Kalipa',
        //     //     text: 'Halo nama gua K***'
        //     // },
        //     {
        //         id: 4,
        //         title: 'Rehan',
        //         text: 'Halo nama gua Rehan'
        //     },
        //     {
        //         id: 5,
        //         title: 'Hana',
        //         text: 'Halo nama gua Hana'
        //     }
        // ]
        posts: [],
        postSementara: {
            "userId": 1,
            "id": 1,
            "title": "",
            "body": ""
        },
        statusButton:{
            isEdit: false
        }
    }

    getPostAPI = () => {
        Axios.get('http://localhost:3004/post?_sort=id&_order=desc').then((res)=>{
            console.log(res.data)
            this.setState({posts: res.data})
        })
    }

    deletePostAPI = (id) => {
        Axios.delete(`http://localhost:3004/post/${id}`).then((res)=>{
            console.log(res)
        })
    }

    createPostAPI = (formPost) => {
        Axios.post('http://localhost:3004/post', formPost).then((res) => {
            console.log(res)
        })
    }

    updatePostAPI = (id, formPost) => {
        Axios.put(`http://localhost:3004/post/${id}`, formPost).then((res) => {
            console.log(res)
        })
    }

    handleButtonDelete = (id) => {
        this.deletePostAPI(id)
        this.getPostAPI()
    }

    handleButtonCreate = (FormPost) => {
        if(this.state.statusButton.isEdit == true){
            this.updatePostAPI(this.state.postSementara.id, FormPost)
            console.log(this.state.postSementara.id)
            
            this.setState({statusButton: {
                isEdit: false
            }})
        }else {
            this.createPostAPI(FormPost)
        }
        
        this.getPostAPI()
    }

    handleButtonEdit = (data) => {
        // console.log("INi Button Edit")
        // console.log(data)
        this.setState({postSementara: data})
        this.setState({statusButton: {
            isEdit: true
        }})
    }

    handleForm = (event) => {
        console.log(event.target.name)

        let postSementaraNew = {...this.state.postSementara}

        // Rubah title atau body
        postSementaraNew[event.target.name] = event.target.value

        // Rubah id
        if(this.state.statusButton.isEdit == false){
            postSementaraNew['id'] = Date.now()
        }
        
        // console.log(postSementara)
        this.setState({postSementara: postSementaraNew}, () => {
            console.log(this.state.postSementara)
        })
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
           <React.Fragment>
               <Container>
                   <FormPost handleButtonCreate={this.handleButtonCreate} handleForm={this.handleForm} postSementara={this.state.postSementara} statusButton={this.state.statusButton}/>
                   <PostCard data={this.state.posts} handleButtonDelete={this.handleButtonDelete} handleButtonEdit={this.handleButtonEdit} />
                    {/* <LearnState /> */}
               </Container>
           </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));