import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Header } from "./components/Header";
import { Home } from "./components/Accueil";
import { Film } from "./components/Film";
import { Serie } from "./components/Series";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Film />
      <Serie />
    </>
  );
}

export default App;
