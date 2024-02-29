const categories = [
    { id: "1", value: "ahorro", label: "ahorro", image: "/icons/icono_ahorro.svg" },
    { id: "2", value: "comida", label: "comida", image: "/icons/icono_comida.svg" },
    { id: "3", value: "casa", label: "casa", image: "/icons/icono_casa.svg" },
    { id: "4", value: "gastos", label: "gastos", image: "/icons/icono_gastos.svg" },
    { id: "5", value: "ocio", label: "ocio", image: "/icons/icono_ocio.svg" },
    { id: "6", value: "salud", label: "salud",image: "/icons/icono_salud.svg" },
    { id: "7", value: "suscripciones", label: "suscripciones", image: "/icons/icono_suscripciones.svg" },
]

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
  }

export { categories, idGenerator, formatDate }; 