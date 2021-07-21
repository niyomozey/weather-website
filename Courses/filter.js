//prime number
// const weekDay = [1,2,3,4,5,6,7]

// weekEnd = weekDay.filter(day => day > 5)
// console.log(weekEnd)
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const prime = arr.filter((num)=>{

    for(i=2;i<num;i++){
        if(num%i==0){
            return;
        }
    }
    return num;
})
console.log(prime)