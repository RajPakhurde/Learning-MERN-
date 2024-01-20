import React from "react";
import {useState} from "react";
import List from "./List"
import Form from "./Form"

function App() {
    const [itemList, setItemList] = useState([])
    const [item, setItem] = useState("");
 
 
  
    function handleChange(event) {
      setItem(event.target.value);
    }
    
    function handleClick() {
      setItemList((preValue) => {
          return [
              ...preValue,
              item
          ]
      })
      setItem("") ;
    }

    function deleteItem(id) {
        setItemList((preValue) => {
            return preValue.filter((item, index) => {
                return index !== id;
            })
        })
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Form handleChange={handleChange} handleClick={handleClick}  item={item} />
      <div>
        <ul>
        { itemList.map((item, index) => {
            return <List item={item} id={index} deleteItem={deleteItem} />
           })} 
        </ul>
      </div>
      
    </div>
  );
}

export default App;
