window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !(e.shiftKey || e.metaKey || e.ctrlKey)) {
        const activeElement = document.activeElement;
        e.stopImmediatePropagation();
        e.preventDefault();

        if (activeElement.tagName.toLowerCase() === 'textarea') {
            // For textareas, manually create the new line
            const start = activeElement.selectionStart;
            const end = activeElement.selectionEnd;
            const value = activeElement.value;
            activeElement.value = value.substring(0,start) + '\n' + value.substring(end);
            activeElement.selectionStart = activeElement.selectionEnd = start + 1;
        } else {
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                bubbles: true,
                shiftKey: true
            });
            activeElement.dispatchEvent(enterEvent);
        }
    }
}, { capture: true });