import Image from "next/image";
import React, { FC, useMemo } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addDevice, deleteRoom } from "../../Services/Housing";
import Device from "./Device";
import bulbImg from "../../../public/img/bulb.svg";
import fanImg from "../../../public/img/fan.svg";

interface RoomProps {
  roomData: { deviceType: string; toggled: boolean; deviceId: number }[];
  roomId: number;
}

const RoomCard: FC<RoomProps> = ({ roomData, roomId }) => {
  const dispatch = useAppDispatch();
  const addDeviceToRoom = (deviceType: string) => {
    dispatch(addDevice({ roomId, deviceType }));
  };
  const removeRoom = () => {
    dispatch(deleteRoom({ roomId }));
  };

  const devices = useMemo(
    () =>
      roomData.map((i) => (
        <Device
          deviceType={i.deviceType}
          toggled={i.toggled}
          key={i.deviceId}
          deviceId={i.deviceId}
          roomId={roomId}
        />
      )),
    [roomData, roomId]
  );

  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/5 bg-gray-300 rounded-md">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Device</th>
            <th>Switch</th>
          </tr>
        </thead>
        <tbody>
          {devices}
          <tr className="border-t border-gray-600">
            <td className="space-x-2 flex justify-center mt-2">
              <button
                className="bg-red-300 rounded-lg p-1 flex"
                onClick={() => addDeviceToRoom("bulb")}
              >
                <Image
                  src={bulbImg}
                  width={20}
                  height={20}
                  alt="device"
                  className="w-5 mx-auto"
                />
                +
              </button>
              <button
                className="bg-blue-300 rounded-lg p-1 flex"
                onClick={() => addDeviceToRoom("fan")}
              >
                <Image
                  src={fanImg}
                  width={20}
                  height={20}
                  alt="device"
                  className="w-5 mx-auto"
                />
                +
              </button>
            </td>
            <td className="text-center mt-2">
              <button
                className="bg-red-500 mt-2 font-semibold text-white text-sm rounded-lg p-2 flex"
                onClick={removeRoom}
              >
                Delete Room
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RoomCard;
