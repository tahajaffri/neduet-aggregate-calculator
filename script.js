document.addEventListener('DOMContentLoaded', () => {
    // No need to update progress, as progress bar is removed
});

function calculate() {
    // Get input values
    const fscPercentage = parseFloat(document.getElementById('fsc-percentage').value) || 0;
    const entryTestMarks = parseFloat(document.getElementById('entry-test-marks').value) || 0;

    // Calculate aggregate
    const fscComponent = fscPercentage * 0.50;
    const entryTestComponent = entryTestMarks * 0.50;

    const aggregate = fscComponent + entryTestComponent;

    // Display results
    document.getElementById('aggregate-value').innerText = aggregate.toFixed(2);
}
