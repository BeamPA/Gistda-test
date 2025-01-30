import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SNPPMain from "./main/Main";
import Install from "./install/Install";
import Login from "./login/Login";
import Result from "./result/Result";
import Sidebar from "./sidebar/sidebar";
import SNPPSoftware from "./install/SNPPSoftware";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar จะอยู่ด้านซ้ายของทุกหน้า */}
        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<SNPPMain />} />
            <Route path="/install" element={<Install />} />
            <Route path="/login" element={<Login />} />
            <Route path="/result" element={<Result />} />
            <Route path="/:softwareName" element={<SNPPSoftware />} /> {/* รองรับชื่อเต็ม */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
