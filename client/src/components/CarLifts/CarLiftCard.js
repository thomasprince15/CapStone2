import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function CarliftCard({ carLift, setDetailsCarliftId }) {
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">Bay {carLift.id}</CardTitle>
        <CardText>Type: {carLift.type}</CardText>
        <Button
          color="dark"
          onClick={() => {
            setDetailsCarliftId(carLift.id);
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
