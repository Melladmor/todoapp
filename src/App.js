
import React,{useEffect, useState} from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import './App.css';
import { DATA } from './store/data';
import Add from './component/AddItem';
import Header from './component/Header';
import Item from './component/Items';
import {nanoid} from 'nanoid'
function App() {

  const [mode , setMode] = useState(true);

  const style = {
    background:mode?"linear-gradient(to right, #000000, #434343, #000000,#434343)":"#FBFBFB",
    color:mode?"white":"black",
    transition: "1s"
  }

  const styleTable = {
    color:mode?"white":"black"
  }
  const [showModal , setShowModal] = useState(false);


  const [tasks ,setTasks] = useState(()=>JSON.parse(localStorage.getItem("tasks")) ||DATA)


  useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  const handleMode = ()=>{
    setMode(!mode);
  }

  const handleModal = ()=>{
    setShowModal(!showModal);
  }



  const deletItem =(selectId)=>{
      setTasks((prevTask)=>{
        return prevTask.filter((el)=> el.id !== selectId)
      })
      localStorage.removeItem('tasks')
  }

  const addTask =(data)=>{
    data.id = nanoid();
    setTasks((prevTask)=>{
        setTasks([...prevTask,data])
    })
  }


  

  const handleFinish =(id)=>{
    setTasks(oldTasks => oldTasks.map(old=>{
      return old.id === id?
      {...old , isFinsih:!old.isFinsih}:
      old
    }))
  }
  return (
    <div className="App" style={style}>
    <Modal toggle={handleModal} isOpen={showModal} >
        <ModalHeader toggle={handleModal}  className={mode?"":"modalDark"}>
          <div className='text_header pt-3 pb-2'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"  alt='img'/>
            <h4 >Add Tasks</h4>
          </div>
        </ModalHeader>

        <ModalBody className={mode?"":"modalDark"}>
          <Add  addTask={addTask} handleModal={handleModal}/>
        </ModalBody>

        <ModalFooter className={mode?"":"modalDark"}>
            <Button  outline className='btn-sm buttonclose' style={style} onClick={handleModal}>
              Close
            </Button>
        </ModalFooter>
    </Modal>


    <Header mode={mode} handlemode={handleMode} handlemodal={handleModal}/>
    <Item style={styleTable} tasks={tasks} deleteItem={deletItem} handleFinish={handleFinish} />
    </div>
  );
}

export default App;
