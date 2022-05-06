
    const div = document.querySelector("div.header-right");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    div.addEventListener('click',
        function() {
        li.append("home");
        li.append("Scopri il corso");
        li.append("la nostra storia");
        li.append("Iscriviti");
        ul.append(li);
        div.append(ul);
        }
    );