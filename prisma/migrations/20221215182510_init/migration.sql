/*
  Warnings:

  - Changed the type of `puechases` on the `auto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "auto" DROP COLUMN "puechases",
ADD COLUMN     "puechases" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "auto_puechases_key" ON "auto"("puechases");
