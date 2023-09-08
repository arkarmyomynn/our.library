
let time = new Date().getHours();

switch (time) { 
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        document.getElementById("greet").innerHTML= "Good Morning!";
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      document.getElementById("greet").innerHTML= "Good Afternoon!";
        break
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
      document.getElementById("greet").innerHTML= "Good Evening!";

        break;
}
function category() {
    console.log("hi");
    $(".mainbody").hide();
    $('.categories').show();
}
function homebody() {
    console.log("hi");
    $(".mainbody").show();
    $(".categories").hide();
}
