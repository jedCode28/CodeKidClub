import React from 'react'
const newDepartment = () => {
    return (
        <div>
    <h1>New Department:</h1>
    <a href='/'>Back</a>
    <form action='/departments' method='post'>
    <p> Title</p>
    <input name='department[name]'/>
    <p>Body</p>
    <textarea name='department[body]'/>
    <br />
    <button type='submit'>Add Department</button>
    </form>

    </div>
    )
}



export default newDepartment