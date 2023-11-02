import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteWorkOrder, getWorkOrders } from "../../managers/WorkOrderManager";

export default function WorkOrderList({ loggedInUser }) {
    const [workOrders, setWorkOrders] = useState([]);
    const navigate = useNavigate();
    
    const getAllWorkOrders = () => {
        getWorkOrders().then(setWorkOrders);
    };

    useEffect(() => {
        getAllWorkOrders();
    },[]);

    const deleteThisWorkOrder = (id) => {
        // Send an HTTP DELETE request to delete the work order
        deleteWorkOrder(id) // this says, run the deleteWorkOrder function on the selected OrderId, which will run the DELETE method on that object in the database
            .then(() => {
                getAllWorkOrders();
            })
    };

    return (
        <>
            <h2>Work Orders</h2>
            <Link to="/workorders/create">New Work Order</Link>
            <Table>
                <thead>
                    <tr>
                        <th>lift number</th>
                        <th>Vehicle Make</th>
                        <th>Vehicle Model</th>
                        <th>Description</th>
                        <th>DayNeeded</th>
                    </tr>
                </thead>
                <tbody>
                    {workOrders.map((wo) => (
                        <tr key={wo.id}>
                            <th scope="row">Bay {wo.carLift.id}</th>
                            <td>{wo.car.make}</td>
                            <td>{wo.car.model}</td>
                            <td>{wo.description}</td>
                            <td>{wo.dayNeeded}</td>
                            <td>
                            <Button onClick={() => { 
                                navigate(`/workorders/${wo.id}`) 
                            }}
                                >Edit</Button>
                            </td>
                            <td><Button
                                onClick={() => deleteThisWorkOrder(wo.id) }
                                color="danger"
                            >
                                Delete
                            </Button></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}