function myrefresh(){
	console.log('Fire auto!!!');
	window.location.reload();
}

$(document).ready(function(){
	console.log('Go to sleep!' + myDate);
	console.log($('#test')==undefined);
	console.log($('#test')==null);
	if($('.autoscroll input:first').val()==707 || $('.autoscroll input:first')==undefined){
		var myDate=new Date();
		console.log('Go to sleep!' + myDate);
		$("#content").before('<audio controls="controls" loop="loop"><source src="https://github.com/iccfish/12306_ticket_helper/raw/master/res/music2.ogg" type="audio/ogg"></audio>');
		setTimeout("myrefresh()", 2*60*1000);
	}else{
		console.log('Fire!!!');
		$("#content").before('<audio controls="controls" autoplay="autoplay" loop="loop"><source src="https://github.com/iccfish/12306_ticket_helper/raw/master/res/music2.ogg" type="audio/ogg"></audio>');
		alert.log('Go to sleep!');
	}
});