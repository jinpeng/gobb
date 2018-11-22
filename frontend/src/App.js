import React, { Component } from 'react';
import { Layout } from "antd";
import { List, Avatar, Icon } from 'antd';
import logo from './logo.svg';
import './App.css';

const {Header, Footer, Sider, Content} = Layout;

function formatDate(date) {
    return date.toLocaleDateString();
}

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

function CommentList(props) {
    const comments = props.comments;
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={comments}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={comment => (
                <List.Item
                    key={comment.id}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={comment.author.avatarUrl} />}
                        title={comment.author.name}
                        description={formatDate(comment.date)}
                    />
                    {comment.content}
                </List.Item>
            )}
        />
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
        <Layout>
            <Header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </Header>
            <Content>
                <CommentList comments={comments}/>
            </Content>
            <Footer>
                <div>Powered by GoBB</div>
            </Footer>
        </Layout>
    );
  }
}

export default App;
