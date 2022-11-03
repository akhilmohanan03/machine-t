import { createSlice } from "@reduxjs/toolkit";

const housingSlice = createSlice({
  name: "housing",
  initialState: {
    rooms: [
      {
        roomId: Math.random(),
        devices: [
          { deviceType: "bulb", toggled: true, deviceId: Math.random() },
          { deviceType: "fan", toggled: true, deviceId: Math.random() },
        ],
      },
    ],
  },
  reducers: {
    addRoom: (state) => {
      state.rooms = [
        ...state.rooms,
        {
          roomId: Math.random(),
          devices: [
            { deviceType: "bulb", toggled: true, deviceId: Math.random() },
            { deviceType: "fan", toggled: true, deviceId: Math.random() },
          ],
        },
      ];
    },
    deleteRoom: (state, action) => {
      const { roomId } = action.payload;
      state.rooms = state.rooms.filter((i) => i.roomId !== roomId);
    },
    addDevice: (state, action) => {
      const { roomId, deviceType } = action.payload;
      const roomIndex = state.rooms.findIndex((i) => i.roomId === roomId);
      state.rooms[roomIndex].devices = [
        ...state.rooms[roomIndex].devices,
        { deviceType, toggled: true, deviceId: Math.random() },
      ];
    },
    deleteDevice: (state, action) => {
      const { roomId, deviceId } = action.payload;
      const roomIndex = state.rooms.findIndex((i) => i.roomId === roomId);
      state.rooms[roomIndex].devices = state.rooms[roomIndex].devices.filter(
        (i) => i.deviceId !== deviceId
      );
    },
    toggleDevice: (state, action) => {
      const { roomId, deviceId } = action.payload;
      const roomIndex = state.rooms.findIndex((i) => i.roomId === roomId);
      const deviceIndex = state.rooms[roomIndex].devices.findIndex(
        (i) => i.deviceId === deviceId
      );
      state.rooms[roomIndex].devices[deviceIndex].toggled =
        !state.rooms[roomIndex].devices[deviceIndex].toggled;
    },
  },
});

export const { addRoom, addDevice, toggleDevice, deleteRoom, deleteDevice } =
  housingSlice.actions;
export const housingReducer = housingSlice.reducer;
