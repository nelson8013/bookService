import React, { Component } from 'react'

class RecordList extends Component{
    render() {
        return (
          <tr>
            <td>{this.props.obj.id}</td>
            <td>{this.props.obj.first_name}</td>
            <td>{this.props.obj.last_name}</td>
            <td>{this.props.obj.last_email}</td>
            <td><button className='btn btn-warning'>Edit</button></td>
            <td><button className='btn btn-danger'>Delete</button></td>
          </tr>
        );
    }
}

export default RecordList;

