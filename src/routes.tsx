import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HOME = lazy(() => import('./views/index'));
const SIGNIN = lazy(() => import('./views/welcome'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HOME />
  },
  {
    path: '/signin',
    element: <SIGNIN />
  },
]);
