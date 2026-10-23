function beforesubmit(){
    let outputdate=document.querySelector(".OutputDate");
    let inputdate=document.querySelector(".InputDate");
    console.log(inputdate.value);
    
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value=formattedDate;
    console.log(outputdate.value);
    return true;
}