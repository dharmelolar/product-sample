const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const input = document.querySelector('#input');
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
const closeModal3 = document.querySelector('.close_modal3')





// add event listeners
// modal counter
btnAdd.addEventListener('click', ()=>{
   if(input.value <=21){
    input.value = parseInt(input.value) + 1
   }else{
       input.value
   }
});

btnSubtract.addEventListener("click", ()=>{
    if(input.value>0){
        input.value = parseInt(input.value) - 1
    }else{
        input.value=0
    }
})


// modal popup
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

radio.addEventListener('click',()=>{
  if(radio==checked){
    radio.checked=false
  }else{
    radio.checked=true
  }
})

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