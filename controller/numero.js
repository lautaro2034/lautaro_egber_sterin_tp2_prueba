import ServicioNumeros from "../services/numero.js";

class ControladorNumeros {
  constructor() {
    this.servicioNumeros = new ServicioNumeros();
  }

  obtenerNumeros = async (req, res) => {
    try {
      const numeros = await this.servicioNumeros.obtenerNumeros();

      res.send(numeros);
    } catch (error) {
      console.log("error obtenerNumeros", error);
    }
  };

  obtenerPromedio = async (req, res) => {
    try {
      const promedio = await this.servicioNumeros.obtenerPromedio();
      res.json({ promedio });
    } catch (error) {
      console.log("Error al obtener el promedio", error);
    }
  };

  obtenerCantidadNumeros = async (req, res) => {
    try {
      const cantidad = await this.servicioNumeros.obtenerCantidadNumeros();
      res.json({ cantidad });
    } catch (error) {
      console.log("error obtenerCantidadNumeros", error);
    }
  };

  obtenerCantidadManYMin = async (req, res) => {
    try {
      const numeroBaja = await this.servicioNumeros.obtenerCantidadNumeroBaja();
      const numeroAlta = await this.servicioNumeros.obtenerCantidadNumeroAlta();
      res.json({ numeroBaja, numeroAlta });
    } catch (error) {
      console.log("error al obtener numero Mas y Min", error);
      res.status(500).json({ error: "Error al obtener numero Man y Min" });
    }
  };

  guardarNumero = async (req, res) => {
    try {
      let numero = req.body;
      let numeroGuardada = await this.servicioNumeros.guardarNumero(numero);

      res.json(numeroGuardada);
    } catch (error) {
      console.log("error obtenerNumero", error);
    }
  };
}

export default ControladorNumeros;
