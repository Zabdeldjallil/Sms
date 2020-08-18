const numberInput = document.getElementById('number'),
      textInput = document.getElementById('msg'),
      scheduleSelect = document.getElementById('schedule'),
      button = document.getElementById('button'),
      response = document.querySelector('.response');
button.addEventListener('click', send, false);      
function send() {
    //used to make sure the vlaue is a number
    const number = numberInput.value.replace(/\D/g, '');
    const text = textInput.value;
    const time = parseInt(scheduleSelect.value, 10);
   // getTimeSchedule({ number, text, time });
   fetch("/",{
       method:'post',
       headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            number:number,
            text:text
        })
   }).then(function(res){
       console.log(res);
   }).catch(function(err){console.log(err)})
  }