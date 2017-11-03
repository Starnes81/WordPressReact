import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let dataURL = "http://blackonair.com/wp-json/wp/v2/posts?categories=18";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        })
      })
  }

  render() {

    let posts = this.state.posts.map((post, index) => {
          return <div key={index} className="post-container">
                  <h2> {post.title.rendered} </h2>
                  {post.content.rendered}

              </div>

            });
            return (
              <div className="App">
                  <h1>My React site powered by WordPress</h1>
                  {posts}
              </div>
            )
      }
}

export default App;
