function logIn(){
   player_name1=document.getElementById("player1_name_input").value;
    player_name2=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name",player_name1);
    localStorage.setItem("player2_name",player_name2);

    window.location="game_page.html";
}
 
