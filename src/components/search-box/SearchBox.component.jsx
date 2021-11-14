import React from "react";

import './SearchBox.styles.css'

export const SearchBox = (props) => {
    return (
        <input className="search" type="text" placeholder={props.itemPlaceholder} 
        onChange={props.handleChange} />
    )
}