'use strict';

var fs = require('fs');


module.exports = function(app) {
  app.post('/api/write/:id', function(req, res) {
    var filePath = __dirname + '/public/'+ req.params.id + '.txt';
    var body = JSON.stringify(req.body);

    fs.writeFile(filePath, body, function(err) {
      if (err) return res.status(500).send('there was an error');
      console.log('it saved!');
    });
    res.end();
  });

  app.get('/api/read/:id', function(req, res) {
    var filePath = __dirname + '/public/'+ req.params.id + '.txt';
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) return res.status(500).send('there was an error');
      var jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });
};
