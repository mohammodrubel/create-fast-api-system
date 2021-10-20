const express = require ('express') 

const app = express()

const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

const users = [
    {name:'rubel',address:'bashaboo',phone:'01907626245',age:25,locaation:'khilgaon' ,id:1},
    {name:'hasib',address:'shobujbag',phone:'08487626245',age:25,locaation:'khilgaon', id:2},
    {name:'rubel',address:'bashaboo',phone:'01907626245',age:25,locaation:'khilgaon' ,id:3},
    {name:'rubel',address:'bashaboo',phone:'01907626245',age:25,locaation:'khilgaon', id:4},
    {name:'rubel',address:'bashaboo',phone:'01907626245',age:25,locaation:'khilgaon', id:5},
]

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.listen(port,()=>{
    console.log('Hello programmer',port)
})