import React from "react";
import {useState} from "react";

const List = (props) => {

    return <div onClick={
        () => {
            props.deleteItem(props.id)
        }
    }>
              <li>{props.item}</li>
        </div>
}

export default List;