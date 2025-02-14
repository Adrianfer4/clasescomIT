//Aqui el this de la funcion saludar hace referencia al objeto mientras el this de la funcion saludar2 no hace referencia al objeto ya que es una arrow function

const persona = {
    nombre: "Nicolas",
    saludar: function () {
      console.log(this);
      console.log(this.nombre);
    },
    saludar2: () => {
      console.log(this);
    },
  };
  