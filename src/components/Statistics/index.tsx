import React, { useMemo } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

const Statistics = () => {
  const { rooms } = useAppSelector((state) => state.housing);
  const totalActiveDevices = useMemo(() => {
    let activeDevices = 0;
    for (let index = 0; index < rooms.length; index++) {
      const room = rooms[index];
      for (let index = 0; index < room.devices.length; index++) {
        const devices = room.devices[index];
        if (devices.toggled) activeDevices += 1;
      }
    }
    return activeDevices;
  }, [rooms]);

  const totalRooms = useMemo(() => rooms.length, [rooms]);
  
  return (
    <div className="container mx-auto px-2 py-10 text-center">
      <div className="text-xl font-bold">
        Total Number of Active Devices -{" "}
        <span className="text-green-500">{totalActiveDevices}</span>
      </div>
      <div className="text-xl font-bold">
        Total Number of Rooms -{" "}
        <span className="text-gray-500">{totalRooms}</span>
      </div>
    </div>
  );
};

export default Statistics;
