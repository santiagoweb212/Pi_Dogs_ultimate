import estilos from "./Loading.module.css";
import patitaDog from "../../img/patitaDog.svg";
export const Loading = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.containerImg}>
        <img className={estilos.img} src={patitaDog} alt="" />
      </div>
      <span className={estilos.span}>
        Loading...
      </span>
    </div>
  );
};
