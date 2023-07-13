import Home from "./Home";
import "../css/index.css"
import { BrowserRouter, Route, Routes} from "react-router-dom"


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
