/* eslint-disable react/prop-types */

const BudgetComponent = ({ budget }) => {
  const amountFormat = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="bg-[#3c3c3c] w-[600px] h-[300px] rounded-lg p-10 shadow-lg shadow-[#c3c3c3] flex ">
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto">
            <h2>Gráfica Aca</h2>
          </div>
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto">
            <h2>
              Presupuesto: <span>{amountFormat(budget)}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default BudgetComponent;

// outline-none focus:ring-transparent focus:border-transparent

// focus:border-blue-500 focus:ring-blue-500
