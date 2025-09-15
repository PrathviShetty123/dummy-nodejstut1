// https://johnsmilga.com/
// https://github.com/john-smilga/node-express-course

/* NODEJS & EXPRESSJS TUTORIAL - [FREE CODE CAMP] */

// NODE JS

// 1) Intro
/*
const amount = 12;
if(amount < 10){
    console.log("small number")
}
else{
    console.log("large number")
}
console.log(`hey it's my first node app!!!`)            // to run use -> node app.js (or: node app)
*/

/* -------------------------------------------------------------------- */

// 6) Globals
// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

/*
console.log(__dirname);         // op: D:\Projects\NodeJS&ExpressJS\NodeJSTut1

setInterval(() => {
    console.log("Hello World!!!")           // op: Hello World!!! (will get this, after every 1 sec)
}, 1000)
*/

/* -------------------------------------------------------------------- */

// 7) Modules 

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

/*
const aini = "Aini"
const john = "John"

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi("susan")
sayHi(john)
sayHi(aini)
*/

// Using ES6
/*
import names from './names.js'      
import sayHi from './utils.js'     

console.log(names)          // op: { john: 'John', peter: 'Peter' }

sayHi("Susan");     //op: Hello Susan
sayHi(names.john);      //op: Hello John
sayHi(names.peter);     //op: Hello Peter
*/

// Alternative Method (from alternativeMethod.js)
/*
import data from './alternativeMethod.js'

console.log(data.items)         //op: [ 'item1', 'item2' ]
console.log(data.person())      //op: { name: 'Ahalya' }
*/

/* -------------------------------------------------------------------- */

// 8)  Mind Grenade
/*
import './mind-grenade.js'
*/

//op: Sum of 23 & 7 is 30           //-> just by importing we got the output
// Bcz: when we are setting up everything, if we have a fun inside of the module, that we invoke, then that code will run even though we didn't assign it to a variable & we didn't invoke that var
/*
NOTE: 
- In Node.js (and ES Modules in general), when you import a module, all top-level code in that module runs immediately.
- If the module just contains function definitions, nothing happens until you call them. But here, because you’re calling addValues() at the bottom of sum.js, it runs right away.
- That’s why just running node app.js gives you the output.
*/

/* -------------------------------------------------------------------- */

// 9) Built-in Modules

// (A) OS Module
/*
// const os = require('os')            // IN CommonJS - Old one
import os, { freemem, totalmem, userInfo } from 'os';        // ES Module - new one

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)          //op: The System Uptime is 202174.39 seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);
*/
/* ---------------- */
// (B) PATH Module
/*
const path = require('path')        // CommonJS 
// import path from 'path';         // ES modules

// Separator property - which returns a platform specific separator
console.log(path.sep)           //op: \

// Join method - which joins a sequence of path segments using that platform specific separator as the limiter
//             - returns a normalized resulting path
// created -> test.txt
const filePath = path.join('/content', 'subfolder', 'test.txt')     
console.log(filePath)       //op: \content\subfolder\test.txt

// Base name - this method used to get only the last portion of the file path
const base = path.basename(filePath)
console.log(base);          //op: test.txt

// Resolve - it returns an absolute path
//         - it accepts a sequence of path or path segments & resolves it into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')        // '__dirname' - points to the directory where app.js is located
console.log(absolute)       //op: D:\Projects\NodeJS&ExpressJS\NodeJSTut1\content\subfolder\test.txt   (only found in CommonJS)
*/
/* ---------------- */
// (C) Fs Module (Sync)
/*
Asynchronous non-blocking and synchronous blocking
: The differences between asynchronous and synchronous include: 
- Async is non-blocking, which means it will send multiple requests to a server. 
- Sync is blocking — it will only send the server one request at a time and wait for that request to be answered by the server.

- fs. readFileSync() method is used to read files from the filesystem in a synchronous manner. 
    This means that when you use this method, your program will pause and wait until the file has been completely read before moving on to the next task.
- fs.writeFileSync() is a synchronous method provided by Node.js's built-in fs (File System) module, used for writing data to a file. 
    As a synchronous operation, it blocks the execution of your program until the file writing process is entirely completed. 
    This ensures that any subsequent code will only run after the file operation has finished. 
*/

/*
// const {readFileSync} = require('fs');
import { readFileSync, writeFileSync } from 'fs';
// create a folder: 'content' -> first.txt, second.txt

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);         //op: "Hello, this is first text file" "Hello, this is second text file"

// creating new file -> if file not there, node will create that file. If file present, node by default, will overwrite all the values that are in the file
// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result: ${first}, ${second}`   
// )           // Now new file named 'result-sync.txt' will be created a 'content' folder with o/p 'Here is the result: "Hello, this is first text file", "Hello, this is second text file"' 

// To append value to the file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)       // Here is the result: "Hello, this is first text file", "Hello, this is second text file", this will get added to the folder: content / result-sync.txt file
*/
/* ---------------- */
// (D) Fs Module (Async)
/*
- Asynchronous fs methods in Node.js are functions that initiate a file system operation (like reading, writing, or deleting a file) and immediately return control to the program, allowing other code to execute. 
- The actual file system operation happens in the background. 
- Once the operation completes (or fails), a callback function is invoked, or a Promise is resolved/rejected, to deliver the result or error.

Callback -> In Node.js, a callback function is a function passed as an argument to another function, intended to be executed later, typically after an asynchronous operation has completed. 

NOTE:
* Provide 'utf8' - to prevent buffer o/p like <Buffer 22 48 65 6c 6c 6f 2c 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 22>
*/
/*
import { readFile, writeFile } from 'fs';

// Without callback
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)         //op: "Hello, this is first text file"
// })

// Want -> When get the first file o/p, at that time assign some kind of var & read that 2nd file, & after reading it, create a new file

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})

//op: (Created a new file at 'content->result-async.txt' with content) Here is the result: "Hello, this is first text file", "Hello, this is second text file"
*/

/* ---------------- */

// (E) Sync Vs Async

// Sync:
/*
import { readFileSync, writeFileSync } from 'fs';

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')       // if any of this is taking too time, 
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(          
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')
*/
/* 
// o.p:
start
done with this task
starting the next one

// Issue:
If any of the users takes too much time to read the file, or write it, then node is not able to serve other users at that time,
Also it is synchronous (step by step)
*/

// Async: 
/*
import { readFile, writeFile } from 'fs';

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                // console.log(result)
                console.log('done with this task')
            }
        )
    })
})

console.log('starting next task')       // right after the 1st task
*/
/*
// o/p:
start
starting next task          //(comes 1st)
done with this task         //(comes later)

// Bcz:
- User 1 & user2 (similarly other users) serves their tasks separately
- They are not dependent on each other
*/

/*
Sync:
- Everything happening line by line (synchronous)
(i.e., only after done with the 1st task, we can start the next task)

Async:
- Tasks are independent of each other
(i.e.,) started 1 task, offloaded it & then starts with the next task right away
*/

/* -------------------------------------------------------------------- */

// 10) HTTP  
// (A) HTTP Module:
/*
- In Node.js, HTTP refers to the built-in module that enables the creation of web servers and the handling of HyperText Transfer Protocol (HTTP) requests and responses. 
- This module is fundamental for building network applications, especially web applications and APIs.
-> The Node. js HTTP module is a fundamental component for building web applications and services using Node. js. 
- It provides a set of powerful tools and functions that enable developers to create HTTP servers and handle requests and responses efficiently.

* HTTP Module -> which allows us to setup a web server
*/
/*
import http from 'http';

const server = http.createServer((req, res)=>{      // req-incoming request, res-outgoing response
    res.write('Welcome to our home page')
    res.end()       //ending the response
})

server.listen(5000);        //listening to PORT '5000'
*/
/*
- What webserver's do? -> They keep on listening for requests
o/p: (In 'http://localhost:5000/', we have msg)  Welcome to our home page
*/
/* ------------------- */
// (B) HTTP Module (More Features)
/*
import http from 'http';

const server = http.createServer((req, res)=>{     
    // console.log(req)            // (on refreshing the page, we'll get the data in terminal)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
    `)
    }
})

server.listen(5000);  
*/
/*
- we're looking for 'url property' -> tell us what address(endpoint) the client is requesting
*/

/* -------------------------------------------------------------------- */

// 11) NPM Info
/*
https://www.npmjs.com/

NPM (Node Package Manager) -> Standard package manager for Node.js
- When we install 'node', it will automatically also install 'npm'
* NPM enables us to do 3 things:
- Reuse our own code in other projects
- Use code written by other developers
- Share our own solutions with other developers as well

- npm calls reusable code 
- modules/packages are used interchangably
- There is no quality control in npm (anyone can publish anything)
*/

/* -------------------------------------------------------------------- */

// 12) NPM Command
/*
- When we install node, we also install npm, that's why we also have access to 'npm global command'

// npm - global command, comes with node
npm --version

// local dependency - use it only in this particulr project (installing)
npm i <packageName>

// global dependency - use it in any project (less need for this)
npm install -g <packageName>
sudo npm install -d <packageName> (mac)
*/

/* -------------------------------------------------------------------- */

// 13) First Package
/*
// package.json - manifest file (storage important info about project/package)
* 3 ways to create package.json
- manual approach (create package.json in the root , create properties etc)
- npm init (step by step, press enter to skip)
- npm init -y (everything default)

NOTE:
- The package name should be unique (no where in the npm, you can see the package with the same name)
- On typing: npm init -> a file named 'package.json' is created
- On typing: npm init -y -> now directly create a file named 'package.json'

o/p:
Wrote to D:\Projects\NodeJS&ExpressJS\NodeJSTut1\package.json:

{
  "name": "nodejstut1",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "alternativeMethod.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": []
}

* Use of package.json
- this local package is going to be stored as dependency

npm i lodash
[lodash - is a popular JavaScript utility library that provides a wide range of helper functions for common programming tasks, significantly simplifying code and improving readability in Node.js applications.]
// now in package.json we have this package under dependencies (is an object, inside that object we have package by the name lodash)
i.e., 
"dependencies": {
    "lodash": "^4.17.21"
  }
// in node_modules folder -> where all the dependencies are stored

NOTE:
- If you install some dependencies, if require some more dependencies, then those also will be automatically installed here
Ex:
npm i bootstrap
-> now after installing, along with bootstrap we have @popperjs

i.e.,
- Some packages will have more dependencies, that will install them automatically 
Ex: bootstrap
- Some package has single dependencies
Ex: lodash

- Use of package.json -> to provide information about our project, it has dependencies, where we will store the dependencies which our project is using

*/
/*
// in order to start using the module
import _ from 'lodash';  // to get access to lodash

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);          // we accessed the method 'flattenDeep' of 'lodash' package since we installed 'lodash'
console.log(newItems);          //op: [ 1, 2, 3, 4 ]
*/
 
/* -------------------------------------------------------------------- */

// 14) Share Code
/*
- Create a repo in github

*/


