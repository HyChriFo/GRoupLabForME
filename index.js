const path = require('path')            // used later in the exercise
 const express = require('express')
 const app = express()

 app.get('/', function (req, res) {
 res.send('Hello World')
})
app.get('/Public', function(req, res){
    res.sendFile(path.join(__dirname, 'View', 'SinglePlayer.html'));
    });
    

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)