import estilos from "./SearchBar.module.css";
import lupa from "../../img/lupa.png";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterDogs } from "../../redux/actions/storeSortedDogs";
import { searchDogs } from "../../utils/searchDogs";
export const SearchBar = () => {
  const [searchDog, setSearchDog] = useState("");
  const dogs = useSelector((store) => store.fetchDataReducer.datos);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchDog(value.toLowerCase());
  };
  const handleClick = (e) => {
    dispatch(filterDogs(searchDogs(dogs, searchDog)));
  };
  const handleKeyDown = (e) => {
    e.keyCode === 13 && handleClick();
  };
  return (
    <div className={estilos.container}>
      <div className={estilos.search_container}>
        <div className={estilos.search_container_inputButton}>
          <input
            className={estilos.search_container_inputButto_input}
            type="text"
            placeholder="Search by name..."
            value={searchDog}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
          <div className={estilos.search_container_inputButto_button}>
            <button
              className={estilos.button}
              type="submit"
              onClick={handleClick}>
              <img className={estilos.img} src={lupa} alt="lupa" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(SearchBar);
