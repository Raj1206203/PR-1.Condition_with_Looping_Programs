
function handleMyMarksheet() {
    if (isDisplay) {
        MyMarksheet.classList.add('d-none');
        isDisplay = false;
    } else {
        MyMarksheet.classList.remove('d-none');
        isDisplay = true;
    }
}

const MyMarksheet = document.getElementById('MyMarksheet');
let isDisplay = false;
const name = document.getElementById('name');
const rollno = document.getElementById('rollno');
const html = document.getElementById('html');
const javascript = document.getElementById('javascript');
const bootstrap = document.getElementById('bootstrap');
const reactjs = document.getElementById('reactjs');

// Display Variables

const nameDisplay = document.getElementById('name_display');
const rollnoDisplay = document.getElementById('rollno_display');
const htmlDisplay = document.getElementById('html_display');
const javascriptDisplay = document.getElementById('javascript_display');
const bootstrapDisplay = document.getElementById('bootstrap_display');
const reactjsDisplay = document.getElementById('reactjs_display');
const total = document.getElementById('total');
const gradeDisplay = document.getElementById('grade_display');
const perDisplay = document.getElementById('per_display');

function handleSubmit() {
    nameDisplay.innerText = name.value;
    rollnoDisplay.innerText = rollno.value;
    
    htmlDisplay.innerText = html.value;
    javascriptDisplay.innerText = javascript.value;
    bootstrapDisplay.innerText = bootstrap.value;
    reactjsDisplay.innerText = reactjs.value;
    total.innerText = Number(htmlDisplay.innerText) + 
    Number(javascriptDisplay.innerText) + 
    Number(bootstrapDisplay.innerText) + 
    Number(reactjsDisplay.innerText);

    let per = (total.innerText) / 400 * 100;

    perDisplay.innerText = per.toFixed(2) + '%';

    let grade = "";

    if (per >= 80) {
        grade = 'A';
    }else if(per >= 60 && per<=80){
        grade = 'B';
    }else if(per >= 40 && per<=60){
        grade = 'C';
    }else{
        grade = 'Fail';
    }

    gradeDisplay.innerText = grade;


}