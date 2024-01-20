import React from "react";
import { useState } from "react";

const Form = (props) => {

    return (
       <div className="form">
        <input onChange={props.handleChange} type="text" name="noteItem" value=
        {props.item } />
        <button onClick={props.handleClick} >
          <span>Add</span>
        </button>
      </div>
    );
};

export default Form;
