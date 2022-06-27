var convertForm = document.getElementById('form');
var result      = document.getElementById('Result');
var CResult     = document.getElementById('CResult');
var FResult     = document.getElementById('FResult');
var type        = document.getElementById('type');

var DegerValue  = document.getElementById('Degrees');

    convertForm.addEventListener('submit',function(e){
              e.preventDefault();
             
              if(DegerValue.value == '')
              {
                alert('NOTHING IS ENTERED');
                return false;
              }
        
              result.style.display='block';
             
              switch(type.value)
              {
                   

                   case 'Celsius':
                    CResult.innerText=!isNaN(parseInt(DegerValue.value))?parseInt(DegerValue.value)+' '+'°C':0+' '+'°C';
                    FResult.innerText=!isNaN(parseInt(DegerValue.value))?parseInt(DegerValue.value)*1.8+ (32.0)+' '+'°F':0+' '+'°F';
                    break;

                   case 'Fahrenheit':
                    CResult.innerText=!isNaN(parseInt(DegerValue.value))?parseInt(DegerValue.value)-32/1.8+' '+'°C':0+' '+'°C';
                    FResult.innerText=!isNaN(parseInt(DegerValue.value))?parseInt(DegerValue.value):0+' '+'°F';
                    break;

                   default:

                   return false;
              }           

    });