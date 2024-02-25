/* eslint-disable react/prop-types */
import BudgetControlComponent from "./BudgetControlComponent";
import BudgetFormComponent from "./BudgetFormComponent";

const HeaderComponent = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <>
      <header
        className="border-b border-[#8b8a8a] border-opacity-50 
      bg-[#282827] flex flex-col items-center h-[350px]"
      >
        <h1 className="text-6xl font-bold mt-5">
          Administrador de <span className="text-[#8cb98c]">Gastos</span>
        </h1>
      </header>
      <div className="mt-[-220px]">
        {isValidBudget ? (
          <BudgetControlComponent budget={ budget }/>
        ) : (
          <BudgetFormComponent
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
          />
        )}
      </div>
    </>
  );
};
export default HeaderComponent;
