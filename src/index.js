import React from 'react';
import ReactDOM from 'react-dom';
import FormPost from './formPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import PostCard from './postCard';
import LearnState from './learnState'

class App extends React.Component{

    render(){
        return(
           <React.Fragment>
               <Container>
                   {/* <FormPost />
                   <PostCard /> */}
                    <LearnState />
               </Container>
           </React.Fragment>
        )
    }
}

ReactDOM.render( <App />, document.querySelector("#root"));