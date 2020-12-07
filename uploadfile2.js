function fileR()
{
	var prop; //properties of entries
	var prop_req; // properties of request
	var prop_res; // properties of response
	var prop_time; // properties of timings
	var obj;
	var content;
	const input = document.getElementById("upfile");
	var file = input.files;
	var f = file[0];

	if(f)
	{
		console.log(f.name);

		var reader = new FileReader();
		reader.onload = function() 
		{
			console.log('file read');
	      	content = reader.result;
	      	obj = JSON.parse(content);
	      	delete obj.log.version;
	      	delete obj.log.creator;
	      	delete obj.log.browser;
	      	delete obj.log.pages;
			prop = Object.getOwnPropertyNames(obj.log.entries[0]);
			prop_req = Object.getOwnPropertyNames(obj.log.entries[0].request);
			prop_res = Object.getOwnPropertyNames(obj.log.entries[0].response);
			prop_time = Object.getOwnPropertyNames(obj.log.entries[0].timings);
			//console.log(prop);
	      	for (var i = 0; i < obj.log.entries.length; i++) 
	      	{
				for(var y of prop)
				{
					if( y !='startedDateTime' && y !='request' && y !='response' && y !='timings' && y !='serverIPAddress')
					{
						delete obj.log.entries[i][y];
					}
					else if (y == 'request')
					{
						for(var y1 of prop_req)
						{
							if (y1 !='method' && y1 !='url' && y1 !='headers')
							{
								delete obj.log.entries[i].request[y1];
							}
							else if (y1 == 'headers')
							{
								for (var y3 = 0; y3 < obj.log.entries[i].request[y1].length; y3++) 
								{
									var temp = obj.log.entries[i].request[y1][y3].name;
									if(temp != 'Content-type' && temp != 'Cache-Control' && temp != 'Pragma' && temp != 'Expires' && temp != 'Age' && temp != 'Last-modified' && temp != 'Host')
									{
										delete obj.log.entries[i].request[y1][y3];

									}
									
								}
								
								
							}
						}
					}
					else if (y == 'response')
					{
						for(var y2 of prop_res)
						{
							if (y2 !='status' && y2 !='statusText' && y2 !='headers')
							{
								delete obj.log.entries[i].response[y2];
							}
							else if(y2 == 'headers')
							{
								for (var y4 = 0; y4 < obj.log.entries[i].response[y2].length; y4++) 
								{
									var temp = obj.log.entries[i].response[y2][y4].name;
									if(temp != 'content-type' && temp != 'cache-control' && temp != 'pragma' && temp != 'expires' && temp != 'age' && temp != 'last-modified' && temp != 'host')
									{
										delete obj.log.entries[i].response[y2][y4];
									}
									
								}
							}
						}
					}
					else if(y == 'timings')
					{
						for(var y5 of prop_time)
						{
							if(y5 != 'wait')
							{
								delete obj.log.entries[i].timings[y5];
							}
						}
					}



				}
	      		
	      	}
	      	var stringJson=JSON.stringify(obj);
	      	console.log('request');
	      	$.ajax({
	      		url: "readJson.php",
	      		type: "POST",
	      		//contentType: "application/json",
	      		dataType: "json",
	      		data: {'data':stringJson},
	      		beforeSend: function (data) {
	    			//console.log('the data is:' + stringJson);
	  			},
	      		success: function(response){
	      			console.log('SUCCESS ' + response);
	      		},
	      		fail: function(error){
	      			console.log('ERROR');
	      		}



	      	});

	    	      	



				
	    };// END OF ONLOAD
		reader.readAsText(f);
	}
	else
	{
		alert("ReTarD..");

	}
}
	