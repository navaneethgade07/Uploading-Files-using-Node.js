const express = require('express');
const formidable = require('formidable');

// to handle the requests
const app = express();  

 // To retrive the data and display in browser
app.get('/',(req,res)=>{               
    res.sendFile(__dirname + '/index.html');
})

  // To get data from the form 
app.post('/' , (req,res)=>{             
    var form = new formidable.IncomingForm()
    form.parse(req)

     //path that the file  to be saved
     //The 'fileBegin' event is emitted when a file upload starts .It is typically used to initialize the upload process and to create a new file on the server.
    form.on('fileBegin' , (name,file)=>{       
        file.filepath = __dirname + '/Uploads/' + file.originalFilename
    })
    
    // The 'file' event is emitted when the entire file has been uploaded. It is typically used to close the file and to process the uploaded data.
    form.on('file' ,(name,file)=>{
        console.log('uploaded file ' + file.originalFilename)
    })
    
    res.sendFile(__dirname + '/index.html');
})

app.listen(5000,()=>{
    console.log('App is running on port 5000');
})