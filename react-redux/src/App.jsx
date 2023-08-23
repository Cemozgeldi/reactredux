import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";
import Test from "./pages/Test";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* header componenti her sayfada görüntülenmesi gerektiği için App.js içerisinde Router componenti içerisinde tanımladık. */}
        <Routes>
          <Route index path="/" element={<Products />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
