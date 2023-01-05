import { Home } from "./components/home/Home";
import { Route } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import { SearchBar } from "./components/searchBar/SearchBar";
import { Header } from "./components/header/Header";
import { Filter } from "./components/filter/Filter";
import { Loading } from "./components/loading/Loading";
import { Formulario } from "./components/formulario/Formulario";

function App() {
  return (
    <>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/dog"} component={Header} />
      <Route exact path={"/form"} component={Formulario}/>
    </>
  );
}

export default App;
