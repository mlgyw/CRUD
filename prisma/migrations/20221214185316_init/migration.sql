-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('created', 'onTheWay', 'delivered');

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "creationTime" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "PostStatus" NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_creationTime_key" ON "order"("creationTime");

-- CreateIndex
CREATE UNIQUE INDEX "order_product_key" ON "order"("product");

-- CreateIndex
CREATE UNIQUE INDEX "order_name_key" ON "order"("name");

-- CreateIndex
CREATE UNIQUE INDEX "order_status_key" ON "order"("status");
