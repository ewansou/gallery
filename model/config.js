config = {
		dropbox: {
			/* production */
			consumer_key : 'ner5ats5affj4m8',
			consumer_secret : 'iq4tsrrzlrtl4kh',
			oauth_token_secret: '7tll7oh8y0idqn8',
			oauth_token: '0i04jkdspwt6ukla',
			image_folder:{
				_4r: "4R Pre PS edit",
				half4r: "Half 4R Pre PS edit",
				wallet: "Wallet Pre PS edit"
			}
		},
		mandrill:{
			api_key : "zRsQ9cIpBL-ouzrJZSH7CA",
		},
		mailchimp:{
			api_key : "f0b814ed416b7898b8b799005a2dec6b-us3",
			list_id: "b6acd424bf"
		},
		mysql:{
			  host     : 'us-cdbr-east-05.cleardb.net',
			  user     : 'b3039ab65993fb',
			  password : 'cca7b08f',
			  port: '3306',
			  database: 'heroku_3f325657610cb96'
		},
		imgfoldername: "/imageupload/",
		instagram: {
			// change number of image showed when the page first load
			number_of_image: 30,
			tagName: 'singapore'
		},
		instantlyImg: 'http://instantly-mobile.herokuapp.com/recent/'
		//instantlyImg: 'http://localhost:3000/recent/'
		
};
exports.config = config;