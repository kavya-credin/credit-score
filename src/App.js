// import Login from "./Pages/login";
import CreditScoreForm from "./Pages/CreditScoreForm";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <CreditScoreForm />
      <ToastContainer position="top-left" autoClose={5000} newestOnTop={false}
closeOnClick />
    </div>
  );
}

export default App;
