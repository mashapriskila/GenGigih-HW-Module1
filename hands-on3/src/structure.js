/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import '../index.css';
import PropTypes from 'prop-types'

export default function Gif({title,url}){
    return(
        <div className="gif-wrap">
           <img src={url} alt="GIF"/>
           <p>{title}</p>
        </div>
    );
}

Gif.propTypes = {
    url :PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
