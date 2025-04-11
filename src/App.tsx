import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstagramLoginPage from "./pages/instaPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<InstagramLoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </Router>
  )
}

export default App
