const fs = require('fs');
const path = require('path');

// Specify the folder containing the HTML files
const folderPath = `public/asset/JRM_HTML_FILE/CoimbatoreTL`;

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading the folder:', err);
    return;
  }

  // Iterate through each file
  files.forEach((file) => {
    const oldPath = path.join(folderPath, file);

    // Check if the file is an HTML file
    if (path.extname(file).toLowerCase() === '.html') {
      const newPath = path.join(folderPath, file.toLowerCase()); // Convert filename to lowercase

      // Rename the file
      fs.rename(oldPath, newPath, (renameErr) => {
        if (renameErr) {
          console.error(`Error renaming file ${file}:`, renameErr);
        } else {
          console.log(`Renamed: ${file} -> ${file.toLowerCase()}`);
        }
      });
    }
  });
});
