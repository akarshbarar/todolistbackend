const express = require('express')
const app = express()

app.use(express.json());

app.listen(3000,()=>{
    console.log("server running at 3000")
})

let list = [];
app.get('/getAll', (req,res)=>{
        res.json({
            message:"success",
            data:list,
        })
})

app.post('/addItem', (req,res)=>{

        list.push({
            id: list.length+1,
            title: req.body.title,
            des: req.body.des,
            completed: false
        })

        res.json({
            message:"success"
        })
})

app.put('/edit/:id',(req,res)=>{

    let id = req.params.id;
    console.log(id)
    for(let i =0 ;i< list.length;i++){
        console.log(list.length)
        if(list[i].id == id){
            console.log(req.body)
            list[i] = {
                id: i+1,
               title: req.body.title,
                des:req.body.des,
                completed:req.body.completed
            }
        }
    }
    res.json({
        message:"success"
    })
})
app.delete('/delete/:id', (req,res)=>{
      let id = req.params.id;
    for(let i =0 ;i< list.length;i++){
        if(list[i].id == id){
            list.splice(i,1);
        }
    }
    res.json({
        message:"success"
    })
})