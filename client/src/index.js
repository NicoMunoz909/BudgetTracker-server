import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/Home';
import Moves from './Components/Moves';
import UpdateForm from './Components/UpdateForm';
import CreateForm from './Components/CreateForm';
import Categories from './Components/Categories';

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='moves' element={<Moves />}>
            <Route path=':id' element={<UpdateForm />} />
            <Route path='new' element={<CreateForm />} />
          </Route>
          <Route path='categories' element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
