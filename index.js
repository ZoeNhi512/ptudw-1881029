let express = require ('express');
let app = express();

//set public static folder
app.use(express.static(__dirname + '/public'))

//use view engle 
let expressHbs = require('express-handlebars');
//const { Model } = require('sequelize/types');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//define your router here
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sync', (req, res)=>{
    let models=require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('database sync completed!')
    });
});

app.get('/:page', (req, res)=>{
    let banners = {
        blog: 'Our blog',
        category: 'Category',
        cart: 'Shopping cart',
        checkout: 'Product Checkout',
        confirmation: 'Order Confirmation',
        contact: 'Contact Us',
        login: 'Login/Register',
        register: 'Register',
        singleblog: 'Blog Details',
        singleproduct: 'Shop Single',
        trackingorder: 'Order Tracking'
    }
    let page = req.params.page;
    res.render(page, {banner: banners[page]});
});

//set server port & start server
app.set ('port', process.env.PORT|| 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});
//"nodemon index.js"
/* */