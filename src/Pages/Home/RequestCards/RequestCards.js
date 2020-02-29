import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class RequestCards extends Component {
  constructor(props) {
    super(props)
  }

  handleRequest = e => {
    //this.props.history.push('/GenericForm')
    console.log(e.target.value) //will return card title
  }

  render() {
    return (
      <div className="site-card-wrapper">
         <Row gutter={16}>
           <Col span={8}>
             <Link to={
               { pathname: "/form",
                 myCustomProps: "forms" }}>
                 <Card
                    title="IT Request"
                    bordered={false}
                    hoverable={true}
                    onClick={this.handleRequest}>
                      Request IT maintainance work
                 </Card>
              </Link>
           </Col>
           <Col span={8}>
             <Card
                title="IT Service"
                bordered={false}
                hoverable={true}
                onClick={this.handleRequest}>
                  IT Service Form
             </Card>
           </Col>
           <Col span={8}>
             <Card
                title="Security Access"
                bordered={false}
                hoverable={true}
                onClick={this.handleRequest}>
                  Request Security access
             </Card>
           </Col>
         </Row>
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

export default connect(mapStateToProps,mapDispatchToProps) (RequestCards)
