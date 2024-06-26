import "./database";

import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default app;
