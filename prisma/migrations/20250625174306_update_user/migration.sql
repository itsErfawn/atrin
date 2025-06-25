/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `profileImg` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `geust` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminReply" TEXT,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    CONSTRAINT "Comment_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("adminReply", "createdAt", "email", "id", "message", "name", "product_id", "user_id") SELECT "adminReply", "createdAt", "email", "id", "message", "name", "product_id", "user_id" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT,
    "number" TEXT,
    "geust" BOOLEAN NOT NULL
);
INSERT INTO "new_Customer" ("email", "id", "name", "number") SELECT "email", "id", "name", "number" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
CREATE TABLE "new_Story" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profileImage" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "callMe" TEXT NOT NULL,
    "unknownImage" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL
);
INSERT INTO "new_Story" ("callMe", "description", "id", "profileImage", "unknownImage", "user_id", "viewCount") SELECT "callMe", "description", "id", "profileImage", "unknownImage", "user_id", "viewCount" FROM "Story";
DROP TABLE "Story";
ALTER TABLE "new_Story" RENAME TO "Story";
CREATE TABLE "new_WishList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    CONSTRAINT "WishList_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WishList" ("id", "product_id", "user_id") SELECT "id", "product_id", "user_id" FROM "WishList";
DROP TABLE "WishList";
ALTER TABLE "new_WishList" RENAME TO "WishList";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
