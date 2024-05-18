import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormCustomer } from './components/FormCustomer/FormCustomer';
import { Register } from './components/register/Register';
import { FormAddress } from './components/formAddress/FormAddress';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/client',
    element: <FormCustomer />,
  },
  {
    path: '/address',
    element: <FormAddress />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
