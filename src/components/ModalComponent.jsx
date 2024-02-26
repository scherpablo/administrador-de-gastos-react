/* eslint-disable react/prop-types */
import modalClose from "/icons/modal-close.svg";

const ModalComponent = ({ setModal }) => {

  const handleModalClose = () => {
    console.log('ocultando')
    setModal(false);
  };

  return (
    <>
      <div className="bg-slate-700/70 absolute top-0 left-0 right-0 bottom-0">
        <div className="w-5 absolute top-10 right-14">
          <img
            src={modalClose}
            alt="icono cerrar modal"
            onClick={handleModalClose}
          />
        </div>
      </div>
    </>
  );
};
export default ModalComponent;
