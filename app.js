const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnAdd1 = document.querySelector('#add1');
const btnSubtract1 = document.querySelector('#subtract1');
const btnAdd2 = document.querySelector('#add2');
const btnSubtract2 = document.querySelector('#subtract2');
const btnAdd3 = document.querySelector('#add3');
const btnSubtract3 = document.querySelector('#subtract3');
const input = document.querySelector('#input');
const input1 = document.querySelector('#input1');
const img =document.querySelector('#main_img');
const img1 =document.querySelector('#main_img1');
const img2 =document.querySelector('#main_img2');
const img3 =document.querySelector('#main_img3');
const modalContainer = document.querySelector('.modal_container');
const modalContainer1 = document.querySelector('.modal_container1');
const modalContainer2 = document.querySelector('.modal_container2');
const modalContainer3 = document.querySelector('.modal_container3');
const radio = document.getElementById('radio');
const closeModal = document.querySelector('.close_modal');
const closeModal1 = document.querySelector('.close_modal1')
const closeModal2 = document.querySelector('.close_modal2');
const closeModal3 = document.querySelector('.close_modal3');
const icon = document.querySelector('.lni-heart-filled');
const icon1= document.querySelector('.icon1');
const icon2= document.querySelector('.icon2');
const icon3= document.querySelector('.icon3');
const icon4= document.querySelector('.icon4');
const icon5= document.querySelector('.icon5');
const icon6= document.querySelector('.icon6');
const icon7= document.querySelector('.icon7');






// modal counter
btnAdd.addEventListener('click', ()=>{
   if(input.value <=21){
    input.value = parseInt(input.value) + 1
   }else{
       input.value
   }
});
btnAdd1.addEventListener('click', ()=>{
  if(input1.value <=21){
   input1.value = parseInt(input1.value) + 1
  }else{
      input1.value
  }
});

btnSubtract1.addEventListener("click", ()=>{
    if(input1.value>0){
        input1.value = parseInt(input1.value) - 1
    }else{
        input1.value=0
    }
});

btnAdd2.addEventListener('click', ()=>{
  if(input2.value <=21){
   input2.value = parseInt(input2.value) + 1
  }else{
      input2.value
  }
});

btnSubtract2.addEventListener("click", ()=>{
    if(input2.value>0){
        input2.value = parseInt(input2.value) - 1
    }else{
        input2.value=0
    }
});

btnAdd3.addEventListener('click', ()=>{
  if(input3.value <=21){
   input3.value = parseInt(input3.value) + 1
  }else{
      input3.value
  }
});

btnSubtract3.addEventListener("click", ()=>{
    if(input3.value>0){
        input3.value = parseInt(input3.value) - 1
    }else{
        input3.value=0
    }
});




// Icon toggle
icon.addEventListener('click', ()=>{
  icon.classList.toggle('lni-heart')
});
icon1.addEventListener('click', ()=>{
  icon1.classList.toggle('lni-heart')
});
icon2.addEventListener('click', ()=>{
  icon2.classList.toggle('lni-heart')
})
icon3.addEventListener('click', ()=>{
  icon3.classList.toggle('lni-heart')
});
icon4.addEventListener('click', ()=>{
  icon4.classList.toggle('lni-heart')
})
icon5.addEventListener('click', ()=>{
  icon5.classList.toggle('lni-heart')
})
icon6.addEventListener('click', ()=>{
  icon6.classList.toggle('lni-heart')
})
icon7.addEventListener('click', ()=>{
  icon7.classList.toggle('lni-heart')
})



//Open modal popup
img.addEventListener('click',()=>{
    modalContainer.classList.add('show')

});
img1.addEventListener('click',()=>{
  modalContainer1.classList.add('show')

});
img2.addEventListener('click',()=>{
  modalContainer2.classList.add('show')

});
img3.addEventListener('click',()=>{
  modalContainer3.classList.add('show')

});


// Close modal popup
closeModal.addEventListener('click', ()=>{
    modalContainer.classList.remove('show')
});
closeModal1.addEventListener('click', ()=>{
  modalContainer1.classList.remove('show')
});
closeModal2.addEventListener('click', ()=>{
  modalContainer2.classList.remove('show')
});
closeModal3.addEventListener('click', ()=>{
  modalContainer3.classList.remove('show')
});

// 
radio.addEventListener('click',()=>{
  
})