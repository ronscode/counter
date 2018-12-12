axios
    .get('/api/value')
    .then(function(response) {
        document.getElementById('value').innerHTML = response.data; 

    });

function increment() {
   axios.post('/api/increment').then(function(response) {
    document.getElementById('value').innerHTML = response.data; 

   });
}

function decrement() {
   axios.post('/api/decrement').then(function(response){
    document.getElementById('value').innerHTML = response.data; 
   });
}










//// JORDANS CODE: 

// var increaseCounterButton = document.getElementById(‘increase’);
// var decreaseCounterButton = document.getElementById(‘decrease’);
// var counter = document.getElementById(‘counter’);
// count = 0; // This variable holds the current value of the counter!

// increaseCounterButton.addEventListener(‘click’, function() {
//    axios.get(‘/api/increment’)
//    .then((res) => {
//        console.log(res);
//        count = count + res.data.count;
//        counter.innerHTML = count;
//    })
//    .catch((err) =>
//        console.log(err));
// });

// decreaseCounterButton.addEventListener(‘click’,function(){
//    axios.get(‘/decrement’)
//    .then((res)=>{
//    count = count - res.data.count;
//    counter.innerHTML = count;
//    })
//    .catch((err) =>
//        console.log(err));
// });




// console.log(‘Running’)