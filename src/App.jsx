import {
  Route,
  Routes,
  BrowserRouter,
  Outlet,
  useSearchParams,
  Link,
} from "react-router-dom";

import Main from "./components/Main";
import Test from "./components/Test";
import End from "./components/End";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}
