import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function CarliftCard({ carLift, setDetailsCarLiftId }) {
  return (
    <Card color="dark" outline style={{ marginBottom: "4px" }}>
      <CardBody>
        <CardTitle tag="h5">Bay {carLift.id}</CardTitle>
        <CardText>Type: {carLift.type}</CardText>
      </CardBody>
    </Card>
  );
}
