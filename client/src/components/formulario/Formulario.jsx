import { ButtoNewDog } from "../button/ButtonNewDog";
import { Header } from "../header/Header";
import estilos from "./Formulario.module.css";
export const Formulario = () => {
  return (
    <div className={estilos.containerMain}>
      <Header />
      <ButtoNewDog/>
    </div>
  );
};
