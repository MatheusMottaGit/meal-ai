/*
  Warnings:

  - You are about to drop the column `created_at` on the `Meal` table. All the data in the column will be lost.
  - Added the required column `recepy` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meal" DROP COLUMN "created_at",
ADD COLUMN     "recepy" TEXT NOT NULL;
