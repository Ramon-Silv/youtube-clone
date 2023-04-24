var menu= document.getElementById("material-icons-menu");

        menu.addEventListener("click", function()//evento de click adicionado
        {
            if (document.getElementById("sidebar").style.display=== "none")//se o display for idêntico a none, confere se é verdadeiro
            {
            document.getElementById("sidebar").style.display= "block";
            document.getElementById("nav_main").style.width= "80%";
            document.getElementById("nav_main").style.left= "20%";
            document.getElementById("main").style.width= "80%";
            document.getElementById("main").style.left= "20%";
            document.getElementById("video_container").style.gridTemplateColumns= "32% 32% 32%";
            } 
            else{
            sidebar.style.display="none";
            document.getElementById("nav_main").style.width= "100%";
            document.getElementById("nav_main").style.left= "0%";
            document.getElementById("nav_main_ul").style.justifyContent= "space-around";
            document.getElementById("main").style.width= "100%";
            document.getElementById("main").style.left= "0%";
            document.getElementById("video_container").style.gridTemplateColumns= "25% 25% 25%";
            document.getElementById("video_container").style.justifyContent= "space-around";
            }
        })