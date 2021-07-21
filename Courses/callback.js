// console.log('start ........')

// setTimeout(()=>{
//     console.log('after 1 min')
// },200)
// setTimeout(()=>{
//     console.log('after 2 min')
// },300)
// console.log('ending')

const add = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },200)
}
const fullnames = (fname,lname,callback)=>{
    setTimeout(()=>{
        callback(fname+' '+lname)
    },200)
}
add(1,6,(sum)=>{
    console.log(sum)
})
fullnames('niyonkuru','moise',(full)=>{
    console.log(full)
})

    
