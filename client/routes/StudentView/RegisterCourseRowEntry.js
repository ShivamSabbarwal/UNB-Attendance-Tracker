import React, {Component} from 'react';
import {render} from 'react-dom';

class RegisterCourseRowEntry extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    //alert("Page was loaded!");
  }

  register(courseName){
    alert(this.props.idIn + " was added!");
  }

  render(){
    return(
      <tr>
        <td>{this.props.idIn}</td>
        <td>{this.props.nameIn}</td>
        <td>{this.props.profIn}</td>
        <td>{this.props.loIn}</td>
        <td>
          <button value='Register' onClick={this.register.bind(this)}/>
        </td>
      </tr>
    )
  }


}

export default RegisterCourseRowEntry;
