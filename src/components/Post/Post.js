import React, { Component } from 'react'
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Post.css';
import Axios from 'axios'


class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            PostText:this.props.postData.postText,
            ClapsCount:this.props.postData.post,
            Comment:''            
    }}
    onCommentHandler=()=>{
        Axios.post('http://letsdiscuss00.herokuapp.com/comment',{postId:this.props.postData._id,commentValue:this.state.Comment})
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))
        console.log("commented");

    }
    onClapHandler=()=>{
        Axios.post('http://letsdiscuss00.herokuapp.com/clap',{postId:this.props.postData._id})
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))
        console.log("clapped");

    }
    onChangeHandler=(event)=>{
        this.setState({Comment:event.target.value})
        console.log("changed");
    }
    render() {
        const{postText,clapsCount,comments}=this.props.postData;
        return (
            <div className="Container PostContainer">
                <div className="PostText">{postText}</div>
                <div className="Wrapper">
                    <div className="Label"> {clapsCount}claps</div>
                    <div className="Label"> {comments.length} comments</div>
                </div>
                <div className="Wrapper">
                    <Button btnSize="SmallButton" clicked={this.onClapHandler} title="Clap!"/>
                    <Input inputSize="BigInput" changed={this.onChangeHandler} placeholder ="Add new comment"/>
                    <Button btnSize="SmallButton" clicked={this.onCommentHandler} title="Comment"/>
                </div>
                <div className="Comments" >
                    {
                        comments.map((comment,index)=>{
                            return <li className="Comment" key={index}>{comment}</li> })
                    }
                </div>     
            </div>
        )
    }
}

export default Post
