let backbtn = document.querySelector('.container .back-btn');
let input = document.querySelector('.container .input-box .input-value');
let result = document.querySelector('.container .input-box .result');
let container = document.querySelector('.container');
let allbtns = document.querySelectorAll('.container .btn');
let flag = 0;
let op = 0;
let backSpace = () => {
        if(input.value[input.value.length - 1] == '('){
                flag = 0;
        } else if(input.value[input.value.length - 1] == ')'){
                flag = 1;
        } 
        if(input.value[input.value.length - 1] == '*' || input.value[input.value.length - 1] == '/' || input.value[input.value.length - 1] == '+' || input.value[input.value.length - 1] == '-' || input.value[input.value.length - 1] == '%'){
                op = 0;
        }
        input.value = input.value.substr(0, input.value.length - 1);
}


for (let item of allbtns) {
        item.addEventListener('click', (e) => {
                let btnText = e.target.innerHTML;
                if(btnText == '×' || btnText == '÷' || btnText == '+' || btnText == '-' || btnText == '%'){
                        if(op == 1){
                                input.value = input.value.substr(0, input.value.length - 1);
                                op = 0;
                        }
                }
                
                if (btnText == '×') {
                        btnText = '*';
                }

                if (btnText == '÷') {
                        btnText = '/';
                }

                if(btnText == '( )' && flag == 0){
                        btnText = '(';
                        if(input.value[input.value.length - 1] != '*' && input.value[input.value.length - 1] != '/' && input.value[input.value.length - 1] != '+' && input.value[input.value.length - 1] != '-' && input.value[input.value.length - 1] != '%')
                        {btnText = '*' + btnText;}
                        flag = 1;
                } else if(btnText == '( )' && flag == 1){
                        btnText = ')';
                        flag = 0;
                }

                if(btnText == '√'){
                        result.value = Math.sqrt(input.value, 2);
                }
                else{
                        input.value += btnText;
                }

                
                if(input.value[input.value.length - 1] == '*' || input.value[input.value.length - 1] == '/' || input.value[input.value.length - 1] == '+' || input.value[input.value.length - 1] == '-' || input.value[input.value.length - 1] == '%'){
                        op = 1;
                } else if(input.value[input.value.length - 1] != '*' || input.value[input.value.length - 1] != '/' || input.value[input.value.length - 1] != '+' || input.value[input.value.length - 1] != '-' || input.value[input.value.length - 1] != '%'){
                        op = 0;
                }
                
                if(input.value[0] == '%' || input.value[0] == '*' || input.value[0] == '/'){
                        input.value = input.value.substr(0, input.value.length - 1);
                }
        })
}

let calculate = () => {

        const query = "http://localhost:3333/users?display="+ encodeURIComponent(input.value);

        fetch(query)
        .then(response => {
                return response.json();
        })
        .then(message => {
                result.value = message.resu;
        })

}