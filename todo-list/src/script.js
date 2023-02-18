// $(document).ready(function(){
//     if (jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!");
//     } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//     }
//  });





let inputMain = $("#maininput");
let deleteAll = $("#btn");
let btnadd = $("#addBtn");
let task = $('#task');             
let taskInputs = $(".addtask");


// function to add element to task div

function createElement(text){

    let div = ` <div class="addtask">
                    <input type="text" class="taskinput" readonly>
                    <span class="btnDel">x</span>
                </div>`;
 
    task.append(div);

    let taskinput = $('.taskinput')
    taskinput.eq(taskinput.length-1).val(`${text}`)

    inputMain.val("");

}

// add new task to the plan

btnadd.on('click' , ()=>{

    if(inputMain.val() !== ""){

        createElement(inputMain.val());

    }
})



task.on('click',(e)=>{


    if(e.target.classList == 'taskinput'){

        e.target.classList.toggle('marked');
    }

    // remove specific task 

    if(e.target.classList == 'btnDel' ){

        e.target.parentNode.remove();
    }

})


// removing all tasks

deleteAll.on('click',function(){

    task.html(" ");
    inputMain.val();

})

