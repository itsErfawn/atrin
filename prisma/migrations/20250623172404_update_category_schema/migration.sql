/*
  Warnings:

  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HomeSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SimilarProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `blogId` on the `BlogComment` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `filterId` on the `FilterOption` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isProduct` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `discount` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `rating` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to drop the column `filterOptionId` on the `ProductFilter` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `ProductFilter` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `blogId` on the `RelatedBlog` table. All the data in the column will be lost.
  - You are about to drop the column `relatedBlogId` on the `RelatedBlog` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `StoryProduct` table. All the data in the column will be lost.
  - You are about to drop the column `storyId` on the `StoryProduct` table. All the data in the column will be lost.
  - Added the required column `blog_id` to the `BlogComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filter_id` to the `FilterOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filterOption_id` to the `ProductFilter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `ProductFilter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `ProductImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blog_id` to the `RelatedBlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relatedBlog_id` to the `RelatedBlog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `StoryProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `story_id` to the `StoryProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Favorite";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "HomeSection";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SimilarProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Product_meta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    CONSTRAINT "Product_meta_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category_meta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    CONSTRAINT "Category_meta_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WishList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    CONSTRAINT "WishList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WishList_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BlogComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blog_id" INTEGER NOT NULL,
    CONSTRAINT "BlogComment_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BlogComment" ("createdAt", "id", "message", "name") SELECT "createdAt", "id", "message", "name" FROM "BlogComment";
DROP TABLE "BlogComment";
ALTER TABLE "new_BlogComment" RENAME TO "BlogComment";
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "parentId" INTEGER,
    CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("id", "name") SELECT "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminReply" TEXT,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    CONSTRAINT "Comment_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("adminReply", "createdAt", "email", "id", "message", "name") SELECT "adminReply", "createdAt", "email", "id", "message", "name" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_FilterOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "filter_id" INTEGER NOT NULL,
    CONSTRAINT "FilterOption_filter_id_fkey" FOREIGN KEY ("filter_id") REFERENCES "Filter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FilterOption" ("id", "value") SELECT "id", "value" FROM "FilterOption";
DROP TABLE "FilterOption";
ALTER TABLE "new_FilterOption" RENAME TO "FilterOption";
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER,
    "rating" INTEGER,
    "category_id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "date_added" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("description", "discount", "id", "price", "rating", "title") SELECT "description", "discount", "id", "price", "rating", "title" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_ProductFilter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "filterOption_id" INTEGER NOT NULL,
    CONSTRAINT "ProductFilter_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductFilter_filterOption_id_fkey" FOREIGN KEY ("filterOption_id") REFERENCES "FilterOption" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductFilter" ("id") SELECT "id" FROM "ProductFilter";
DROP TABLE "ProductFilter";
ALTER TABLE "new_ProductFilter" RENAME TO "ProductFilter";
CREATE TABLE "new_ProductImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    CONSTRAINT "ProductImage_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductImage" ("id", "imageUrl") SELECT "id", "imageUrl" FROM "ProductImage";
DROP TABLE "ProductImage";
ALTER TABLE "new_ProductImage" RENAME TO "ProductImage";
CREATE TABLE "new_RelatedBlog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "blog_id" INTEGER NOT NULL,
    "relatedBlog_id" INTEGER NOT NULL,
    CONSTRAINT "RelatedBlog_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RelatedBlog_relatedBlog_id_fkey" FOREIGN KEY ("relatedBlog_id") REFERENCES "Blog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RelatedBlog" ("id") SELECT "id" FROM "RelatedBlog";
DROP TABLE "RelatedBlog";
ALTER TABLE "new_RelatedBlog" RENAME TO "RelatedBlog";
CREATE TABLE "new_Story" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profileImage" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "callMe" TEXT NOT NULL,
    "unknownImage" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Story_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Story" ("callMe", "description", "id", "profileImage", "unknownImage", "viewCount") SELECT "callMe", "description", "id", "profileImage", "unknownImage", "viewCount" FROM "Story";
DROP TABLE "Story";
ALTER TABLE "new_Story" RENAME TO "Story";
CREATE TABLE "new_StoryProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "story_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    CONSTRAINT "StoryProduct_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "Story" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StoryProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StoryProduct" ("id") SELECT "id" FROM "StoryProduct";
DROP TABLE "StoryProduct";
ALTER TABLE "new_StoryProduct" RENAME TO "StoryProduct";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "number" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "name", "profileImg") SELECT "email", "id", "name", "profileImg" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
