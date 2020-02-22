import React, { Component } from 'react'
import "./styles/styles.css"
import { Layout } from 'antd'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

// const history = createBrowserHistory();
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
        <Layout style={appStyle}>
          <Header style={headerStyle}>
          </Header>
          <BrowserRouter history={history}>
            <Switch>
              <Content style={contentStyle}>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
              </Content>
            </Switch>
          </BrowserRouter>
        </Layout>
    )
  }
}

export default App
