const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//Middleware functions are functions that have access to the request object (req), the response object (res), 
//and the next middleware function in the application’s request-response cycle. 
//“cors” paketi sayesinde Node.js serverlarındaki ‘Access-Control-Allow-Origin’ 
//hatasından kurtulunabilmekte ve belirlenen adreslere API erişim konfigürasyonu sağlanabilmektedir.
app.use(cors())
app.use(express.json());//req.body we can access this object right there

//ROUTES //Build Routes with PostgreSQL Queries

//create a todo
app.post("/todos", async (req, res) => {
    try {
        //console.log(req.body); req.body //çıktısı { description: 'Merhaba' }
        const { description } = req.body; //req:Request(istek)
        const newToDo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        //RETURNING * yazma sebebi bu datayı sonradan ekleme silme güncelleme yaptığımız için
        res.json(newToDo.rows[0]); //res:Response(yanıt,tepki)
        /*çıktı {
                    "todo_id": 9,
                    "description": "Merhaba"
                }
        */
    } catch (err) {
        console.error(err.message);
    }
})

//get all todo
app.get("/todos", async (req, res) => {
    try {
        const allToDo = await pool.query("SELECT * FROM todo");
        res.json(allToDo.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        //console.log(req.params);//app.get("/todos/:id", olursa çıktı-> http://localhost:5000/todos/4 { id: '4' } olur.  
        //app.get("/todos/:subject", olursa çıktı-> http://localhost:5000/todos/4 { subject: '4' } olur.

        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
        res.json(todo.rows)
    } catch (err) {
        console.error(err.message);
    }
})
//update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 ", [description, id ]) 
        //$1 yazınca [description, id] içindeki sıraya göre atanır. Yani $1=description $2=id olur.

        res.json("todo was updated.")
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 ", [id]) 
        //$1 yazınca [description, id] içindeki sıraya göre atanır. Yani $1=description $2=id olur.

        res.json("todo was deleted.")
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log(); ("server has started on port 5000");
    //nodemon index yapıp serverı çalıştırıyoruz terminalde. nodemon ile anında değişimleri görüyoz.
})