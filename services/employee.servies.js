const db=require('../db');

module.exports.getaAllEmployees=async()=>{
    const [records]=await db.query('SELECT * FROM employees')
    .catch(err=>console.log(err))
    return records;
}

module.exports.getaEmployeesId=async(id)=>{
    const [records]=await db.query('SELECT * FROM employees WHERE id= ?' , [id])
    .catch(err=>console.log(err))
    return records;
}


module.exports.deleteEmployee=async(id)=>{
    const [records]=await db.query('DELETE FROM employees WHERE id= ?' , [id])
    .catch(err=>console.log(err))
    return records;
}

module.exports.addEployee=async(obj,id=0)=>{
    const [records]=await db.query('INSERT INTO employees (id,name,employee_code) VALUES (?, ?, ?)', [id,obj.name,obj.employee_code])
    .catch(err=>console.log(err))
    return records;
}

module.exports.updateEployee=async(obj,id=0)=>{
    const updateQuery = 'UPDATE employees SET name = ?, employee_code = ? WHERE id = ?'
    const [records] = await db.query(updateQuery, [obj.name, obj.employee_code, id])
    .catch(err=>console.log(err))
    return records;
}