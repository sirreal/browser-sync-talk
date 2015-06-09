#!/usr/bin/env node
'use strict';

var _ = require('underscore/underscore')
var exec = require('child_process').exec

var slides = _.flatten(require(process.cwd() + '/slides/list.json'))

slides.forEach(function(f) {
  exec('touch slides/' + f)
})

