import React, { Component } from 'react'

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

export default class SamplePage extends Component {
  constructor(props) {
    super(props)
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
