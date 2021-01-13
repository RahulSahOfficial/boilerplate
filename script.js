const htmltop="<!DOCTYPE html>\n<html lang=\"en\">\n<head>"
const utf8="\n    <meta charset=\"UTF-8\">"
const metawidth="\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> "
const bootstrap_css="\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1\" crossorigin=\"anonymous\">"
const font_awesome="\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">"
const animate="\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"/>"
const googlefont="\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\" rel=\"stylesheet\">"
const css_link="\n    <link rel=\"stylesheet\" href=\"styles.css\">"
const html_head_end="\n</head>\n<body>"
const links="\n    <div class=\"links\">\n        <ul>\n            <li><a target=\"_blank\" href=\"https://github.com/RahulSahOfficial\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>\n            <li><a target=\"_blank\" href=\"https://www.instagram.com/developer_sah/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            <li><a target=\"_blank\" href=\"https://twitter.com/developer_sah\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n        </ul>\n    </div>"
const footer="\n    <div class=\"footer\">\n        <p>© Copyright <span id=\"year\">2021</span> &nbsp;&nbsp;|&nbsp;&nbsp; Created By Rahul Sah 🇮🇳</p>\n    </div>"
const bootstrap_js="\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\" crossorigin=\"anonymous\"></script>"
const jquery="\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>"
const js_link="\n    <script src=\"script.js\"></script>"
const htmlend="\n</body>\n</html>"

const css_reset="*{\n	margin:0;\n	padding: 0;\n	box-sizing: border-box;\n	font-family: 'Roboto', sans-serif;\n}\nbody,input,button,select,textarea{\n	font:400 1rem Roboto;\n	color: #222222;\n}\na{\n	text-decoration: none;\n}\na:link,a:active,a:visited{\n	color:#6A26CD;\n}\na:hover{\n	color:#431488;\n}\nul,ol{\n	margin: 0 0 1rem;\n	padding: 0 0 0 1rem;\n}\ntable{\n	border-collapse: collapse;\n}\nth{\n	text-align:left;\n}\ntd{\n	vertical-align: middle;\n}\nbody\n{\n	width: 100%;\n	min-height: 100vh;\n	background-image: linear-gradient(45deg, #2196F3, #3F51B5);\n}"
const css_links="\n.links\n{\n	position: fixed;\n	bottom: 5rem;\n	right: 2rem;\n}\n.links ul\n{\n	list-style-type: none;\n}\n.links ul li a i\n{\n	font-size: 2rem;\n	color: #efefef;\n    opacity: 0.8;\n	margin: 0.5rem 0;\n	transition: 0.3s;\n}\n.links ul li a i:hover\n{\n	transform: scale(1.3);\n	color: white;\n    opacity: 1;\n}"
const css_footer="\n.footer\n{\n	position: fixed;\n	bottom: 0;\n	width: 100%;\n	background: #000000db;\n    padding: 0.5rem;\n	color: white;\n	text-align: center;\n}\n.footer p\n{\n	font-size: 1.1rem;\n	cursor: pointer;\n	font-weight: 300;\n	margin-bottom: 0;\n}"
const media_query="\n@media only screen and (max-width: 500px){\n	.footer p\n	{\n		font-size: 0.9rem;\n	}\n	.links {\n		top: 1rem;\n		right: 1rem;\n		height: 3rem;\n	}\n	.links ul {\n		display: inline-flex;\n	}\n	.links ul li\n	{\n		margin: 0 0.5rem;\n	}\n}"


const js_ready="alert(\"Jquery Linked Properly\")";
const jquery_ready="$(document).ready(function(){\n	alert(\"Jquery Linked Properly\")\n})"


generate()
function generate()
{
	htmlcode=""
	csscode=""
	jscode=""
	$("#htmlcode").text("")
	$("#csscode").text("")
	$("#jscode").text("")

	htmlcode=htmltop
	if($("#utf").prop("checked"))
		htmlcode+=utf8
	if($("#meta_width").prop("checked"))
		htmlcode+=metawidth
	if($("#bootstrap_css").prop("checked"))
		htmlcode+=bootstrap_css
	if($("#font_awesome").prop("checked"))
		htmlcode+=font_awesome
	if($("#animate").prop("checked"))
		htmlcode+=animate
	if($("#google_font").prop("checked"))
		htmlcode+=googlefont
	if($("#title").prop("checked"))
	{
		titlename=$("#title_name").val()
		if(titlename.length>0)
			title="\n    <title>"+titlename+"</title>"
		else
			title="\n    <title>New Blank Project</title>"
		htmlcode+=title
	}
	if($("#css_link").prop("checked"))
		htmlcode+=css_link
	htmlcode+=html_head_end
	if($("#social_links").prop("checked"))
		htmlcode+=links
	if($("#footer").prop("checked"))
		htmlcode+=footer

	if($("#bootstrap_js").prop("checked"))
		htmlcode+=bootstrap_js
	if($("#jquery").prop("checked"))
		htmlcode+=jquery
	if($("#link_js").prop("checked"))
		htmlcode+=js_link
	htmlcode+=htmlend
	$("#htmlcode").text(htmlcode)


	if($("#css_link").prop("checked"))
	{
		if($("#css_reset").prop("checked"))
		csscode+=css_reset
		if($("#social_links").prop("checked"))
			csscode+=css_links
		if($("#footer").prop("checked"))
			csscode+=css_footer
		if($("#media_query").prop("checked"))
			csscode+=media_query
		$("#csscode").text(csscode)
	}

	if($("#link_js").prop("checked"))
	{
		if($("#jquery").prop("checked"))
			jscode+=jquery_ready
		else
			jscode+=js_ready
		$("#jscode").text(jscode)
	}
	
}

function titleset()
{
	titlename=$("#title_name").val()
	if(titlename.length>0)
		$("#title").prop("checked",true)
	else
		$("#title").prop("checked",false)
	generate()
}

function copytext(obj,name)
{
	copiedstr=$("#copypastbox");
	if(name=="html")
		copiedstr.text($("#htmlcode").text())
	if(name=="css")
		copiedstr.text($("#csscode").text())
	if(name=="js")
		copiedstr.text($("#jscode").text())
	copiedstr.select();
  	document.execCommand("copy");
  	$(obj).addClass("animate__headShake")
  	setTimeout(function(){
  		$(obj).removeClass("animate__headShake")
  	},1000)
}
