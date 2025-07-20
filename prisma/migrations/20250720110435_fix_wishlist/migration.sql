/*
  Warnings:

  - You are about to drop the column `user_id` on the `WishList` table. All the data in the column will be lost.
  - Added the required column `customer_id` to the `WishList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WishList" DROP COLUMN "user_id",
ADD COLUMN     "customer_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
