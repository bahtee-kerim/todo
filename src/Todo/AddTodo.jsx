import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useInputValue = (defaultInput = '') => {

  const [value, setValue] = useState(defaultInput);

  return {
    bind: {
      value,
      onChange: even => setValue(even.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

const AddTodo = ({ onCreate }) => {

  const input = useInputValue('')

  const submitHandler = (event) => {

    event.preventDefault();

    if(input.value().trim()) {
      onCreate(input.value());
      input.clear('');
    }
  }

  return (
    <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
      <input type="text" {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo;