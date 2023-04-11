import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import NavBar from './components/navBar/NavBar';
import { BrowserRouter } from "react-router-dom";
// import ErrorPage from './components/errorPage/ErrorPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "tasks",
//     element: <NavBar />,
//   },
//   {
//     path: "html",
//     element: <NavBar />,
//   },
//   {
//     path: "css",
//     element: <NavBar />,
//   },
//   {
//     path: "javascript",
//     element: <NavBar />,
//   },
//   {
//     path: "tricks",
//     element: <NavBar />,
//   },
//   {
//     path: "description",
//     element: <NavBar />,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
