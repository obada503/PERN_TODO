Files:
app.js: This file serves as the main entry point for the client-side code of the application. It is responsible for rendering the user interface and managing the interaction with the server. The client-side code runs on localhost:3000.

index.js: This file contains the server-side code for the application. It is responsible for handling HTTP requests and interacting with the database. The server-side code runs on localhost:5000.

db.js: This file sets up the configuration for connecting to the database. It includes the necessary credentials and connection details.

Components:
1- InputTodo: This component is responsible for rendering an input field where users can enter new todos. It handles user input and sends requests to the server to create new todos.

2- ListTodos: This component displays the list of todos fetched from the server. It retrieves the todos from the server and renders them in a list format. It also provides options to update and delete individual todos.

3- EditTodo: This component is responsible for rendering an input field to edit an existing todo. It allows users to modify the description of a specific todo and sends requests to the server to update the todo accordingly.

Instructions:
-To run the application locally, follow the steps below:

1- Start the server:

-Make sure you have PostgreSQL installed and running.
-Open the command prompt or terminal and navigate to the project's directory.
-Run npm install to install the required dependencies.
-Open the db.js file and update the credentials and connection details if needed.
-Run node index.js to start the server. It will run on localhost:5000.

2- Start the client:

-Open a new command prompt or terminal window.
-Navigate to the project's directory.
-Run npm install to install the required dependencies.
-Run npm start to start the client. It will run on localhost:3000.

3- With both the server and client running, you can now interact with the application by accessing it in your web browser at http://localhost:3000.