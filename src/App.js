import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.css";
import { Header } from "./components/Header";
import { Movie } from "./components/Movies";
import { Serie } from "./components/Series";
import { ActorPage } from "./components/actorpage";
import { DetailsMovie } from "./components/DetailsMovies";
import { DetailsSerie } from "./components/DetailsSerie";
import { Error404 } from "./components/Error404";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App(props) {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Movies/film.html" component={Movie} />
          <Route path="/Series/serie.html" component={Serie} />
          <Route path="/Actors/actors.html" component={ActorPage} />
          <Route
            path="(/Movies/details/|/details/)movie/:id"
            component={DetailsMovie}
          />
          <Route
            path="(/Series/details/|/details/)tv/:id"
            component={DetailsSerie}
          />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
