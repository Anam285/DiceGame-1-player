

const button= document.querySelector('.roll-dice');
const dice = document.querySelector('.dice')
let currentClass = '';

let total = [0]
let score= 0;

button.addEventListener('click',()=>{
    const ranDum = Math.floor(Math.random() * 6) + 1;
    // document.querySelector('.roll').textContent = "Roll";
    let showClass = 'show-' + ranDum;
    if (currentClass){
        dice.classList.remove(currentClass);}
        dice.classList.add(showClass);
        currentClass = showClass;


    if ((ranDum != 1) && (ranDum != total[total.length - 1])){
        document.querySelector('.rollBox').textContent = ranDum;
        total.push(ranDum);
        console.log(ranDum)
        console.log(total)
        score += total[total.length - 1];
        console.log(score)}
    else if (ranDum == 1){
        console.log(ranDum)
        // document.querySelector('.rollBox').textContent = "Roll Again";
        score= 0;
        total=[];
        document.querySelector('.scoreBox').textContent = score;
        // dice.classList.remove(currentClass)
        document.querySelector('.rollBox').textContent = "You Lose!";}
    else{
        document.querySelector('.rollBox').textContent = "Boring! Same Roll"

    }

    

    if (score >= 20){
        document.querySelector('.scoreBox').textContent = "You Win!";
        // dice.classList.remove(currentClass)
    }else{
        document.querySelector('.scoreBox').textContent = score;
    }
    
            

})

reset= document.querySelector('.reset')
reset.addEventListener('click',()=>{
    score= 0;
    total=[];
    document.querySelector('.scoreBox').textContent = score;
    dice.classList.remove(currentClass)
    document.querySelector('.rollBox').textContent = "Ready To Roll";
})




