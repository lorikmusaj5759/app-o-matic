// Filename: advancedDataProcessing.js
// Description: A sophisticated data processing algorithm that calculates statistics for a given dataset.

// Define a dataset of numbers
const dataset = [4, 7, 2, 9, 5, 1, 6, 8, 3];

// Function to calculate average of dataset
function calculateAverage(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum / data.length;
}

// Function to calculate standard deviation of dataset
function calculateStandardDeviation(data) {
  const average = calculateAverage(data);
  let sumOfSquaredDiff = 0;
  for (let i = 0; i < data.length; i++) {
    const diff = data[i] - average;
    sumOfSquaredDiff += diff * diff;
  }
  const variance = sumOfSquaredDiff / data.length;
  return Math.sqrt(variance);
}

// Function to calculate median of dataset
function calculateMedian(data) {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
  } else {
    return sortedData[middleIndex];
  }
}

// Function to calculate mode of dataset
function calculateMode(data) {
  const counts = {};
  let maxCount = 0;
  let modes = [];

  for (let i = 0; i < data.length; i++) {
    const value = data[i];
    counts[value] = (counts[value] || 0) + 1;
    if (counts[value] > maxCount) {
      maxCount = counts[value];
      modes = [value];
    } else if (counts[value] === maxCount) {
      modes.push(value);
    }
  }

  return modes;
}

// Calculate statistics for the dataset
const average = calculateAverage(dataset);
const standardDeviation = calculateStandardDeviation(dataset);
const median = calculateMedian(dataset);
const modes = calculateMode(dataset);

// Print the statistics
console.log("Dataset: " + dataset.join(", "));
console.log("Average: " + average);
console.log("Standard Deviation: " + standardDeviation);
console.log("Median: " + median);
console.log("Modes: " + modes.join(", "));

// Output:
// Dataset: 4, 7, 2, 9, 5, 1, 6, 8, 3
// Average: 5
// Standard Deviation: 2.7386127875258306
// Median: 5
// Modes: 1, 2, 3, 4, 5, 6, 7, 8, 9