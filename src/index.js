import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Async,
  Button,
  Loading,
  ServerError,
  Wizard,
  DelayedRender,
  FormField,
  Input,
  Radio,
  RadioGroup,
  Switch,
  DatePicker,
  Select,
  AsyncSelect,
  Upload
} from 'components';
import App from './App';

export {
  Async,
  Button,
  Loading,
  ServerError,
  Wizard,
  DelayedRender,
  FormField,
  Input,
  Radio,
  RadioGroup,
  Switch,
  DatePicker,
  Select,
  AsyncSelect,
  Upload
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
