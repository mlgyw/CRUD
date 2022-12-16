/*
  Warnings:

  - You are about to drop the column `productId` on the `order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,brandName,model]` on the table `auto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `autoBrand` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autoId` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autoModel` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_productId_fkey";

-- DropIndex
DROP INDEX "auto_bodyType_key";

-- DropIndex
DROP INDEX "auto_brandName_key";

-- DropIndex
DROP INDEX "auto_fuelType_key";

-- DropIndex
DROP INDEX "order_name_key";

-- DropIndex
DROP INDEX "order_status_key";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "productId",
ADD COLUMN     "autoBrand" TEXT NOT NULL,
ADD COLUMN     "autoId" INTEGER NOT NULL,
ADD COLUMN     "autoModel" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "auto_id_brandName_model_key" ON "auto"("id", "brandName", "model");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_autoId_autoBrand_autoModel_fkey" FOREIGN KEY ("autoId", "autoBrand", "autoModel") REFERENCES "auto"("id", "brandName", "model") ON DELETE RESTRICT ON UPDATE CASCADE;
