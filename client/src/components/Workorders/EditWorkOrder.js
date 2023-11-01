import { useEffect, useState } from "react";
import { getCars } from "../../managers/carManager";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getCarLifts } from "../../managers/carliftManager";
import { getWorkOrderById, editWorkOrder } from "../../managers/WorkOrderManager";


export default function EditWorkOrder({ loggedInUser }) {
    const { id } = useParams();
    const [workOrder, setWorkOrder] = useState({});
    const [description, setDescription] = useState("");
    const [carliftId, setCarLiftId] = useState(0)
    const [carlifts, setCarLifts] = useState([])
    const [carId, setCarId] = useState(0);
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
    
        getWorkOrderById(id).then((wo) => {
            setWorkOrder(wo);
        });
    
    }, [id]);
    
    useEffect(() => {
        if (workOrder) {
            console.log(workOrder);
            setCarId(workOrder.carId);
            setCarLiftId(workOrder.carLiftId);
            setDescription(workOrder.description);
        } else {
            console.log("no worky");
        }
    }, [workOrder]);

    const handleEdit = (e) => {
        e.preventDefault();
        const updatedWorkOrder = {
            id: workOrder.id,
            carliftId: carliftId,
            carId: carId,
            description: description,
        };
        console.log(updatedWorkOrder)
        editWorkOrder(updatedWorkOrder)
            .then(() => navigate("/workorders"));
    };
    

    useEffect(() => {
        getCarLifts().then(setCarLifts);
    }, []);

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
                        onChange={(f) => {
                            console.log(description)
                            setDescription(f.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Car Lift</Label>
                    <Input
                        type="select"
                        value={carliftId}
                        onChange={(f) => {
                            console.log(carliftId)
                            setCarLiftId(parseInt(f.target.value));
                            console.log(carliftId)
                        }}
                    >
                        <option value={0}>Choose a Car Lift</option>
                        {carlifts.map((cl) => (
                            <option
                                key={cl.id}
                                value={cl.id}
                            >{`Bay${cl.id} - ${cl.type}`}</option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Car</Label>
                    <Input
                        type="select"
                        value={carId}
                        onChange={(e) => {
                            console.log(carId)
                            setCarId(parseInt(e.target.value));
                        }}
                    >
                        <option value={0}>Choose a Car</option>
                        {cars.map((c) => (
                            <option
                                key={c.id}
                                value={c.id}
                            >{`${c.make} - ${c.model}`}</option>
                        ))}
                    </Input>
                </FormGroup>
                <Button onClick={handleEdit} color="primary">
                    Save
                </Button>
                <Button onClick={() => { navigate(`/workorders`) }} color="danger">
                    Cancel
                </Button>
            </Form>
        </>
    );
}
