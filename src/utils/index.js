const categories = [
  {
    id: "1",
    value: "ahorro",
    label: "ahorro",
    image: "/icons/icono_ahorro.svg",
  },
  { id: "2", value: "casa", label: "casa", image: "/icons/icono_casa.svg" },
  { id: "3", value: "ccoche", label: "coche", image: "/icons/icono_coche.svg" },
  {
    id: "4",
    value: "comida",
    label: "comida",
    image: "/icons/icono_comida.svg",
  },
  {
    id: "5",
    value: "gastos",
    label: "gastos",
    image: "/icons/icono_gastos.svg",
  },
  { id: "6", value: "ocio", label: "ocio", image: "/icons/icono_ocio.svg" },
  { id: "7", value: "salud", label: "salud", image: "/icons/icono_salud.svg" },
  { id: "9", value: "servicios", label: "servicios", image: "/icons/icono_servicios.svg" },
  {
    id: "9",
    value: "suscripciones",
    label: "suscripciones",
    image: "/icons/icono_suscripciones.svg",
  },
  { id: "10", value: "tarjeta", label: "tarjeta", image: "/icons/icono_tarjeta.svg" },
];

const idGenerator = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);

  return random + date;
};

const formatDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("es-ES", options);
};

const formatCurrency = (number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export { categories, idGenerator, formatDate, formatCurrency };
