import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import AllRoutes from "./AllRoutes";
import { BreakpointProvider } from "react-socks";

function App() {
  return (
    <div className="App">
      <Router>
        <BreakpointProvider>
          <Navbar />
          <AllRoutes />
        </BreakpointProvider>
      </Router>
    </div>
  );
}

export default App;
