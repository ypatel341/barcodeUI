import React, { Component } from 'react'
import { Route, Router } from 'react-router';
import History from 'history'
import "./styles/styles.css"
import Login from './Pages/Login/Login'
import SamplePage from './Pages/SamplePage/SamplePage'
import { Layout } from 'antd'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const { Content, Header, Footer, Sider } = Layout;

const styles = {
  appStyle: {
    height: '100vh',
    width: '100vw',
  },
  contentStyle: {
    backgroundColor: 'rgb(240, 242, 245)',
  },
  headerStyle: {
    padding: '0px',
    margin: '0px',
    boxShadow: '0px 1px 1px rgba(0,0,0,.1)',
    zIndex: 5,
  },
};

const {
  appStyle,
  headerStyle,
  contentStyle,
  footerStyle
} = styles;

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Layout style={appStyle}>
          <Header style={headerStyle}>
          </Header>
          <Content style={contentStyle}>
            <Route exact path="/" component={Login} />
          </Content>
        </Layout>
      </Router>

    )
  }
}

export default App
