
# CodeIt! Web IDE - Server 1

Built a responsive code editor that supports languages like C++, Javascript, Python, and Java. The frontend is built with
React.js and requests are parsed via the backend API set up with Express.js. Front end editor is employed using Ace Editor
and the Backend processes the code via third-party API-judge0.

This is its backend which is responsible for processing code and relaying output.

## Demo

https://code-it-web-ide-server1.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/Tanishk-Saxena/CodeIt-Web-IDE---server1
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`URL` = https://judge0-ce.p.rapidapi.com/submissions - Submission endpoint of the third-party API of judge0.

`API_KEY` - API key for judge0 third-party API.

`HOST` = judge0-ce.p.rapidapi.com - Host for all the endpoints to work with the third-party judge0 API.