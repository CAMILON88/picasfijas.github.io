$('document').ready(function(){
var numbers = [0,1,2,3,4,5,6,7,8,9];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var num = shuffleArray(numbers).slice(0,4).join('');
console.log(num);

$('#numero').keyup(function(e){

  if(e.which=="13")

  {
    var fijas, picas;
  picas=0;
  fijas=0;
  
  var separar= num.toString().split('').map(Number);
  var separar2= $(this).val().toString().split('').map(Number);
  

 for(var i=0; i<separar.length; i++)
   {
     if(separar2[i]==separar[i])
       {
         fijas++;
         
       }
   }
  for (var i=0; i<separar2.length; i++)
    {
      for (var j=0; j<separar.length; j++)
        {
          if(separar2[i] == separar[j])
            {
              if(separar2[i]!=separar[i])
              {
                   picas++;
              }
              
              
            }
        }
    }
     
    
    

    if($(this).val().length==4)
    {
      $("p").css("color","black");
      if($(this).val()==num)
    {
      
      $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    $('#mask').append('<h1>¡Ganaste!</h1>');
    $('#mask').append('<div class="wrapper"><a class="button" href="index.html">Jugar Nuevamente</a></div>');
     $(this).val('').focus();
    }
   
    else {

var encontrado = false;
var repetir = 1;
     for (var i =0; i<separar2.length; i++)
    {
      
      for(var j=0; j<$(this).val().length; j++)
      {
       
        if(i!=j)
        {
          
           if(separar2[i]==$(this).val()[j])
        
          {
             repetir++;
            
      }
      
      if(repetir>1)
      {
        encontrado=true;
      }
      else{
        encontrado=false;

      }

     }
        }
         
        }

      if(encontrado==false)
      {
        $('tbody').append('<tr><td>' + $(this).val() + '</td><td>' + picas + '</td><td>' + fijas + '</td></tr>');
     $(this).val('').focus();
      }
      else if (encontrado==true){

        $("p").css({"color":"#FF0000"});
      }

       
        }
      
    }

    else {

      $("p").css("color","#FF0000");
      
     
    }

   
}
if(e.which=="8")
    {
      $("p").css("color","black");
       
    }
});
});


