let D1 = null; let q1 = 0; let Q1 = 1;
let D2 = null; let q2 = 1; let Q2 = 0;
let D3 = null; let q3 = 1; let Q3 = 0;
let s = 0;
let S = 1;
let r1 = 1;
let r2 = 0;
let y1 = 0;
let y2 = 0;
let g1 = 0;
let g2 = 1;
let red1 = document.getElementById('r1');
let yellow1 = document.getElementById('y1');
let green1 = document.getElementById('g1');
let red2 = document.getElementById('r2');
let yellow2 = document.getElementById('y2');
let green2 = document.getElementById('g2');
let time = 2000;

let btns = document.getElementById('s');
let h1 = document.querySelector('#s h1')

function changes() {
    if (S == 1) {
        btns.style.backgroundColor = "green";
        S = 0;
        s = 1;
        h1.innerHTML = "On";
    }
    else if (S == 0) {
        btns.style.backgroundColor = "red";
        S = 1;
        s = 0;
        h1.innerHTML = "off";
    }
    console.log(s);
}

function run() {

    D1 = s && q2 || q3; D2 = s && q1 || Q3; D3 = q2 || Q1 && Q3;
    Q1 = D1; Q2 = D2; Q3 = D3;
    q1 = !Q1; q2 = !Q2; q3 = !Q3;
    r1 = Q1; y1 = q1 && q3; g1 = q1 && Q3;
    r2 = Q2; y2 = q2 && Q3; g2 = q2 && q3;

    if (r1 == 1) {
        red1.style.backgroundColor = "red";
        yellow1.style.backgroundColor = "black";
        green1.style.backgroundColor = "black";
    }
    if (r2 == 1) {
        red2.style.backgroundColor = "red";
        yellow2.style.backgroundColor = "black";
        green2.style.backgroundColor = "black";
    }
    if (g1 == 1) {
        red1.style.backgroundColor = "black";
        yellow1.style.backgroundColor = "black";
        green1.style.backgroundColor = "green";
    }
    if (g2 == 1) {
        red2.style.backgroundColor = "black";
        yellow2.style.backgroundColor = "black";
        green2.style.backgroundColor = "green";
    }
    if (y1 == 1) {
        red1.style.backgroundColor = "black";
        yellow1.style.backgroundColor = "yellow";
        green1.style.backgroundColor = "black";
    }
    if (y2 == 1) {
        red2.style.backgroundColor = "black";
        yellow2.style.backgroundColor = "yellow";
        green2.style.backgroundColor = "black";
    }



}
let interval = null;
let pn = document.querySelector('.power');
let j = 0;
let swit = "off";
var count = time;
count = count / 1000 ;
function down() {
    if (count < 10) {
        document.querySelector('#count h1').innerHTML = "0" + count;
        --count;
    }
    else {
        document.querySelector('#count h1').innerHTML = count;
        --count;
    }
    if (count < 0) {
        count = time / 1000 - 1;
    }
}
let u = 1;
let interval2 = null;
function start() {
    if (swit == "off") {
        if(u==1) setTimeout(run, 0);
        interval2 = setInterval(down, 1000);
        interval = setInterval(run, time);
        if(u!=1) count = time/1000 - 1;
        pn.style.backgroundColor = "red";
        swit = "on";
        u++;
    }
    else {
        if (interval) clearInterval(interval);
        if (interval2) clearInterval(interval2);
        //  p.style.backgroundColor = "red";
        pn.style.backgroundColor = "green";
        swit = "off";
    }


}

let range = document.getElementById('rng');
let spanval = document.getElementById('value');
function slider() {
    time = range.value;
    spanval.innerHTML = time;
    time = time * 1000;
    if (time < 10000) {
        document.querySelector('#count h1').innerHTML = "0" + time / 1000;
    } else {
        document.querySelector('#count h1').innerHTML = time / 1000;
    }
    count = time/1000 - 1;
}
let table = document.getElementById('tabledata');
let template = "";

function b(t) {
    if (t == true || t != 0) {
        return 1;
    }
    else return 0;
}

function clockfun() {
    call = run();

    template = "<tr> <td>" + b(S) + "</td><td>" + b(D1) + "</td><td>" + b(D2) + "</td><td>" + b(D3) + "</td><td>" + b(r1) + "</td><td>" + b(y1) + "</td><td>" + b(g1) + "</td><td>" + b(r2) + "</td><td>" + b(y2) + "</td><td>" + b(g2) + "</td></tr> "
        ;
    table.innerHTML += template;
}

