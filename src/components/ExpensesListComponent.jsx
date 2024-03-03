/* eslint-disable react/prop-types */
import SpentComponent from "./SpentComponent";

const ExpensesListComponent = ({
  spents,
  setEditSpent,
  deleteSpent,
  filter,
  filterSpents,
}) => {
  return (
    <>
      <div className="bg-blue-200 mt-10 max-w-[600px] my-0 mx-auto">
        <div className="">
          {filter ? (
            <>
              <h2 className="text-4xl py-5">
                {filterSpents.length ? "Gastos" : "No hay gastos en esta categoria"}
              </h2>
              {filterSpents.map((spent) => (
                <SpentComponent
                  key={spent.id}
                  spent={spent}
                  setEditSpent={setEditSpent}
                  deleteSpent={deleteSpent}
                />
              ))}
            </>
          ) : (
            <>
              <h2 className="text-4xl py-5">
                {spents.length ? "Gastos" : "No hay gastos"}
              </h2>
              {spents.map((spent) => (
                <SpentComponent
                  key={spent.id}
                  spent={spent}
                  setEditSpent={setEditSpent}
                  deleteSpent={deleteSpent}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ExpensesListComponent;
