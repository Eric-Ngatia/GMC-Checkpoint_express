
    const express = require('express');
    const app = express();
    const port = 4000;
    
    
    app.use(express.json());
    
    
    const userDB = [
        {
            id: '1',
            name : "Kkstar"
        },
        {
            id: '2',
            name : "Jean Elossy"
        },
        {
            id: '3',
            name : "Vamoussa Dev"
        },
        {
            id: '4',
            name : "Martial"
        }
    ]
    
    app.get('/users',(req, res) => {
    
    
        res.status(200).send({
            sucess: "true",
            message: "données renvoyées avec succès",
            users : userDB
        })
    
    })
    
    app.delete('/users/:id',(req, res) => {
    
        const ID = req.params.id;
    
    
    
        const index = userDB.findIndex((user) => user.id == ID);
    
        userDB.splice(index, 1);
    
    
        res.status(200).send({
            sucess: "true",
            message: "Utilisateur supprimé avec succès",
            users : userDB
        })
    
    })
    
    app.listen(port, function(){
        console.log('The server is running, ' +
            ' please, open your browser at http://localhost:%s', 
            port);
    });