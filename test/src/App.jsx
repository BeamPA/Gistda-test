import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SNPPMain from "./main/Main";
import Install from "./install/install";
import SDR from "./install/sdr"
import EDR from "./install/edr"
import ISR from "./install/ISR";
import MR from "./install/MR";
import US from "./install/US";
import LS from "./install/LS";
import Result from "./result/Result";
import Sidebar from "./sidebar/sidebar";


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
            <Route path="/SDR" element={<SDR />} />
            <Route path="/EDR" element={<EDR />} />
            <Route path="/ISR" element={<ISR />} />
            <Route path="/MR" element={<MR />} />
            <Route path="/US" element={<US />} />
            <Route path="/LS" element={<LS />} />
            <Route path="/result" element={<Result />} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
