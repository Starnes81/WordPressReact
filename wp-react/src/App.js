import React, { Component } from 'react';



class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let dataURL = "http://blackonair.com/wp-json/wp/v2/posts";
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
      return <div key={index}>
      <h2> {post.title.rendered} </h2>
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
