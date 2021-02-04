import React, { useState } from 'react';



function Form(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
          <h2 className='label-wrapper'>To do List</h2>
          <input type="text" id="new-todo-input" className="input input_large" name="text" autoComplete="off" value={name} onChange={handleChange} />
          <button type="submit" className="btn btn_primary btn_lg">Add</button>
        </form>
    );
}

export default Form;