// const square = (x)=>{
//     return x * x
// }
const square = (x)=> x*x
const event = {
    name : 'Birthday party',
    guestList : [
        "andew","jeo","Mike"
    ],
    printGuestList : function(){
        console.log('Guest list for '+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending '+this.name)
        })
    }
}
const tasks = {
    tasks : [
        {
            test:'Grocery shopping',
            completed : true
        },
        {
            test:'clean yard',
            completed: false
        },
        {
            test: 'Film course',
            completed: false
        }
    ],
    getTasksToDo(){
        const tasksToDo = this.tasks.filter((task)=>{
            return task.completed == false
        })
        return tasksToDo
    }
}
tasks.getTasksToDo().forEach((todo)=>{
    console.log(todo.test+' not yet complited!!!')
})
console.log(tasks.getTasksToDo())
// console.log(square(2))
// event.printGuestList()