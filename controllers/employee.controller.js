const express=require('express');

const router=express.Router();


const service=require('../services/employee.servies')




router.get('/',async(req,res)=>{
    const employees=await service.getaAllEmployees()
    

    res.send(employees)

})

router.get('/:id',async(req,res)=>{
    const employee=await service.getaEmployeesId(req.params.id)

    res.send(employee)

})

router.delete('/:id',async(req,res)=>{
    const employee=await service.deleteEmployee(req.params.id)
    console.log(employee);

    res.send('deleted successfully.')

})

router.post('/',async(req,res)=>{
    await service.addEployee(req.body)

    res.send('Insert Records succeesfully.')

})

router.put('/:id',async(req,res)=>{
    const data=await service.updateEployee(req.body,req.params.id)

    res.send(data)
    

})

module.exports=router;
         