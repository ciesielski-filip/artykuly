function reload() {
    document.location.reload()
}
function showArticle(articleID, buttonID) {
    document.querySelectorAll(".colorBtnHover").forEach(function(button) {
        button.classList.remove("colorBtnHover")
    })
    document.getElementById(buttonID).classList.add("colorBtnHover")
    document.querySelectorAll(".art").forEach(function(art) {
        art.style.display = "none"
    })
    document.getElementById(articleID).style.display = "inline"
}
document.getElementById("btnArt1").addEventListener("click", function() {
    showArticle("art1", "btnArt1")
})

document.getElementById("btnArt2").addEventListener("click", function() {
    showArticle("art2", "btnArt2")
})

document.getElementById("btnArt3").addEventListener("click", function() {
    showArticle("art3", "btnArt3")
})

document.getElementById("btnArt4").addEventListener("click", function() {
    showArticle("art4", "btnArt4")
})