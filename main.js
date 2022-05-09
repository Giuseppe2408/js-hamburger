
    let barra = document.querySelector("a > .fa-bars");
    let hamburger = document.querySelector(".hamburger-menu");
    let times = document.querySelector("a > .fa-times")

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
