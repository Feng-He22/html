$(document).ready(function() {
	// when edit button is clicked
	$("#edit-btn").click(function() {
		// show the edit news section
		$("#edit-news").show();
	});

	// when save button is clicked
	$("#save-btn").click(function() {
    
		var password = $("#password").val();
		// check if password is correct
		if (password === "admin123") {
			var title = $("#title").val();
			var content = $("#content").val();
			var image = $("#image").prop("files")[0];
			var audio = $("#audio").prop("files")[0];
			var currentTime = new Date();
			// update news content
			$("#news-title").text(title);
			$("#news-text").text(content);
			if (image) {
				var reader = new FileReader();
				reader.onload = function(event) {
					var imageURL = event.target.result;
					$("#news-image").attr("src", imageURL);
					// save image data URL to local storage
					localStorage.setItem("image", imageURL);
				};
				reader.readAsDataURL(image);
			}
			if (audio) {
				var reader = new FileReader();
				reader.onload = function(event) {
					var audioURL = event.target.result;
					$("#news-audio").attr("src", audioURL);
					$("#news-audio").show();
					// save audio data URL to local storage
					localStorage.setItem("audio", audioURL);
				};
				reader.readAsDataURL(audio);
			} else {
				$("#news-audio").hide();
				// clear audio data URL from local storage
				localStorage.removeItem("audio");
			}
			$("#last-modified").text("Last modified: " + currentTime.toLocaleString());
			// save edited content locally
			localStorage.setItem("title", title);
			localStorage.setItem("content", content);
			localStorage.setItem("last-modified", currentTime.getTime());
			// hide the edit news section
			$("#edit-news").hide();
		} else {
			alert("Incorrect password. Please try again.");
		}
	});

  
	// check if there is saved content
	if (localStorage.getItem("title") && localStorage.getItem("content") && localStorage.getItem("last-modified")) {
		// update news content with saved content
		$("#news-title").text(localStorage.getItem("title"));
		$("#news-text").text(localStorage.getItem("content"));
		$("#news-image").attr("src", localStorage.getItem("image"));
		$("#news-audio").attr("src", localStorage.getItem("audio"));
		if (localStorage.getItem("audio")) {
			$("#news-audio").show();
		} else {
			$("#news-audio").hide();
		}
		var lastModifiedTime = new Date(parseInt(localStorage.getItem("last-modified")));
		$("#last-modified").text("Last modified: " + lastModifiedTime.toLocaleString());
	}

	// hide the edit news section initially
	$("#edit-news").hide();

  $("#close-edit-btn").click(function() {
    $("#edit-news").hide();
  });
  
});


