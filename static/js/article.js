function closeContent(x) {
    x.parentNode.style.display="none";
}

function openContent(x) {
    var t = document.getElementById("right");
    document.getElementById("content").style.display="block";
    document.getElementById("content_h5").innerHTML = t.getElementsByTagName("h5")[x].innerHTML;
    document.getElementById("content_span").innerHTML = t.getElementsByTagName("span")[x].innerHTML;
    document.getElementById("content_p").innerHTML = t.getElementsByTagName("p")[x].innerHTML;
}