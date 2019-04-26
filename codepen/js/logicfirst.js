/*jshint -W030*/
/*jshint -W014*/
/*jshint expr:true*/
/*
let firstTrainSpeed, secondTrainSpeed, distanceBetwTrain, time;

function receiveInfo(firstTrainSpeed, secondTrainSpeed, distanceBetwTrain) {
    firstTrainSpeed = +prompt('Какая скорость первого поезда км/час', '');
    while (isNaN(firstTrainSpeed) || firstTrainSpeed == "" || firstTrainSpeed == null) {
      firstTrainSpeed = +prompt('Какая скорость первого поезда км/час', '');
    }

    secondTrainSpeed = +prompt('Какая скорость второго поезда км/час', '');
    while (isNaN(secondTrainSpeed) || secondTrainSpeed == "" || secondTrainSpeed == null) {
      secondTrainSpeed = +prompt('Какая скорость второго поезда км/час', '');
    }

    distanceBetwTrain = +prompt('Начальное расстояние между поездами', '');
    while (isNaN(distanceBetwTrain) || distanceBetwTrain == "" || distanceBetwTrain == null) {
      distanceBetwTrain = +prompt('Начальное расстояние между поездами', '');
    }
}


function meetTime() {
    var m = receiveInfo();
    console.log(firstTrainSpeed, secondTrainSpeed, distanceBetwTrain);
  }

  meetTime();
// let firstTrainSpeed, secondTrainSpeed, distanceBetwTrain, time;

// function receiveInfo(firstTrainSpeed, secondTrainSpeed, distanceBetwTrain) {
//   firstTrainSpeed = +prompt('Какая скорость первого поезда км/час', '');
//   while (isNaN(firstTrainSpeed) || firstTrainSpeed == "" || firstTrainSpeed == null) {
//     firstTrainSpeed = +prompt('Какая скорость первого поезда км/час', '');
//   }

//   secondTrainSpeed = +prompt('Какая скорость второго поезда км/час', '');
//   while (isNaN(secondTrainSpeed) || secondTrainSpeed == "" || secondTrainSpeed == null) {
//     secondTrainSpeed = +prompt('Какая скорость второго поезда км/час', '');
//   }

//   distanceBetwTrain = +prompt('Начальное расстояние между поездами', '');
//   while (isNaN(distanceBetwTrain) || distanceBetwTrain == "" || distanceBetwTrain == null) {
//     distanceBetwTrain = +prompt('Начальное расстояние между поездами', '');
//   }
// }

// // receiveInfo(firstTrainSpeed, function() {
// //   alert('Second f');
// //   time = distanceBetwTrain / (firstTrainSpeed + secondTrainSpeed);
// //   console.log(time);
// // });

*/

// Имеются два поезда
// Напишите функцию которая будет считать через какое время два поезда встретятся.
// Предположим, что поезда движутся между двумя точками вдоль одного отрезка на пути друг к другу.
// Функция должна учитывать скорость движения поездов и начальное расстояние между поездами.

let firstTrainSpeed, secondTrainSpeed, distanceBetwTrain, time;

function train(firstTrainSpeed, secondTrainSpeed, distanceBetwTrain) {
  firstTrainSpeed = +prompt('Какая скорость первого поезда км/час', '');
  while (isNaN(firstTrainSpeed) || firstTrainSpeed == "" || firstTrainSpeed == null) {
    firstTrainSpeed = +prompt('Какая скорость первого поезда км/час', '');
  }

  secondTrainSpeed = +prompt('Какая скорость второго поезда км/час', '');
  while (isNaN(secondTrainSpeed) || secondTrainSpeed == "" || secondTrainSpeed == null) {
    secondTrainSpeed = +prompt('Какая скорость второго поезда км/час', '');
  }

  distanceBetwTrain = +prompt('Начальное расстояние между поездами', '');
  while (isNaN(distanceBetwTrain) || distanceBetwTrain == "" || distanceBetwTrain == null) {
    distanceBetwTrain = +prompt('Начальное расстояние между поездами', '');
  }
  let t = distanceBetwTrain / (firstTrainSpeed + secondTrainSpeed);
  time = t.toFixed(2);
  alert('Время через которое поезда встретятся : ' + time + ' чac');
  console.log(time);
}

train();