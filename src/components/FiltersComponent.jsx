/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import { categories } from "../utils";

const FiltersComponent = ({ filter, setFilter }) => {

  return (
    <>
      <div className="mt-10 max-w-[600px] my-0 mx-auto">
        <div className="">
          <h2 className="text-4xl py-5">
            Filtrar Gastos
          </h2>

          <select
              id="category"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d]"
            >
              <option key={0}>--- seleccione una categoría ---</option>
              {categories.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
        </div>
      </div>
    </>
  );
};
export default FiltersComponent;
