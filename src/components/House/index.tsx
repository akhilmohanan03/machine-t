import React, { useMemo } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import RoomCard from "../Room";
import AddRoom from "../Room/AddRoom";

const House = () => {
  const { rooms } = useAppSelector((state) => state.housing);
  const roomList = useMemo(
    () =>
      rooms.map((i) => (
        <RoomCard roomData={i.devices} key={i.roomId} roomId={i.roomId} />
      )),
    [rooms]
  );
  return (
    <div className={"min-h-screen"}>
      <div className="container mx-auto px-2 py-10">
        <div className="flex flex-wrap gap-2">
          {roomList}
          <AddRoom />
        </div>
      </div>
    </div>
  );
};

export default House;
