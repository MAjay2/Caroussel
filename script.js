
let pics = ['img/pic1.JPG','img/pic2.JPG']




let picEl = document.getElementById("sliderr")
let anime = document.getElementById("anime")


let leftEl =document.getElementById("left")
let rightEl = document.getElementById("right")

let pushEl= document.getElementById("push")
let uploadEl= document.getElementById("uploadFile")




let i = 0
   
    picEl.innerHTML = `<img src=${pics[i]} />`

    pushEl.addEventListener("click", function(){

        pics.push(uploadEl.value)
     
        console.log(pics);


    })

    


rightEl.addEventListener("click",function (){

    
console.log(i);
    i++
    picEl.innerHTML = `<img  class="animate__animated animate__slideInRight style" src=${pics[i]} />`

   

    if(i>pics.length - 1){
        i=0
        picEl.innerHTML = `<img class="animate__animated animate__slideInRight" src=${pics[i]} />`
    }
    console.log(i);
    }

)



    leftEl.addEventListener("click", function (){
        console.log(i);
     i--
     picEl.innerHTML= `<img class="animate__animated animate__slideInLeft" src= ${pics[i]} />`

     if(i<0) { 
        i = pics.length - 1
        picEl.innerHTML=`<img class="animate__animated animate__slideInLeft" src= ${pics[i]} />`
     } 
        
    })



    



 

