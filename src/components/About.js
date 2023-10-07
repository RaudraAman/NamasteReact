import User from "./User";
import React from 'react';
class About extends React.Component{
  constructor(props){
    super(props)
    console.log('Parent constructor')
  }
  componentDidMount(){
    console.log('parent componentdidmount')
  }
  render(){
    console.log('Parent render')
  return (
    <div>
    <h1>about page</h1>
    <User name='first' location='Jharkhand'/>
    </div>
  )
  }
}
export default About;