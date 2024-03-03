import { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import ExpensesListComponent from "./components/ExpensesListComponent";
import ModalComponent from "./components/ModalComponent";
import {
  SuccessSpent,
  SwipeDelete,
  DeleteSpent,
} from "./components/SweetAlertsComponent";
import newSpentImg from "/icons/new-spent.svg";
import { idGenerator } from "./utils";

const App = () => {
  const [spents, setSpents] = useState(
    localStorage.getItem("spents")
      ? JSON.parse(localStorage.getItem("spents"))
      : []
  );
  const [budget, setBudget] = useState(Number(localStorage.getItem("budget")) ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editSpent, setEditSpent] = useState({});

  const handleNewSpent = () => {
    setModal(true);
    setEditSpent({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const newSpent = (spent) => {
    if (spent.id) {
      const updatedSpents = spents.map((spentState) =>
        spentState.id === spent.id ? spent : spentState
      );
      setSpents(updatedSpents);
      setEditSpent({});
    } else {
      spent.id = idGenerator();
      spent.date = Date.now(); /* date FNS */
      setSpents([...spents, spent]);
      SuccessSpent();
    }

    setAnimateModal(true);
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  const deleteSpent = (id) => {
    SwipeDelete().then((result) => {
      if (result.isConfirmed) {
        const updatedSpents = spents.filter((spent) => spent.id !== id);
        setSpents(updatedSpents);
        DeleteSpent();
      }
    });
  };

  useEffect(() => {
    if (Object.keys(editSpent).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [editSpent]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
    localStorage.setItem("spents", JSON.stringify(spents) ?? []);
  }, [budget, spents]);

  useEffect(() => {
    const budgetLocalStorage = Number(localStorage.getItem("budget")) ?? 0;

    if (budgetLocalStorage > 0) {
      setIsValidBudget(true);
    }
  }, []);

  return (
    <>
      <div className={modal ? "overflow-hidden h-screen" : "flex flex-col"}>
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
                deleteSpent={deleteSpent}
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
            editSpent={editSpent}
            setEditSpent={setEditSpent}
          />
        )}
      </div>
    </>
  );
};

export default App;
