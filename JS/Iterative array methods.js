/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно преривати цикл
 */

/*
 * Приклад 1
 */

// const numbers = [5, 10, 15, 20, 25];
// let total = 0
// numbers.forEach(function (number) { 
//     total += number
// })
// console.log(total);
// console.log(numbers);

/*
 * Приклад 2
 */

// const names = ['Maria', 'Lada', 'Nastya'];
// let oklyk = []
// names.forEach(function (name) { 
//     oklyk.push(name + '!')
// })
// console.log(oklyk);

/*
 * Приклад 3
 */

// const users = [{
//     name: "John",
//     age: 25,
//     city: "New York",
//     occupation: "Software Engineer"
//   },
//   {
//     name: "Emily",
//     age: 32,
//     city: "Los Angeles",
//     occupation: "Marketing Manager"
//   },
//   {
//     name: "Mike",
//     age: 40,
//     city: "Chicago",
//     occupation: "Accountant"
//   },];

//   users.forEach(function (user) { 
//     console.log(user.city);
//   });

  /*
 * Array.prototype.filter()
 * - Поелементо перебирає оригінальний масив
 * - Повертає новий масив (з елементами або пустий)
 * - Додає в повертаємий масив елементи які задовольняють умови коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */
  // const numbers = [5, 10, 15, 20, 25];
  // const filterNumbers = numbers.filter(function(number){})
  //   console.log()

  const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
  ];

  /*
 * Отримуємо масив всіх гравців онлайн
 */
// const isOnline = players.filter(function(player){
//   return player.online
// })
// console.log(isOnline);

/*
 * Отримуємо масив всіх гравців офлайн
 */

// const isOfline = players.filter(function(player){
//   return !player.online
// })
// console.log(isOfline);

/*
 * Отримуємо масив всіх хардкорних гравців з часом більше 250
 */

// const hardcorePlayers = players.filter(function(player){
//   return player.timePlayed > 250
// })
// console.log(hardcorePlayers);


/*
 * Array.prototype.find()
 * - Поелементо перебирає оригінальний масив
 * - Повертає перший елемент який задовольняє умову пошуку або undefined
 */

// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(function(number){
//   return number === 15
// })
// console.log(number);

/*
 * Шукаємо гравця по id
 */
// const playerId = 'player-1'
// const findIdPlayer = players.find(function(player){
//   return player.id === playerId
// })
// console.log(findIdPlayer);

/*
 * Шукаємо гравця по імені
 */

// const nameToFind = 'Chelsy'
// const findNamePlayer = players.find(function(player){
//   return player.name === nameToFind
// })
// console.log(findNamePlayer);

/*
   * Array.prototype.every()
   * - Поелементо перебирає оригінальний масив
   * - Повертає true якщо всі елементи масива задовільняють умову
   */

// const anyHardcorePlayers = players.every(function(hardcore){
//   return hardcore.timePlayed >= 100
// })
// console.log(anyHardcorePlayers);

/*
   * Array.prototype.some()
   * - Поелементо перебирає оригінальний масив
   * - Повертає true якщо хоча б один елемент масива задовільняє умову
   */

// const isAnyOnline = players.some(function(player){
//   return player.online 
// })
// console.log(isAnyOnline);

/*
 * Array.prototype.reduce()
 * - Поелементо перебирає оригінальний масив
 * - Повертає що завгодно 🤯
 * - Замінює все на світі, але використовувати потрібно з розумом
 */

// const numbers = [5, 10, 15, 20, 25];

// let totals = 0;

// numbers.forEach(function (num){
//   totals += num
// })

// const total = numbers.reduce(function(totalSum, number){
//   console.log('number: ', number);
//   console.log('totalSum: ', totalSum);
//   return totalSum += number
// }, 0);

// console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const salaryMas = Object.values(salary);
const total = salaryMas.reduce(function(totalSum, salary) {
return totalSum + salary;
}, 0);

// console.log(total);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce(function (tags, tweet){
  tags.push(...tweet.tags)
  return tags
}, [])
console.log(allTags);

const name = ['Maria', 'Nastya', 'Alla', 'Kostya'];
const totals = 0;

const salary2 = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

return salary2;