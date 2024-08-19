function nonPosition(attribute, model, options) {
    // Some logic to handle the attribute, model, and options
    console.log(`Attribute: ${attribute}`);
    console.log(`Model: ${JSON.stringify(model)}`);
    console.log(`Options: ${JSON.stringify(options)}`);
}

// Example usage:
const model = { id: 1, name: 'Sample Model' };

nonPosition('size', model, {
    width: 100,
    height: 200,
    unit: 'px'
});
