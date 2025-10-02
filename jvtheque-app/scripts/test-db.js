// scripts/test-db.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Simple requête pour tester la connexion
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ La connexion à la base fonctionne !");
    process.exit(0);
  } catch (err) {
    console.error("❌ Erreur de connexion à la base :", err.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
