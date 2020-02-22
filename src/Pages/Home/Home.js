import React, { Component } from 'react'
import { Route, Router } from 'react-router';
import History from 'history'
import { connect } from 'react-redux';

const styles = {
    divStyle: {
      textAlign: 'center',
      marginTop: '40vh'
    },
    headerStyle: {
      padding: '20px'
    }
}
const { divStyle, headerStyle } = styles

class Home extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.location.myCustomProps)
  }

  render() {
    return (
      <div style={divStyle}>
        <h1 style={headerStyle}>React Boilerplate</h1>
        <h6>
          This is a starting point for React applications to be developed under Frame,
          fork this repository to begin developing your application. <br />
          It serves as a reference for project structure and includes major dependencies that
          will be common across projects.
        </h6>
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
