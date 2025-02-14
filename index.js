const { Console } = require('console');
const express = require('express');
const { request } = require('http');
const port = 7000;
const path = require('path');
// const Contact = require('../contact_list/models/contact');

const db = require('./config/mongoose');

const ToDo = require('./models/todo_list');

const app = express();
app.use(express.static('./assets'));

app.set('view engine','ejs');

app.set('views','./views');
app.use(express.urlencoded());





app.get('/delete-list',function(req,res){
        let id = req.query.id;
    // console.log(id)
        ToDo.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in deleting');
                return;
            }
            return res.redirect('back');
        });
    
})


app.get('/',function(req,res){

    ToDo.find({},function(err,toDo){
        if(err){
            console.log('error in getting contact');
            return;
        }
        
        return res.render('home',{
            title : "ToDoList",
            toDo : toDo
        })
    })
    
})


app.post('/create-todo-list',function(req,res){
    ToDo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err,todoList){
        if(err){
            Console.log('Error occured in posting the data');
            return;
        }
        
        return res.redirect('back');
    })
})

app.post('/update-list',function(req,res){
    let id = req.body.id
    console.log(id)
    // console.log(req.body.description)
    ToDo.findById(id,function(err,todo){
       if(err){
        Console.log('Error occured in posting the data');
        return;
       }
       todo.description = req.body.description
       todo.save()

    })

    return res.redirect('back');
})
app.post('/delete-multiple/',function(req,res){
    // console.log('inside mul')
    let ids=req.body.myid
    // console.log(ids)
   ids.forEach(function(id) {
    ToDo.findByIdAndDelete(id,function(err){
        if(err){
            Console.log('Error occured in deleting the data');
            return;
           }
    })
   });
    
    return res.redirect('back');


})


app.listen(port,function(err){
    if(err){
        console.log("Error in firing up the server");
        return;
    }
    console.log('my server is up and running on port: ',port);
})