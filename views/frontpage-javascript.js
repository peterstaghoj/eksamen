const userToMatch = [{
    name: "sarah",
    age: "22",
    city: "Copenhagen",
    },{
    name: "Ida",
    Age: "22",
    city: "Københagen",    
    }
]

const userMatched = []





userToMatch.forEach(element => {
    document.getElementById("elements").innerHTML= JSON.stringify(userToMatch[1]); 
 });

 

const like = document.getElementById("like")
const dislike = document.getElementById('dislike')


 function match(){
    const like = document.getElementById("like")
    const dislike = document.getElementById('dislike')
     if(like){
         userMatched.push(userToMatch[1])
     }
 }


 userMatched.forEach(element => {
    document.getElementById("elements2")= JSON.stringify(userMatched[0]); 
 });

 console.log(userMatched)


