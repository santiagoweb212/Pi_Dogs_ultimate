import estilos from "./CardPrev.module.css";
import iconoMostrarDog from "../../../img/iconmostrar.png";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CardPrev = ({
  breedName,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  lifeSpanMin,
  lifeSpanMax,
  imagen,
  temperaments,
}) => {
  "https://wallpapercrafter.com/desktop/454410-Anime-Saint-Seiya-Phone-Wallpaper.jpg";
 

  let contador = 0
  return (
    <div className={estilos.containerP}>
      <h3 className={estilos.h3}>{breedName || "INSERT NAME"}</h3>
      <div className={estilos.containerImg}>
        <div className={estilos.containerImg_wrapperImg}>
          <img
            className={
              imagen
                ? estilos.wrapperImg_img_hasImage
                : estilos.wrapperImg_img
            }
            src={imagen || iconoMostrarDog}
            alt="imagenDog"
          />
        </div>
      </div>
      <div className={estilos.containerOtrosDatos}>
        <div className={estilos.containerOtrosDatos_temperaments}>
          <ul>
            <ul>
              {temperaments &&
                temperaments.map((t, index) => {
                  if (t.estado === true && contador < 6) {
                    contador++;
                    return (
                      <li
                        className={estilos.temperamentsLi}
                        key={index}>
                        {t.temperamento}
                      </li>
                    );
                  }
                  
                })}

              {contador ===6 && (
                <li className={estilos.temperamentsLi}>...</li>
              )}
            </ul>
          </ul>
        </div>

        <div className={estilos.containerOtrosDatos_weight}>
          <p className={estilos.spanDatos}>
            <span className={estilos.spantitle}>Height:</span>
            {heightMin && heightMax
              ? `${heightMin}kg-${heightMax}kg`
              : "undefined"}
          </p>
          <p className={estilos.spanDatos}>
            <span className={estilos.spantitle}>Weight:</span>
            {weightMin && weightMax
              ? `${weightMin}kg-${weightMax}kg`
              : "undefined"}
          </p>
          <p className={estilos.spanDatos}>
            <span className={estilos.spantitle}>Life Span:</span>
            {lifeSpanMin && lifeSpanMax
              ? `${lifeSpanMin}kg-${lifeSpanMax}kg`
              : "undefined"}
          </p>
        </div>
      </div>
    </div>
  );
};
