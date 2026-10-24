let captchachecked = false;
function beforesubmit(event){
    if(captchachecked){
        let outputdate=document.querySelector(".OutputDate");
        let inputdate=document.querySelector(".InputDate");
        console.log(inputdate.value);
    
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
        outputdate.value=formattedDate;
        console.log(outputdate.value);
        return true;
    }else{
        alert(" Please check the recatcha box to submit the lead");
        event.preventDefault();
    }
   
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 

} setInterval(timestamp, 500); 

function captchasuccess(){
    captchachecked=true;
}