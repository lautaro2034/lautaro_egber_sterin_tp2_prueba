import express from "express";
import NumeroRouter from "./routes/routerNumero.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static("public"));

const routerNumero = new NumeroRouter();
app.use("/api/numero", routerNumero.start());

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
