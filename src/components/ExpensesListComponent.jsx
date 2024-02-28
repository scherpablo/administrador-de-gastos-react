/* eslint-disable react/prop-types */
import SpentComponent from "./SpentComponent";

const ExpensesListComponent = ({ spents }) => {
  return (
    <>
      <div>
        <h2>{spents.length > 0 ? "Gastos" : "No hay gastos"}</h2>

        {spents.map((spent) => (
          <SpentComponent key={spent.id} spent={spent} />
        ))}
      </div>
    </>
  );
};
export default ExpensesListComponent;
