import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QuizAppRoutes } from "./routes/QuizAppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QuizAppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
