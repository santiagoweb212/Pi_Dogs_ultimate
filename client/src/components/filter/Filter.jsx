import { useEffect, useState, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchDataDogsTemperaments } from "../../redux/actions/fetchDataDogsTemperaments";
import { storeSortedDogs } from "../../redux/actions/storeSortedDogs";
import { sortDogsAlphabetically } from "../../utils/sortDogsAlphabetically";
import { sortDogsTemperaments } from "../../utils/sortDogsTemperaments";
import { sortDogsWeight } from "../../utils/sortDogsWeight";
import estilos from "./Filter.module.css";
export const Filter = () => {
  const optionsValue = {
    orderAlphabetic: ["Order Alphabetic", "A-Z", "Z-A"],
    weight: ["Weight", "Min", "Max"],
  };
  const { temperaments } = useSelector(
    (state) => state.fetchDataTemperamentsReducer
  );
  const { dogs } = useSelector(
    (state) => state.fetchDataReducer.datos
  );
  const sortDogs = useSelector(
    (store) => store.sortedDogsReducer.sortedDogs
  );
  const dispatch = useDispatch();
  const openMenuOptions = {
    openOrderAlphabetic: false,
    openWeight: false,
    openTemperaments: false,
  };
  const selectOptionValues = {
    orderAlphabetic: "",
    weight: "",
    temperament: "",
  };
  const [showOption, setShowOption] = useState(openMenuOptions);
  const [option, setOption] = useState(selectOptionValues);
  const handleDropdownMenuClick = (e) => {
    const { name } = e.target;
    name === "orderAlphabetic" &&
      setShowOption({
        ...showOption,
        openOrderAlphabetic: !showOption.openOrderAlphabetic,
      });

    name === "weight" &&
      setShowOption({
        ...showOption,
        openWeight: !showOption.openWeight,
      });
    name === "temperaments" &&
      setShowOption({
        ...showOption,
        openTemperaments: !showOption.openTemperaments,
      });
    if (temperaments.length === 0) {
      dispatch(fetchDataDogsTemperaments());
    }
  };
  const handleOptionClick = (e) => {
    const { innerHTML } = e.target;
    const name = e.target.getAttribute("name");
    setOption({ ...option, [name]: innerHTML });
    name === "orderAlphabetic" &&
      setShowOption({
        ...showOption,
        openOrderAlphabetic: !showOption.openOrderAlphabetic,
      });

    name === "weight" &&
      setShowOption({
        ...showOption,
        openWeight: !showOption.openWeight,
      });
    name === "temperament" &&
      setShowOption({
        ...showOption,
        openTemperaments: !showOption.openTemperaments,
      });
  };
  useEffect(() => {
    if (
      option.orderAlphabetic !== "" &&
      option.orderAlphabetic !== "Order Alphabetic"
    ) {
      const dogsOrSortedDogs = sortDogs.length > 0 ? sortDogs : dogs;
      dispatch(
        storeSortedDogs(
          sortDogsAlphabetically(
            dogsOrSortedDogs,
            option.orderAlphabetic
          )
        )
      );
    }
  }, [option.orderAlphabetic]);
useEffect(() => {
  if (option.weight !== "" && option.weight !== "Weight") {
    const dogsOrSortedDogs = sortDogs.length > 0 ? sortDogs : dogs;
    dispatch(
      storeSortedDogs(sortDogsWeight(dogsOrSortedDogs, option.weight))
    );
  }
}, [option.weight]);
useEffect(() => {
  if (
    option.temperament !== "" &&
    option.temperament !== "Temperaments"
  ) {
    const dogsOrSortedDogs = sortDogs.length > 0 ? sortDogs : dogs;
    dispatch(
      storeSortedDogs(
        sortDogsTemperaments(dogsOrSortedDogs, option.temperament)
      )
    );
  }
}, [option.temperament]);


  return (
    <div className={estilos.dropdown}>
      <span>Filter by:</span>
      <div className={estilos.dropdown_orderAplhabetic}>
        <button
          className={estilos.dropdownButton}
          name="orderAlphabetic"
          onClick={handleDropdownMenuClick}>
          {option.orderAlphabetic || "Order Alphabetic"}
          {/* <img src={imgDesplegable} alt="icodesplegable" /> */}
        </button>
        <ul className={estilos.dropdown_options}>
          {showOption.openOrderAlphabetic &&
            optionsValue.orderAlphabetic.map((op, i) => (
              <li
                key={i}
                name="orderAlphabetic"
                onClick={handleOptionClick}>
                {op}
              </li>
            ))}
        </ul>
      </div>
      <div className={estilos.dropdown_weight}>
        <button
          className={estilos.dropdownButton}
          name="weight"
          onClick={handleDropdownMenuClick}>
          {option.weight || "Weight"}
          {/*  <img src={imgDesplegable} alt="icodesplegable" /> */}
        </button>
        <ul className={estilos.dropdown_options}>
          {showOption.openWeight &&
            optionsValue.weight.map((op, i) => (
              <li key={i} name="weight" onClick={handleOptionClick}>
                {op}
              </li>
            ))}
        </ul>
      </div>
      <div className={estilos.dropdown_temperaments}>
        <button
          className={estilos.dropdownButton}
          name="temperaments"
          onClick={handleDropdownMenuClick}>
          {option.temperament || "Temperaments"}
          {/* <img src={imgDesplegable} alt="icodesplegable" /> */}
        </button>
        <ul className={estilos.dropdown_options}>
          {showOption.openTemperaments && (
            <li name="temperament" onClick={handleOptionClick}>
              Temperaments
            </li>
          )}
          {showOption.openTemperaments &&
            temperaments &&
            temperaments.map((op, i) => (
              <li
                key={i}
                name="temperament"
                onClick={handleOptionClick}>
                {op.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default connect()(Filter);
