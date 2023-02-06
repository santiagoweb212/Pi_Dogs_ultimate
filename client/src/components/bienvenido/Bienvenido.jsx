import estilos from "./Bienvenido.module.css";
import fondoDog from "../../img/fondoDog.png";
import { Link } from "react-router-dom";
export const Bienvenido = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.container_img}>
        <img className={estilos.img} src={fondoDog} alt="dog" />
        <div className={estilos.containerAbsolute}>
          <div className={estilos.container_title}>
            <h1 className={estilos.container_title_h1}>DOGS</h1>
            <h2 className={estilos.container_title_h2}>DOGS</h2>
          </div>
          <div className={estilos.containerSpanLink}>
            <span className={estilos.containerSpan}>
              Discover new amazing breeds!
            </span>
            <div className={estilos.containerLink}>
              <Link className={estilos.containerLink_Link} to={"/dog"}>Let's go!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
