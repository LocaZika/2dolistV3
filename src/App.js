import "./scss/app.scss";
import "./scss/reset.scss";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTask } from "./services/hooks";

function App() {
  const [{ isDark }, dispatch] = useTask();
  return (
    <div className={isDark === false ? "app light" : "app dark"}>
      <Header />
      <ToDo />
      <ToastContainer autoClose={1000} transition={Slide} style={{ fontSize: "1.4rem" }} />
    </div>
  );
}

export default App;
