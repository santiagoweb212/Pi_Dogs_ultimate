import estilos from "./Input.module.css";
export const Input = ({
  valueLabel,
  valueLabelD,
  estado1,
  estado2,
  name,
  nameD1,
  nameD2,
  value,
  onChange,
  value1,
  value2,
  onBlur,
  onKeyUp
}) => {
  return (
    <>
      {estado1 && (
        <div className={estilos.containerP}>
          <div className={estilos.containerLabel}>
            <label className={estilos.label} htmlFor="">
              {valueLabel}
            </label>
          </div>
          <div className={estilos.containerInput}>
            <input
              className={estilos.input}
              type="text"
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              onKeyUp={onKeyUp}
            />
          </div>
        </div>
      )}

      {estado2 && (
        <div className={estilos.containerP}>
          <div className={estilos.containerLabelD}>
            <label className={estilos.label} htmlFor="">
              {valueLabelD}
            </label>
          </div>
          <div className={estilos.containerInputD}>
            <input
              name={nameD1}
              value={value1}
              onChange={onChange}
              onBlur={onBlur}
              onKeyUp={onKeyUp}
              className={estilos.inputD}
              type="text"
            />
            <input
              name={nameD2}
              value={value2}
              onChange={onChange}
              onBlur={onBlur}
              onKeyUp={onKeyUp}
              className={estilos.inputD}
              type="text"
            />
          </div>
        </div>
      )}
    </>
  );
};
