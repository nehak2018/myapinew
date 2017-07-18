"'use strict';\n\nconsole.log('inside server.js');\n\nvar express = require('express');\nvar mongoose = require('mongoose');\nvar bodyParser = require('body-parser');\nvar cors = require('cors');\t\t//For enabling CORS so that angular app can call APIs from different domain/port\n\nmongoose.connect('mongodb://prasadsuvarapu:prasadc85!@ds157559.mlab.com:57559/appcreator');\n\nvar app = express();\napp.options('*', cors()) // include before other routes\n\napp.use(cors());\t//enable express to use CORS. You may want to disable/restrict in production\napp.use(bodyParser.urlencoded({extended: true}));\napp.use(bodyParser.json());\n\nconsole.log('Will apply routes now');\n\n\napp.use('/api', require('./routes/api'));\n\n\napp.listen(3000);\nconsole.log('Listening on port 3000');"