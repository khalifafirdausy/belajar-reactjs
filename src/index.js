import React from 'react';
import ReactDOM from 'react-dom';
import FormPost from './formPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import PostCard from './postCard';
// import LearnState from './learnState'

class App extends React.Component{

    state = {
        posts: [
            {
                id: 1,
                title: 'Maulana Ucup',
                text: 'Halo nama gua ucup'
            },
            {
                id: 2,
                title: 'Alif',
                text: 'Halo nama gua Alif'
            },
            // {
            //     id: 3
            //     title: 'Kalipa',
            //     text: 'Halo nama gua K***'
            // },
            {
                id: 4,
                title: 'Rehan',
                text: 'Halo nama gua Rehan'
            },
            {
                id: 5,
                title: 'Hana',
                text: 'Halo nama gua Hana'
            }
        ]
    }

    render(){
        return(
           <React.Fragment>
               <Container>
                   <FormPost />
                   <PostCard data={this.state.posts} nama='rehan' />
                    {/* <LearnState /> */}
               </Container>
           </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));