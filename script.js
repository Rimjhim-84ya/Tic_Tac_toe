console.log("Welcome to Tic Tac Toe")
let music= new Audio("tac.mp3")
let audioTurn= new Audio("tic.mp3")
let gameover= new Audio("tac.mp3")
let turn= "X"
let isgameover= false; 
//function to change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}


//function to check for a win 
const checkWin=()=> {
    let boxtext =document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtex[e[1]].innerText)&&(boxtext[e[2]].innerText))
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
    gameover=true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width=200px;
    })
}



//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtext =document.querySelector('.boxtext');
    boxtext.addEventListener('click',()=>{
        if(e.innerText ===' '){
            e.innerText=turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName(turn)[0].innerText = "turn for" + turn;
        }
    })
})