
import { Link } from 'react-router-dom';

function SNPPMain() {
  return (
    <div>
      <h1>หน้า Main</h1>
      <h1><Link to="/install">ไป install</Link></h1>
      <h1><Link to="/result">ไป result</Link></h1>
      
    </div>
  );
}

export default SNPPMain;
