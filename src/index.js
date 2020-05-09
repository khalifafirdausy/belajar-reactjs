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
        posts: []
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

    handleButtonDelete = (id) => {
        this.deletePostAPI(id)
        this.getPostAPI()
    }

    handleButtonCreate = (FormPost) => {
        this.createPostAPI(FormPost)
        this.getPostAPI()
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
           <React.Fragment>
               <Container>
                   <FormPost handleButtonCreate={this.handleButtonCreate}/>
                   <PostCard data={this.state.posts} handleButtonDelete={this.handleButtonDelete} />
                    {/* <LearnState /> */}
               </Container>
           </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));