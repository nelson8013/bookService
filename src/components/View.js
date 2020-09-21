import React, { Component } from "react";

import axios from 'axios';
import RecordList from './RecordList';

class View extends Component{
  constructor(props) {
    super(props);
    this.state = { admin: [] };
  }
  componentDidMount() {
    axios.get('http://localhost/bookServiceApi/list.php')
      .then(response => {
        this.setState({ admin: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  adminList() {
    return this.state.admin.map(function (object, i) {
      return <RecordList obj={object} key={i}/>
    });
  }

  render() {
      return (
        <div>
          <h3 align="center">Admin List</h3>
          <table className="table table-striped" style={{marginTop: 20}}>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.adminList()}
            </tbody>
          </table>
        </div>
      );
  }
  
}

export default View
