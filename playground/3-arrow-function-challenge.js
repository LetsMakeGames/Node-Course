const { text } = require("stream/consumers")

// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        let out = ''
        tasksToDo = this.tasks.filter((task) => task.completed == false)
        
        console.log('You have ' + tasksToDo.length + ' tasks to do!')
        
        tasksToDo.forEach((task, index) => {
            if (index != tasksToDo.length - 1) {
                out = out + (task.text + ', ')
            } else {
                out = out + task.text
            }
            
        })

        return out
    }
}



console.log('Tasks: ' + tasks.getTasksToDo())