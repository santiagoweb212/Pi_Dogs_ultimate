import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/fetchDataFromApi";
import { Card } from "../card/Card";
import { Pagination } from "../pagination/Pagination";
import estilos from "./ContainerCard.module.css";
 const ContainerCard = () => {
  const { sortedDogs, filterDogs } = useSelector(
    (store) => store.sortedDogsReducer
  );
  const { dogs } = useSelector(
    (store) => store.fetchDataReducer.datos
  );
  const [displayedDogs, setDisplayedDogs] = useState(dogs);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (filterDogs.length > 0) {
      setDisplayedDogs(filterDogs);
    } else if (sortedDogs.length > 0) {
      setDisplayedDogs(sortedDogs);
    } else {
      setDisplayedDogs(dogs);
    }
  }, [filterDogs, sortedDogs, dogs]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  let paginateDogs =
    displayedDogs &&
    displayedDogs.slice((currentPage - 1) * 8, currentPage * 8);

  /* let paginateDogs = displayedDogs && displayedDogs.slice(0, 9); */
  return (
    <>
      {dogs && (
        <div className={estilos.containerButton}>
          <Pagination
            total={dogs.length}
            current={currentPage}
            handlePageChange={handlePageChange}
            itemsPerPage={8}
            windowSize={7}
          />
        </div>
      )}

      <div className={estilos.containerPrincipal}>
        {paginateDogs &&
          paginateDogs.map((dog, index) => (
            <Card
              key={index}
              name={dog.name}
              imagen={dog.img}
              temperaments={dog.temperaments}
              peso={dog.peso}
            />
          ))}
      </div>
  
    </>
  );
};
export default connect()(ContainerCard);
