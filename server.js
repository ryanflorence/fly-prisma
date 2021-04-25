const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const app = express();
app.get("*", main);

// A `main` function so that you can use async/await
async function main(req, res) {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
}

app.listen(3000);
