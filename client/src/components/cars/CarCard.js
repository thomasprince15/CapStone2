import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button,
  } from "reactstrap";
  
  export default function CarCard({ car, setDetailsCarId }) {
    return (
      <Card color="dark" outline style={{ marginBottom: "4px" }}>
        <CardBody>
          <CardTitle tag="h5">{car.make}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {/* Owner: {car.userprofile} */}
          </CardSubtitle>
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
        </CardBody>
      </Card>
    );
  }