import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/fetchDataFromApi";
import { ButtoNewDog } from "../button/ButtonNewDog";
import ContainerCard from "../containerCard/ContainerCard";
import { Filter } from "../filter/Filter";
import { Header } from "../header/Header";
import { Loading } from "../loading/Loading";
import {Pagination } from "../pagination/Pagination";
import { SearchBar } from "../searchBar/SearchBar";
import estilos from "./Inicio.module.css";

export const Inicio = () => {
  const { loading, datos } = useSelector(
    (state) => state.fetchDataReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (datos.length === 0) {
      dispatch(fetchData());
    }
  }, []);
 
  
  return (
    <>
      <div className={estilos.container}>
        <Header />
        <ButtoNewDog />
      </div>
      <div className={estilos.containerp}>
        <SearchBar />
        <Filter />
       
        {loading ? (
          <Loading />
        ) : (
          <>
            <ContainerCard />
          </>
        )}
      </div>
    </>
  );
};
export default connect()(Inicio);
