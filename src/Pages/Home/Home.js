import React, { Component } from 'react'
import { Route, Router } from 'react-router';
import { Card, Col, Row } from 'antd';
import RequestCards from './RequestCards/RequestCards'
import ApprovalCards from './ApprovalCards/ApprovalCards'
import History from 'history'
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props)
    //insert token login creds here
    console.log(this.props.location.myCustomProps)
  }

  render() {
    return (
      <div style={{margin: '2%'}}>
        <h3> Request IT work</h3>
          <RequestCards />
       <h3 style={{paddingTop: '2%'}}> Approvals and pending tickets</h3>
          <ApprovalCards />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function  mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home)
