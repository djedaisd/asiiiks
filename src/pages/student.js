import { Component } from "react";
import React from "react";
import {Link} from 'react-router-dom';

class Student extends Component {
render(){
    return(
<div className='container'>
     <div className='row'>
        <div className='col-m-12'>
           <div className='card-header'>
               <h4>Student
               <Link to={'add-student'} className='btn btn-primary btn-sm float-end'> Add Student</Link>
               </h4>
            </div>
            <div className="card-body">

            </div>
        </div>
    </div>
</div>
    );
}
}
export default Student;