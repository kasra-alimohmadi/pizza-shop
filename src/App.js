import Home from "./pages/home/home";
import Branch from "./pages/Branch page/Branch";
import Branch_full from "./pages/Branch page/Branch_full";
import { Route,Routes } from "react-router";
function App() {
  return (
    <>
    <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Branch" element={<Branch/>} />
         <Route path="/Branch_full/:id" element={<Branch_full/>} />
    </Routes>
    
    </>
  );
}

export default App;
