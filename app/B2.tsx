import React from "react";

export default function B2() {
  return (
    <div className="w-80 p-4 border rounded-md shadow-sm">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <label
        htmlFor="inputLabel"
        className="block text-sm font-medium leading-6 text-gray-900 mb-1"
      >
        Input Label
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="material-symbols-outlined text-gray-500">alarm</span>
        </div>
        <input
          id="inputLabel"
          name="inputLabel"
          type="text"
          placeholder=""
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <span className="material-symbols-outlined text-gray-500">
            arrow_drop_down
          </span>
        </div>
      </div>
      <div className="mt-2 border rounded-md">
        <div className="p-2">
          <div className="flex items-center justify-between py-1">
            <label className="text-gray-700">Label</label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center justify-between py-1">
            <label className="text-gray-700">Label</label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center justify-between py-1">
            <label className="text-gray-700">Label</label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center justify-between py-1">
            <label className="text-gray-700">Label</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className="flex justify-between p-2">
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700">
            Clear
          </button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
