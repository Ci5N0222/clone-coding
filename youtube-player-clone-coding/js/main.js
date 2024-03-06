document.addEventListener('DOMContentLoaded', ()=>{
    const moreBtn = document.querySelector('.info .meta-data .moreBtn');
    const title = document.querySelector('.info .meta-data .title');

    moreBtn.addEventListener('click', () => {
        moreBtn.classList.toggle('clicked');
        title.classList.toggle('clamp');
    })
})

