import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy } from "react";

const WELCOME = lazy(() => import('./pages/welcome'));
const HOME = lazy(() => import('./pages'));

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route index element={<WELCOME />} />
          <Route path="/home" element={<HOME />} />
          <Route path="*" element={<WELCOME />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
