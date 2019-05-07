function closeDialog(){
    document.getElementById('About').style.display="none";
    document.getElementById('About').close();
}


document.addEventListener('keyup', function(e) {
    if (e.code === "Escape") {//check
        closeDialog();
    }
});


$(document).ready(function(){
    var modal= document.getElementById("About");
    window.onclick = function (event){
        if(event.target === modal) {
            modal.style.display = "none";
            modal.close();
        }
    };
});
