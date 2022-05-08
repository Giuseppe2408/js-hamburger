
    let barra = document.querySelector(".fa-bars");
    let hamburger = document.querySelector(".hamburger-menu");
    let times = document.querySelector(".fa-times")

    barra.addEventListener ('click',

        function () {
            hamburger.style.display = 'block';
        }

    )

    times.addEventListener ('click',
    
        function () {
           hamburger.style.display = 'none';
        }
        
    
    )
