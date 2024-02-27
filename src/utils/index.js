const categories = [
    { id: "1", value: "ahorro", label: "ahorro" },
    { id: "2", value: "comida", label: "comida" },
    { id: "3", value: "casa", label: "casa" },
    { id: "4", value: "gastos", label: "gastos" },
    { id: "5", value: "ocio", label: "ocio" },
    { id: "6", value: "salud", label: "salud" },
    { id: "7", value: "suscripciones", label: "suscripciones" },
]

const idGenerator = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

export { categories, idGenerator }; 