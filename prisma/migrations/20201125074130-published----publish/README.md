# Migration `20201125074130-published----publish`

This migration has been generated by nonissue at 11/25/2020, 12:41:30 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_words" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "published" BOOLEAN,
    "publish_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_words" ("id", "created_at", "updated_at", "title", "definition", "published") SELECT "id", "created_at", "updated_at", "title", "definition", "published" FROM "words";
DROP TABLE "words";
ALTER TABLE "new_words" RENAME TO "words";
CREATE UNIQUE INDEX "words.title_unique" ON "words"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201125073928-add-published--published-date..20201125074130-published----publish
--- datamodel.dml
+++ datamodel.dml
@@ -2,22 +2,22 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Word {
-  id            Int      @id @default(autoincrement())
-  createdAt     DateTime @default(now()) @map(name: "created_at")
-  updatedAt     DateTime @default(now()) @map(name: "updated_at")
-  title         String   @unique
-  definition    String
-  published     Boolean?
-  publishedDate DateTime @default(now()) @map(name: "created_at")
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now()) @map(name: "created_at")
+  updatedAt   DateTime @default(now()) @map(name: "updated_at")
+  title       String   @unique
+  definition  String
+  published   Boolean?
+  publishDate DateTime @default(now()) @map(name: "publish_date")
   @@map(name: "words")
 }
```

