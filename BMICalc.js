

function BMICalc(weight, height) {
    if (height <= 0) {
        throw new Error("Height must be greater than zero.");
    }
    const bmi = weight / (height * height);
    return parseFloat(bmi.toFixed(2));
}


BMICalc(70, 1.75); // Example usage

console.log(BMICalc(70, 1.75)); // Output: 22.86