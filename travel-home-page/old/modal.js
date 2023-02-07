var span = document.getElementsByClassName("close")[0];

$(markers).each(function(i, e) {
    $(".modals").append(
        '<div id= "' + e.name + '" class="modal">' + 
            '<div class="modal-content">' + 
            '<span onclick="hide(\''+ e.name +'\')" class="close">&times;</span>' + 
            '<p>' + e.name + '</p>' + 
            '</div>' + 
        '</div>'
    )
})

$(markers).each(function(i, e) {
    e.element = document.getElementById(e.name);
})
let markerElements = markers.map(({element})=>element);

// When the user clicks on <span> (x), close the modal
function hide(location) {
    const entry = markers.find(el => el.name === location);
    entry.element.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (markerElements.includes(event.target)) {
        event.target.style.display = "none";
    }
}