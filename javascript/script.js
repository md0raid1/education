// alert('Я JavaScript')
// let admin;
// let AdminName = 'John';
// admin = AdminName;
// alert(admin)
// let OurPlanetName;
// let CurrentUserName;
// let userName;
// userName = 'Andrey';
// alert(`hello ${1}`);
// alert(`hello ${"userName"}`);
// alert(`hello ${userName}`);
// let userName = prompt('Как тебя зовут?');
// alert(`Тебя зовут ${userName}`);

// JavaScript if/else constuction

// let jsName = prompt('Какое "официальное" название JavaScript?', '');
//   if (jsName != 'ECMAScript') {
//     alert('Не знаете?\n"ECMAScript"!')
//   }
//   else {
//     alert('Правильно!')
//   }

// let myNum = prompt('Введите число', '');
// if (+myNum > 0) {
//   alert(1)
// }
// else if (+myNum == 0) {
//   alert(0)
// }
// else {
//   alert(-1)
// }

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много'
// }

// let result = (a + b < 4) ? 'Мало': 'Много';

// let message;
// if (login == 'Сотрудник') {
// message = 'Привет';
// } else if (login == 'Директор') {
// message = 'Здравствуйте';
// } else if (login == '') {
// message = 'Нет логина';
// } else {
// message = '';
// }

// let message = login = prompt('Введите логин', '')
// login == 'Сотрудник' ? message = ('Привет') :
// login == 'Директор' ? message = ('Здравствуйте') :
// login == '' ? message = ('Нет логина') :
// message = ''
// alert (message)

// Логические операторы "||", "&&", "!"

// let age = prompt('How old are you?', '');

// if (age >= 14 && age <=90) {
//   alert('Ok');
// } else {
//   alert('out of range');
// }

// if (age <= 14 || age >= 90) {
//   alert('OK')
// } else {
//   alert('out of range')
// }

// if (!(age >= 14 && age <= 90)) {
//   alert('OK')
// } else{
//   alert('out of range')
// }

// if (-1 || 0) {
//   console.log('first')
// }
// if (-1 && 0) {
//   console.log('second')
// }
// if (null || -1 && 1) {
//   console.log('third')
// }



// let loginName = prompt('Введите логин', '')

// if (loginName == 'Admin') {
//   let password = prompt('Введите пароль', '');
//   if (password == 'Я главный') {
//     alert('Здравствуйте')
//   }
//   else if (password == null || password == '') {
//     alert('Отменено')
//   }
//   else {
//     alert('Неверный пароль')
//   }
// } else if (loginName == null || loginName == '') {
//   alert('Отменено')
// } else {
//   alert('Я вас не знаю')
// }