import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  return (
    <>
      <div>
        <HeaderComponent
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        />
      </div>
    </>
  );
};

export default App;
