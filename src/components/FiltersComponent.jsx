/* eslint-disable react/prop-types */
import { categories } from "../utils";

const FiltersComponent = ({ filter, setFilter }) => {
  return (
    <>
      <div className="mt-10 max-w-[600px] my-0 mx-auto">
          <form>
            <div>
              <label className="text-4xl">Filtrar Gastos</label>
              <select
                id="category"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d] mt-5"
              >
                <option key={0}>--- seleccione una categoría ---</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
    </>
  );
};
export default FiltersComponent;
