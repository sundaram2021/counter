
let h1 = document.querySelector('h1').innerText;



document.addEventListener('click', e => {
    let clickedBtn = e.target.className;
    if (clickedBtn === 'increase-btn') {
        document.querySelector('h1').innerText = ++h1;
        if(h1>0){
            document.querySelector('h1').style.color = "green";
        }

    }
    if (clickedBtn === 'decrease-btn') {
        document.querySelector('h1').innerText = --h1;
        if(h1<0){
            document.querySelector('h1').style.color = "red";
        }

    }
    if(clickedBtn === 'reset-btn'){
        h1 = 0;
        document.querySelector('h1').innerText = h1;
        document.querySelector('h1').style.color = "grey";
    }
})
