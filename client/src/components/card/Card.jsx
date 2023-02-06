import estilos from "./Card.module.css";
export const Card = ({ name, imagen, temperaments, peso }) => {
  let temperamentos = temperaments.slice(0, 5);
  return (
    <div className={estilos.containerP}>
      <div className={estilos.containerPTitle}>
        <h3 className={estilos.containerPTitle_h3}>{name}</h3>
      </div>
      <div className={estilos.containerPImgP}>
        <div className={estilos.containerPImgP_img}>
          <img
            className={estilos.containerPImgP_img__img}
            src={imagen}
            alt={name}
          />
        </div>
      </div>
      <div className={estilos.containerPDataDogP}>
        <div className={estilos.containerPDataDogP_container}>
          <div
            className={
              estilos.containerPDataDogP_container_temperaments
            }>
            {temperamentos &&
              temperamentos.map((temperamento, index) => (
                <li
                  className={
                    estilos.containerPDataDogP_container_temperaments_lista
                  }
                  key={index}>
                  {temperamento}
                </li>
              ))}
          </div>
          <div
            className={
              estilos.containerPDataDogP_container_otrosDatos
            }>
            <span
              className={
                estilos.containerPDataDogP_container_otrosDatos_span
              }>
              Weight:
              {peso[0].metric.replace(
                /\d+/g,
                (match) => `${match}kg`
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
