import Navbar from "../components/Navbar";
import "../css/index.css"

function App() {
  const likes = 110;
  const arr = [0, 1, 2, 3, 4, 5]
  return (
    <div className="App">
      <Navbar />
      <h1>test</h1>
      <p>{likes}</p>
      <p>{arr}</p>
    </div>
  );
}

export default App;
