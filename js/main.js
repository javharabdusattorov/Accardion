let elAllBtn = document.querySelectorAll('.accardion-header');
let elAllContents = document.querySelectorAll('.accardion-body');

elAllBtn.forEach( (btn) => {
    btn.addEventListener('click', (e) => {

        elAllContents.forEach((acc) => {
            if(e.target.nextElementSibling !== acc &&
                 acc.classList.contains('active') 
              ) {
                acc.classList.remove('active');
                elAllBtn.forEach((btn) => btn.classList.remove('active'))
            }
        });

        const panel = btn.nextElementSibling;
        panel.classList.toggle('active')
        btn.classList.toggle('active');
    });
}); 

window.onclick = (e) => {
    if(!e.target.matches('.accardion-header')) {
        elAllBtn.forEach((btn) => btn.classList.remove('active'))
        elAllContents.forEach((acc) => acc.classList.remove('active'))
    }
}