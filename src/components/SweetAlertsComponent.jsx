import Swal from "sweetalert2";

const InvalidBudget = () => {
  Swal.fire({
    icon: "error",
    title: "Presupuesto Inválido",
    text: "El presupuesto debe ser un número mayor a 0",
    confirmButtonColor: "#f37574",
    confirmButtonText: "OK",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #f37574; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const SuccessBudget = () => {
  Swal.fire({
    icon: "success",
    title: "Presupuesto Añadido",
    text: "El presupuesto se añadió correctamnte",
    confirmButtonColor: "#8cb98c",
    confirmButtonText: "OK",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #8cb98c; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const AmountAdd = () => {
  Swal.fire({
    icon: "error",
    title: "Completar todos los campos",
    text: "Todos los campos del formulario deben estar completos",
    confirmButtonColor: "#f37574",
    confirmButtonText: "OK",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #f37574; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const SuccessSpent = () => {
  Swal.fire({
    icon: "success",
    title: "Gasto Añadido",
    text: "El gasto se añadió correctamnte",
    confirmButtonColor: "#8cb98c",
    confirmButtonText: "OK",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #8cb98c; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const EditSpent = () => {
  Swal.fire({
    icon: "success",
    title: "Gasto Editado",
    text: "El gasto se editó correctamnte",
    confirmButtonColor: "#8cb98c",
    confirmButtonText: "OK",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #8cb98c; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const DeleteSpent = () => {
  Swal.fire({
    icon: "success",
    title: "Gasto Eliminado",
    text: "El gasto se eliminó correctamnte",
    confirmButtonColor: "#8cb98c",
    confirmButtonText: "OK",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #8cb98c; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const ExceededBudget = () => {
  Swal.fire({
    icon: "error",
    title: "Pesupuestro Superado",
    text: "No puedes agregar este gasto, superas el presupuesto disponible",
    confirmButtonColor: "#f37574",
    confirmButtonText: "OK",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #f37574; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const WarnExceededBudget = async () => {
    return await Swal.fire({
        icon: "danger",
        title: "Presupuesto Excedido",
        text: "¿Está seguro que desea agregar/editar el gasto?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#f37574",
        confirmButtonText: "Sí, estoy seguro",
        cancelButtonText: "Cancelar",
        footer:
          "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #3085d6; font-weight: 700'>Pablo Scherpa</a>",
      });
};

const SwipeEdit = async () => {
    return await Swal.fire({
        icon: "warning",
        title: "Editar Gasto",
        text: "¿Está seguro que desea editar el gasto?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#f37574",
        confirmButtonText: "Sí, editar",
        cancelButtonText: "Cancelar",
        footer:
          "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #3085d6; font-weight: 700'>Pablo Scherpa</a>",
      });
};

const SwipeDelete = async () => {
    return await Swal.fire({
        icon: "warning",
        title: "Eliminar Gasto",
        text: "¿Está seguro que desea eliminar el gasto?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#f37574",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        footer:
          "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #3085d6; font-weight: 700'>Pablo Scherpa</a>",
      });
};

export {
  InvalidBudget,
  SuccessBudget,
  AmountAdd,
  SuccessSpent,
  EditSpent,
  DeleteSpent,
  ExceededBudget,
  WarnExceededBudget,
  SwipeEdit,
  SwipeDelete
};
