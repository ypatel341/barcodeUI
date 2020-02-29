import React, { Component } from 'react'
import { Route, Router } from 'react-router';
import { Card, Col, Row } from 'antd';
import History from 'history'
import { connect } from 'react-redux';

class GenericForm extends Component {
  constructor(props) {
    super(props)
    //insert token login creds here
  }

  render() {
    return (
      <div style={{margin: '2%'}}>
        <h3>insert form name here</h3>
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

export default connect(mapStateToProps,mapDispatchToProps) (GenericForm)
