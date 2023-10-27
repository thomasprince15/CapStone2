import { useEffect, useState } from "react";
import { getCars } from "../../managers/carManager";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";


export default function CreateWorkOrder({ loggedInUser }) {
  const [description, setDescription] = useState("");
  const [carId, setCarId] = useState(0);
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkOrder = {
      carId,
      description,
    };

    CreateWorkOrder(newWorkOrder).then(() => {
      navigate("/workorders");
    });
  };

  useEffect(() => {
    getCars().then(setCars);
  }, []);

  return (
    <>
      <h2>Open a Work Order</h2>
      <Form>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Car</Label>
          <Input
            type="select"
            value={carId}
            onChange={(e) => {
              setCarId(parseInt(e.target.value));
            }}
          >
            <option value={0}>Choose a Car</option>
            {cars.map((b) => (
              <option
                key={b.id}
                value={b.id}
              >{`${b.owner.name} - ${b.brand} - ${b.color}`}</option>
            ))}
          </Input>
        </FormGroup>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </Form>
    </>
  );
}
