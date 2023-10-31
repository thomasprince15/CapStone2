import { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getWorkOrders } from "../../managers/WorkOrderManager";

const testWorkOrders = [
    {
        id: 1,
        description: "broken clutch fork",
        dayNeeded: "2023-07-12T00:00:00",
        LiftId: 2,
        CarLift: {
            Id: 2,
            Type: "TwoPost"
        },
        CarId: 1,
        Car: {
            id : 1,
            Year : 1972,
            Make : "Cheverolet",
            Model : "Camero"
        }
    },
    {
        id: 2,
        description: "broken brakes",
        dayNeeded: "2023-07-15T00:00:00",
        LiftId: 3,
        CarLift: {
            Id: 3,
            Type: "TwoPost"
        },
        CarId: 2,
        Car: {
            Id : 2,
            Year : 1965,
            Make : "Datsun",
            Model : "210"
        }
    },
    {
        id: 3,
        description: "Slipping transmission",
        dayNeeded: "2023-07-11T00:00:00",
        LiftId: 1,
        CarLift: {
            Id: 1,
            Type: "TwoPost"
        },
        CarId: 4,
        Car: {
            Id : 4,
            Year : 2003,
            Make : "Subaru",
            Model : "WRX STI"
        }
    },
    {
        id: 4,
        description: "Cracked Radiator",
        dayNeeded: "2023-07-19T00:00:00",
        LiftId: 4,
        CarLift: {
            Id: 4,
            Type: "TwoPost"
        },
        CarId: 5,
        Car: {
            Id : 5,
            Year : 1968,
            Make : "Cheverolet",
            Model : "C10 Apache"
        }
    },
];

export default function WorkOrderList({ loggedInUser }) {
    const [workOrders, setWorkOrders] = useState([]);

    const getAllWorkOrders = () => {
        getWorkOrders().then(setWorkOrders);
    };

    useEffect(() => {
        getAllWorkOrders();
    });

    return (
        <>
            <h2>Open Work Orders</h2>
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
                            <td>{new Date(wo.dayNeeded).toLocaleDateString()}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}