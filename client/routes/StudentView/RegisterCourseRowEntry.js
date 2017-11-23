import React, {Component} from 'react';
import {render} from 'react-dom';
import styles from '../../main.css';

class RegisterCourseRowEntry extends Component{

  constructor(props){
    super(props);
    this.state = {text:"Register"};
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
        var btn = document.getElementById(this.props.idIn);
        btn.disabled = true;
        this.setState({
          text: "Registered!"
        });

      }
    }.bind(this)

  req.open("PUT", "api/course/" + this.props.idIn + "/students");
  req.setRequestHeader("Content-type", "application/json");
  var params = '{"students":[""]}';

  req.send(params);
  }

  render(){
    return(
      <div className={styles.rowIn}>
      <tr>
        <td className={styles.tdIn}>{this.props.idIn}</td>
        <td className={styles.tdIn}>{this.props.nameIn}</td>
        <td className={styles.tdIn}>{this.props.profIn}</td>
        <td className={styles.tdIn}>{this.props.loIn}</td>
        <td className={styles.tdIn}>
          <button id={this.props.idIn} className={styles.buttonIn} onClick={this.register.bind(this)}>{this.state.text}</button>
        </td>
      </tr>
      </div>
    )
  }


}

export default RegisterCourseRowEntry;
