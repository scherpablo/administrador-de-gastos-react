/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { categories } from "../utils";
import { AmountAdd, EditSpent, WarnExceededBudget } from "./SweetAlertsComponent";
import modalClose from "/icons/modal-close.svg";

const ModalComponent = ({
  setModal,
  animateModal,
  setAnimateModal,
  newSpent,
  budget,
  spents,
  editSpent,
  setEditSpent,
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  const handleModalClose = () => {
    setAnimateModal(false);
    setEditSpent({});

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if ([name, amount, category].includes("")) {
      AmountAdd();
      return;
    }

    const newSpentAmount = Number(amount);

    if (Object.keys(editSpent).length > 0) {
      const totalUneditedSpent = spents.reduce(
        (total, spent) =>
          spent.id !== editSpent.id ? total + parseFloat(spent.amount) : total,
        0
      );
      const newTotalEditedSpent = totalUneditedSpent + newSpentAmount;

      if (newTotalEditedSpent > budget) {
        const confirmed = await WarnExceededBudget();
        if(!confirmed.value) return;
      }
      // if (newTotalEditedSpent > budget) {
      //   ExceededBudget();
      //   return;
      // }
      EditSpent();

      newSpent({
        name,
        amount: newSpentAmount,
        category,
        id: editSpent.id,
        date,
      });
    } else {
      const totalUsed = spents.reduce(
        (total, spent) => total + parseFloat(spent.amount),
        0
      );
      const newTotalUsed = totalUsed + newSpentAmount;

      if (newTotalUsed > budget) {
        const confirmed = await WarnExceededBudget();
        if(!confirmed.value) return;
      }

      newSpent({ name, amount: newSpentAmount, category, id, date });
    }
  };

  useEffect(() => {
    if (Object.keys(editSpent).length > 0) {
      setName(editSpent.name);
      setAmount(editSpent.amount);
      setCategory(editSpent.category);
      setDate(editSpent.date);
      setId(editSpent.id);
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
          {Object.keys(editSpent).length > 0 ? (
            <h2 className="text-6xl text-center mb-8 font-bold">
              Editar <span className="text-[#3085d6]">Gasto</span>
            </h2>
          ) : (
            <h2 className="text-6xl text-center mb-8 font-bold">
              Nuevo <span className="text-[#8cb98c]">Gasto</span>
            </h2>
          )}
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

          {Object.keys(editSpent).length > 0 ? (
            <div className="w-full bg-[#3085d6] hover:bg-[#5c715c] rounded-md p-2 mt-8 text-center cursor-pointer">
              <input
                type="submit"
                value="guardar cambios"
                className="uppercase text-xl text-[#1e1e1d]"
              />
            </div>
          ) : (
            <div className="w-full bg-[#8cb98c] hover:bg-[#5c715c] rounded-md p-2 mt-8 text-center cursor-pointer">
              <input
                type="submit"
                value="añadir"
                className="uppercase text-xl text-[#1e1e1d]"
              />
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default ModalComponent;
