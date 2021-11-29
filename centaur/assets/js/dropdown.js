//dropdown function
function dropDown1() {
    document.getElementById("dropdown-1").classList.toggle("show");
}
//close dropdown menu
window.onClick = function(event){
    if(!event.target.matches('dropdownbtn')){
        var dropdowns = document.getElementsByClassName(".dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var open = dropdowns[i];
            if(open.classList.contains('show')){
                open.classList.remove('show');
            }
        }
    }
} 

function dropDown2() {
    document.getElementById("dropdown-2").classList.toggle("show");
}
//close dropdown menu
window.onClick = function(event){
    if(!event.target.matches('dropdownbtn')){
        var dropdowns = document.getElementsByClassName(".dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var open = dropdowns[i];
            if(open.classList.contains('show')){
                open.classList.remove('show');
            }
        }
    }
} 

function dropDown3() {
    document.getElementById("dropdown-3").classList.toggle("show");
}
//close dropdown menu
window.onClick = function(event){
    if(!event.target.matches('dropdownbtn')){
        var dropdowns = document.getElementsByClassName(".dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var open = dropdowns[i];
            if(open.classList.contains('show')){
                open.classList.remove('show');
            }
        }
    }
} 