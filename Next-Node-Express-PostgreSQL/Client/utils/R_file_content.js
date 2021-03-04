export default function Parse(file) {
  console.log('called');
  console.log(file); // file is a blob
  var reader = new FileReader();
  reader.onload = (e) => {
      console.log('read the blob');
      const content = e.target.result; // This is the content of the file
      console.log(content);
      return content;
    };
    reader.readAsText(file);
}