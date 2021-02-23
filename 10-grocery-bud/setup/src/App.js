import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    return JSON.parse(list);
  } else {
    return []
  }
}

function App() {

  const [name,setName] = useState("");
  const [list,setList] = useState(getLocalStorage())
  const [isEditing,setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false,msg:"",type:""})

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name){
      showAlert(true,"please enter text","danger");  
    } else if (name && isEditing){
      setList(list.map((item)=>{
        if(item.id === editID){
          return {...item, title:name}
        }
        return item;
      }))
      setEditId(null);
      setIsEditing(false);
      setName("");
      showAlert(true,"successfully edited ","success")
    } else {
      showAlert(true,"... added to list","success");  
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList([...list, newItem]);
      setName("");
    }
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  },[list])

  const showAlert = (show=false, msg="", type="") => {
    setAlert({show:show,msg:msg,type:type})
  }

  const clearList = () => {
    showAlert(true,"empty list", "danger");
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true,"item removed","danger")
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id ===id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title)
  }


  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placehodler="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing?"edit":"submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
         <List items={list}  removeAlert={showAlert} removeItem={removeItem} editItem={editItem}/>
         <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}
      
    </section>
    )
}

export default App
