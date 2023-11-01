import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

import { deleteThisCar, getCars } from "../../managers/carManager";
import { useEffect, useState } from "react";

export default function CarCard({ car, setDetailsCarId }) {
  const [cars, setCars] = useState([]);

  const getAllCars = () => {
    getCars().then(setCars);
  };

  useEffect(() => {
    getAllCars();
  }, []);

  const deleteCar = (id) => {
    deleteThisCar(id)
      .then(() => {
        getAllCars();
      })
  };

  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{car.make}</CardTitle>
        <CardText>Model: {car.model}</CardText>
        <CardText>Year: {car.year}</CardText>
        <Button
          color="dark"
          onClick={() => {
            setDetailsCarId(car.id);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Show Details
        </Button>
        <Button
          onClick={() => deleteCar(car.id)}
          color="danger"
          style={{ marginLeft: "8px" }} // Add left margin for spacing
        >
          Delete Car
        </Button>
      </CardBody>
    </Card>
  );
}