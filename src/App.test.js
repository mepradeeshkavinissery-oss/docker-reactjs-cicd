import React from 'react';
import ReactDOM from 'react-dom';

jest.mock('axios');

const axios = require('axios');

axios.get.mockImplementation(() =>
  Promise.resolve({
    data: {}
  })
);

const App = require('./App').default;

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
