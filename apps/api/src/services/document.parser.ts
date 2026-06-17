import fs from "fs/promises";
import path from "path";
import pdf from "pdf-parse";
import mammoth from "mammoth";
import { text } from "stream/consumers";

export async function extractText(
    filePath: string,
    originalName: string
): Promise<string> {
    const ext = path.extname(originalName).toLowerCase();
    const buffer = await fs.readFile(filePath)

    if (ext === ".pdf") {
        const data = await pdf(buffer)
        return data.text
    }

    if (ext === ".docx") {
        const result = await mammoth.extractRawText({ buffer });
        return result.value;
    }

    throw new Error(`Unsupported file type: ${text}`);
}