export const env = {
  port: Number(process.env.PORT) || 4000,
  devUserId: process.env.DEV_USER_ID!,
  uploadDir: process.env.UPLOAD_DIR || "uploads",
  databaseUrl: process.env.DATABASE_URL!,
};