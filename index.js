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
    },
    {
        id:'q3',
        question:"Which jddsjone is the vegetable?",
        answer:"cabbage",
        options:[
            "apple",
            "cabbage",
            "mango",
            "banana"
        ]
    },
    {
        id:'q4',
        question:"Which sllkjone is the vegetable?",
        answer:"cabbage",
        options:[
            "apple",
            "cabbage",
            "mango",
            "banana"
        ]
    }
]

// window.onload=function(){
//     display(0);
// }
let countIncr = 0;
function next(){
    if(count>=0&&count<3)
    {count++;
    display(count);}
}

function prev(){
  if(count>0&&count<=4)
  {
      count--;
      display(count);
  }

}
var count=1;

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
    a1.className="choice"
    a2.className="choice"
    a3.className="choice"
    a4.className="choice"
}
var time = 59;
setInterval(function(){
    if(time>0)
 { document.getElementById('timer').innerHTML=time;
  time--;}
},1000)
// function toggle(){
//     let opt = document.querySelectorAll('.choice')
//     var i;
//     for(i=0;i<4;i++)
//     {
        
//         opt[i].onclick=function(){
//             opt[i].classList.add("color")
//         }
//     }
// }

var one = document.getElementsByClassName("choice");
var j;
for(j=0;j<one.length;j++)
{one[j].onclick = function(){
    one[j].classList.add("color");
}}


window.onload = function(){
    display(0);
}
setInterval(function()
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
    
    
    toggle();
    
     if(count<3)

    {
        count++;
    }
    
}
,15000)

// function toggle(){
//     let opt = document.querySelectorAll('.choice')
//     var i;
//     for(i=0;i<4;i++)
//     {
       
//         opt[i].onclick=function(){
//             opt[i].classList.add("color")
//         }
//     }
// }

