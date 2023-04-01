import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HOME = lazy(() => import('./views/index'));
const SIGNIN = lazy(() => import('./views/signin'));
const SIGNUP = lazy(() => import('./views/signup'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HOME />
  },
  {
    path: '/signin',
    element: <SIGNIN />
  },
  {
    path: 'signup',
    element: <SIGNUP />
  }
]);