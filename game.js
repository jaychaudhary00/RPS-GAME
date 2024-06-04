let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score")

let finalresult=(userwin,userchoice,compchoice)=>
{
    if(userwin)
        {   userscore++;
            userpara.innerText=userscore;
            console.log("congratulations you win! you");
            msg.innerText=`congratulations you win! your ${userchoice} beats computer ${compchoice}`;
            msg.style.backgroundColor="green";
        }
    else
    {
        compscore++;
        comppara.innerText=compscore;
        console.log("opps,you lose try again!");
        msg.innerText=`opps,you lose! computer ${compchoice} beats your ${userchoice} `;
        msg.style.backgroundColor="red";
     }
}

let drawgame=(userchoice,compchoice)=>
    {
        console.log("game is draw");
        msg.innerText=`game is draw!your choices ${userchoice} and computer choice also ${compchoice} .`;
        msg.style.backgroundColor=" rgb(3, 3, 31)";
        
    }

let getcompchoice=()=>
    {
        let options=["Rock","Paper","Scissors"];
        const  ans= Math.floor(Math.random(options)*3);
        return options[ans];      
    }
let playgame=(userchoice)=>
    {
        console.log("user choice=",userchoice);
        let compchoice=getcompchoice();
        console.log("computer choice=",compchoice);

        if(userchoice===compchoice)
            {
                drawgame(userchoice,compchoice);
            }
        else{
            let userwin=true;
            if(userchoice==="Rock")
                {
                    //paper,scissors
                    userwin=compchoice==="Paper"?false:true;
                }
            else if(userchoice==="Paper")
                {
                    //rock,scissors
                    userwin=compchoice==="Scissors"?false:true;
                }
            else{
                //rock,paper;
                userwin=compchoice==="Rock"?false:true;
            }
            finalresult(userwin,userchoice,compchoice);
        }
   }
choices.forEach((jay)=>{    
    jay.addEventListener("click",()=>
    {
         let userchoice=jay.getAttribute("id");
         playgame(userchoice);
    });    
});