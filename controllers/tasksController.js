let tasks = [
    {id: 1, tarea: "Task 1", completado: false},
    {id: 2, tarea: "Task 2", completado: true},
    {id: 3, tarea: "Task 3", completado: true}
]

export const getAllTasks = (req, res) => {
        res.render('tasks', {
            pagina: 'All Tasks',
            tasks
        })
} 

export const getAddTaskForm = (req, res) => {
    res.render('getaddtask', {
        pagina: 'Add a Task',
        tasks
    })
} 

export const addTask = (req, res) => {
    tasks.push({
        id: tasks.length + 1,
        tarea: req.body.tarea,
    })
    res.redirect('/')
} 

export const getEditTask = (req, res) => {
    let id = parseInt(req.params.id)
    let task = tasks.find((task) => task.id === id);

    if(!task){
        res.redirect('/')
    }else{
        res.render('getEditForm', {
            pagina: 'Edit your task',
            task
        })
    }
} 

export const editTask = (req, res) => {
    let id = parseInt(req.params.id)
    let taskIndex = tasks.findIndex((task) => task.id === id);

    if(taskIndex === -1){
        res.redirect('/');
    }else{
        tasks[taskIndex].tarea = req.body.tarea;
        res.redirect('/');
    }
} 

export const deleteTask = (req, res) => {
    let id = parseInt(req.params.id)
       tasks = tasks.filter((task) => task.id !== id);

       res.redirect('/')
}

export const completeTask = (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find(task => task.id === id);

    if(task){
        task.completado = true;
    }

    res.redirect('/')

} 

export const unCompleteTask = (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find(task => task.id === id);

    if(task){
        task.completado = false;
    }

    res.redirect('/')
} 