import { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap";
import { getCarLiftById } from "../../managers/carliftManager";

export default function CarLiftDetails({ detailsCarLiftId }) {
  const [carlift, setCarLift] = useState(null);

  const getCarLiftDetails = (id) => {
    getCarLiftById(id).then(setCarLift);
  };

  useEffect(() => {
    if (detailsCarLiftId) {
      getCarLiftDetails(detailsCarLiftId);
    }
  }, [detailsCarLiftId]);

  if (!carlift) {
    return (
      <>
        <h2>Car Lift Details</h2>
        <p>Please choose a Lift...</p>
      </>
    );
  }
  return (
    <>
      <h2>Car Lift Details</h2>
      <Card color="dark" inverse>
        <CardBody>
          <CardTitle tag="h4">Bay {carlift.id}</CardTitle>
          <p>Type: {carlift.type}</p>
        </CardBody>
       </Card>
    </>
  );
}
