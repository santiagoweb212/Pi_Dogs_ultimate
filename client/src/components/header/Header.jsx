import estilos from "./Header.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
    
      <Link to={"/"} className={estilos.containerTitle}>
        <h1 className={estilos.containertitle_h1}>DOGS</h1>
        <h2 className={estilos.containertitle_h2}>DOGS</h2>
      </Link>
    </>
  );
};
