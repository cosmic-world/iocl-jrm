const fs = require("fs");
const path = require("path");

const directory = "E:/iocl-jrm/public/asset"; // change this to your folder path

// Get all PDF files
const files = fs.readdirSync(directory).filter((f) => f.endsWith(".pdf"));

const customerMap = {};

// Group files by first 6 digits
for (const file of files) {
  const match = file.match(/^(\d{6})_/);
  if (match) {
    const customerId = match[1];
    if (!customerMap[customerId]) customerMap[customerId] = [];
    customerMap[customerId].push(file);
  }
}

// Delete compressed files if multiple PDFs exist for the same customer
for (const [customerId, fileList] of Object.entries(customerMap)) {
  if (fileList.length > 1) {
    for (const file of fileList) {
      if (file.includes("compressed")) {
        const filePath = path.join(directory, file);
        try {
          fs.unlinkSync(filePath);
        } catch (err) {
          console.error(`❌ Error deleting ${file}:`, err.message);
        }
      }
    }
  }
}

console.log("✅ Cleanup complete!");
