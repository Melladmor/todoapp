import React from "react";
import {Table} from 'reactstrap';


const Item = ({style,tasks,deleteItem,handleFinish})=>{

    

    const item = tasks.map((el)=>{
        const styleFinshed ={
            color:el.isFinsih?"green":"red"
        }
        return(
                <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.task}</td>
                    <td>{el.priority}</td>
                    <td>{el.startdate}</td>
                    <td>{el.enddate}</td>
                    <td>
                    <i className="fa fa-check btn btn-sm" onClick={()=>handleFinish(el.id)} style={styleFinshed}></i>
                    <i className="fa fa-trash btn btn-sm" style={style} onClick={()=>deleteItem(el.id)}></i>
                    </td>
                    
                </tr>
        )
    })
return(
    <div>
        <Table  className="table_items " style={style} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            
            <tbody className="bodyTable">
                {item}
            </tbody>
        </Table>
    </div>
)
}
export default Item;