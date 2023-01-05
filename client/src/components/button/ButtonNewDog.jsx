import { Link } from "react-router-dom";
import estilos from "./ButtonNewDog.module.css"
export const ButtoNewDog = () => {
  return (
    <div className={estilos.containerLink }>
      <Link
        className={estilos.containerLink_Link}
        to={"/form"}>
        Create new dog
      </Link>
    </div>
  );
};
