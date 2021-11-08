import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Page2 from './components/page2/page2';
import Page3 from './components/page3/page3';
import Page4 from './components/page4/page4';
import Page5 from './components/page5/page5';
import Page6 from './components/page6/page6';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/page2" element={<Page2/>}/>
      <Route path="/page3" element={<Page3/>}/>
      <Route path="/page4" element={<Page4/>}/>
      <Route path="/page5" element={<Page5/>}/>
      <Route path="/page6" element={<Page6/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
