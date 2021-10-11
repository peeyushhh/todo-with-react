import React, { useState } from 'react';
import './index.css';
import web from './img.png';
const Todo=()=>{
    const [inputData,setInputData]=useState("");
    const [items,setItems]=useState([]);
    const [change,setChange]=useState(0);
const addItem=()=>{
    if(!inputData)
    {

    }
    else{
  setItems([...items,inputData]);
    setInputData("");
    }

}
const deleteItem=(id)=>{
 const updatedData=items.filter((elem,index)=>index!==id);
 setItems(updatedData);
}
const removeAll=()=>{
    setItems([]);
}
const editVal=(id)=>{
const data=window.prompt("Edit Value");
items[id] = data;
if(change!==0)
    setChange(0);
    else
    setChange(change+1);
}
const sortUp=(id)=>{
    if(id===0)
    alert("chill");
    else
    {
       let temp=items[id];
       items[id]=items[id-1];
       items[id-1]=temp;
    }
    setChange(change+1);
}
const sortDown=(id)=>{
    if(id===items.length-1)
    alert("chill");
    else
    {
       let temp=items[id];
       items[id]=items[id+1];
       items[id+1]=temp;
    }
    setChange(change+1);
}
  return (
  <>
  <div className="main-div">
  <div className="child-div">
    <figure>
    <img src={web} alt="logo" />
    <figcaption>Add Your List Here</figcaption>
    </figure>
    <div className="addItems">
        <input type="text" placeholder="✍️Add items" onChange={(e)=>{
setInputData(e.target.value);
        }} value={inputData}/>
        <i onClick={addItem} className="fa fa-plus add-btn" title="Add Item"></i>
    </div>
    <div className="showItems">
        {
            items.map((val,index)=>{
                return (<>
                    <div className="eachItem" key={index}  >
            <h3>{val}</h3>
            <div className="option">
            <i className="far fa-trash-alt add-btn " title="Delete Item" onClick={()=> deleteItem(index)}></i>
            <i className="far fa-edit editBtn " title="Delete Item" onClick={()=> editVal(index)}></i>
            <i className="fas fa-sort-up add-btn " title="Delete Item" onClick={()=> sortUp(index)}></i>
            <i className="fas fa-sort-down add-btn " title="Delete Item" onClick={()=> sortDown(index)}></i>
            </div>
        </div>
                </>);
            })
        }
    </div>
    <div className='showItems'>
        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
    </div>
  </div>
  </div>
  </>
  );
}

export default Todo;

