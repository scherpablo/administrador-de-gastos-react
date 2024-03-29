/* eslint-disable react/prop-types */
import BudgetControlComponent from "./BudgetControlComponent";
import BudgetFormComponent from "./BudgetFormComponent";

const HeaderComponent = ({
  spents,
  setSpents,
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
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold mt-5">
          Administrador de <span className="text-[#8cb98c]">Gastos</span>
        </h1>
      </header>
      <div className="mt-[-220px]">
        {isValidBudget ? (
          <BudgetControlComponent
            spents={spents}
            setSpents={setSpents}
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
          />
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
