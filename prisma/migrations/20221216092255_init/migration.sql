/*
  Warnings:

  - You are about to drop the column `product` on the `order` table. All the data in the column will be lost.
  - Added the required column `productId` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "order_product_key";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "product",
ADD COLUMN     "productId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "auto"("model") ON DELETE RESTRICT ON UPDATE CASCADE;
