# Progress

----------

__Current Reading__ 
- Section 8:course#106 - Listened & practiced
- Section 9:course no#123 - Listening only

------------------

1. **Basic Node JS understanding**
    1. Run node.js after install
    2. Run http server on port 3000
    3. Create different routes and action with basic http module.

2. **Section 4: Improved Development Workflow and Debugging**
    1. npm init
    2. start server with __'npm run <script-name>'__ command
    3. nodemon development dependency installation
         1. npm install nodemon --save-dev
         2. local dependencies will be available for project only, where it is installed.
    
3. **Section 5: Working with Express.js**
    1. Express.js is middleware
    2. npm install --save express
    3. body-parser - to parse body for express app - 3rd party module
    4. path - to access html files for express app - core module
   
4. **Available templating engine**
      1. Pug (JADE)
      2. Handlebars
         1. npm install --save express-handlebars@3.0
         2. ```
            const { engine } 
                = require ('express-handlebars');
            const app = express();
                app.engine('hbs', engine({
                extname: "hbs",
                defaultLayout: false,
                layoutsDir: "views/layouts/"
                }));
            app.set('view engine', 'handlebars');
            ```
     3. EJS
        1. npm install ejs
        2. ```
           app.set('view engine', 'ejs');
           app.set('views', './src/views');
           ```
     4. Useful resources:
        1. Pug Docs: https://pugjs.org/api/getting-started.html            
        2. Handlebars Docs: https://handlebarsjs.com/            
        3. EJS Docs: http://ejs.co/#docs
5. **Section 7: The Model View Controller (MVC)**
    1. What is MVC - Separation of concerns 
       1. __Model__ : 
            1. Represents your data
            2. Work with your data (CRUD operations)
        2. __Views__ : 
            1. What users see
            2. Decoupled from your application code
        3. __Controllers__ : 
            1. Connecting your model and views
    2. 
 

--------------------
# Additional Resources
- AngularJS tutorial for beginners with NodeJS ExpressJS and MongoDBs https://adrianmejia.com/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/