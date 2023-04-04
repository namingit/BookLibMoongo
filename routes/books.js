const express=require('express')
const router=express.Router()
const Book=require('../model/book')
router.get('/',async(req,res)=>{
   try{
        const books= await Book.find();
        res.json(books);
        console.log(books)
   }catch(err){
        res.send('error '+err);
   }
})
router.get('/:id',async (req,res)=>{
    try{
        const book= await Book.findById(req.params.id);
        res.json(book);
    }catch(err){
        res.send(err);
    }
})
router.post('/',async(req,res)=>{
    const book= new Book({
        name: req.body.name,
        subscribed : req.body.subscribed
    })
    try{
        const b1=await book.save()
        res.json(b1)
    }catch(err){
        res.send(err);
    }
})
router.patch('/:id', async(req,res)=>{
    try{
        const book= await Book.findById(req.params.id)
        book.subscribed=req.body.subscribed
        const b1=await book.save()
        res.json(b1)
    }catch(err){
        res.send(err);
    }
})
router.delete(':/id', async(req,res)=>{
    try{
        Book.deleteOne(req.params.id).then(()=>{
            res.json({message:'deleted'})
        })        
    }catch(err){
        res.send(err)
    }
})
module.exports=router