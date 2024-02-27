import Swal from "sweetalert2";

const InvalidBudget = ()=>{
    Swal.fire({
        icon: "error",
        title: "Presupuesto Inválido",
        text: "El presupuesto debe ser un número mayor a 0",
        confirmButtonColor: "#f37574",
        confirmButtonText: "OK",
        footer:
          "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #f37574; font-weight: 700'>Pablo Scherpa</a>",
      });
}

const SuccessBudget = ()=>{
    Swal.fire({
        icon: "success",
        title: "Presupuesto Añadido",
        text: "El presupuesto se añadió correctamnte",
        confirmButtonColor: "#8cb98c",
        confirmButtonText: "OK",
        footer:
          "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #8cb98c; font-weight: 700'>Pablo Scherpa</a>",
      });
}

const AmountAdd = ()=>{
    Swal.fire({
        icon: "error",
        title: "Completar todos los campos",
        text: "Todos los campos del formulario deben estar completos",
        confirmButtonColor: "#f37574",
        confirmButtonText: "OK",
        footer:
          "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #f37574; font-weight: 700'>Pablo Scherpa</a>",
      });
}

const SuccessSpent = ()=>{
    Swal.fire({
        icon: "success",
        title: "Gasto Añadido",
        text: "El gasto se añadió correctamnte",
        confirmButtonColor: "#8cb98c",
        confirmButtonText: "OK",
        footer:
          "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #8cb98c; font-weight: 700'>Pablo Scherpa</a>",
      });
}


export { InvalidBudget, SuccessBudget, AmountAdd, SuccessSpent };