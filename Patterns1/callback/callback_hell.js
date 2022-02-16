const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

// Read and reverse contents of text files in a directory
readdir(inbox, callbackDirectorio);  

function callbackDirectorio (error,files) {
  if (error) {
      console.log("Error: Folder inaccessible");
  }
  files.forEach(archivo)
};

const archivo = file => {
        const error ='';
        readFile(join(inbox, file), "utf8", (error, data) => {
          if (error) {
            console.log("Error: File error");
          }  
          escribeArchivo(data, file)    
        });  
}

function escribeArchivo(data, file) {
  writeFile(join(outbox, file), reverseText(data), ErrorEscribeArchivo);
  console.log(`${file} was successfully saved in the outbox!`);
};

function ErrorEscribeArchivo(error) {
    if (error) {
        console.log("Error: File could not be saved!");
    }
};
