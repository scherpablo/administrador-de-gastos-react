import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import ModalComponent from "./components/ModalComponent";
import newSpent from "/icons/new-spent.svg";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewSpent = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
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
          <div className="w-full md:min-h-[450px] flex justify-end">
            <img
              src={newSpent}
              alt="icono nuevo gasto"
              onClick={handleNewSpent}
              className="w-14 fixed mr-10 mt-72 md:mt-80 cursor-pointer"
            />
          </div>
        )}

        {modal && (
          <ModalComponent
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
          />
        )}
      </div>
    </>
  );
};

export default App;
