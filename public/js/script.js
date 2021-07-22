var weatherform = document.querySelector("form");
var search = document.querySelector("input")
// var msg1=document.getElementById('msg-1')
// var msg2=document.getElementById('msg-2')

var msg1=document.querySelector('#msg-1')
var msg2=document.querySelector('#msg-2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    msg1.textContent ='loading...'
    msg2.textContent = ''
    var location = search.value
    fetch('/weather?address='+location).then(response=>{
     return response.json()}).then(post=>{
        msg1.textContent=''
        if(post.error){
            msg1.textContent=error
         }else{
             msg1.textContent=post.Location
             msg2.textContent=post.forecast
            // console.log(post.location)
            // console.log(post.forecast)
         }
    
    })
    
    // body = document.querySelector('body')
    // body.style.background="gray"
})