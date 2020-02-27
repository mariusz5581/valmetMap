function InitializeEvents() {
    if ('alt' in window) {
        alt.on('ToggleBlock', ToggleBlock);
    }
}