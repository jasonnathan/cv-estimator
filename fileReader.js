import fs from 'fs';
import pdf from 'pdf-parse';
import path from 'path';
import os from 'os';

function readFile(filePath) {
  // Replace ~ with the home directory path
  if (filePath.startsWith('~')) {
    filePath = path.join(os.homedir(), filePath.slice(1));
  }

  // Convert to absolute path
  filePath = path.resolve(filePath);

  return new Promise((resolve, reject) => {
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        pdf(data).then(function(data) {
          resolve(data.text);
        }).catch(function(error){
          reject(error);
        });
      });
    } else {
      reject(new Error(`File not found: ${filePath}`));
    }
  });
}

export { readFile };
