let fruits: Array<string> = ['apple', 'pear', 'banana'];
let food: Array<string> = ['pizza', 'burger', 'potato'];
let edibles: Array<string> = [...fruits, ...food];

console.log(`Edibles: ${edibles}`);

// const edibles = [
//   {
//     edible: 'pizza',
//     isVegan: false,
//   },
//   {
//     edible: 'burger',
//     isVegan: false,
//   },
//   {
//     edible: 'potato',
//     isVegan: true,
//   },
//   {
//     edible: 'fruits',
//     isVegan: true,
//   },
// ];

// console.log(
//   edibles.filter(function (item) {
//     return item.isVegan;
//   })
// );

// console.log(edibles.filter((item) => !item.isVegan));
