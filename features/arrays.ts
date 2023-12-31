const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incomptible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
})

// Flexible Types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('10-20-23')