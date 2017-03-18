window.onload = function(){
    
    var output = document.getElementById('output');
    
    document.getElementById('btn_1').onclick = function(){        
        var val = document.getElementById('btn_1').innerText;
        output.value = output.value+val;        
    }
    
     document.getElementById('btn_2').onclick = function(){        
        var val = document.getElementById('btn_2').innerText;
        output.value = output.value+val;        
    }
     
      document.getElementById('btn_3').onclick = function(){        
        var val = document.getElementById('btn_3').innerText;
        output.value = output.value+val;        
    }
      
       document.getElementById('btn_4').onclick = function(){        
        var val = document.getElementById('btn_4').innerText;
        output.value = output.value+val;        
    }
       
        document.getElementById('btn_5').onclick = function(){        
        var val = document.getElementById('btn_5').innerText;
        output.value = output.value+val;        
    }
        
         document.getElementById('btn_6').onclick = function(){        
        var val = document.getElementById('btn6').innerText;
        output.value = output.value+val;        
    }
         
          document.getElementById('btn_7').onclick = function(){        
        var val = document.getElementById('btn_7').innerText;
        output.value = output.value+val;        
    }
           document.getElementById('btn_8').onclick = function(){        
        var val = document.getElementById('btn_8').innerText;
        output.value = output.value+val;        
    }
       
            document.getElementById('btn_9').onclick = function(){        
        var val = document.getElementById('btn_9').innerText;
        output.value = output.value+val;        
    }
             document.getElementById('btn_0').onclick = function(){        
        var val = document.getElementById('btn_0').innerText;
        output.value = output.value+val;        
    }
             
             document.getElementById('btn_decimal').onclick = function(){        
        var val = document.getElementById('btn_decimal').innerText;
        output.value = output.value+val;        
    }
    
            document.getElementById('btn_plus').onclick = function(){        
        var val = document.getElementById('btn_plus').innerText;
        output.value = output.value+val;        
    }
               document.getElementById('btn_minus').onclick = function(){        
        var val = document.getElementById('btn_minus').innerText;
        output.value = output.value+val;        
    }
                  document.getElementById('btn_division').onclick = function(){        
        var val = document.getElementById('btn_division').innerText;
        output.value = output.value+val;        
    }
                     document.getElementById('btn_times').onclick = function(){        
        var val = document.getElementById('btn_times').innerText;
        output.value = output.value+val;        
    }
      
    document.getElementById('btn_equal').onclick = function(){
        output.value=eval(output.value);
        
    }  
     document.getElementById('btn_clear').onclick = function(){
        output.value="";
        
    }  
    // document.getElementById('btn_back').onclick = function(){
      //  output.value=(output.value.slice)(0,-1);
        
   // }  
       document.getElementById('btn_back').onclick = function(){
           var len = output.value.length;
           output.value=output.value.substr(0,len-1);
        
    }  
                     
         
    document.getElementById('btn_percentage').onclick = function(){
        output.value=eval(output.value)*100;
        
    }   
    document.getElementById('btn_log').onclick = function(){
        output.value=Math.log(eval(output.value));
        
    }  
     document.getElementById('btn_square').onclick = function(){
        output.value=Math.pow(eval(output.value),2);
        
    }  
    
      document.getElementById('btn_pi').onclick = function(){
          var val = Math.PI;
        output.value=output.value+val;
        
    }  
    
    
}