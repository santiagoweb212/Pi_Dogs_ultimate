import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveFormDogData } from "../../../redux/actions/saveFormDogData";
import { fetchDataDogsTemperaments } from "../../../redux/actions/fetchDataDogsTemperaments";
import { inputTextValidation } from "../../../utils/validationsForm/inputTextValidations";
import {
  validateHeightMax,
  validateHeightMin,
} from "../../../utils/validationsForm/validateHeight";
import { validteWeightMax, validteWeightMin } from "../../../utils/validationsForm/validateWeight";
import { validateLifeSpanMax, validateLifeSpanMin } from "../../../utils/validationsForm/validateLifeSpan";
import { validateImg } from "../../../utils/validationsForm/validateImg";
export const useDataForm = () => {
  const inputValue = {
    breedName: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    lifeSpanMin: "",
    lifeSpanMax: "",
    imagen: "",
    temperaments: [],
  };
  const { temperaments } = useSelector(
    (state) => state.fetchDataTemperamentsReducer
  );
  const temperamentos = useSelector(
    (store) => store.createDogReducer
  );
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState(inputValue);
  const [option, setOption] = useState("");
  const [showOption, setShowOption] = useState(false);
  const [checkTemperaments, setCheckTemperaments] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    if (temperaments.length > 0) {
      setCheckTemperaments(
        temperaments.map((t) => {
          return { temperamento: t.name, estado: false };
        })
      );
      setIsDataLoaded(true);
    }
  }, [temperaments]);

  const handleValueInputChange = (e) => {
    const { value, name } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };
  const handleValidatorBlurChange = (e) => {
    const { name } = e.target;
    if (name === "breedName") {
      let errores = inputTextValidation(valueInput);
      setError({ ...error, [name]: errores.breedName });
    }
    if (name === "heightMin") {
      let errores = validateHeightMin(
        valueInput.heightMin,
        valueInput.heightMax
      );
      setError({ ...error, [name]: errores.height });
    }

    if (name === "heightMax") {
      let errores = validateHeightMax(
        valueInput.heightMax,
        valueInput.heightMin
      );
      setError({ ...error, [name]: errores.height });
    }

    if (name === "weightMin") {
      let errores = validteWeightMin(
        valueInput.weightMin,
        valueInput.weightMax
      );
      setError({ ...error, [name]: errores.weight });
    }
    if (name === "weightMax") {
      let errores = validteWeightMax(
        valueInput.weightMax,
        valueInput.weightMin
      );
      setError({ ...error, [name]: errores.weight });
    }

    if (name === "lifeSpanMin") {
      let errores = validateLifeSpanMin(valueInput.lifeSpanMin,valueInput.lifeSpanMax);
      setError({ ...error, [name]: errores.lifeSpan });
    }
    if (name === "lifeSpanMax") {
      let errores = validateLifeSpanMax(valueInput.lifeSpanMax,valueInput.lifeSpanMin);
      setError({ ...error, [name]: errores.lifeSpan });
    } /*
    if (name === "imagen") {
      let errores = inputTextValidation(valueInput);
      setError({ ...error, [name]: errores.imagen });
    } */
  };
  const handleValidatorOnKeyUp = (e) => {
    const { name } = e.target;
    if (name === "breedName") {
      let errores = inputTextValidation(valueInput);
      setError({ ...error, [name]: errores.breedName });
    }
    if (name === "heightMin") {
      let errores = validateHeightMin(
        valueInput.heightMin,
        valueInput.heightMax
      );
      setError({ ...error, [name]: errores.height });
    }
    if (name === "heightMax") {
      let errores = validateHeightMax(
        valueInput.heightMax,
        valueInput.heightMin
      );
      setError({ ...error, [name]: errores.height });
    }

    if (name === "weightMin") {
      let errores = validteWeightMin(
        valueInput.weightMin,
        valueInput.weightMax
      );
      setError({ ...error, [name]: errores.weight });
    }
    if (name === "weightMax") {
      let errores = validteWeightMax(
        valueInput.weightMax,
        valueInput.weightMin
      );
      setError({ ...error, [name]: errores.weight });
    }

    if (name === "lifeSpanMin") {
      let errores = validateLifeSpanMin(valueInput.lifeSpanMin,valueInput.lifeSpanMax);
      setError({ ...error, [name]: errores.lifeSpan });
    }
    if (name === "lifeSpanMax") {
      let errores = validateLifeSpanMax(valueInput.lifeSpanMax,valueInput.lifeSpanMin);
      setError({ ...error, [name]: errores.lifeSpan });
    } 
      if (name === "imagen") {
        let errores = validateImg(valueInput.imagen);
        console.log(errores)
        /* setError({ ...error, [name]: errores.imagen }); */
      }
    
  };
  const handleCheckTemperamentsChange = (e) => {
    const { name } = e.target;
    const newTemperamentos = [...checkTemperaments];
    const index = newTemperamentos.findIndex(
      (t) => t.temperamento === name
    );
    newTemperamentos[index].estado = !newTemperamentos[index].estado;
    setCheckTemperaments(newTemperamentos);
    setOption(name);
  };
  const handleDropdownMenuClick = () => {
    setShowOption(!showOption);
    if (!isDataLoaded) {
      dispatch(fetchDataDogsTemperaments());
    } else {
      setCheckTemperaments(checkTemperaments);
    }
    /* if(temperamentos.temperaments.length===0){
      setError({...error,temperaments:"please select an check option"})
    } */
  };

  useEffect(() => {
    dispatch(
      saveFormDogData({
        ...valueInput,
        temperaments: checkTemperaments,
      })
    );
    let checkTemp = checkTemperaments.filter(
      (t) => t.estado === true
    );
    if (isDataLoaded) {
      if (checkTemp.length === 0) {
        setError({
          ...error,
          temperaments: "please select and temperaments",
        });
      } else {
        setError({
          ...error,
          temperaments: "",
        });
      }
    }
  }, [valueInput, checkTemperaments]);
  const handleOptionClick = () => {};
  return {
    handleValueInputChange,
    valueInput,
    handleOptionClick,
    option,
    showOption,
    handleDropdownMenuClick,
    handleCheckTemperamentsChange,
    handleValidatorBlurChange,
    checkTemperaments,
    error,
    handleValidatorOnKeyUp,
  };
};
