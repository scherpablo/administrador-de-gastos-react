/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { categories } from "../utils";
import { AmountAdd, ExceededBudget } from "./SweetAlertsComponent";
import modalClose from "/icons/modal-close.svg";

const ModalComponent = ({
  setModal,
  animateModal,
  setAnimateModal,
  newSpent,
  budget,
  spents,
  editSpent
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleModalClose = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if ([name, amount, category].includes("")) {
      AmountAdd();
      return;
    }

    const totalUsed = spents.reduce((total, spent) => spent.amount + total, 0);
    const newSpentAmount = Number(amount);

    if (totalUsed + newSpentAmount > budget) {
      ExceededBudget();
      return;
    }

    newSpent({ name, amount: newSpentAmount, category });
  };

  useEffect(() => {
    if (Object.keys(editSpent).length > 0) {
      setName(editSpent.name);
      setAmount(editSpent.amount);
      setCategory(editSpent.category);
    }
  }, [editSpent]);

  return (
    <>
      <div className="bg-zinc-950/90 absolute top-0 left-0 right-0 bottom-0">
        <div className="w-5 absolute top-10 right-14">
          <img
            src={modalClose}
            alt="icono cerrar modal"
            onClick={handleModalClose}
            className="cursor-pointer"
          />
        </div>

        <form
          onSubmit={handleFormSubmit}
          className={`flex flex-col sm:w-[600px] my-0 mx-auto md:px-0 px-5 mt-[100px] opacity-0 transition-all duration-500 ease-in ${
            animateModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-6xl text-center mb-8 font-bold">
            Nuevo <span className="text-[#8cb98c]">Gasto</span>
          </h2>
          <div className="flex flex-col gap-3 mb-8">
            <label htmlFor="name" className="text-3xl">
              Nombre Gasto
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="añade el nombnre de un gasto"
              className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d]"
            />
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <label htmlFor="amount" className="text-3xl">
              Cantidad Gastada
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="añade la cantidad gastada"
              className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="category" className="text-3xl">
              Categoría Gasto
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d]"
            >
              <option key={0}>--- seleccione una categoría ---</option>
              {categories.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full bg-[#8cb98c] hover:bg-[#5c715c] rounded-md p-2 mt-8 text-center cursor-pointer">
            <input
              type="submit"
              value="añadir"
              className="uppercase text-xl text-[#1e1e1d]"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ModalComponent;
