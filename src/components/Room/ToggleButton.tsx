import React, { FC } from "react";

const ToggleButton: FC<{
  id: number;
  toggled: boolean;
  switchDevice: () => void;
}> = ({ id, toggled, switchDevice }) => {
  return (
    <label
      htmlFor={`${id}`}
      className="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id={`${id}`}
        className="sr-only peer"
        checked={toggled}
        onChange={switchDevice}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
    </label>
  );
};

export default ToggleButton;
