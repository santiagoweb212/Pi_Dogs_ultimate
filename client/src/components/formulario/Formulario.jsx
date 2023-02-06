import { Header } from "../header/Header";
import estilos from "./Formulario.module.css";
import icon from "../../img/patitaDog.svg";
import { CardPrev } from "./components/CardPrev";
import { Form } from "./components/Form";

import { connect, useSelector } from "react-redux";
export const Formulario = () => {
  const {
    breedName,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpanMin,
    lifeSpanMax,
    imagen,
    temperaments
  } = useSelector((store) => store.createDogReducer);
  return (
    <>
      <div className={estilos.containerPrincipal}>
        <div className={estilos.containerMain}>
          <Header />
        </div>
        <div className={estilos.containerSpan}>
          <span>Your new dog breed</span>
        </div>
        {/*--------------------------------------- previsulaizcion-------------------------- */}
        <div className={estilos.containerForm}>
          <span className={estilos.span}>Card Preview</span>
          <div className={estilos.containerCardPrevAndForm}>
            <div className={estilos.containerCardPrevAndForm_Prev}>
              <CardPrev
                dogImg={icon}
                breedName={breedName}
                heightMin={heightMin}
                heightMax={heightMax}
                weightMin={weightMin}
                weightMax={weightMax}
                lifeSpanMin={lifeSpanMin}
                lifeSpanMax={lifeSpanMax}
                imagen={imagen}
                temperaments={temperaments}
              />
            </div>
            <div className={estilos.containerCardPrevAndForm_Form}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default connect()(Formulario);
