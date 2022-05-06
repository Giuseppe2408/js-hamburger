
    const div = document.querySelector("div.header-right");
    let ul= document.querySelector('ul')
    let li= document.querySelector('li')
    div.addEventListener('click',
        function() {
            ul.style.display = "block"
            li.style.float = "none"
            li.style.display = "block"
        }
    );