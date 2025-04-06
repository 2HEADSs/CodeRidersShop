/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Manufacturer" AS ENUM ('Access_Motor', 'Adly', 'Aeon', 'AGM_MOTORS', 'Aixam', 'American_Ironhorse', 'Aprilia', 'Arctic_Cat', 'Baotian', 'Barossa', 'Bashan', 'Beeline', 'Benelli', 'Beta', 'Big_Dog_Motorcycles', 'Bimota', 'Black_Tea', 'Blata', 'BMW', 'Bombardier', 'Boom', 'Brixton', 'Brough_Superior', 'BRP', 'BSA', 'Buell', 'Burelli', 'Cagiva', 'Can_Am', 'Cectek', 'CFMOTO', 'CPI', 'Daelim', 'Derbi', 'Dinli', 'DKW', 'DREEMS', 'Ducati', 'e_max', 'emco', 'Energica', 'e_Schwalbe', 'E_Ton', 'evmoto', 'Explorer', 'Fantic', 'FB_Mondial', 'Felo_Moto', 'Futura', 'Gasgas', 'Generic', 'GG_Motorradtechnik', 'Gilera', 'GOES', 'Gorilla', 'Govecs', 'Harley_Davidson', 'Heinkel', 'Hercules', 'Herkules', 'Honda', 'Horex', 'Horwin', 'Husaberg', 'Husqvarna', 'Hyosung', 'Indian', 'Italjet', 'Jawa', 'Jinling', 'Kawasaki', 'KAYO', 'Keeway', 'Kimi', 'KL_Mobility_Piper', 'Knievel', 'Kreidler', 'KSR', 'KTM', 'Kumpan', 'Kymco', 'Lambretta', 'Laverda', 'Lifan', 'Linhai', 'LiveWire', 'LML', 'Loncin', 'Luxxon', 'Maico', 'Malaguti', 'Mash', 'MBK', 'Megelli', 'Metorbike', 'Motobi', 'Moto_Guzzi', 'Moto_Morini', 'Motowell', 'Motron', 'MV_Agusta', 'Mz', 'NAON', 'Nerva', 'NITO', 'NIU', 'Norton', 'NSU', 'Odes', 'Online', 'Pegasus', 'Peugeot', 'PGO', 'Piaggio', 'Piper', 'PohlBock', 'Polaris', 'Puch', 'QJ_Motor', 'Quadix', 'Quadro', 'Ray', 'Rewaco', 'RGNT', 'Rieju', 'Rivero', 'Royal_Alloy', 'Royal_Enfield', 'Sachs', 'Scrooser', 'Seat', 'Segway', 'Seikel', 'Sherco', 'Shineray', 'Si_o', 'Silence', 'Simson', 'Skyteam', 'SMC', 'Stark', 'Steereon', 'Stels', 'Super_Soco', 'Sur_Ron', 'Suzuki', 'SWM', 'SYM', 'Talaria', 'Tauris', 'TGB', 'Thunderbike', 'TiSTO', 'TM', 'Triton', 'Triumph', 'TRS', 'UM', 'Ural', 'Vespa', 'VICTORY', 'VOGE', 'Voltago', 'Voxan', 'WMI', 'Yamaha', 'Zero', 'Zhongyu', 'Zontes', 'Zündapp', 'Other');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bikes" (
    "id" SERIAL NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "manufacturer" "Manufacturer" NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "engineCapacity" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "year" INTEGER NOT NULL,
    "used" BOOLEAN NOT NULL,
    "img" TEXT,
    "description" TEXT NOT NULL DEFAULT 'Random Description',
    "ownerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_liked" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_liked_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "_liked_B_index" ON "_liked"("B");

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_liked" ADD CONSTRAINT "_liked_A_fkey" FOREIGN KEY ("A") REFERENCES "bikes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_liked" ADD CONSTRAINT "_liked_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
