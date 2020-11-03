let tool;

document.addEventListener("DOMContentLoaded",function(event){
    document.getElementById('buttons').addEventListener('click',(event)=>{
        tool = document.getElementById('rps').value.trim().toLowerCase();
        if(tool != 'rock' || tool != 'paper' || tool != 'scissors'){
            alert('NOT VALID');
        }else{
            alert(tool);
        }
    });
});