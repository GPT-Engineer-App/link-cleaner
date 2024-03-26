import { Routes, Route } from "react-router-dom";
import BulkCleaner from "./pages/BulkCleaner";
import Navigation from "./components/Navigation";

const App = () => (
  <Routes>
    <Route path="/bulk-cleaner" element={<BulkCleaner />} />
    <Route path="/navigation" element={<Navigation />} />
  </Routes>
);

export default App;
