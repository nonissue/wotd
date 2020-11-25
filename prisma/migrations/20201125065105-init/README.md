# Migration `20201125065105-init`

This migration has been generated by nonissue at 11/24/2020, 11:51:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "words" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "definition" TEXT NOT NULL
)

CREATE UNIQUE INDEX "words.title_unique" ON "words"("title")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201125065105-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,21 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Word {
+  id         Int      @id @default(autoincrement())
+  createdAt  DateTime @default(now()) @map(name: "created_at")
+  updatedAt  DateTime @default(now()) @map(name: "updated_at")
+  title      String   @unique
+  definition String
+
+  @@map(name: "words")
+}
```

