#!/usr/bin/env node
// jshint asi:true
/**
 * Should be called via npm run
 *
 * Ensures that all slides exists
 */
'use strict';

var _ = require('underscore/underscore')
var exec = require('child_process').exec

var slides = _.flatten(require(process.cwd() + '/slides/list.json'))

slides.forEach(function(f) {
  exec('touch slides/' + f)
})

