const fs = require('fs');


//use all async of all methods just remove callback function
fs.writeFileSync("async.txt", "i am async")


//writeFile override the text
fs.writeFile("test.txt","this is testing", (err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log('successful');
        
    }
})

// appendFile
fs.appendFile("test2.txt","this is testing 2 and more", (err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log('successful');
        
    }
})

// readFile
fs.readFile("test2.txt","utf-8", (err,data)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log(data);
        
    }
})

// rename
fs.rename("test2.txt","text3.txt", (err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("success");
        
    }
})

//exists
fs.exists("test.txt", (res)=>{
    if(res){
        console.log("found");
        
    }
    else{
        console.log("not found");
        
    }
})


//unlink(for delete)
fs.unlink("test.txt", (err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("success");
        
    }
})
