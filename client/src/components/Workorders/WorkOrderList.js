import { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import { Link } from "react-router-dom";

const testWorkOrders = [
    {
        id: 1,
        description: "broken clutch fork",
        dayNeeded: "2023-07-12T00:00:00",
        userProfile: null,
        userProfileId: null,
        CarId: 1,
    },
    {
        id: 2,
        description: "broken brakes",
        dayNeeded: "2023-07-15T00:00:00",
        userProfile: 1,
        userProfileId: 1,
        CarId: 2,
    },
];

export default function WorkOrderList({ loggedInUser }) {
    const [workOrders, setWorkOrders] = useState([]);

    useEffect(() => {
        setWorkOrders(testWorkOrders);
    }, []);

    return (
        <>
            <h2>Open Work Orders</h2>
            <Link to="/workorders/create">New Work Order</Link>
            //... rest of component omitted
            <Table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>DayNeeded</th>
                    </tr>
                </thead>
                <tbody>
                    {workOrders.map((wo) => (
                        <tr key={wo.id}>
                            <th scope="row">{wo.car}</th>
                            <td>{wo.car}</td>
                            {/* <td>{wo.car.model}</td> */}
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