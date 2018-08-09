// var time = document.getElementById('time');

// var date = new Date();

// time.innerHTML = date;



figure, article, section, aside, footer, header, nav {
	display : block;
}
body {
	width : 100%;
	background-color : #f1f1f1;
	margin : 0;
	font-family : Helvetica, Arial, sans-serif;
	overflow : auto;
}
#header {
	text-align : center;
	color : #0f0;
}
.nav ul {
	list-style-type : none;
	margin : 0;
	padding : 0;
	background-color : #333;
	overflow : auto;
}
.nav ul li {
	display : inline;
	float : left;
}
.nav li a {
display : block;
padding : 14px 16px;
color : white;
text-decoration : none;
text-align : center;
font-size : 14pt;
}
.nav ul li:hover {
background-color : #4caf50;
}
#bg-image {
width : 100%;
}
.container {
width : 100%;
}
.contain {
width : 100%;
margin : 0 auto;
clear : both;
}
#science, #arts, #entre {
float : left;
width : 25%;
margin-left : 2%;
}
#science figure, #arts figure, #entre figure {
width : 100%;
}
#science img, #arts img, #entre img {
width : 100%;
}
.contain figcaption {
background-color : #fff;
text-align : center;
padding : 15px 0;
letter-spacing : 2px;
width : inherit;
}
.contain a {
text-decoration : none;
color : #000;
}


#alumni figure {
margin : auto;
width : 100%;
}
#alumni img {
width : 80%;
margin : 0 auto;
margin-left : 10%;
margin-top : 1%;
}
#alumni figcaption {
width : inherit;
background-color : #fff;
text-align : center;
padding : 3px 0;
letter-spacing : 2px;
}
.aside {
width : 100%;
min-width : 320px;
}
.aside aside {
margin-left : 50px;
float : left;
width : 40%;
border : 1px solid #4caf50;
background-color : #fff;
margin-bottom : 20px;
}
.aside h2 {
text-align : center;
color : blue;
}
.aside li {
margin-top : 12px;
list-style-type : square;
}
.fn {
margin-left : 30px;
margin-top : 30px;
}
.article {
width : 80%;
margin : auto;
}
.details {
text-align : center;
}
.form {
float : right;
background-color : #fff;
width : 40%;
margin-right : 50px;
margin-bottom : 20px;
min-width : 320px;
padding-top : 20px;
}
.form input:not(#submit) {
display : block;
border : none;
border-bottom : 2px solid #999;
width : 80%;
box-sizing : border-box;
position : relative;
}
#submit {
background-color : #4caf50;
border : none;
padding : 6px 10px;
color : #fff;
box-sizing : border-box;
margin-bottom : 40px;
}
#submit:hover {
cursor : pointer;
box-shadow : 5px 5px 2px grey ;
}
.form input:focus:not(#submit) {
border-bottom-color : #4caf50;
padding : 10px 5px 5px 5px;
}
footer {
clear : both;
background-color : #333;
margin : 0;
height : 100%;
color : #fff;
}
footer .footer {
clear : both;
font-size : 14px;
color : #fff;
padding : 0 20%;
}
.contact {
float : right;
padding-right : 20%;
}
#time {
margin-left : 20px;
font-size : 12px;
color : #fff;
}
@media screen and (max-width : 720px) {
.form {
float : none;
width : 100%;
margin : 80px auto;
clear : both;
min-width : 320px;
}
.aside {
float : none;
width : 80%;
margin : 20px auto;
min-width : 320px;
}
.aside aside {
clear : both;
width : 100%;
margin : 40px auto;
}
}
@media screen and (max-width : 615px) {
#alumni {
width : 80%;
}
}
@media screen and (max-width : 615px) {
#science, #arts, #entre {
width : 80%;
}
}