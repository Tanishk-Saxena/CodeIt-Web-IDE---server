const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { config } = require("dotenv");
config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5555;
const url = process.env.URL;
const api_key = process.env.API_KEY;
const host = process.env.HOST;

app.listen(port, ()=>{
    console.log(`Server up and running successfully at port ${port}.`);
})

app.post('/run', (req, res)=>{
    let output = {};
    let token;

    const executeOptions = {
      method: 'POST',
      url: url,
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': api_key,
        'X-RapidAPI-Host': host
      },
      data: req.body.jsonData
    };
    axios.request(executeOptions).then(function async (response) {
        token = response.data.token;
    }).then(()=>{
        setTimeout(() => {
            const receiveOptions = {
                method: 'GET',
                url: `${url}/${token}`,
                params: {base64_encoded: 'true', fields: '*'},
                headers: {
                    'X-RapidAPI-Key': api_key,
                    'X-RapidAPI-Host': host
                }
            };
            axios.request(receiveOptions).then(function (response) {
                output = {
                    stdout: response.data.stdout,
                    stderr: response.data.stderr,
                    compile_output: response.data.compile_output,
                    exit_code: response.data.exit_code,
                    time: response.data.time,
                    memory: response.data.memory
                }
                res.send(output);
            }).catch(function (error) {
                console.error(error);
            });
        }, 5000);
    }).catch(function (error) {
        console.error(error);
    });

})