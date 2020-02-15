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
  }
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
          <Content style={contentStyle}>
            <Route exact path="/" component={Login} />
          </Content>
        </Layout>
      </Router>

    )
  }
}

export default App
