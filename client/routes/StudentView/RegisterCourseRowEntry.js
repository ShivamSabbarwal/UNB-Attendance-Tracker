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
    debugger;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {

        alert(this.props.idIn + " was added as a course!");

      }
    }.bind(this)

  req.open("PUT", "api/course/" + this.props.idIn + "/students");
  req.setRequestHeader("Content-type", "application/json");
  var params = '{"students":[""]}';

  req.send(params);
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
