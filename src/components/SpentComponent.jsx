/* eslint-disable react/prop-types */
import { formatDate } from "../utils";

const SpentComponent = ({ spent }) => {
  const { id, name, amount, category, date } = spent;

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#3c3c3c] w-[600px] rounded-lg p-8 shadow-lg shadow-[#c3c3c3] flex mb-5">
          <div className="w-full flex flex-col gap-3">
            <p className="uppercase">{category}</p>
            <p className="normal-case text-xl italic">{name}</p>
            <p className="">{amount}</p>
            <p className="uppercase">
              Agregado el:{" "}
              <span className="font-extralight normal-case">
                {formatDate(date)}
              </span>
            </p>
          </div>
          <div className="text-2xl text-[#8cb98c] flex items-center">
            <p>${amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpentComponent;
