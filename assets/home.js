  // console.log('hii')

  function buttonMoveLeft(){
    console.log('left')

    let button = document.getElementById('submit');
    button.style.transform = 'translateX(-160%)';

};


function buttonMoveRight(){
  console.log('right')

    let button = document.getElementById('submit');
    button.style.transform = 'translateX(0%)';

};

function resetBtn(){
    let button = document.getElementById('submit');
    button.style.transform = 'translateX(0%)';

};

  let a = 0;

  function mouseOver(){
      
      let desc = document.getElementById('desc').value

      if((desc=="") && a==0){
      buttonMoveLeft();
      a = 1;
      return false;
      } 

      if((desc=="") && a==1){
      buttonMoveRight();
      a = 2;
      return false;
      } 

      if((desc=="") && a==2){
      buttonMoveLeft();
      a = 1;
      return false;
      } 

      else{

          document.getElementById('submit').style.cursor = 'pointer';
          return false;
      };

  };




  var task_edit=document.getElementsByClassName(`edit`)
  var numTask = task_edit.length
  var task_input=document.getElementsByClassName('text1')
  // var task_delete_el=document.getElementsByClassName('delete')
//   function fun(e){
//     e.preventDefault()
//   }

  function edit_task(i,id) {
       console.log(id)
       
    //    console.log(task_input[i].value)
    //    var update=document.getElementById('update')
    //    console.log(update.description)
      if (task_edit[i].innerText.toLowerCase() == "edit") {
        //   e.preventDefault();
          task_edit[i].innerText = "Save";
          task_input[i].removeAttribute("readonly");
          task_input[i].focus();
        //   task_input[i].onCha
      } else {
        
        //   var link=document.getElementById('link')
        //   window.location=(`/update-list/?id=${id}`)
          let update=document.getElementById('update')
          let update1=document.getElementById('update1')

        //   console.log(update)
          
        //   update.setAttribute('value',task_input_el[i].value)
        update.value=task_input[i].value
        update1.value=id
    //    console.log(update.value)
        //   window.location=(`/update-list/?id=${id}`)
        document.getElementById('myform').submit()

          
          task_edit[i].innerText = "Edit";
          task_input[i].setAttribute("readonly", "readonly");
      }
  };
     for(let i=0;i<task_edit.length;i++){
      let id=task_edit[i].value;
      // console.log(id)
      task_edit[i].addEventListener('click', edit_task.bind(this,i,id), false)
    //   edit_task.bind(this,i,id)
      // task_delete[i].addEventListener('click',del_task.bind(this,i),false)
     }
     let ids=[]
var checkbox=document.getElementsByClassName('check');
     function del_mul(){
        console.log('inside delete')
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i].checked){
               ids.push(checkbox[i].value)
            }
        }
        // for(let i=0;i<checkbox.length;i++){
        //     console.log(ids[i]," ")
        // }
        let myform1=document.getElementById('myform1')
        ids.forEach(function(value){
            var input=document.createElement('input')
            input.type='hidden'
            input.name='myid'
            input.value=value
            myform1.appendChild(input)
        })
        myform1.submit()
     }
    
     