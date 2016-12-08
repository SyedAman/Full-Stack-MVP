// import libraries
var express = require('express'),
    path = require('path'),
    pg = require('pg'),
    dust = require('dustjs-helpers'),
    consolidate = require('consolidate'),
    bodyParser = require('body-parser'),
    app = express();