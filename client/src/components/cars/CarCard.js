import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

import { deleteThisCar } from "../../managers/carManager";
import { useNavigate } from "react-router-dom";

export default function CarCard({ props, car }) {
  const navigate = useNavigate();

  const deleteCar = (id) => {
    deleteThisCar(id)
      .then(() => {
        navigate("/cars")
      })
  };

  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">{car.make}</CardTitle>
        <CardText>Model: {car.model}</CardText>
        <CardText>Year: {car.year}</CardText>
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