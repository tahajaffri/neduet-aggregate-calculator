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

    // Save current form content to restore later
    const formContent = document.body.innerHTML;

    // Modify the whole page content
    document.body.innerHTML = `
        <div class="result-wrapper">
            <p class="aggregate">Aggregate: <span id="aggregate-value">0</span></p>
            <button class="go-back-button" onclick="goBack()">Go Back</button>
        </div>
    `;

    document.body.classList.add('result-background');

    // Store the form content in a global variable
    window.previousFormContent = formContent;

    // Start counting effect for aggregate
    countUp('aggregate-value', 0, aggregate.toFixed(2), 1000);
}

function countUp(elementId, start, end, duration) {
    const steps = 50; // Number of steps for smoother animation
    const stepDuration = duration / steps; // Duration per step
    const increment = (end - start) / steps; // Amount to increment per step

    let current = start;
    let obj = document.getElementById(elementId);

    function step() {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            obj.innerHTML = end;
        } else {
            obj.innerHTML = current.toFixed(2);
            setTimeout(step, stepDuration); // Use setTimeout for smoother control
        }
    }

    step();
}

function goBack() {
    // Restore the original form content
    document.body.innerHTML = window.previousFormContent;

    // Remove the result background class
    document.body.classList.remove('result-background');

    // Re-attach the event listeners
    document.addEventListener('DOMContentLoaded', () => {
        const formInputs = document.querySelectorAll('#calculator-form input');
        formInputs.forEach(input => {
            input.addEventListener('input', updateProgress);
        });
    });
}
