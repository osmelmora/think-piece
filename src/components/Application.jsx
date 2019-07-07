import React, { Component } from "react";

import Posts from "./Posts";
import { firestore } from "../firebase";
import { collectDocData } from "../utils";

class Application extends Component {
  state = {
    posts: []
  };

  unsubscribe = null;

  async componentDidMount() {
    this.unsubscribe = await firestore
      .collection("posts")
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectDocData);
        this.setState({ posts });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
