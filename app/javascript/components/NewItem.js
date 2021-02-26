import React from "react"

const newItemForm = (props) => {
const {item} = props

    return (
        <div>
        <h1>New Item:</h1>
    <a href='/'>Back</a>
    <form action='/departments' method='post'>
    <p> Title</p>
    <input name='item[name]'/>
    <p>Body</p>
    <textarea name='item[body]'/>
    <br />
    <button type='submit'>Add Item</button>
    </form>
    </div>
    )
} 

export default newItemForm