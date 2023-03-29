function reload() {
    document.location.reload()
}
function showArticle(articleID, buttonID) {
    document.querySelectorAll(".colorBtnHover").forEach(function(button) {
        button.classList.remove("colorBtnHover")
    })
    document.querySelectorAll(".art").forEach(function(art) {
        art.style.display = "none"
    })
    document.getElementById(buttonID).classList.add("colorBtnHover")
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

// function article1() {
//     document.getElementById("btnArt1").classList.add("colorBtnHover")
//     document.getElementById("btnArt2").classList.remove("colorBtnHover")
//     document.getElementById("btnArt3").classList.remove("colorBtnHover")
//     document.getElementById("btnArt4").classList.remove("colorBtnHover")
//     document.getElementById("art1").style.display = "inline"
//     document.getElementById("art2").style.display = "none"
//     document.getElementById("art3").style.display = "none"
//     document.getElementById("art4").style.display = "none"
// }
// function article2() {
//     document.getElementById("btnArt1").classList.remove("colorBtnHover")
//     document.getElementById("btnArt2").classList.add("colorBtnHover")
//     document.getElementById("btnArt3").classList.remove("colorBtnHover")
//     document.getElementById("btnArt4").classList.remove("colorBtnHover")
//     document.getElementById("art1").style.display = "none"
//     document.getElementById("art2").style.display = "inline"
//     document.getElementById("art3").style.display = "none"
//     document.getElementById("art4").style.display = "none"
// }
// function article3() {
//     document.getElementById("btnArt1").classList.remove("colorBtnHover")
//     document.getElementById("btnArt2").classList.remove("colorBtnHover")
//     document.getElementById("btnArt3").classList.add("colorBtnHover")
//     document.getElementById("btnArt4").classList.remove("colorBtnHover")
//     document.getElementById("art1").style.display = "none"
//     document.getElementById("art2").style.display = "none"
//     document.getElementById("art3").style.display = "inline"
//     document.getElementById("art4").style.display = "none"
// }
// function article4() {
//     document.getElementById("btnArt1").classList.remove("colorBtnHover")
//     document.getElementById("btnArt2").classList.remove("colorBtnHover")
//     document.getElementById("btnArt3").classList.remove("colorBtnHover")
//     document.getElementById("btnArt4").classList.add("colorBtnHover")
//     document.getElementById("art1").style.display = "none"
//     document.getElementById("art2").style.display = "none"
//     document.getElementById("art3").style.display = "none"
//     document.getElementById("art4").style.display = "inline"
// }