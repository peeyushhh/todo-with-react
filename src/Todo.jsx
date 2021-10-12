import React, { useState } from 'react';
import './index.css';
import web from './img.png';
const Todo=()=>{
    const [inputData,setInputData]=useState("");
    const [items,setItems]=useState([]);
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
let newArray=items.slice();
if(data!=="")
{
    newArray[id] = data;
    setItems(newArray);
}
else
window.alert("Please enter a value");
}
const sortUp=(id)=>{
    let newArray=items.slice();
    if(id===0)
    alert("chill");
    else
    {
       let temp= newArray[id];
        newArray[id]= newArray[id-1];
        newArray[id-1]=temp;
        setItems(()=>newArray);
    }
    // setChange(change+1);
}
const sortDown=(id)=>{
    let newArray=items.slice();
    if(id===items.length-1)
    alert("chill");
    else
    {
       let temp=newArray[id];
       newArray[id]=newArray[id+1];
       newArray[id+1]=temp;
       setItems(()=>newArray);
    }
    // setChange(change+1);
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

