window.onload=function(){
    display(0);
}
let mcq =[
    {
        id:q1,
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
        id:q2,
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
     
let countIncr = 0;
function next(){
    countIncr++;
    display(countIncr);
}


function display(count)
{
    let q = document.getElementById('section');
    q.innerHTML= "<h2>" + mcq[count].question + "</h2>";
}