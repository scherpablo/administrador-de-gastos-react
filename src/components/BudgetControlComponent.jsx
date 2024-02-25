/* eslint-disable react/prop-types */

const BudgetComponent = ({
  budget,
  setBudget,
}) => {
 

  return (
    <>
      <div className="flex justify-center w-full">
        <div
          className="bg-[#3c3c3c] w-[600px] h-[300px] rounded-lg p-10 shadow-lg shadow-[#c3c3c3]"
        >
          <div className="text-center h-[220px] flex flex-col justify-center my-0 m-auto">
            <label className="text-3xl text-[#c3c3c3] font-bold tracking-wider">
              Control de Presupuesto
            </label>
            <input
              type="number"
              placeholder="Añade tu Presupuesto"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full text-center p-3 rounded-md my-5 bg-[#c3c3c3] text-[#3c3c3c] outline-double"
            />
            <button
              type="submit"
              className="bg-[#8cb98c] text-[#3c3c3c] font-semibold hover:bg-[#5c715c] 
            hover:text-[#c3c3c3] rounded-md p-2 w-1/3 mx-auto uppercase"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BudgetComponent;

// outline-none focus:ring-transparent focus:border-transparent

// focus:border-blue-500 focus:ring-blue-500
