import { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import ExpensesListComponent from "./components/ExpensesListComponent";
import ModalComponent from "./components/ModalComponent";
import { SuccessSpent } from "./components/SweetAlertsComponent";
import newSpentImg from "/icons/new-spent.svg";
import { idGenerator } from "./utils";

const App = () => {
  const [spents, setSpents] = useState([]);
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editSpent, setEditSpent] = useState({});

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

  useEffect(() => {
    if (Object.keys(editSpent).length > 0) {
      setModal(true);
      
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [editSpent]);

  return (
    <>
      <div
        className={modal ? "sm:overflow-hidden sm:h-screen" : "flex flex-col"}
      >
        <HeaderComponent
          spents={spents}
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        />

        {isValidBudget && (
          <>
            <main className="md:w-[600px] md:my-0 md:mx-auto px-5 md:px-0">
              <ExpensesListComponent
                spents={spents}
                setEditSpent={setEditSpent}
              />
            </main>
            <div className="w-full flex justify-end mb-10 mt-5">
              <img
                src={newSpentImg}
                alt="icono nuevo gasto"
                onClick={handleNewSpent}
                className="w-14 cursor-pointer mr-10"
              />
            </div>
          </>
        )}

        {modal && (
          <ModalComponent
            budget={budget}
            spents={spents}
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
