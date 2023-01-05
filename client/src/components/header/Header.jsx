import estilos from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <div className={estilos.containerTitle}>
        <h1 className={estilos.containertitle_h1}>DOGS</h1>
        <h2 className={estilos.containertitle_h2}>DOGS</h2>
      </div>
    </>
  );
};
