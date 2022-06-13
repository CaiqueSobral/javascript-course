('use strict');
/////////////////////////////////////////////////////////////////////////////
/////////////////////////// Coding Challenge #1 /////////////////////////////

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs

4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const ages = [5, 2, 4, 1, 15, 8, 3];

const excludeDogsBelow18 = function (ages) {
  const dogAge = ages.filter(function (age) {
    return age >= 18;
  });

  return dogAge;
};

const calculateAverage = function (arr) {
  return arr.reduce((acc, age) => acc + age, 0) / arr.length;
};

const calcAverageHumanAge = function (ages) {
  const dogAge = ages.map(function (age) {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  const dogAgeAbove18 = excludeDogsBelow18(dogAge);
  const avarageAge = calculateAverage(dogAgeAbove18);

  return `The average age of all adult dogs is ${avarageAge}`;
};

console.log(calcAverageHumanAge(ages));
