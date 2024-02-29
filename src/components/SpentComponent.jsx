/* eslint-disable react/prop-types */
import { formatDate, categories } from "../utils";

const SpentComponent = ({ spent }) => {
  const { id, name, amount, category, date } = spent;

  const categoryObject = categories.find((cat) => cat.value === category);
  console.log(categoryObject)

  const imageUrl = categoryObject
    ? categoryObject.image
    : "/icons/icono_casa.svg";

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#3c3c3c] w-[600px] rounded-lg p-8 shadow-lg shadow-[#c3c3c3] flex mb-5 gap-5">
          <div className="flex flex-1 text-white">
            {/* <img src={ imageUrl } alt="" className="min-w-[80px] text-white" /> */}
            {imageUrl && (
              <img src={imageUrl} alt="imagen gasto" className="min-w-[80px]" />
            )}
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="uppercase text-[#8cb98c] text-lg">{category}</p>
            <p className="normal-case text-2xl">{name}</p>
            <p className="text-xl">
              Agregado el:{" "}
              <span className="font-extralight text-base normal-case text-[#8cb98c]">
                {formatDate(date)}
              </span>
            </p>
          </div>
          <div className="text-2xl text-[#8cb98c] flex items-center justify-end">
            <p>${amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpentComponent;
