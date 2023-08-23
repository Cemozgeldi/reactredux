import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
