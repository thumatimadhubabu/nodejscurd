const express =require('express');
const app=express();
// const db=require('./db')
const router=require('./controllers/employee.controller');
const bodyparser=require('body-parser')

const port=3000;

app.use(bodyparser.json());

app.use('/api/employees',router);


// db.query('select * from employees').then(()=>{
//     console.log('db connection succeeded at 3000')
//     app.listen(3000,()=>console.log('server started at 3000'))
// })
app.listen(port,()=>{
    console.log('Express Server is Running....');
})

// .catch(err=> console.log('db connection failed.\n'+err))


// app.use('./api/employees',employeeROUTE)







