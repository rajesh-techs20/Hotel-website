

function showTime(){
    let now=new Date();
    document.getElementById("time").innerHTML=now.toLocateTimeString();
}
setInterval(showTime,1000);

function bookNow(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;

    alert("Thank you " + name + "! Your " + room + " room is booked succesfully.please visit us for further information ");
    window.location.href="index.html";
}



 