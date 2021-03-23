function changeLength(){
    var length=document.getElementById("imp").value;
    var before=document.getElementById("before").value;
    var after=document.getElementById("after").value;
    var result= length*after/before;
    var a= document.getElementById("after");
    var atext= a.options[a.selectedIndex].text;
    document.getElementById("result").innerHTML="Kết quả: " +result +" " +atext;
}