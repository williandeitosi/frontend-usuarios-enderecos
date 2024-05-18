import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormCustomer } from './components/FormCustomer/FormCustomer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/client',
    element: <FormCustomer />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
