(function () {

	var csv = require("fast-csv"),
	fs = require('fs'),
	csvFile = "data/ewansou-1396232247-fhgjiio987.csv";
	header = ["username", "timecreated", "10digitrandom"];

	File = function () {
		this._data = [];
	}

	File.init = function () {
		fs.exists(csvFile, function(exists) {
			if (!exists) {
				File.createFile([header]);
			}
		});
	}

	File.createFile = function (data) {
		var ws = fs.createWriteStream(csvFile);
		csv
			.write( data, {headers: true})
			.pipe(ws);
	}

	File.prototype.open = function ( callback ) {

		var 
			self = this,
			stream = fs.createReadStream(csvFile);
		csv
			.fromStream(stream, {header : true})
			.on("record", function(data){
				self._data.push(data);
			})
			.on("end", function(){
			     callback();
			 });
	}

	File.prototype.insert = function( record ) {
		this._data.push(record);
	}

	File.prototype.save = function () {
		File.createFile( this._data );
	}

	module.exports = File;
}) (this);	