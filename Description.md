1. we write a database connection code in (db==>index.js) and then export a function connectDB and this function is importes in (src=>index.js) and called there. and in (src=>index.js) we use .then and .catch because async function returns a pomise

2. We also write a database connection code in (src=>index.js) using iffies (()()).which is commented bellow.

3. Dotenv package do not support the ("type": "module") import system so we do some confifrations in package.json file like ("dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js").

4. In (src=>app.js) have cors module.The cors module is a Node.js middleware that enables Cross-Origin Resource Sharing (CORS) in Express and other Node.js frameworks. It allows your server to handle requests from different origins (domains) by setting appropriate HTTP headers.In cors origin which is url from where we are accepting data , credentials: true, Allow credentials (cookies, HTTP auth, etc.).

NOTE: we use app.use while setting the middleware (Mostly).

5. In (src=>app.js) have express.json to take a json data where limit: "16kb" to set the limit ,

6. In (src=>app.js) have express.urlencoder which is use to encode data from the url. limit: "16kb" Restricts the maximum request body size to 16 kilobytes. extended: true  allows nested objects in URL-encoded requests.

7. In (src=>app.js) have express.static('public') to give the access of the /public directory to the browser

8. In (src=>app.js) have cookie parser which is used to access the user's cookie and set the cookie