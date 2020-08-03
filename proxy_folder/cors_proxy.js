const express = require('express');
const request = require('request');

const app = express();

const ip = "130.208.183.18"
const port = ":8181"
const api_key = "c32952c9371049eb8d54cc72978c4533"
const api_start = "/api/v2?apikey="


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/v1/get_library_names', (req, res) => {
  request(
    { url: 'http://' + ip + port + api_start + api_key + "&cmd=get_library_names" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      console.log("somethings happening")
      res.json(JSON.parse(body));
    }
  )
});

app.get('/api/v1/get_library_media_info/:library_id/:section_type', (req, res) => {
  request(
    { url: 'http://' + ip + port + api_start + api_key + "&cmd=get_library_names" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      console.log("somethings happening")
      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));