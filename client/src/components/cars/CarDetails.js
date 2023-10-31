import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap";
import { getCarById } from "../../managers/carManager";

export default function CarDetails({ detailsCarId }) {
  const [car, setCar] = useState(null);

  const getCarDetails = (id) => {
    getCarById(id).then(setCar);
  };

  useEffect(() => {
    if (detailsCarId) {
      getCarDetails(detailsCarId);
    }
  }, [detailsCarId]);

  if (!car) {
    return (
      <>
        <h2>Car Details</h2>
        <p>Please choose a car...</p>
      </>
    );
  }
  return (
    <>
      <h2>Car Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">{car.Make}</CardTitle>
          <p>Model: {car.Model}</p>
        <p>Year: {car.Year}</p>
        </CardBody>
      </Card>
    </>
  );
}
