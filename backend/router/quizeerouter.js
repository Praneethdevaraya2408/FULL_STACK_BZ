const router=require('express').Router;
const app=require('express');
router.get("/", function(req, res) {
    res.send("Welcome to PRANEETH Basic Site");
})

router.get("/resume", function(req, res) {
    let fnam = __dirname + "/frontend/html/resume.html";
    res.sendFile(fnam);
})

router.get("/rgb", function(req, res) {
    let fnam = __dirname + "/frontend/html/rgb.html";
    res.sendFile(fnam);
})

// Heroku will automatically set an environment variable called PORT
router.get("/chart", function(req, res) {
    let fnam = __dirname + "/frontend/html/chart.html";
    res.sendFile(fnam);
})
router.get("/jq", function(req, res) {
    let fnam = __dirname + "/frontend/html/JQUERY.html";
    res.sendFile(fnam);
})
router.get("/todo", function(req, res) {
    let fnam = __dirname + "/frontend/html/course.html";
    res.sendFile(fnam);
})

router.get("/todolocal", function(req, res) {
    let fnam = __dirname + "/frontend/html/todo_local.html";
    res.sendFile(fnam);
})

router.get("/register", function(req, res) {
    let fnam = __dirname + "/frontend/html/registration.html";
    res.sendFile(fnam);
})
router.get("/login", function(req, res) {
    let fnam = __dirname + "/frontend/html/login.html";
    res.sendFile(fnam);
})
router.get("/host", function(req, res) {
    let fnam = __dirname + "/frontend/html/host.html";
    res.sendFile(fnam);
})
router.get("/dashboard", function(req, res) {
    let fnam = __dirname + "/frontend/html/dashboard.html";
    res.sendFile(fnam);
})
router.get("/quizeee", function(req, res) {
    let fnam = __dirname + "/frontend/html/homepage.html";
    res.sendFile(fnam);
})

router.post("/register",(req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var uname = req.body.uname;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var cpassword = req.body.cpassword;
    if (password===cpassword) {
        var data = {
            "fname": fname,
            "lname": lname,
            "uname": uname,
            "email" : email,
            "phno": phno,
            "password" : password,
            "cpassword" :cpassword
        
        }
        User.insertMany(data,(err,collection)=>{
            if(err){
                throw err;
            }
           console.log(data)
        }); return res.redirect('/host')
    
        
    } else {
        res.redirect("/newone")
    }

})

router.post('/login',(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.password;
    const username=User.findOne({uname:uname},function(err,resu){
        if (err) {
            console.log('unsuccessful')
        } else {
            if(resu.password===password)
            {
                res.redirect('/dashboard')
            }
            else{
                res.redirect("/newone2")
            }
        }
    });
});
module.exports=router;