const express=require ("express");
const app=express ();
const path=require ("path");
const sqlite3=require ("sqlite3");
app.set ("views",path.join(__dirname,"views"))
app.set ("view engine", "ejs");
const db=new sqlite3.Database("libri.db" , function(){
    app.listen(3000);  
});
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"public", "index.html"));
});
app.get("/admin", function(req, res){
    res.sendFile(path.join(__dirname,"public", "admin.html"));
});
app.get ("/autori", function(req,res){
    const sql="select * from autori;"
    db.all(sql,function(err,rows) {
        console.log( rows)
        res.render("autori", {autori:rows});
    }); 
});
app.get ("/libri", function(req,res){
    const sql="select * from libri;"
    db.all(sql,function(err,rows) {
        console.log( rows)
        res.render("libri", {libri:rows});
    }); 
});
app.get ("/admin/autori", function(req,res){
    const sql="select * from autori;"
    db.all(sql,function(err,rows) {
        console.log( rows)
        res.render("admin_autori", {autori:rows});
    }); 
});
app.get ("/admin/libri", function(req,res){
    const sql="select * from libri;"
    db.all(sql,function(err,rows) {
        console.log( rows)
        res.render("admin_libri", {libri:rows});
    }); 
});
app.use( function(req, res){
    res.status(404);
    res.sendFile(path.join (__dirname,"public","404.html"));
});                              