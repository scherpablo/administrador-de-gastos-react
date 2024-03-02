/* eslint-disable react/prop-types */
import {
  LeadingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate, categories, formatCurrency } from "../utils";
// import { SwipeEdit, SwipeDelete } from "./SweetAlertsComponent";

const SpentComponent = ({ spent }) => {
  const { id, name, amount, category, date } = spent;

  const categoryObject = categories.find((cat) => cat.value === category);

  const imageUrl = categoryObject
    ? categoryObject.image
    : "/icons/icono_casa.svg";

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => console.log('editar')}
        className="bg-blue-500 mb-5 text-3xl text-center flex justify-center p-16 rounded-md"
      >
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => console.log('eliminar')}
        className="bg-red-500 mb-5 text-3xl text-center flex justify-center p-16 rounded-md"
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <>
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
          <div className="flex justify-center">
            <div className="bg-[#3c3c3c] w-[600px] rounded-lg p-8 shadow-lg shadow-[#c3c3c3] flex mb-5 gap-5">
              <div className="flex flex-1 text-white">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="imagen gasto"
                    className="min-w-[80px]"
                  />
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
              <div className="text-2xl flex items-center justify-end">
                <p className="shadow shadow-white p-2 rounded-md">
                  {formatCurrency(amount)}
                </p>
              </div>
            </div>
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </>
  );
};
export default SpentComponent;
