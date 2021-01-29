// alert("Я JavaScript!")
// ;[1, 2].forEach(alert)
// alert("Сейчас будет ошибка")
// ;[(1, 2)].forEach(alert)
// let admin
// let name = "Джон"
// admin = name
// alert(admin)
// let ourPlanet = "Земля"
// let currentSiteVisitor = "Командос"
// alert(ourPlanet)
// alert(currentSiteVisitor)
// let name = prompt("Name", ["Rick"])
// let age = prompt("Age", ["25"])
// alert(`My name is ${name}, i born in ${2020 - age} year`)
// let isBoss = confirm(`${name}, ты здесь главный?`)

// let text = "12.5"
// console.log(typeof text)
// let num = Number(text)
// console.log(typeof num)

// let x = -2
// console.log(2 + x)

// let a = prompt("Первое число?", 1)
// let b = prompt("Второе число?", 2)

// alert(+a + +b) // 12

// let user = {
//   firstname: "Anrey",
//   lastname: "Lysenko",
//   age: 24,
//   "nice man": true,
//   "wife name": "Alina",
// }
// user.isAdmin = false
// delete user.lastname
// user.firstname = "AndreiL"
// let key = prompt("Что вы хотите узнать о Андрее")
// for (let prop in user) console.log(user[prop])

// let user = {}
// user.name = "John"
// user.surename = "Smith"
// user.name = "Pete"
// delete user.name
// console.log(user)

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// }
// let sum = salaries.John + salaries.Ann + salaries.Pete
// console.log(sum)

// function starWors() {
//   let command = "mandalorian and " + myName
//   alert(command)
// }
// let myName = "babyYoda"
// function starWors1() {
//   let command = "mandalorian without " + myName
//   alert(command)
// }
// starWors1()

// function new3(testType = metod(), testerName = name1()) {
//   alert(testerName + " будет тестировать методом " + testType)
// }
// function name1() {
//   let res1 = prompt("Кого поставим на тестирование?")
//   return res1
// }
// function metod() {
//   let res2 = prompt("Каким методом будем тестировать сайт?")
//   return res2
// }
// new3()

// function checkAge(age) {
//   if (age > 18) {
//     return true
//   } else {
//     return confirm("А родители разрешили?")
//   }
// }

// let age = prompt("Сколько вам лет?", 18)

// if (checkAge(age)) {
//   alert("Доступ получен")
// } else {
//   alert("Доступ закрыт")
// }

// let b2 = prompt("В какой половине дня родился Андрюха, AM или PM?")
// if (b2 == "PM") {
//   alert("Красавчик, ты все знаешь!")
// } else {
//   alert("Ты тупой обмудень")
// }

// let nameLang = prompt("Какое «официальное» название JavaScript?")
// if (nameLang === "ECMAScript") {
//   alert("Верно!")
// } else {
//   alert("Не знаете? ECMAScript!")
// }

// let num = prompt(
//   "Введите любое число и я выведу Вам ответ = 1, если значение больше нуля; -1, если значение меньше нуля,0, если значение равно нулю."
// )
// if (num > 0) {
//   alert(1)
// } else if (num < 0) {
//   alert(-1)
// } else {
//   alert(0)
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// let a = prompt("Введи число")
// let b = prompt("Введи еще число")
// // let result
// result = a + b < 4 ? alert("Мало") : alert("Много")

// let messageт"
// } else if (login == "Директор") {
//   message = "Здравствуйте"
// } else if (login == "") {
//   message = "Нет логина"
// } else {
//   message = ""
// }

// if (login == "Сотрудник") {
//   message = "Приве

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue

//     alert(i) // простое
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false
//   }
//   return true
// }

// function search(param1, param2) {
//   alert(+param1 + +param2)
// }
// search(5, 7)

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }
// let user = {
//   name: "john",
//   age: 25,
//   wife: true,
// }
// let userclone = {}
// for (let key in user) {
//   userclone[key] = user[key]
// }
// let userWork = {
//   rate: 2.5,
//   time: 160,
//   boss: true,
// }
// let userFamily = {
//   childs: "douther",
//   parents: "mather and father",
// }
// let userAll = {}
// Object.assign(userAll, [user, userWork, userFamily])
// let clone = Object.assign({}, userAll)
// console.log(clone)
// console.log(typeof userAll)

// let weather = "sun"
// let age = 10
// if (age <= 14 || age >= 90) {
//   alert("Hi")
// }
// function singIn() {
//   let login = "Админ"
//   let pass = "Я Главный"
//   let loginField = prompt("Кто там?")
//   if (loginField == login) {
//     let passField = prompt("Пароль?")
//   } else if (loginField == " ") {
//     alert("Я вас не знаю")
//   } else if (loginField == null) {
//     alert("Отмена")
//   } else if (!(loginField == login)) {
//     alert("Я вас не знаю")
//   }
//   if (passField == pass) {
//     alert("Здравствуйте")
//   } else if (passField == " ") {
//     alert("Неверный пароль")
//   } else if (passField == null) {
//     alert("Отмена")
//   } else if (!(passField == pass)) {
//     alert("Неверный пароль")
//   }
// }
// singIn()

// let height = null
// let width = null

// let area = height ?? 100 * width ?? 50

// alert(area)

// let login = "Андрей"
// let pass = "пароль"
// let loginField = prompt("Введи логин")
// switch (loginField) {
//   case login:
//     let passfield = prompt("Введи пароль")
//     switch (passfield) {
//       case pass:
//         alert("Здаров!")
//         break
//       case " ":
//         alert("Фигня пароль")
//         break
//       case null:
//         alert("Отменено")
//         break
//       default:
//         alert("Некорректный пароль")
//     }
//     break
//   case " ":
//     alert("Ты кто такой, Уася...")
//     break
//   case null:
//     alert("Охрана-отмена")
//     break
//   default:
//     alert("Ты кто такой, Уася......")
// }

// let user = {
//   name: "Antoha",
//   sayHi() {
//     alert("Даров, меня зовут " + this.name)
//   },
// }
// user.sayHi()

// let user1 = {
//   name: "karl",
// }
// let user2 = {
//   name: "Jake",
// }
// function hi() {
//   alert(this.name)
// }
// user1.f = hi
// user2.f = hi
// user2.f()
// user1.f()
// console.log(hi())
// let user = {
//   name: "Джон",
//   go: function () {
//     alert(this.name)
//   },
// }
// let z1 = Symbol.for("p1")
// Symbol.for("p2")
// console.log(Symbol.keyFor(z1))
// let name = Symbol.keyFor(z1)
// alert(name)
// console.log(z1)
// let user = {
//   name: "Mike",
//   age: 25,
//   WifeName: "Robert",
//   toString() {
//     return this.age
//   },
// }
// alert(user)
// let nn = 2.438
// console.log(nn.toFixed(2))
// alert((9999999999999999).toFixed())
// let cat = 0.5 * "cat"
// console.log(isNaN(cat))
// let num = 2
// let powNum = Math.pow(num, 55)
// console.log(powNum)
// console.log(parseInt("cat out", 2))
// let num = 550
// console.log(num.toString(16))
// let con = "pipe and cace id'
