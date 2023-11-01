import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import { getCars } from "../../managers/carManager";
import { Link, useHistory } from "react-router-dom";

export default function CarList({ props }) {
  const [cars, setCars] = useState([]);
  
  const getAllCars = () => {
    getCars().then(setCars);
  };
  
  useEffect(() => {
    getAllCars();
  }, []);
  
  const refresh = getAllCars()
  
  return (
    <>
      <h2>Garage</h2>
      <Link to="/createcar">New Car</Link>
      {cars.map((car) => (
        <CarCard
          car={car}
          // setDetailsCarId={setDetailsCarId}
          // key={car.id}
        ></CarCard>
      ))}
    </>
  );
}
