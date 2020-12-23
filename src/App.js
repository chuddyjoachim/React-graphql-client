import logo from "./logo.svg";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  return (
    <Router>
      <Header />
      <section className="body_">
        <aside className="aside_">
          <Aside />
        </aside>
        <main className="main_"></main>
      </section>
    </Router>
  );
}

export default App;
