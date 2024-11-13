window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !(e.shiftKey || e.metaKey || e.ctrlKey)) {
        e.stopImmediatePropagation();
        e.preventDefault();
        isProseMirror = document.querySelector('.ProseMirror');
        
        const enterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            bubbles: true,
            shiftKey: true
        });
        isProseMirror.dispatchEvent(enterEvent);
    }
}, { capture: true });