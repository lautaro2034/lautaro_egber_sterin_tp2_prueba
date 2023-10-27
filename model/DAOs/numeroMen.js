class NumerosModel {
  constructor() {
    this.numeros = [];
  }

  async obtenerNumeros() {
    try {
      return this.numeros;
    } catch (error) {
      console.log("Error al obtener números", error);
      return [];
    }
  }

  async agregarNumero(numero) {
    try {
      this.numeros.push(numero);
      return numero;
    } catch (error) {
      console.log("Error al agregar número", error);
      return {};
    }
  }
}

export default NumerosModel;
