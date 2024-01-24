let backbutton = document.querySelector('.container .back-button');
let input = document.querySelector('.container .input-box .input-value');
let result = document.querySelector('.container .input-box .result');
let container = document.querySelector('.container');
let allbuttons = document.querySelectorAll('.container .button');
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


for (let item of allbuttons) {
        item.addEventListener('click', (e) => {
                let buttonText = e.target.innerHTML;
                if(buttonText == '×' || buttonText == '÷' || buttonText == '+' || buttonText == '-' || buttonText == '%'){
                        if(op == 1){
                                input.value = input.value.substr(0, input.value.length - 1);
                                op = 0;
                        }
                }
                
                if (buttonText == '×') {
                        buttonText = '*';
                }

                if (buttonText == '÷') {
                        buttonText = '/';
                }

                if(buttonText == '( )' && flag == 0){
                        buttonText = '(';
                        if(input.value[input.value.length - 1] != '*' && input.value[input.value.length - 1] != '/' && input.value[input.value.length - 1] != '+' && input.value[input.value.length - 1] != '-' && input.value[input.value.length - 1] != '%')
                        {buttonText = '*' + buttonText;}
                        flag = 1;
                } else if(buttonText == '( )' && flag == 1){
                        buttonText = ')';
                        flag = 0;
                }

                if(buttonText == '√'){
                        result.value = Math.sqrt(input.value, 2);
                }
                else{
                        input.value += buttonText;
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

        /* 

        //GET METHOD

        const query = "http://localhost:3333/users?display=" + encodeURIComponent(input.value);

        fetch(query)
        .then(response => {
                return response.json();
        })
        .then(message => {
                result.value = message.resu;
        })

        */

        //POST METHOD

        const query = "http://localhost:3333/users";

        const request = {
                method: 'POST',
                header: {
                        'Content-Type': 'application/json'
                },
                body: new URLSearchParams({
                        'display': input.value
                })
        }

        fetch(query, request)
        .then(response => {
                return response.json();
        })
        .then(message => {
                result.value = message.resu;
        })

}