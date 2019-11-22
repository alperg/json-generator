import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Start schema template
var DEFAULT_SCHEMA = {
  "properties": {
    "id": {
      "type": "number",
      "description": "user id"
    },
    "email": {
      "type": "string",
      "description": "user email"
    },
    "age": {
      "type": "number",
      "description": "user age"
    }
  },
  "required": [
    "id",
    "email"
  ]
};

ReactDOM.render(
  <App schema={DEFAULT_SCHEMA}/>,
  document.getElementById('root')
);
