import Image from "next/image";
import React, { FC, useMemo } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { deleteDevice, toggleDevice } from "../../Services/Housing";
import ToggleButton from "./ToggleButton";
import bulbImg from "../../../public/img/bulb.svg";
import fanImg from "../../../public/img/fan.svg";
import trashImg from "../../../public/img/trash.svg";

interface DeviceProps {
  deviceType: string;
  toggled: boolean;
  deviceId: number;
  roomId: number;
}

const Device: FC<DeviceProps> = ({ deviceType, toggled, deviceId, roomId }) => {
  const dispatch = useAppDispatch();
  const switchDevice = () => {
    dispatch(toggleDevice({ deviceId, roomId }));
  };
  const removeDevice = () => {
    dispatch(deleteDevice({ deviceId, roomId }));
  };

  const imageSrc = useMemo(
    () => (deviceType === "bulb" ? bulbImg : fanImg),
    [deviceType]
  );

  return (
    <tr>
      <td>
        <Image
          src={imageSrc}
          width={20}
          height={20}
          alt="device"
          className="w-5 mx-auto"
        />
      </td>
      <td className="text-center">
        <ToggleButton
          id={deviceId}
          toggled={toggled}
          switchDevice={switchDevice}
        />
      </td>
      <td>
        <button onClick={removeDevice}>
          <Image
            src={trashImg}
            width={10}
            height={10}
            alt="trash"
            className="w-4 mx-auto"
          />
        </button>
      </td>
    </tr>
  );
};

export default Device;
