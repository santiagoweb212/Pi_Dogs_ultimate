import estilos from "./SearchBar.module.css";
import lupa from "../../img/lupa.png";
export const SearchBar = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.search_container}>
        <div className={estilos.search_container_inputButton}>
          <input
            className={estilos.search_container_inputButto_input}
            type="text"
            placeholder="Search by name..."
          />
          <div className={estilos.search_container_inputButto_button}>
            <button className={estilos.button} type="submit">
              <img className={estilos.img} src={lupa} alt="lupa" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
