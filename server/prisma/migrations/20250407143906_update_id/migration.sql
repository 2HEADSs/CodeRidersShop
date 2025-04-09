/*
  Warnings:

  - The primary key for the `_liked` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `bikes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_liked" DROP CONSTRAINT "_liked_A_fkey";

-- DropForeignKey
ALTER TABLE "_liked" DROP CONSTRAINT "_liked_B_fkey";

-- DropForeignKey
ALTER TABLE "bikes" DROP CONSTRAINT "bikes_ownerId_fkey";

-- AlterTable
ALTER TABLE "_liked" DROP CONSTRAINT "_liked_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_liked_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "bikes" DROP CONSTRAINT "bikes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "ownerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "bikes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "bikes_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_liked" ADD CONSTRAINT "_liked_A_fkey" FOREIGN KEY ("A") REFERENCES "bikes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_liked" ADD CONSTRAINT "_liked_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
