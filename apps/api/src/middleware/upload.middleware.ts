import multer from "multer";
import path from "path";
import { env } from "../config/env";

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, env.uploadDir);
    },
    filename: (_req, file, cb) => {
        cb(null, env.uploadDir);
    }
})

export const uploadMIddleware = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        const allowed = [".pdf", ".docx"];
        const ext = path.extname(file.originalname).toLowerCase()

        if (!allowed.includes(ext)) {
            cb(new Error("Only PDF and DOCX files are allowed"));
            return;
        }

        cb(null, true);
    }
})