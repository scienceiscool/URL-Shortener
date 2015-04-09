#CPSC 473 - Web Programming & Data Management
##URL Shortener

__Prompt:__ Use Node.js, Express and Redis to create a URL shortener like bit.ly or TinyURL. Your program should do the following:<br>
1.  Provide the user with a textbox in which to enter URLs.<br>
2.	When a long URL is entered, create a new shortened URL (e.g., http://localhost:3000/abcd).<br>
3.	If a shortened URL is entered, display the original long URL.<br>
4.	When users access a shortened URL, redirect them to the long URL.<br>
5.	Display the top ten most popular shortened URLs sorted by the number of times they have been followed.<br>

You may implement the application either as
- A Web Service API returning JSON with an associated static HTML / AJAX page, or
- As HTML generated with a Jade template.

__Status:__ Under construction. Steps 1 and 4 were successful. Others need work.

__References for views/*.jade:__<br>
- <a href="http://javascriptplayground.com/blog/2012/06/node-express-todo-app-redis/">JavaScript Playground > Node and Express Todo App: Redis</a>
- <a href="http://technotip.com/3837/forms-using-jade-node-js/">Techno Tip > Forms Using Jade: Node.js</a>
