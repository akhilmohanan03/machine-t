import React from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addRoom } from "../../Services/Housing";

const AddRoom = () => {
  const dispatch = useAppDispatch();
  const addRoomHandler = () => {
    dispatch(addRoom());
  };
  return (
    <button
      className="w-full p-4 md:w-1/2 lg:w-1/5 bg-gray-300 rounded-md min-h-[166px] flex items-center justify-center"
      onClick={addRoomHandler}
    >
      <span className="text-xl font-semibold">+ Add Room</span>
    </button>
  );
};

export default AddRoom;
