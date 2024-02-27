/* eslint-disable react/prop-types */
import modalClose from "/icons/modal-close.svg";

const ModalComponent = ({ setModal, animateModal, setAnimateModal }) => {
  const handleModalClose = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

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
          className={`flex flex-col mw-[1280px] w-[640px] my-0 mx-auto mt-[100px] opacity-0 transition-all duration-500 ease-in ${
            animateModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 mb-8">
            <legend className="text-3xl">Nombre Gasto</legend>
            <input
              type="text"
              placeholder="añade el nombnre de un gasto"
              className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d]"
            />
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <legend className="text-3xl">Cantidad Gastada</legend>
            <input
              type="number"
              placeholder="añade el nombnre de un gasto"
              className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <legend className="text-3xl">Categoría Gasto</legend>
            <select className="w-full rounded-md p-2 bg-[#c3c3c3] outline-none text-[#1e1e1d3a]">
              <option value="" className="text-center">
                --- seleccione una categoría ---
              </option>
            </select>
          </div>

          <div className="w-full bg-[#8cb98c] rounded-md p-2 mt-8 text-center">
            <button className="uppercase text-xl text-[#1e1e1d]">añadir</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ModalComponent;
