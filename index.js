import express from "express";
import cors from "cors";
import winston from "winston";
import ownersRoute from "./routes/owner.route.js";
import animalsRoute from "./routes/animal.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "petshop-api.log" })
  ],
  format: combine(
    label({ label: "petshop-api" }),
    timestamp(),
    myFormat
  )
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/owners", ownersRoute);
app.use("/animals", animalsRoute);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
})

const port = 4082;
app.listen(
  port, 
  () => console.log(`Server up @ port ${port}`)
);