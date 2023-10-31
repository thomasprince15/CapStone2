import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";


export default function CreateCar({ loggedInUser }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = {
      year,
      make,
      model,
    };

    CreateCar(newCar).then(() => {
      navigate("/cars");
    });
  };

  return (
    <>
      <h2>Add A New Car</h2>
      <Form>
        <FormGroup>
          <Label>Make</Label>
          <Input
            type="text"
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Model</Label>
          <Input
            type="text"
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Year</Label>
          <Input
            type="Number"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </FormGroup>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </Form>
    </>
  );
}