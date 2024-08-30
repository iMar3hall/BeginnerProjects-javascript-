const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');




buttons.forEach(button => {
    button.addEventListener('click',  () => {
      
      
        
       const value = button.textContent;

       if (value === '=')  {
        

        try {
            let result = math.evaluate(display.textContent); 

            
            
            result = result.toString();
            if (result.length > 17) {
                
                if (result.includes('.')) {
                    result = parseFloat(result).toPrecision(17); 
                } else {
                    result = parseFloat(result).toExponential(16); 
                }
            }

            display.textContent = result;   
        } catch (e) {
            display.textContent = 'Error';
        }
       }else if (value === 'C') {
       
        display.textContent = '0';
       } else {

        if (display.textContent.length < 17) {

        if (display.textContent === '0' && value !== '.') {
            display.textContent = value;
       
        } else {
            display.textContent += value; 
        }
          
       } else {
        document.querySelector('.inputAlert').
         innerHTML = "Input Can't Exceed 17 Digits"
       }
    }
    });
});