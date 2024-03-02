/* eslint-disable react/prop-types */
import SpentComponent from "./SpentComponent";

const ExpensesListComponent = ({ spents, setEditSpent }) => {
  return (
    <>
      <div className="bg-blue-200 mt-10 max-w-[600px] my-0 mx-auto">
        <div className="">
          <h2 className="text-4xl py-5">
            {spents.length > 0 ? "Gastos" : "No hay gastos"}
          </h2>

          {spents.map((spent) => (
            <SpentComponent
              key={spent.id}
              spent={spent}
              setEditSpent={setEditSpent}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ExpensesListComponent;
