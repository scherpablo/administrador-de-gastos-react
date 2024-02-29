/* eslint-disable react/prop-types */
import { formatCurrency } from "../utils";

const BudgetComponent = ({ budget }) => {
  const amountFormat = (amount) => {
    return formatCurrency(amount);
  };

  return (
    <>
      <div className="flex justify-center w-full px-5">
        <div className="bg-[#3c3c3c] w-[600px] h-[300px] rounded-lg p-10 shadow-lg shadow-[#c3c3c3] flex ">
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto">
            <h2>Gráfica Aca</h2>
          </div>
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto gap-3">
            <h2 className="text-left text-2xl">
              Presupuesto: <span className="text-3xl text-[#8cb98c]">{amountFormat(budget)}</span>
            </h2>
            <h2 className="text-left text-2xl">
              Disponible: <span className="text-3xl text-[#8cb98c]">{amountFormat(0)}</span>
            </h2>
            <h2 className="text-left text-2xl">
              Gastado: <span className="text-3xl text-[#8cb98c]">{amountFormat(0)}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default BudgetComponent;