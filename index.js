const express = require('express');

const app = express();

app.get('/',(req,res)=>{

    res.send('carregado pagina inicial!');
    
});

app.listen(5000,()=>{
    console.log('servidor rodando!');
})