var strFirstLink
var strLastLink
var TotLink
var printMe
var indicate
var backMe
var pageHeader

function configTitleBar(){
	if(document.getElementById('title')){
		document.getElementById('title').innerHTML=pageHeader
		}
		
		TotLink='';
if (strFirstLink !='')
	{
		TotLink=" &raquo; " + "<strong>" + strFirstLink + "</strong>"
		}
		if (strLastLink !='')
	{
		TotLink=TotLink + " &raquo; " + "<strong>" + strLastLink + "</strong>"
		}	
        document.getElementById('navigation').innerHTML = "<img src='../../Images/homeIcon.png'  align='absmiddle' /> <a href='../../Redirect.aspx' class='home'>Home</a>"+TotLink
	}
	
function sldLft(){
$(".cutMark a").click(function(){
	//$("#LeftMenu").animate( { paddingLeft: padLeft, paddingRight: padRight}, { queue:false, duration:100 } )
	})
}

function loadTopBar(){
	 if ($("#topBarBg").is(":hidden")) {
	 	$("#topBarBg").slideDown("slow");
	 }
	 
	 $("#topBarBg .close").click(function(){
	 	$("#topBarBg").slideUp();
	 });
	}
	
<!--Menu Sliding-->	
function menuCtr(){
		$("#MnCtr a").click(function(){
							
			if($(this).hasClass('closed')==false){
				$("#LeftMenu #LeftPannel:eq(0)").hide()
				$("#LeftMenu .heading").text(" ")
				$("#LeftMenu").animate({width: "23px"}, "fast" );
				$("#MnCtr").animate({marginLeft:"2px"},"fast");
				$(this).addClass("closed")
				}
				
			else{											 
			   $("#LeftMenu #LeftPannel:eq(0)").fadeIn()  
			   $("#LeftMenu").animate({width:"201px"}, "fast");
			   $("#LeftMenu .heading").text("Related Activities")								  
			   $("#MnCtr").animate({marginLeft:"180px"},"fast");
			   $(this).removeClass("closed")
			   }
		});
}

myArray=new Array('sub1','sub2','sub3','sub4','sub5')
function add(){
for(i=0;i<myArray.length;i++){
	if(document.getElementById(myArray[i]).style.display == "none"){
	document.getElementById(myArray[i]).style.display = "";
	break;
	}
	}
}

function remove(){
for(i=0;i<myArray.length;i++){
	if(document.getElementById(myArray[i]).style.display == ""){
	document.getElementById(myArray[i]).style.display = "none";
	break;
	}
	}
}

function show(me){
		if(document.getElementById(me).style.display=="none")
		{
			document.getElementById(me).style.display=""
		}
		else if(document.getElementById(me).style.display==""){
			document.getElementById(me).style.display="none"
		}
	}
function hide(me)
	{
		document.getElementById(me).style.display="none"
	}
	
$(document).ready(function(){	
//This script is adjust the table width	
     var winW = $(window).width();
    // $('.autoFit').css('width', Number(winW) - 245);
	 if ($("#MnCtr a").hasClass('closed') == false) {
              $('.autoFit').css('width', Number(winW) -50);
          }
          else {
			 
              $('.autoFit').css('width', Number(winW) - 230);
          }
     $("#MnCtr a").click(function () {
          //var winW = $(window).width();
          if ($(this).hasClass('closed') == false) {
              $('.autoFit').css('width', Number(winW) -50);
          }
          else {
			 
              $('.autoFit').css('width', Number(winW) - 230);
          }
      });
//This script is adjust the tables width of report pages	
     var contW = $('#content').width();
     $('.tableFit').css('width', Number(contW)-190);	 

	$("#LeftMenu #LeftPannel:eq(0)").hide()
	$("#LeftMenu .heading").text(" ")
	$("#LeftMenu").animate({width: "23px"}, "fast" );
	$("#MnCtr").animate({marginLeft:"2px"},"fast");
	$(this).addClass("closed")
	$("#MnCtr a").addClass("closed")


});

function PrintPage() {
		 var windowName = "PrintPage";
		 var wOption 	= "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
		 var wWinHTML 	= $("#viewTable").html();
		 var wWinPrint 	= window.open("",windowName,wOption);
			wWinHTML	= wWinHTML.replace(/onclick=/gi,"");
			wWinHTML	= wWinHTML.replace(/<a/gi,"<span");
			wWinHTML	= wWinHTML.replace(/a>/gi,"span>");
			wWinHTML	= wWinHTML.replace(/style=/gi,"styles=");
			wWinPrint.document.open();		
			wWinPrint.document.write("<html><head><title>Print Document</title><link href='../../Styles/print.css' rel='stylesheet' type='text/css' /></head><body>");
			wWinPrint.document.write("<div style='border-bottom:#000 solid 2px; padding-bottom:5px;'><img src='../../Images/JIMMS_Logo.png' width='439' height='65' /></div>");
			wWinPrint.document.write("<div id='printHeader'>" + pageHeader + "</div>");
			wWinPrint.document.write("<div id='printContainer'>");
			wWinPrint.document.write(wWinHTML);
			wWinPrint.document.write("</div></body></html>");
			wWinPrint.document.close();
			wWinPrint.focus();
		return wWinPrint;
	}