// 아이디 비밀번호, 비밀번호 재확인
var ipId;
var ipPw;
var ipPw_re;
// 이름
var ipUser_name;
// 이메일
var ipEmail;
// 생년월일
var ipBirth_y;
var ipBirth_m;
var ipBirth_d;
// 성별
var ipSexes; // 주의
// 전화번호
var ipTel_1;
var ipTel_2;
var ipTel_3;

var id;
var pw;
var pw_re;
var userName;
var email;
var birth_y;
var birth_m;
var birth_d;
var tel_1;
var tel_2;
var tel_3;

var sexes;
var sex;

window.onload = function(){
    ipId=document.getElementById("id");
    ipPw=document.getElementById("pw");
    ipPw_re=document.getElementById("pw_re");
    ipUser_name=document.getElementById("user_name");
    ipEmail=document.getElementById("email");
    ipBirth_y=document.getElementById("birth_y");
    ipBirth_m=document.getElementById("birth_m");
    ipBirth_d=document.getElementById("birth_d");
    ipTel_1=document.getElementById("tel_1");
    ipTel_2=document.getElementById("tel_2");
    ipTel_3=document.getElementById("tel_3");

    ipSexes=document.getElementById("sex"); // 주의
}

function check(){  
    id=ipId.value;
    pw=ipPw.value;
    pw_re=ipPw_re.value;
    userName=ipUser_name.value;
    email=ipEmail.value;
    birth_y=ipBirth_y.value;
    birth_m=ipBirth_m.value;
    birth_d=ipBirth_d.value;
    tel_1=ipTel_1.value;
    tel_2=ipTel_2.value;
    tel_3=ipTel_3.value;
    
    for(var i=0;i<inSexes.length;i++){
        // inSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if(inSexes[i].checked == ture){
            sex = inSexes[i].value; // 해당 radio 버튼의 값을 변수에 저장장
        }
    }

    var userInfo =
    "ID: "+id+"\n"
    +"PASSWARD: "+pw+"\n"
    +"PASSWARD_RE: "+pw_re+"\n"
    +"UserName: "+userName+"\n"
    +"E-Mail: "+email+"\n"
    +"Birth_Y: "+birth_y+"\n"
    +"Birth_M: "+birth_m+"\n"
    +"Birth_D: "+birth_d+"\n"
    +"Tel_1: "+tel_1+"\n"
    +"Tel_2: "+tel_2+"\n"
    +"Tel_3: "+tel_3+"\n"
    +"성별: "+sex ;

    alert(userInfo);


    if(checkId() && checkPw() && checkPw_re()&&checkUserName()&&checkEmail()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}

function checkId(){
    if(id.length>=4 && id.length<=12){
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}
function checkPw(){
    if(pw.length>=4 && pw.length<=12){
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function checkPw_re(){
    if(pw_re.length>=4 && pw_re.length<=12){
        console.log("ok pwre");
        return true;
    } else {
        console.log("no pwre");
        return false;
    }
}
function checkEqualPwAndPwRe(){
    if(pw == pw_re){
        console.log("ok 비번,비번확인 같음");
        return true;
    } else {
        console.log("비밀번호가 같지 않습니다");
        return false;
    }
}
function checkUserName(){
    if(userName.length>=4 && userName.length<=12){
        console.log("ok name");
        return true;
    } else {
        console.log("no name");
        return false;
    }
}
function checkEmail(){
    if(email.length>=4 && email.length<=12){
        console.log("ok email");
        return true;
    } else {
        console.log("no email");
        return false;
    }
}
