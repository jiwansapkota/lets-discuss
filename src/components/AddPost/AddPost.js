import React, { Component } from 'react'
import './AddPost.css';
import '../Button/Button.css';
import '../Input/Input.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Axios from 'axios';

class AddPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            post:""
             
        }
    }
    
    onChangeHandler=(event)=>{
        this.setState({post: event.target.value});
        console.log("changed");
    }
    onPostHandler=()=>{
        Axios.post('http://letsdiscuss00.herokuapp.com/add-post',{postText:this.state.post})
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))

        console.log("Post Added");
    }
       
    render() {
        return (
            <div className="Container">  
           <Input  nape="post" inputSize="BigInput" placeholder="Add Post" changed={this.onChangeHandler}/>
           <Button btnSize="BigButton" clicked={this.onPostHandler} title="Add"/>      
            </div>
        )
    }
}

export default AddPost
