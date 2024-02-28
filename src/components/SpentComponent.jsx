/* eslint-disable react/prop-types */
const SpentComponent = ({ spent }) => {
  const { id, name, amount, category } = spent;

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#3c3c3c] w-[600px] rounded-lg p-8 shadow-lg shadow-[#c3c3c3] flex mb-5">
          <div className="w-full flex flex-col gap-3">
            <p className="uppercase">{category}</p>
            <p className="normal-case text-xl italic">{name}</p>
            <p className="">{amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpentComponent;
