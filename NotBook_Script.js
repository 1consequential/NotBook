// function saveDocument() {
//     const content = textarea.value;
//     window.localStorage.setItem('NotBookSaveData', content);
// }
//
// function loadDocument() {
//     const content = window.localStorage.getItem('NotBookSaveData');
//     if (content) {
//         textarea.value = content;
//     }
// }
//
// window.onload = loadDocument;
// window.onbeforeunload = saveDocument;

// IndexedDB, opens it if exists, creates if not.
window.addEventListener('load', () => {
  const div = document.querySelector('div');
  let db;

  // Open IndexedDB, which is aptly titled "NotBook_IndxDB".
  const request = indexedDB.open('NotBook_IndxDB', 1);

  request.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains('notes')) {  //save under "notes"
      db.createObjectStore('notes', { keyPath: 'id' });
    }
  };

  request.onsuccess = (event) => {
    db = event.target.result;

    // Load saved data, please.
    const transaction = db.transaction(['notes'], 'readonly');
    const store = transaction.objectStore('notes');
    const getRequest = store.get(1);
    getRequest.onsuccess = () => {
      if (getRequest.result) {
        div.textContent = getRequest.result.content;
      }
    };
  };

  // Save data before unloading
  window.addEventListener('beforeunload', () => {
    const transaction = db.transaction(['notes'], 'readwrite');
    const store = transaction.objectStore('notes');
    store.put({ id: 1, content: div.textContent });
    console.log(db.transaction);
  });
});


const textbox = document.getElementById('textbox'); //Get the 




console.log("NotBook version 0.12.1");


//IGNORE! I am still a noob at JS, so this is the suffering I have to deal with. I'll use WASM from here on out.



// // Pure trash from Stackoverflowm
// // function parseMarkdown(text) {
// //     return text
// //         .replace(/\*(.*?)\*/g, "<b>$1</b>")  // Bold (*bold*)
// //         .replace(/_(.*?)_/g, "<i>$1</i>");   // Italics (_italic_)
// // }
// // 
// // document.getElementById('div').innerHTML.parseMarkdown;
// 
// // function parse_custom_tags(text) {
// // 	//MAKE IT BOLD YOU F****R.
// // 	text = text.replace /~(.*?)~/, "<b>$1</b>");
// // 	return text;
// // 	let i_text = div;
// // 	let p_text = parse_custom_tags(i_text);
// // 	document.getElementById("div").innerHTML = p_text;
// // 	
// // }
// // 
// // // Example usage
// // //const inputText = "*Bold* and _italic_ text.";
// // document.getElementById('div').innerHTML;
// // 
// 
// function parseMarkdown(text) {
//   // Convert headings
//   text = text.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
//   text = text.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
//   text = text.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
//   text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
//   text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
//   text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');
// 
//   // Convert bold text
//   text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
//   text = text.replace(/__(.*?)__/gim, '<strong>$1</strong>');
// 
//   // Convert italic text
//   text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');
//   text = text.replace(/_(.*?)_/gim, '<em>$1</em>');
// 
//   // Convert links
//   text = text.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
// 
//   // Convert line breaks
//   text = text.replace(/\n$/gim, '<br />');
// 
//   return text.trim();
// }
// 
// // Example usage
// const markdownText = div;
// 
// const htmlText = parseMarkdown(div);
// console.log(div);
/////AI garbage... I'll make it myself.
// // Get the div with id "textbox"
// const textbox = document.getElementById('textbox');
// 
// // Listen for keydown event
// textbox.addEventListener('keydown', function(event) {
//   // Check if the Enter key (key code 13) is pressed
//   if (event.key === 'Enter') {
//     event.preventDefault(); // Prevent the default behavior of the Enter key (which would be to add a <div> or <p>)
// 
//     // Create a new <br> element (this creates a new line)
//     const lineBreak = document.createElement('br');
//     
//     // Insert the <br> into the div at the cursor position
//     const selection = window.getSelection();
//     const range = selection.getRangeAt(0);
//     range.deleteContents();  // Optional: Remove any selected text (if any)
//     range.insertNode(lineBreak);  // Insert the <br> element
//     
//     // Optionally, move the cursor to the next line
//     range.setStartAfter(lineBreak);
//     range.setEndAfter(lineBreak);
//     selection.removeAllRanges();
//     selection.addRange(range);
//   }
// });
