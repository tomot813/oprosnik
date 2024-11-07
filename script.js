var x = 1 // текущий индекс слайд 
var array = document.getElementsByClassName('def') // массив элементов div, слайдев 
var flag = false;
//------------------------------------------------------------------------------------------------


// этот метод перелистывает слайды впиред
function forward() {
    hide(array[x - 1].classList, 1)

    if (x < array.length) {
        x++
    } else {
        x = 1
    }
    setTimeout(()=>{
        show(array[x - 1].classList, 1)
    }, 1000);
    
}

// этот метод перелистывает слайды назад
function backward() {
    hide(array[x - 1].classList, -1)
    
    if (x != 1) {
        
        x--
    } else {
        x = array.length
    }
    
    setTimeout(()=>{
        show(array[x - 1].classList, -1)
    }, 1000);
}

function go_back(){
    form.elements.login.value = "";
    form.elements.date.value = "";

    form_two.elements.quest_one.value = "";
    form_two.elements.quest_two.value = "";
    form_two.elements.quest_three.value = "";

    form_three.elements.quest_four[0].checked = false;
    form_three.elements.quest_four[1].checked = false;
    form_three.elements.quest_four[2].checked = false;
    form_three.elements.quest_four[3].checked = false;

    form_three.elements.quest_five[0].checked = false;
    form_three.elements.quest_five[1].checked = false;
    form_three.elements.quest_five[2].checked = false;
    form_three.elements.quest_five[3].checked = false;

    form_three.elements.quest_six[0].checked = false;
    form_three.elements.quest_six[1].checked = false;
    form_three.elements.quest_six[2].checked = false;
    form_three.elements.quest_six[3].checked = false;

    hide(array[x - 1].classList, 1)

    if (x < array.length) {
        x++
    } else {
        x = 1
    }
    setTimeout(()=>{
        show(array[x - 1].classList, 1)
    }, 1000);
    
}

// этот метод показывает слайды на экране 
function show(class_list, n){
    
    document.documentElement.style.setProperty("--el",-1000 * n + 'px') // передача значения переменной в css,  с определенным знаком (для правильного функционирование анимации)
    class_list.add('showText')
    setTimeout(()=> {
        class_list.add("yesText")
        document.documentElement.style.setProperty("--el",'0px')// передача значения переменной в css
    }, 10);
    

}

// этот метод скрывает слайды с экрана 
function hide(class_list, n){
    
    document.documentElement.style.setProperty("--el", 1000 * n + 'px') // передача значения переменной в css, с определенным знаком (для правильного функционирование анимации)
    
    class_list.remove('yesText')
    setTimeout(()=> {
        class_list.remove('showText')
    }, 1000);


}



//-----FORMS CHECK------------------------------------------------------------------------------------


//--1
var form = document.forms.form_one;

form.addEventListener('submit', (event)=>{
        event.preventDefault();
        var can_go = true;

        
        if(!form.elements.login.validity.valid){
            form.elements.login.labels[0].innerText = "no";
            can_go = false;
        }

        if(!form.elements.date.validity.valid){
            form.elements.date.labels[0].innerText = "no";
            can_go = false;
        
        }


        if(can_go){
                forward()
                flag = true;
        }
        
        
})

//--2
var form_two  = document.forms.form_two;

form_two.addEventListener('submit', (event)=>{
    event.preventDefault();
    forward()
    
    
})

//--3
var form_three  = document.forms.form_three;

form_three.addEventListener('submit', (event)=>{
    event.preventDefault();
    forward()
    var count = 0;
    document.getElementById("output_result").innerText = "";
    
    //2
    if(form_two.elements.quest_one.validity.valid){
        count++;
    }
    if(form_two.elements.quest_two.validity.valid){
        count++;
    }
        
    
    if(form_two.elements.quest_three.validity.valid){
        count++;

    }

    //3
    if(form_three.elements.quest_four.value == "true"){
        count++;
    }
    if(form_three.elements.quest_five.value == "true"){
        count++;
    }
        
    
    if(form_three.elements.quest_six.value == "true"){
        count++;
    }
    

    document.getElementById("output_user_data").innerText = "Login: " + form.elements.login.value + "\n" + "date: " + form.elements.date.value + "\n" + "sex: " + form.elements.sex.value;

    document.getElementById("output_result").innerText = count; 
    
})


//-----Обработчик Нажатий Кнопок---------------------------------------------------------------------

document.getElementById("btn_backward").addEventListener('click', backward);
document.getElementById("btn_backward_2").addEventListener('click', backward);
document.getElementById("btn_goback").addEventListener('click', go_back);
