    // Define the function that will perform the action
// document.addEventListener("keydown", (e) => {
//     debugger;
//     const isProseMirror = e.target.classList.contains('ProseMirror');
//     // if (isProseMirror) {
//     //     console.log("We have executed the ifProseMirror")
//     //     e.preventDefault();
//     //     e.stopPropagation();
//     // }
//     if (true) {
//         //isProseMirror && e.key === 'Enter' && !e.ctrlKey
//         // Prevent the default "Enter" behavior
//         debugger;
//         e.preventDefault();
//         e.stopPropagation();
//     } else if (isProseMirror && e.key === 'Enter' && e.ctrlKey) {
//         // Implement the desired "Ctrl+Enter" behavior here
//         console.log("Ctrl+Enter pressed");
//         // You can trigger a form submission, insert a new line, etc.
//       }
// }, {capture: true})

let isProseMirror;




window.addEventListener("keydown", (e) => {
    console.log(`The current key is ${e.key}`)
    if (e.key === "a") {
        
        console.log("pressed enter through A");
        //debugger;
    }
    console.log("capturing a keydown!");
    if (e.key === "Enter" && !(e.shiftKey || e.metaKey || e.ctrlKey)) {
        e.stopImmediatePropagation();
        e.preventDefault();
        isProseMirror = document.querySelector('.ProseMirror');
        console.log(isProseMirror);
        const enterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            bubbles: true,
            shiftKey: true
        });
        isProseMirror.dispatchEvent(enterEvent);
    }
}, { capture: true });

//Add an observer:
// const observer = new MutationObserver((mutations) => {
//     debugger;
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('Mutation source:', mutations);
//     debugger;
// });

// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });

// // const isProseMirror = document.querySelector('.ProseMirror');
// // isProseMirror.contentEditable = 'true';
// // console.log("disabled isProseMirror!");



// //   const debugButton = document.createElement('button');
// //   debugButton.textContent = 'Simulate Enter';
// //   document.body.appendChild(debugButton)

// //   debugButton.onclick = () => {
    
// //   }

// confirm("we are here")
console.log("button was pressed")
const enterEvent = new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    bubbles: true
});
// debugger;
