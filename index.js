const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  try {
    res.json({ status: "API Bet365 online e funcional." });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar dados." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API rodando na porta", PORT);
});
