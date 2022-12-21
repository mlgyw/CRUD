-- CreateTable
CREATE TABLE "auto" (
    "id" SERIAL NOT NULL,
    "brandName" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "bodyType" TEXT NOT NULL,
    "puechases" TEXT NOT NULL,

    CONSTRAINT "auto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auto_brandName_key" ON "auto"("brandName");

-- CreateIndex
CREATE UNIQUE INDEX "auto_model_key" ON "auto"("model");

-- CreateIndex
CREATE UNIQUE INDEX "auto_fuelType_key" ON "auto"("fuelType");

-- CreateIndex
CREATE UNIQUE INDEX "auto_bodyType_key" ON "auto"("bodyType");

-- CreateIndex
CREATE UNIQUE INDEX "auto_puechases_key" ON "auto"("puechases");
