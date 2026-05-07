import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await bcrypt.hash("ChangeThisPassword123!", 10);

  await prisma.user.upsert({
    where: { email: "admin@toffeestack.com" },
    update: {},
    create: {
      email: "admin@toffeestack.com",
      name: "Admin",
      password,
    },
  });

  console.log("Admin user created");
}

main().finally(async () => {
  await prisma.$disconnect();
});