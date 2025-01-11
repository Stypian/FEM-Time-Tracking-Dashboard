
//set time tracking data
const dynamicData = () => {
    const selection = document.querySelectorAll(".timeTrk__selection");
    const hrs = document.querySelectorAll(".timeTrk__hrs--num");
    const lst = document.querySelectorAll(".timeTrk__last--num");

    const updateData = (time) => {
        hrs.forEach((h, i) => h.innerHTML = timeData[i].timeframes[time].current);
        lst.forEach((l, i) => l.innerHTML = timeData[i].timeframes[time].previous);
    }
    for (let i = 0; i < selection.length; i++) {
        selection[i].addEventListener('click', function() {
            selection.forEach(s => s.classList.remove('timeTrk__selected')); 
            selection[i].classList.add('timeTrk__selected'); 
           switch (i) {
            case 0:
                updateData('daily');
                break;
            case 1:
                updateData('weekly');
                break;
            case 2:
                updateData('monthly');
                break;
           }
        })
    }
}
dynamicData();

//change ellipsis color on hover 
const changeEllipsis = () => {
    const ellipsis = document.querySelectorAll('.timeTrk__ellipsis');
    ellipsis.forEach(e => {
        e.addEventListener('mouseover', function() {
            e.src = 'images/icon-ellipsis-white.svg';
        })
        e.addEventListener('mouseout', function() {
            e.src = 'images/icon-ellipsis.svg';
        })
    })
}
changeEllipsis();

//click selection links with enter key
const clickWithEnter = () => {
    const selection = document.querySelectorAll(".timeTrk__selection");
    selection.forEach(s => {
        s.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        })
    })
}
clickWithEnter();