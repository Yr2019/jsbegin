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