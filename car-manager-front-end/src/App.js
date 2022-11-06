import './App.css';
import Car from "./components/Car.tsx"
function App() {
  return (
    <div>
      <h2>Car Manager</h2>
      <ul>
        <li><Car /></li>
        <li><Car /></li>
        <li><Car /></li>
        <li><Car /></li>
        <li><Car /></li>
      </ul>
    </div>
  );
}

export default App;
