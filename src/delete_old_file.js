const fs = require("fs");
const path = require("path");

const folderA = "E:/TNSO-JRM/sankari1"; // Path to Folder-A
const folderB = "E:/iocl-jrm/public/asset"; // Path to Folder-B

// Get list of PDF files from both folders
const filesA = fs
  .readdirSync(folderA)
  .filter((f) => f.toLowerCase().endsWith(".pdf"));
const filesB = fs
  .readdirSync(folderB)
  .filter((f) => f.toLowerCase().endsWith(".pdf"));

// Convert Folder-A filenames to a Set for fast lookup (case-insensitive)
const fileSetA = new Set(filesA.map((f) => f.toLowerCase()));

let deletedCount = 0;

// Loop through Folder-B files and delete if match exists in Folder-A
for (const file of filesB) {
  if (fileSetA.has(file.toLowerCase())) {
    const filePath = path.join(folderB, file);
    try {
      fs.unlinkSync(filePath);
      console.log(`🗑️ Deleted: ${file}`);
      deletedCount++;
    } catch (err) {
      console.error(`❌ Error deleting ${file}:`, err.message);
    }
  }
}

console.log(`✅ Cleanup complete! Deleted ${deletedCount} matching PDF(s).`);
