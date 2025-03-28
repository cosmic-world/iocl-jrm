const fs = require('fs');
const path = require('path');

// Specify the folder containing the files
const folderPath = 'E:/TNSO-JRM/asanur'; // Replace with your folder path

// Function to rename files to lowercase and save their names
const renameFilesToLowercase = (folderPath) => {
  try {
    // Read all files in the folder
    const files = fs.readdirSync(folderPath);
    console.log('Files in the folder:', files); // Debugging: Log files in the folder

    const updatedFileNames = [];

    files.forEach((file) => {
      const oldPath = path.join(folderPath, file);
      const newFileName = file.replace(/\s+/g, '_').toLowerCase(); // Convert filename to lowercase
      const newPath = path.join(folderPath, newFileName);

      // Check if it's a file (not a folder)
      if (fs.statSync(oldPath).isFile()) {
        // Rename the file if needed
        if (oldPath !== newPath) {
          fs.renameSync(oldPath, newPath);
          console.log(`Renamed: ${file} → ${newFileName}`);
        }
        updatedFileNames.push(`'${newFileName}'`);
      }
    });

    // Create or overwrite a text file with the formatted file names
    const outputPath = path.join('src/destinationlist.txt');
    fs.writeFileSync(outputPath, updatedFileNames.join(',\n') + ',', 'utf8');

    console.log('Lowercased filenames have been saved to destinationlist.txt');
    return updatedFileNames;
  } catch (error) {
    console.error('Error processing files:', error);
    return [];
  }
};

// Call the function
renameFilesToLowercase(folderPath);
