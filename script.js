const generateBTN=document.querySelector('form button');
const qrCodeBox=document.querySelector('.qr-code');
const qrInput=document.querySelector('form input');
const qrImage=document.querySelector('.qr-code img');

generateBTN.addEventListener('click' , ()=>{
    let qrvalue=qrInput.value;
    if(!qrvalue){
        return alert('لطفا متن یا ادرس را وارد کن')
    }
    generateBTN.innerText='در حال دریافت qr code'
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
    qrImage.addEventListener('load',()=>{
        qrCodeBox.classList.remove('hidden')
        generateBTN.innerText='تولید qr code'

    })
})

qrInput.addEventListener('keyup' ,()=>{
    if(!qrInput.value){
        qrCodeBox.classList.add('hidden')

    }
})