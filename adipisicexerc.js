const modal = Object.freeze({
  open: false, // Boolean indicating if the modal is open or closed
  title: 'Default Title', // Default title if often non-empty
  body: 'Default Body', // Default body content if often non-empty
  buttons: [], // Array of buttons; consider defining button structure if static
  // Add methods to handle modal actions if necessary
  toggleOpen() {
    this.open = !this.open;
  },
  // ... other methods like setTitle, setBody, addButton, etc.
});

// Usage example:
// modal.toggleOpen(); // To toggle the modal's open state
