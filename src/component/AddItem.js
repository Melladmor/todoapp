import React,{useState} from "react";
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

const Add =(props)=>{

    const [addItem , setAddItem] =useState(
    {
        name:"",
        task:"",
        priority:"",
        startdate:"",
        enddate:"",
        isFinsih:false
    }
    )

    const handleChange=(e)=>{
        const key = e.target.id;
        const value = e.target.value;
        setAddItem((prevState)=>{
            return {...prevState ,[key]:value}
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.addTask(addItem)
        props.handleModal()
    }
    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="me-sm-2"for="name">Name</Label>
                    <Input id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label className="me-sm-2"for="task">Task</Label>
                    <Input 
                    id="task"
                    name="task"
                    placeholder="Your Task"
                    type="text"
                    onChange={handleChange}
                    />
                    
                </FormGroup>

                <FormGroup>
                    <Label className="me-sm-2" htmlFor="priority">Priority</Label>
                    <Input
                    id="priority"
                    name="priority"
                    type="select"
                    onChange={handleChange}
                    >
                    <option>
                        Select Priority
                    </option>
                    <option value="High Priority">
                        High Priority
                    </option>
                    <option value="Middle Priority">
                        Middle Priority
                    </option>
                    <option value="Low Priority">
                        Low Priority
                    </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="startdate">
                    Start Date
                    </Label>
                    <Input
                    id="startdate"
                    name="startdate"
                    placeholder="Start Date"
                    type="date"
                    onChange={handleChange}
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="enddate">
                    End Date
                    </Label>
                    <Input
                    id="enddate"
                    name="enddate"
                    placeholder="End Date"
                    type="date"
                    onChange={handleChange}
                    />
                </FormGroup>
                <Button color="primary" outline className=" btn-sm me-auto">
                Add Task
                </Button>
            </Form>
        </div>
    )
}
export default Add;