import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDataForm } from "../hooks/useDataForm";
import estilos from "./Form.module.css";
import { Input } from "./Input";
export const Form = () => {
  const {
    handleValueInputChange,
    valueInput,
    handleOptionClick,
    option,
    showOption,
    handleDropdownMenuClick,
    checkTemperaments,
    handleCheckTemperamentsChange,
    error,
    handleValidatorBlurChange,
    handleValidatorOnKeyUp,
  } = useDataForm();

  const {
    breedName,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpanMin,
    lifeSpanMax,
    imagen,
    temperaments,
  } = useSelector((store) => store.createDogReducer);
  /*-------------- enviar datos formulario----------- */
  const handleDogSubmit = (e) => {
    e.preventDefault();
    let checkTemperaments = temperaments.filter(t=>t.estado===true)
    console.log("tcheck--->",checkTemperaments)
    
  };
  /* -----------fin submit----- */

  console.log();

  return (
    <div className={estilos.containerP}>
      <div className={estilos.containerTitle}>
        <div className={estilos.containerH3Breed}>
          <h3 className={estilos.h3}>BREED INFO</h3>
        </div>
        <div className={estilos.containerH3Temperament}>
          <h3 className={estilos.h3}>TEMPERAMENTS</h3>
        </div>
      </div>
      <form
        className={estilos.formularioContainer}
        onSubmit={handleDogSubmit}
        action="">
        <div className={estilos.containerFormLeft}>
          <Input
            valueLabel={"Breed name"}
            name="breedName"
            estado1={true}
            estado2={false}
            value={valueInput.breedName}
            error={error}
            onChange={handleValueInputChange}
            onBlur={handleValidatorBlurChange}
            onKeyUp={handleValidatorOnKeyUp}
          />
          {error.breedName ? (
            <span className={estilos.errorSpan}>
              {error.breedName}
            </span>
          ) : (
            <span className={estilos.errorDivisionSpan}></span>
          )}
          <Input
            valueLabelD={"Height"}
            nameD1={"heightMin"}
            nameD2={"heightMax"}
            estado1={false}
            estado2={true}
            value1={valueInput.heightMin}
            value2={valueInput.heightMax}
            onChange={handleValueInputChange}
            onBlur={handleValidatorBlurChange}
            onKeyUp={handleValidatorOnKeyUp}
          />
          {error.heightMin || error.heightMax ? (
            <span className={estilos.errorSpan}>
              {error.heightMin || error.heightMax}
            </span>
          ) : (
            <span className={estilos.errorDivisionSpan}></span>
          )}

          <Input
            nameD1={"weightMin"}
            nameD2={"weightMax"}
            valueLabelD={"Weight"}
            estado1={false}
            estado2={true}
            value1={valueInput.weightMin}
            value2={valueInput.weightMax}
            onChange={handleValueInputChange}
            onBlur={handleValidatorBlurChange}
            onKeyUp={handleValidatorOnKeyUp}
          />
          {error.weightMin || error.weightMax ? (
            <span className={estilos.errorSpan}>
              {error.weightMin || error.weightMax}
            </span>
          ) : (
            <span className={estilos.errorDivisionSpan}></span>
          )}
          <Input
            valueLabelD={"Life Span"}
            nameD1={"lifeSpanMin"}
            nameD2={"lifeSpanMax"}
            estado1={false}
            estado2={true}
            value1={valueInput.lifeSpanMin}
            value2={valueInput.lifeSpanMax}
            onChange={handleValueInputChange}
            onBlur={handleValidatorBlurChange}
            onKeyUp={handleValidatorOnKeyUp}
          />
          {error.lifeSpanMin || error.lifeSpanMax ? (
            <span className={estilos.errorSpan}>
              {error.lifeSpanMin || error.lifeSpanMax}
            </span>
          ) : (
            <span className={estilos.errorDivisionSpan}></span>
          )}
          <Input
            valueLabel={"Image"}
            name={"imagen"}
            estado1={true}
            estado2={false}
            value={valueInput.imagen}
            onChange={handleValueInputChange}
            onBlur={handleValidatorBlurChange}
            onKeyUp={handleValidatorOnKeyUp}
          />
          {error.imagen ? (
            <span className={estilos.errorSpan}>{error.imagen}</span>
          ) : (
            <span className={estilos.errorDivisionSpan}></span>
          )}
          <div className={estilos.containerButtonDelete}>
            <button className={estilos.buttonDelete}>Delete</button>
          </div>
        </div>

        <div className={estilos.containerFormRight}>
          <div className={estilos.containerT}>
            <div className={estilos.containerDropDown}>
              <button
                className={estilos.dropdownButton}
                name="temperaments"
                disabled={showOption}
                onClick={handleDropdownMenuClick}>
                {option || "select Temperaments"}
              </button>
              <ul className={estilos.dropdown_options}>
                {showOption && (
                  <li name="temperament" onClick={handleOptionClick}>
                    Temperaments
                  </li>
                )}

                {showOption &&
                  checkTemperaments &&
                  checkTemperaments.map((op, i) => (
                    <li key={op.temperamento}>
                      <label
                        className={estilos.labelChek}
                        htmlFor={op.temperamento}>
                        {op.temperamento}
                      </label>
                      <input
                        className={estilos.inputCheck}
                        type="checkbox"
                        name={op.temperamento}
                        id={op.temperamento}
                        onChange={handleCheckTemperamentsChange}
                        checked={op.estado}
                      />
                    </li>
                  ))}
              </ul>
            </div>
            {error.temperaments && (
              <span className={estilos.errorSpanT}>
                {error.temperaments}
              </span>
            )}
          </div>
          <div className={estilos.containerButtonCreate}>
            <button
              className={
                Object.keys(error).length > 0
                  ? estilos.buttonCreateDisable
                  : estilos.buttonCreate
              }>
              Create new dog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
