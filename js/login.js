/**
 * Created by koen on 17-10-14.
 */
getDate();
var cUsers = 0;
var open = false;
var finalUser;

/**
 * Sets the date in left top corner with custom format
 */
function getDate(){
    var faCal = '<i class="fa fa-calendar-o"></i> ';
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"];

    var today = new Date();
    var month = monthNames[today.getMonth()];
    var d = dayNames[today.getDay()];
    var date = today.getDate();

    document.getElementById('date-header').innerHTML = faCal + d +' '+date+' '+ month;
}

/**
 * Action called when clicked on image.
 *
 * @param self
 */
function userClick(self){
    //username = $(self).attr('username');
	var id = $(self).attr('id');
	username = id.substring(0, id.indexOf('-'));

    finalUser = username;
    alert("USER###" + finalUser);

    if(open == false){
        open = username;

        //Open clicked one
        $("#"+username+"-container").css('margin-right', '350px');
        $('#'+username+'-password').css({
            opacity: 0,
            display: 'inline-block'
        }).animate({opacity:1},600);
		$('#'+username+'-password').focus();
    } else {
		if(open == username)
		{
			$('#'+open+'-password').fadeOut(400, function() {
				$('#'+open+'-password').val('');
				$('#'+open+'-container').css('margin-right', '0px');
				open = false;
			});
		}
		else
		{
			$('#'+open+'-password').fadeOut(400, function() {
				$('#'+open+'-password').val('');
				$('#'+open+'-container').css('margin-right', '0px');

				//Open clicked one
				$("#"+username+"-container").css('margin-right', '350px');
				$('#'+username+'-password').css({
					opacity: 0,
					display: 'inline-block'
				}).animate({opacity:1},600);
				$('#'+username+'-password').focus();
				open = username;
			});
		}
    }
   }

/**
 * Fade in users
 */
function fadeUsers(){
    var userList = $('#user-list');
    userList.fadeIn(2000);
}

function passwordKeyPress(event){
	if (event.keyCode==13){ 
		send_login();
	} 
}
function keyUp(event){
	if(event.keyCode==27 && open != false) {
		$('#'+open+'-password').fadeOut(400, function() {
				$('#'+open+'-password').val('');
				$('#'+open+'-container').css('margin-right', '0px');
				open = false;
		});
	} else if(event.keyCode==13 && open == false && cUsers==1) {
		var id = $(".user-container").attr('id');
		var user = id.substring(0, id.indexOf('-'));
		userClick($('#'+user+"-image"));
	}

}
/**
 * Send the login data
 *
 * @returns {boolean}
 */
function send_login() {

    $('#'+finalUser+'-password').fadeOut(400, function() {
        $('#' + finalUser + '-password').val('');
        $('#' + finalUser + '-image').css('margin-right', '0px');
    });

    var password = document.getElementById(finalUser+"-password").value;

    if (username == "" && password == "") {
        mdm_error("Please input valid login info.");
    } else if (username == "") {
        mdm_error("Please choose a valid user.");
    } else if (password == "") {
        mdm_error("Please input a valid password.");
    } else {
        alert("LOGIN###" + password);
    }

    return false;
}

