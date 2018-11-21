import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.comment.author} />
            <div className="Comment-text">{props.comment.text}</div>
            <div className="Comment-date">
                {formatDate(props.comment.date)}
            </div>
        </div>
    );
}

function CommentList(props) {
    const comments = props.comments;
    const listItems = comments.map((comment) =>
        <li key={comment.id}>
            <Comment comment={comment}/>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const comments = [
        {
            id: '1',
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
        },
        {
            id: '2',
            date: new Date(),
            text: 'Sure I will!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
        }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              <CommentList comments={comments}/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
