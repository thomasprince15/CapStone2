import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import { getCars } from "../../managers/carManager";
import { Link } from "react-router-dom";

export default function CarList({ setDetailsCarId }) {
  const [cars, setCars] = useState([]);

  const getAllCars = () => {
    getCars().then(setCars);
  };
  
  useEffect(() => {
    getAllCars();
  }, []);
  return (
    <>
      <h2>Garage</h2>
      <Link to="/Cars/create/car">New Car</Link>
      {cars.map((car) => (
        <CarCard
          car={car}
          setDetailsCarId={setDetailsCarId}
          key={car.id}
        ></CarCard>
      ))}
    </>
  );
}
