import React, { Component } from 'react'
import { Route, Router } from 'react-router';
import { Card, Col, Row } from 'antd';
import History from 'history'
import { connect } from 'react-redux';

const styles = {
  pending: {
    backgroundColor: '#FFF77D'
  },
  previous: {
    backgroundColor: '#41C900'
  },
}

const {
  pending,
  previous,
} = styles;

class ApprovalCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="site-card-wrapper">
         <Row gutter={16}>
           <Col span={8}>
             <Card
                title="Ticket Number"
                bordered={false}
                hoverable={true}
                bodyStyle={pending}>
                  Number of ticket
             </Card>
           </Col>
           <Col span={8}>
             <Card
                title="See Previous Requests"
                bordered={false}
                hoverable={true}
                bodyStyle={previous}>
                  Past
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

export default connect(mapStateToProps,mapDispatchToProps) (ApprovalCards)
