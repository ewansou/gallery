(function () {

	var csv = require("fast-csv"),
	fs = require('fs'),
	csvFile = "data/image.csv";
	header = ["name", "username", "timecreated", "caption"];

	/** add to test */
	var DropboxClient = require('dropbox-node').DropboxClient;

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
		var ws = fs.createWriteStream(csvFile , {encoding: 'utf-8'});
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
		File.upDropboxToTest();
	}
	File.upDropboxToTest = function () {
		// up to dropbox for testing
		var dropboxParam = {
			consumer_key : '2h910c3khhxn3h9',
			consumer_secret : '46w1uvamgsqlyxk',
			oauth_token_secret : 'fedqkvr939l6fkr',
			oauth_token : '0aiu329widy1qnbk'
		}
		var dropbox = new DropboxClient(dropboxParam.consumer_key, dropboxParam.consumer_secret, 
					dropboxParam.oauth_token, dropboxParam.oauth_token_secret);
		dropbox.putFile(csvFile, "image.csv", function (err, data) {

						if(err) {
							console.log(err);
						}

					});

	}

	module.exports = File;
}) (this);	