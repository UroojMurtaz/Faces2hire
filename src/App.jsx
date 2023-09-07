import { Route, Routes } from "react-router-dom";
import General from "../src/Layout/General";
import Landing from "../src/Pages/Landing/index";
import Login from "../src/Pages/Login/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
