import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.get("/users", async (_, res) => {
  // findFirst give first data or value
  // ****
  // const users = await prisma.user.findFirst()

  // findFirstOrThrow give first data or value and if not then return or THROW - NULL
  // ****
  // const users = await prisma.user.findFirstOrThrow()

  // findUnique give the unique value which the developer set in user model schema. Like I made email as unique. So we can get the unique value as email.
  // By default Prisma POSTGRES thake ID as unique and primary key so. we can also get the unique value by ID.
  // ****
  // const users = await prisma.user.findUnique({
  //   where: {id : 5},
  // })

  // const users = await prisma.user.findUnique({
  //   where: {email : "mick@email.com"},
  // })

  // We don't use unique for those we don't assign with unique.

  // Here we use multiple conditions to know more about how prisma relation works.
  // const users = await prisma.user.findMany({
  //   where: {isMarried: true, age: {gt:30}},
  // });

  // AND, OR & NOT condition
  // const users = await prisma.user.findMany({
  //   where: { OR: [{ isMarried: true }, { age: { gt: 30 } }] },
  // });

  // const users = await prisma.user.findMany({
  //   where: { AND: [{ nationality: "Chinese" }, { age: { gt: 30 } }] },
  // });

  // const users = await prisma.user.findMany({
  //   where: { NOT: [{ nationality: "Indian" }] },
  // });

  // const users = await prisma.user.findMany({
  //   where: { NOT: [{ nationality: "Indian" }, { age: { gt: 30 } }] },
  // });

  // Now i want to find those people who is INDIAN,CHINESE and Korean
  // here we use single field but multiple values.
  const users = await prisma.user.findMany({
    where: { 
      nationality: {
        in: ["Chinese","Korean","Indian"]
      }
     },
  });

  // findMany give all values
  // ****
  // const users = await prisma.user.findMany()

  res.json(users);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
