/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatCurrency } from "../utils";

const BudgetComponent = ({ spents, budget }) => {
  const [available, setAvailabe] = useState(0);
  const [used, setUsed] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const amountFormat = (amount) => {
    return formatCurrency(amount);
  };

  useEffect(() => {
    const totalUsed = spents.reduce((total, spent) => spent.amount + total, 0);
    const totalPercentage = ((totalUsed * 100) / budget).toFixed(2);

    setUsed(totalUsed);
    setAvailabe(budget - totalUsed);
    setTimeout(() => {
      setPercentage(totalPercentage);
    }, 2500);
  }, [spents, budget]);

  return (
    <>
      <div className="flex justify-center w-full px-5">
        <div className="bg-[#3c3c3c] w-[600px] h-[300px] rounded-lg p-10 shadow-lg shadow-[#c3c3c3] flex gap-5">
          <div className="w-1/3 flex">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                // pathColor: "#8cb98c",
                pathColor: percentage > 100 ? "#f37574" : "#8cb98c",
                textColor: percentage > 100 ? "#f37574" : "#8cb98c",
                pathTransitionDuration: 0.5,
                textSize: "18px",
              })}
            />
          </div>
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto gap-3">
            <h2 className="text-left text-2xl">
              Presupuesto:{" "}
              <span className="text-3xl text-[#8cb98c]">
                {amountFormat(budget)}
              </span>
            </h2>
            <h2
              className={
                available < 0
                  ? "text-left text-2xl text-[#f37574]"
                  : "text-left text-2xl"
              }
            >
              Disponible:{" "}
              <span
                className={
                  available < 0
                    ? "text-3xl text-[#f37574]"
                    : "text-3xl text-[#8cb98c]"
                }
              >
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
