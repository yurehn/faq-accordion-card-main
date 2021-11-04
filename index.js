let accordion_buttons = document.getElementsByClassName('accordion');
let active = null;

for (let button of accordion_buttons) {
    button.addEventListener('click', ()=> {

        let panel = button.nextElementSibling;
        // panel.classList.toggle('active');
        
        if (active != null) {
            active.classList.remove("active");
        }else{
            active = panel;
            panel.classList.add("active");
        }

    });
}

