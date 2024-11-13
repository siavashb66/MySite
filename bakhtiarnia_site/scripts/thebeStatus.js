// Updated colors
const CONNECTED_COLOR = '#80c080'; // Softer green
const CONNECTING_COLOR = '#f5d17a'; // Warm, muted yellow

// Start observing function
const startObserving = () => {
    const targetNode = document.querySelector('.thebe-status-field.thebe-status-session-ready');
    const statusElem = document.getElementById('status');

    if (!targetNode) {
        setTimeout(startObserving, 500);
        return;
    }

    const updateStatus = () => {
        const isConnected = targetNode.textContent.trim() === 'Kernel Connected';
        const bgColor = isConnected ? CONNECTED_COLOR : CONNECTING_COLOR;
        const text = isConnected ? 'Connected' : 'Connecting';

        [statusElem, document.querySelector('.thebe-status')].forEach(el => {
            el.style.backgroundColor = bgColor;
            if (el === statusElem) el.textContent = text;
        });
    };

    const observer = new MutationObserver(updateStatus);
    observer.observe(targetNode, { characterData: true, childList: true, subtree: true });
    updateStatus();
};

startObserving();
