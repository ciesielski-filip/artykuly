function article1() {
    document.getElementById("btnArt1").classList.add("hover")
    document.getElementById("btnArt2").classList.remove("hover")
    document.getElementById("btnArt3").classList.remove("hover")
    document.getElementById("btnArt4").classList.remove("hover")
    document.getElementById("art1").style.display = "inline"
    document.getElementById("art2").style.display = "none"
    document.getElementById("art3").style.display = "none"
    document.getElementById("art4").style.display = "none"
}
function article2() {
    document.getElementById("btnArt1").classList.remove("hover")
    document.getElementById("btnArt2").classList.add("hover")
    document.getElementById("btnArt3").classList.remove("hover")
    document.getElementById("btnArt4").classList.remove("hover")
    document.getElementById("art1").style.display = "none"
    document.getElementById("art2").style.display = "inline"
    document.getElementById("art3").style.display = "none"
    document.getElementById("art4").style.display = "none"
}
function article3() {
    document.getElementById("btnArt1").classList.remove("hover")
    document.getElementById("btnArt2").classList.remove("hover")
    document.getElementById("btnArt3").classList.add("hover")
    document.getElementById("btnArt4").classList.remove("hover")
    document.getElementById("art1").style.display = "none"
    document.getElementById("art2").style.display = "none"
    document.getElementById("art3").style.display = "inline"
    document.getElementById("art4").style.display = "none"
}
function article4() {
    document.getElementById("btnArt1").classList.remove("hover")
    document.getElementById("btnArt2").classList.remove("hover")
    document.getElementById("btnArt3").classList.remove("hover")
    document.getElementById("btnArt4").classList.add("hover")
    document.getElementById("art1").style.display = "none"
    document.getElementById("art2").style.display = "none"
    document.getElementById("art3").style.display = "none"
    document.getElementById("art4").style.display = "inline"
}