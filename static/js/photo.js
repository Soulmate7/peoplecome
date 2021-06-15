function closeContent(x) {
    x.parentNode.style.display="none";
    document.getElementById("content").style.display="none";
}

function openContent(x) {
    document.getElementById("content").style.display="block";
    document.getElementById("content_p").style.display="block";
    document.getElementById("content_p").getElementsByTagName("img")[0].src=document.getElementsByTagName("img")[x].alt;
}