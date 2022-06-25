import React from "react";
import {Button} from 'reactstrap';


const Header =({mode,handlemode,handlemodal})=>{



    const btnstyle ={
        backgroundColor:mode?"#FBFBFB":"#212121",
        color:mode?"black":"white",
        transition: "0.5s"
    }
    return(
        <header >
            <div className='text_header pt-3 pb-2'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"  alt='img'/>
            <h4 >Task List</h4>
            <Button color='primary' outline onClick={handlemodal} className="btnTask btn-sm">
            Add Task
            <i className="fa fa-plus ms-2"></i>
            </Button>
            <Button className='ms-auto me-2 btn-sm' onClick={handlemode} style={btnstyle}>
            {mode?"Dark":"Light"}
            </Button>
            </div>
            <hr/>
        </header>
    )
}

export default Header;