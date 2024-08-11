import React, { useState } from "react";
import LinkHolder from "../LinkHolder/LinkHolder";

const LinkAdder = () => {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    const addItem = () => {
        setItems(prevItems => [
            ...prevItems,
            { title: title, url: url }
        ]);
        setTitle("");
        setUrl("");
    };

    const urlChangeHandler = (event) => {
        setUrl(event.target.value);
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    return (
        <div>
            <div>
                <label>Website Title: </label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={titleChangeHandler} 
                />
            </div>
            <div>
                <label>Website URL: </label>
                <input 
                    type="text" 
                    value={url} 
                    onChange={urlChangeHandler} 
                />
            </div>
            <button onClick={addItem}>Add</button>
            <LinkHolder items={items} setItems={setItems} setUrl={setUrl} setTitle={setTitle}/>
        </div>
    );
};

export default LinkAdder;