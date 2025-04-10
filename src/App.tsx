import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstagramLoginPage from "./pages/instaPage.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<InstagramLoginPage />} />
          </Routes>
      </Router>
  )
}

export default App
