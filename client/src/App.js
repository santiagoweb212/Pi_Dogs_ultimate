import { Bienvenido } from "./components/bienvenido/Bienvenido";
import { Route } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import { SearchBar } from "./components/searchBar/SearchBar";
import { Header } from "./components/header/Header";
import { Filter } from "./components/filter/Filter";
import { Loading } from "./components/loading/Loading";
import { Formulario } from "./components/formulario/Formulario";
import { Inicio } from "./components/inicio/Inicio";
import estilos from "./App.module.css"
function App() {
  return (
    <div className={estilos.containerP}>
      <Route exact path={"/"} component={Bienvenido} />
      <Route exact path={"/dog"} component={Inicio} />
      <Route exact path={"/form"} component={Formulario}/>
    </div>
  );
}

export default App;
