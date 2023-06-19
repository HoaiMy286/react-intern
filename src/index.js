import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Content from './Content_useEffect';

// import Main_layout from './component/Main_layout';
// import Tab from './component/Tab';

import reportWebVitals from './reportWebVitals';

console.log(React);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
