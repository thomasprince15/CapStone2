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
          <p>Owner: {car.userProfile.FirstName}</p>
          <p>Address: {car.userProfile.address}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.Year}</p>
        </CardBody>
      </Card>
      <h4>Work Order History</h4>
      {car.workOrders.map((wo) => (
        <Card
          outline
          color="warning"
          key={wo.id}
          style={{ marginBottom: "4px" }}
        >
          <CardBody>
            <CardTitle tag="h5">{wo.dateInitiated.split("T")[0]}</CardTitle>
            <CardSubtitle>
              Completed:{" "}
              {wo.dateCompleted ? wo.dateCompleted.split("T")[0] : "Open"}
            </CardSubtitle>
            <CardText>Description: {wo.description}</CardText>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
