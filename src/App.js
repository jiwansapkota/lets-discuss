import React from 'react';

import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';
import Post from './components/Post/Post';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       allPost:[]
    }
  }
  componentDidMount(){
    Axios.get('http://letsdiscuss00.herokuapp.com/get-all-posts')
    .then((response)=>{
      console.log(response.data);
      this.setState({allPost:response.data});
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <AddPost/>
          {this.state.allPost.map((post,index)=>{
            return <Post key={index} postData={post}></Post>
          })}
      </div>
    );
  }
}

export default App;
