import "./App.css";
import CurrencyConvertor from "./components/CurrencyConverter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center mx-5">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;