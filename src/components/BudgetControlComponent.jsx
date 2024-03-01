/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { formatCurrency } from "../utils";

const BudgetComponent = ({ spents, budget }) => {
  const [available, setAvailabe] = useState(0);
  const [used, setUsed] = useState(0);

  const amountFormat = (amount) => {
    return formatCurrency(amount);
  };

  useEffect(() => {
    const totalUsed = spents.reduce((total, spent) => spent.amount + total, 0);

    if (totalUsed > budget) {
      alert("El presupuesto se ha agotado");
      return;
    }

    setUsed(totalUsed);
    setAvailabe(budget - totalUsed);
  }, [spents, budget]);

  return (
    <>
      <div className="flex justify-center w-full px-5">
        <div className="bg-[#3c3c3c] w-[600px] h-[300px] rounded-lg p-10 shadow-lg shadow-[#c3c3c3] flex ">
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto">
            <h2>Gráfica Aca</h2>
          </div>
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto gap-3">
            <h2 className="text-left text-2xl">
              Presupuesto:{" "}
              <span className="text-3xl text-[#8cb98c]">
                {amountFormat(budget)}
              </span>
            </h2>
            <h2 className="text-left text-2xl">
              Disponible:{" "}
              <span className="text-3xl text-[#8cb98c]">
                {amountFormat(available)}
              </span>
            </h2>
            <h2 className="text-left text-2xl">
              Gastado:{" "}
              <span className="text-3xl text-[#8cb98c]">
                {amountFormat(used)}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default BudgetComponent;
