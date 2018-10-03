
// var config = {
//     apiKey: "AIzaSyD6EP8ndAJczj4cQ7JsotaaRyEYjtroJU8",
//     authDomain: "train-schedule-2921b.firebaseapp.com",
//     databaseURL: "https://train-schedule-2921b.firebaseio.com",
//     projectId: "train-schedule-2921b",
//     storageBucket: "train-schedule-2921b.appspot.com",
//     messagingSenderId: "166955711536"
//   };
//   firebase.initializeApp(config);

//   var database = firebase.database();
//   console.log(database.ref());

//   $('#sendit').text("this")

  
//   $('#sendit').on("click", function(event){
//     console.log("this");
//     event.preventDefault();

//     var TrainN = $('#train-nameI').val().trim();
//     var TrainD = $('#train-destinationI').val().trim();
//     var TrainT = $('#train-timeI').val().trim();
//     var TrainF = $('#train-frequencyI').val().trim();
//     console.log(TrainN);

//       database.ref().set({
//           Train_Name: TrainN,
//           Train_Destination: TrainD,
//           Train_Time: TrainT,
//           Train_Frequency: TrainF
//       })
//       console.log(TrainN);
//   })