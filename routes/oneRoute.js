const routes = (app)=>{

    app.route('/contact')
    .get((req,res)=>
        res.send('GET req succes'))
    .post((req,res)=>
        res.send('POST req succes'));
    
    app.route('/contact/:contactID')
       .put((req,res)=>
            res.send('PUT req succes'))
       .delete((req,res)=>
            res.send('DELETE req succes'));
}

export default  routes;
