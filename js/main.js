const submitBtn = document.getElementById('checkDay');
const resetBtn = document.getElementById('reset');
const text = document.getElementById('textDiv');
const container = document.getElementById('containerDiv');
const img = document.getElementById('imgDiv')

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

text.innerHTML="";
container.innerHTML="";
img.innerHTML="";

submitBtn.addEventListener('click', ()=> {
    today = new Date()
    dayToday = today.getDay()
    container.innerHTML=(daysOfWeek[dayToday])
    if (dayToday === 5) {
        text.innerText="Yes. It is:"
        img.innerHTML='<img src="'
    } else {
        text.innerText="No. It is:"
    }
});

resetBtn.addEventListener('click', () => {
    text.innerText="";
    container.innerHTML="";
    img.innerHTML=""
})