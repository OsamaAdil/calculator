let string = "";
let btn = document.querySelectorAll('.button');
let arr = Array.from(btn);
arr.forEach((e)=> {
    e.addEventListener('click', (elem) => {
        if(elem.target.innerHTML == '='){
            string = eval(string);
            string = parseFloat(string).toFixed(2);
        }
        else if(elem.target.innerHTML == 'C'){
            string = "";
        }
        else{
            string = string + elem.target.innerHTML;
        }
        document.querySelector('#inpId').value = string;
    })
});


