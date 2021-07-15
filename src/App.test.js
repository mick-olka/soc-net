import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
