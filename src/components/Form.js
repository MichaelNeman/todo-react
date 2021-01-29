import React from 'react';



function Form(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask('Hello World');
    }

    return (
        <form onSubmit={handleSubmit}>
          <h2 className='label-wrapper'>To do List</h2>
          <input type="text" id="new-todo-input" className="input input_large" name="text" autoComplete="off"/>
          <button type="submit" className="btn btn_primary btn_lg">Add</button>
        </form>
    );
}

export default Form;