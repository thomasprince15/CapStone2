import { useState, useEffect } from "react";
import CarLiftCard from "./CarLiftCard";
import { getCarLifts } from "../../managers/carliftManager";


export default function CarLiftList({ setDetailsCarLiftId }) {
  const [carLifts, setCarLifts] = useState([]);

  const getAllCarLifts = () => {
    getCarLifts().then(setCarLifts);
  };

  useEffect(() => {
    getAllCarLifts();
  }, []);
  return (
    <>
      <h2>CarLifts</h2>
      {carLifts.map((carLift) => (
        <CarLiftCard
          carLift={carLift}
          setDetailsCarLiftId={setDetailsCarLiftId}
          key={carLift.id}
        ></CarLiftCard>
      ))}
    </>
  );
}
