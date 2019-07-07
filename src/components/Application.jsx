import React, { Component } from "react";

import Posts from "./Posts";
import { firestore } from "../firebase";
import { collectDocData } from "../utils";

class Application extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const snapshot = await firestore.collection("posts").get();

    const posts = snapshot.docs.map(collectDocData);
    this.setState({ posts });
  }

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection("posts").add(post);
    const doc = await docRef.get();
    const newPost = collectDocData(doc);

    this.setState({ posts: [newPost, ...posts] });
  };

  handleRemove = async id => {
    await firestore.doc(`posts/${id}`).delete();

    const posts = this.state.posts.filter(post => post.id !== id);
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </main>
    );
  }
}

export default Application;
