import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Alice Johnson",
        email: "alice.johnson@email.com",
        age: 25,
        isMarried: false,
        nationality: "American",
      },
      {
        name: "Mick Rodriguez",
        email: "mick.rodriguez@email.com",
        age: 22,
        isMarried: false,
        nationality: "Spanish",
      },
      {
        name: "Rose Dubois",
        email: "rose.dubois@email.com",
        age: 28,
        isMarried: true,
        nationality: "French",
      },
      {
        name: "John Smith",
        email: "john.smith@email.com",
        age: 32,
        isMarried: true,
        nationality: "British",
      },
      {
        name: "Maria Garcia",
        email: "maria.garcia@email.com",
        age: 29,
        isMarried: false,
        nationality: "Mexican",
      },
      {
        name: "Kenji Tanaka",
        email: "kenji.tanaka@email.com",
        age: 27,
        isMarried: true,
        nationality: "Japanese",
      },
      {
        name: "Sophie Müller",
        email: "sophie.muller@email.com",
        age: 31,
        isMarried: false,
        nationality: "German",
      },
      {
        name: "Luca Rossi",
        email: "luca.rossi@email.com",
        age: 24,
        isMarried: false,
        nationality: "Italian",
      },
      {
        name: "Wei Chen",
        email: "wei.chen@email.com",
        age: 35,
        isMarried: true,
        nationality: "Chinese",
      },
      {
        name: "Ananya Patel",
        email: "ananya.patel@email.com",
        age: 26,
        isMarried: false,
        nationality: "Indian",
      },
      {
        name: "David Kim",
        email: "david.kim@email.com",
        age: 30,
        isMarried: true,
        nationality: "Korean",
      },
      {
        name: "Emma Wilson",
        email: "emma.wilson@email.com",
        age: 23,
        isMarried: false,
        nationality: "Canadian",
      },
      {
        name: "Carlos Silva",
        email: "carlos.silva@email.com",
        age: 33,
        isMarried: true,
        nationality: "Brazilian",
      },
      {
        name: "Olga Ivanova",
        email: "olga.ivanova@email.com",
        age: 27,
        isMarried: false,
        nationality: "Russian",
      },
      {
        name: "Mohammed Ali",
        email: "mohammed.ali@email.com",
        age: 34,
        isMarried: true,
        nationality: "Egyptian",
      },
      {
        name: "Lisa Anderson",
        email: "lisa.anderson@email.com",
        age: 29,
        isMarried: false,
        nationality: "Australian",
      },
      {
        name: "Javier Morales",
        email: "javier.morales@email.com",
        age: 31,
        isMarried: true,
        nationality: "Argentinian",
      },
      {
        name: "Fatima Zahra",
        email: "fatima.zahra@email.com",
        age: 26,
        isMarried: false,
        nationality: "Moroccan",
      },
      {
        name: "Thomas Schmidt",
        email: "thomas.schmidt@email.com",
        age: 28,
        isMarried: true,
        nationality: "Austrian",
      },
      {
        name: "Yuki Nakamura",
        email: "yuki.nakamura@email.com",
        age: 25,
        isMarried: false,
        nationality: "Japanese",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
