import "./App.css";

import Bullet from "./components/bulletChart";
import Pie from "./components/pie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bullet />
        <Pie />
      </header>
    </div>
  );
}

export default App;
