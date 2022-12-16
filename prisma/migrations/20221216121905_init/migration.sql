/*
  Warnings:

  - A unique constraint covering the columns `[model]` on the table `auto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[creationTime]` on the table `order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "auto_model_key" ON "auto"("model");

-- CreateIndex
CREATE UNIQUE INDEX "order_creationTime_key" ON "order"("creationTime");
