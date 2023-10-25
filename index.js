import express from 'express'
import {getAllTasks, getAddTaskForm, addTask, getEditTask, editTask, deleteTask, completeTask, unCompleteTask} from './controllers/tasksController.js'

//Crear la app

const app = express();

const port = 3000;

//Habilitar lectura de datos de formularios

app.use( express.urlencoded({extended: false}) )

//Habilitar Pug

app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta Pública

app.use( express.static('public') )

//Routing

app.get('/', 
    getAllTasks
)

app.get('/add',
    getAddTaskForm
)

app.post('/add', 
    addTask
)

app.get('/edit/:id',
    getEditTask
)

app.post('/edit/:id',
    editTask
)

app.get('/delete/:id',
    deleteTask
)

app.get('/complete/:id',
    completeTask
)

app.get('/uncomplete/:id',
    unCompleteTask
)

//Definir un puerto y arrancar el proyecto

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})