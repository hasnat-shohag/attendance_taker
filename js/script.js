const user_info = document.getElementById("user_info");

user_info.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("pop_up_nav_links_body").classList.toggle('nav_show');
})

const nav_trigger = document.getElementById("nav_trigger");

nav_trigger.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("toggle").classList.toggle('toggle_nav_show');
})


let dates = [];
let names = [];

// let date = document.querySelector("#date").value;
// let name = document.querySelector("#name").value;
let search_value = document.querySelector("#search_bar").value;
// let date_as_submit = document.querySelector("#date2").value;


// document.getElementById("submit").addEventListener("click",function(){

function save_data(date, name){
    names = localStorage.getItem(date);
    
    if(names && names.length > 0){
        names = JSON.parse( localStorage.getItem(date) );
    }else{
        names = [];
    }

    if(!dates.includes(date) && date.length > 1){
        dates.push(date);
        localStorage.setItem( date , JSON.stringify(names) );
    }

    if(!names.includes(name) && dates.includes(date) && name.length > 1){
        names.push(name);
        localStorage.setItem( date, JSON.stringify(names) );
    }
    make_list(date);
}

function save_data2(date){
    make_list(date);
}

let list_copy = [];

function make_list(date) {
    let list = '';

    names = localStorage.getItem(date);

    if(names && names.length > 0){
        names = JSON.parse( localStorage.getItem(date) );
        for (let index = 0; index < names.length; index++) {
            const element = names[index];
            list += `<li class="list-group-item">${element}</li>`;
        }
    }else{
        list = '<li class="list-group-item">no result</li>';
    } 

    document.getElementById('attandance_list').innerHTML = list;
    list_copy = list;
}


function search(params) {
    // console.log(params);
        if(search_value === ""){
            document.getElementById('attandance_list').innerHTML = list_copy;
        }
        if(names.includes(params)){
            let data = names[names.indexOf(params)];
            list = `<li class="list-group-item">postion:${names.indexOf(params)+1} <br> <br> ${data}</li>`;
            document.getElementById('attandance_list').innerHTML = list;
        }
}
