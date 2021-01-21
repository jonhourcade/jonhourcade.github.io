'use strict';
const path = require('path');
const fs = require('fs');
const expect = require('chai').expect;

describe('Studies', function(){
  describe('studies directory', function() {
    it('should contain correct files', function(done){
      const expectedFiles = [
        'control-flow.js',
        'datatypes.js',
        'functions.js',
        'loops.js',
        'operators.js',
        'string-manipulation.js',
        'variables.js',
      ];
      fs.readdir(path.join(__dirname,'../../../studies'), 'utf8', (err, files) => {
        if (err) console.error(err);
        expect(files.sort()).to.eql(expectedFiles.sort());
        done();
      });
    });
  });

  describe('variables.js', function() {
    it('should exist and have no runtime errors', function(){
      const variables = require('../../../studies/variables.js');
      expect(variables).to.exist;
    });
    
    it('should have content', function(done){
      fs.readFile(path.join(__dirname, '../../../studies/variables.js'), 'utf8', (err, data) => {
        if (err) return console.error(err);
        expect(data.length).to.be.gt(10);
        done();
      })
    });
  });

  describe('datatypes.js', function() {
    it('should exist and have no runtime errors', function(){
      const datatypes = require('../../../studies/datatypes.js');
      expect(datatypes).to.exist;
    });
    
    it('should have content', function(done){
      fs.readFile(path.join(__dirname, '../../../studies/datatypes.js'), 'utf8', (err, data) => {
        if (err) return console.error(err);
        expect(data.length).to.be.gt(10);
        done();
      })
    });
  });

  describe('string-manipulation.js', function() {
    it('should exist and have no runtime errors', function(){
      const stringManipulation = require('../../../studies/string-manipulation.js');
      expect(stringManipulation).to.exist;
    });
    
    it('should have content', function(done){
      fs.readFile(path.join(__dirname, '../../../studies/string-manipulation.js'), 'utf8', (err, data) => {
        if (err) return console.error(err);
        expect(data.length).to.be.gt(10);
        done();
      })
    });
  });

  describe('operators.js', function() {
    it('should exist and have no runtime errors', function(){
      const operators = require('../../../studies/operators.js');
      expect(operators).to.exist;
    });
    
    it('should have content', function(done){
      fs.readFile(path.join(__dirname, '../../../studies/operators.js'), 'utf8', (err, data) => {
        if (err) return console.error(err);
        expect(data.length).to.be.gt(10);
        done();
      })
    });
  });

  describe('control-flow.js', function() {
    it('should exist and have no runtime errors', function(){
      const controlFlow = require('../../../studies/control-flow.js');
      expect(controlFlow).to.exist;
    });
    
    it('should have content', function(done){
      fs.readFile(path.join(__dirname, '../../../studies/control-flow.js'), 'utf8', (err, data) => {
        if (err) return console.error(err);
        expect(data.length).to.be.gt(10);
        done();
      })
    });
  });

  describe('loops.js', function() {
    it('should exist and have no runtime errors', function(){
      const loops = require('../../../studies/loops.js');
      expect(loops).to.exist;
    });
    
    it('should have content', function(done){
      fs.readFile(path.join(__dirname, '../../../studies/loops.js'), 'utf8', (err, data) => {
        if (err) return console.error(err);
        expect(data.length).to.be.gt(10);
        done();
      })
    });
  });

  describe('functions.js', function() {
    it('should exist and have no runtime errors', function(){
      const functions = require('../../../studies/functions.js');
      expect(functions).to.exist;
    });
    
    it('should have content', function(done){
      fs.readFile(path.join(__dirname, '../../../studies/functions.js'), 'utf8', (err, data) => {
        if (err) return console.error(err);
        expect(data.length).to.be.gt(10);
        done();
      })
    });
  });

  describe('final grade', function() {
    it ('will be given after you submit to Greenlight', function() {
      expect('student failing this test').to.be.true;
    });
  });
});
