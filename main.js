
const  setOfWords = [
    "It is a long established fact that a reader will be distracted" ,
    "There are many variations of passages of Lorem Ipsum available" , 
    "Contrary to popular belief, Lorem Ipsum is not simply random text" ,
    "If you are going to use a passage of Lorem Ipsum" ,
    "This book is a treatise on the theory of ethics" ,
    "Lorem Ipsum is therefore always free from repetition"
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');

let startTime , endTime;

const   playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = () =>{
let date = new Date();
endTime = date.getTime();
let totalTime = ((endTime - startTime)/ 1000);

console.log(totalTime);

let totalStr = typeWords.value;
let wordCount = wordCounter(totalStr);

let speed = Math.round((wordCount / totalTime ) * 60);

let finalMsg = " You Typed At " +speed+ " Words Per Minutes ";
finalMsg += compareWord(msg.innerText, totalStr);
msg.innerText = finalMsg;
}

const compareWord = (str1, str2) =>{
let words1 = str1.split(" ");
let words2 = str2.split(" ");
let cnt = 0;

words1.forEach(function(item, index){
    if(item == words2[index]){
        cnt++;
    }
})

let errorWords = (words1.length - cnt );
return (cnt + " correct out of " + words1.length + " words total number of error are "+ errorWords + "." );
}

const wordCounter = (str) =>{
let response = str.split(" ").length;
console.log(response);
return response;
}

btn.addEventListener('click' , function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    } else if(this.innerText = "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
