let mcq =[
    {
        id:'q1',
        question:"Which one is the fruit?",
        answer:"apple",
        options:[
            "apple",
            "cabbage",
            "spinach",
            "tofu"
        ]
    },
    {
        id:'q2',
        question:"Which one is the vegetable?",
        answer:"cabbage",
        options:[
            "apple",
            "cabbage",
            "mango",
            "banana"
        ]
    }
]

window.onload=function(){
    display(0);
}
let countIncr = 0;
function next(){
    countIncr++;
    display(countIncr);
}
let countDecr=1;
function prev(){
    countDecr--;

    display(countDecr);
}

function display(count)
{
    let q = document.getElementById('problem');
    let a1 = document.getElementById('choice1');
    let a2 = document.getElementById('choice2');
    let a3 = document.getElementById('choice3');
    let a4 = document.getElementById('choice4');
    q.innerHTML= "<h2>" + mcq[count].question + "</h2>";
    a1.innerHTML="<p>"+ mcq[count].options[0] +"</p>" 
    a2.innerHTML="<p>"+ mcq[count].options[1] +"</p>" 
    a3.innerHTML="<p>"+ mcq[count].options[2] +"</p>" 
    a4.innerHTML="<p>"+ mcq[count].options[3] +"</p>" 
    
}