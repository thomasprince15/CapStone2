import { useState } from "react";
import CarLiftDetails from "./CarLiftDetails";
import CarLiftList from "./CarLiftList";

export default function CarLifts() {
  const [detailsCarLiftId, setDetailsCarLiftId] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <CarLiftList setDetailsCarLiftId={setDetailsCarLiftId} />
        </div>
        <div className="col-sm-4">
          <CarLiftDetails detailsCarLiftId={detailsCarLiftId} />
        </div>
      </div>
    </div>
  );
}
