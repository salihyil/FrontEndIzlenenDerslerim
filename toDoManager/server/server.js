const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/tasks', (req, res) =>{ //browser http://localhost:4000/tasks yazınca res.send('list of all tasks') içine yazılan gelecek
    const TASK_QUERY = 'SELECT * FROM todotaskmanager.tasks';
    connection.query(TASK_QUERY, (err, response)=>{
        if(err) console.log(err)
        else res.send(response);
    })
})

app.post('/addTask', (req, res) =>{ 
    //console.log(req.body);
    const ADD_QUERY = `INSERT INTO todotaskmanager.tasks (task) VALUES ('${req.body.task}')`
    connection.query(ADD_QUERY, (err)=>{
        if(err) console.log(err);
        else res.send('task has been added');
    });
    
})

app.delete('/deleteTask/:taskid', (req, res) =>{ 
    console.log(req.params.taskid); // çıktısı delete basılan verinin id'si yazar.

    const DELETE_QUERY = `DELETE FROM todotaskmanager.tasks WHERE (taskid=${req.params.taskid})`
    connection.query(DELETE_QUERY, (err)=>{
        if(err) console.log(err);
        else res.send('deleted task');
    });
    
})

app.listen(4000, ()=>{
    console.log("running on port 4000");}); //listen(port: number, callback?: () => void): Server

