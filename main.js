

function Login(){
    UserName1 = document.getElementById("User1").value
UserName2 = document.getElementById("User2").value
    UserName1 = document.getElementById("User1").value
    localStorage.setItem("UserName1", UserName1)
    
    UserName2 = document.getElementById("User2").value
    localStorage.setItem("UserName2", UserName2)

    window.location = "game_screen.html"

   
}