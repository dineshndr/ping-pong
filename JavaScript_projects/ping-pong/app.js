const btn1 = document.getElementById('player1');
const btn2 = document.getElementById('player2');
const score = document.getElementById('score');
const reset = document.getElementById('reset');
const select  = document.getElementById('select');
const h2 = document.getElementById('h2');
let score_one =0 ;
let score_two =0;
let isGameover = false;
select.addEventListener('change', function(event) {
    let max_score = event.target.value;
    h2.innerHTML = `${max_score}`;
})
const result_one = btn1.addEventListener('click', function() {
    if(!isGameover) score_one++;
    score.innerText = `${score_one} to ${score_two}`;
    if(score_one==parseInt(h2.innerHTML))
    {
        final_score = score_one-score_two;
        score.innerText = `Player 1 win by ${final_score} runs`;
        isGameover =true;
    }
    document.body.append(score);
    
})
btn2.addEventListener('click', function() {
    if(!isGameover) score_two++;
    score.innerText = `${score_one}to ${score_two}`;
    if(score_two==parseInt(h2.innerHTML))
    {  final_score = score_two-score_one; score.innerText = `Player 2 win by ${final_score} runs`; isGameover =true;}
    document.body.append(score);

})
  

reset.addEventListener('click', function() {
    score_one=0;
    score_two=0;
    score.innerText ="0 to 0";
    document.body.append(score);
    isGameover = false;

}) 