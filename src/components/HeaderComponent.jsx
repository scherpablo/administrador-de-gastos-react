import BudgetComponent from "./BudgetComponent";

const HeaderComponent = () => {
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
        <BudgetComponent />
      </div>
    </>
  );
};
export default HeaderComponent;
