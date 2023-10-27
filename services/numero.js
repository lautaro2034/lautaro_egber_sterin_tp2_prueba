import NumerosModel from "../model/DAOs/numeroMen.js";

class ServicioNumeros {
  constructor() {
    this.numerosMen = new NumerosModel();
  }

  async obtenerNumeros() {
    let numeros = await this.numerosMen.obtenerNumeros();
    return numeros;
  }
  obtenerPromedio = async () => {
    const numeros = await this.numerosMen.obtenerNumeros();

    if (numeros.length === 0) {
      return 0;
    }

    const sumatoria = numeros.reduce(
      (acumulador, numero) => acumulador + numero.numero,
      0
    );
    const promedio = sumatoria / numeros.length;

    return promedio;
  };

  obtenerCantidadNumeros = async () => {
    const numeros = await this.numerosMen.obtenerNumeros();
    return { cantidad: numeros.length };
  };

  obtenerCantidadNumeroBaja = async () => {
    const numeros = await this.numerosMen.obtenerNumeros();
    const numero = numeros.sort((a, b) => a.numero - b.numero)[0];
    return numero;
  };

  obtenerCantidadNumeroAlta = async () => {
    const numeros = await this.numerosMen.obtenerNumeros();
    const numero = numeros.sort((a, b) => b.numero - a.numero)[0];
    return numero;
  };

  async guardarNumero(numero) {
    return await this.numerosMen.agregarNumero(numero);
  }
}

export default ServicioNumeros;
