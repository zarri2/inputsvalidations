import React, { useState } from 'react';

export default function InputsValidations2() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const stringCheck = () => {
    if (inputValue.startsWith('Py')) {
      setResult(inputValue);
    } else {
      setResult('Py' + inputValue);
    }
  };

  return (
    <div style={{ color: 'red' }}>
      <h1>PY Checker Adder</h1>
      <input
        type="text"
        placeholder="Enter Word"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <button className="Button1" onClick={stringCheck}>
        Submit
      </button>
      <div id="para1">{result}</div>
    </div>
  );
}
