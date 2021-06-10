function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
  }
include('https://smtpjs.com/v3/smtp.js');
        function sendEmail() {
			Email.send({
					Host: "smtp.gmail.com",
					Username: "cloud@bitsathy.ac.in",
					Password: "Cloud@987",
					To: 'kishore.ct19@bitsathy.ac.in',
					From: "cloud@bitsathy.ac.in",
					Subject: "this is an emali id",
					Body: "empty body",
				})
				.then(function (message) {
					alert("mail sent successfully")
				});
		}

