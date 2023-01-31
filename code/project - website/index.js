function myFunction() {
    let fname = document.getElementById('fname').value ;
    let lname = document.getElementById('lname').value ;
    document.getElementById('placeholder').innerHTML=fname+' '+lname;
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
}

function addition() {
    let numb1 = document.getElementById('finput').value ;
    let numb2 = document.getElementById('sinput').value ;
    document.getElementById('result').value=Number(numb1)+Number(numb2);
    document.getElementById('finput').value = '';
    document.getElementById('sinput').value = '';
}

function subtraction() {
    let numb1 = document.getElementById('finput').value ;
    let numb2 = document.getElementById('sinput').value ;
    document.getElementById('result').value=Number(numb1)-Number(numb2);
    document.getElementById('finput').value = '';
    document.getElementById('sinput').value = '';
}

function multiplication() {
    let numb1 = document.getElementById('finput').value ;
    let numb2 = document.getElementById('sinput').value ;
    document.getElementById('result').value=Number(numb1)*Number(numb2);
    document.getElementById('finput').value = '';
    document.getElementById('sinput').value = '';
}

function division() {
    let numb1 = Number(document.getElementById('finput').value);
    let numb2 = Number(document.getElementById('sinput').value);
    if(numb2 === 0) {
        document.getElementById('result').value='Division by 0 is not possible.';
    } else {
        document.getElementById('result').value=numb1/numb2;
    }
    document.getElementById('finput').value = '';
    document.getElementById('sinput').value = '';
}
