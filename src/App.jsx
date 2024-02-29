import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import ExpensesListComponent from "./components/ExpensesListComponent";
import ModalComponent from "./components/ModalComponent";
import { SuccessSpent } from "./components/SweetAlertsComponent";
import newSpentImg from "/icons/new-spent.svg";
import { idGenerator } from "./utils";

const App = () => {
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spents, setSpents] = useState([]);

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const newSpent = (spent) => {
    spent.id = idGenerator();
    spent.date = Date.now(); /* date FNS */
    setSpents([...spents, spent]);

    SuccessSpent();

    setAnimateModal(true);
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-col">
        <HeaderComponent
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        />

        {isValidBudget && (
          <>
            <main className="md:w-[600px] md:my-0 md:mx-auto px-5 md:px-0">
              <ExpensesListComponent spents={spents} />
            </main>
            <div className="w-full md:min-h-[450px] flex justify-end">
              <img
                src={newSpentImg}
                alt="icono nuevo gasto"
                onClick={handleNewSpent}
                className="w-14 fixed mr-10 mt-10 md:mt-10 cursor-pointer"
              />
            </div>
          </>
        )}

        {modal && (
          <ModalComponent
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            newSpent={newSpent}
          />
        )}
      </div>
    </>
  );
};

export default App;
