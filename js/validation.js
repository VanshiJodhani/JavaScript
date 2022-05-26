//firtname
function validateform1()
{
  var fn = document.getElementById("fname").value;
  var x = /^[A-Za-z]*$/;
  if (fn == "")
  {  
    document.getElementById('FNAME').innerHTML="*Please enter firstname";
  } 
  else{
    if(!x.test(fn))
    {
      document.getElementById('FNAME').innerHTML="invalid firstname"; 
    }
    else
    {
      document.getElementById('FNAME').innerHTML=""; 
    }
  }
}
  
//lastname
function validateform2()
{
  var ln = document.getElementById("lname").value;
  var y = /^[A-Za-z]*$/;
  if (ln == "")
  {  
    document.getElementById('LNAME').innerHTML="*Please enter lastname";
  } 
  else{
    if(!y.test(ln))
    {
      document.getElementById('LNAME').innerHTML="invalid lastname"; 
    }
    else
    {
      document.getElementById('LNAME').innerHTML=""; 
    }
  }
}

//address line 1
function validateform3()
{
  var sadd1 = document.getElementById("street1").value;
  var z1 = /^[a-z," ",0-9]+$/;
  if (sadd1==""){  
    document.getElementById('SADD1').innerHTML="*Please enter street line 1";
  }
  else{
    if(!z1.test(sadd1))
    {
      document.getElementById('SADD1').innerHTML="*special characters are not allow"; 
    }
    else
    {
      document.getElementById('SADD1').innerHTML=""; 
    }
  }
}
  
//address line 2
function validateform4()
  {
    var sadd2 = document.getElementById("street2").value;
    var z1 = /^[a-z," ",0-9]+$/;
    if (sadd2==""){  
      document.getElementById('SADD2').innerHTML="*Please enter street line 2";
    }
    else{
      if(!z1.test(sadd2))
      {
        document.getElementById('SADD2').innerHTML="*special characters are not allow"; 
      }
      else
      {
        document.getElementById('SADD2').innerHTML=""; 
      }
  }
}

//city
function validateform5()
{
  var cty = document.getElementById("city").value;
  var x1 = /^[A-Za-z]*$/;
  if (cty == "")
  {  
    document.getElementById('CITY').innerHTML="*Please enter city";
  } 
  else{
    if(!x1.test(cty))
    {
      document.getElementById('CITY').innerHTML="invalid city"; 
    }
    else
    {
      document.getElementById('CITY').innerHTML=""; 
    }
  }
}

//state/province
function validateform6()
{
  var stt = document.getElementById("state").value;
  var y1 = /^[A-Za-z]*$/;
  if (stt == "")
  {  
    document.getElementById('STREET').innerHTML="*Please enter state";
  } 
  else{
    if(!y1.test(stt))
    {
      document.getElementById('STREET').innerHTML="invalid state"; 
    }
    else
    {
      document.getElementById('STREET').innerHTML=""; 
    }
  }
}
  
//postal
function validateform7()
{
  var ptl = document.getElementById("postal").value;
  if (ptl=="")
  {  
    document.getElementById('POSTAL').innerHTML="*Please enter postal code";
  } 
  else{
    if(isNaN(ptl)){
      document.getElementById('POSTAL').innerHTML="*Enter only numbers"; 
    }
    else if(ptl.length!=6){
      document.getElementById('POSTAL').innerHTML="*Enter only six numbers"; 
    }
    else{
    document.getElementById('POSTAL').innerHTML=""; 
    }
  }
}
  
  //phone number
  function validateform8()
  {
    var phn = document.getElementById("phone").value;
    var regmm=/^[6-9]\d{9}$/ ;
    if (phn=="")
    {  
      document.getElementById('PHONE').innerHTML="*Please enter phone number";
    } 
    else{
      if(isNaN(phn)){
        document.getElementById('PHONE').innerHTML="*Enter only numbers"; 
      }
      else if(!regmm.test(phn)){
        document.getElementById('PHONE').innerHTML="*enter only ten digit and must be start from 6 to 9"; 
      }
      else{
      document.getElementById('PHONE').innerHTML=""; 
      }
    }
  }

  //email
function validateform9(){
  var mail = document.getElementById("e-mail").value;
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  if (mail=="")
  {  
    document.getElementById('EMAIL').innerHTML="*Please enter e-mail";
  } 
  else{
    if(!pattern.test(mail)){
      document.getElementById('EMAIL').innerHTML="*Invalid e-mail"; 
    }
    else{
    document.getElementById('EMAIL').innerHTML=""; 
    }
  }
}
  
//Select
function validateform10(){
var e = document.getElementById("how");
var optionhowIndex = e.options[e.selectedIndex].value;
if (optionhowIndex == 0) {
  document.getElementById('SELECT').innerHTML="*Please select any one";
}
else{
  document.getElementById('SELECT').innerHTML="";
}
}

//feedback
function validateform11()
{
var fdbk = document.getElementById('feedback').value;
if (fdbk=="")
{  
  document.getElementById('FEEDBACK').innerHTML="*Please give your feeback";
}
else{
  if(!isNaN(fdbk)){
    document.getElementById('FEEDBACK').innerHTML="*Digit not allow"; 
  }
  else if(fdbk.length<=5){
    document.getElementById('FEEDBACK').innerHTML="Please give your beedback more than 5 word"; 
  }
  else{
  document.getElementById('FEEDBACK').innerHTML=""; 
}
}
}

//suggetion
function validateform12()
{
var sugg = document.getElementById('suggetion').value;
if (sugg=="")
{  
  document.getElementById('SUGGETION').innerHTML="*Please give your suggation";
}
else{
  if(!isNaN(sugg)){
    document.getElementById('SUGGETION').innerHTML="*Digit not allow"; 
  }
  else if(sugg.length<=5){
    document.getElementById('SUGGETION').innerHTML="Please give your suggation more than 5 word"; 
  }
  else{
  document.getElementById('SUGGETION').innerHTML=""; 
}
}
}

//checkbox
function validateform13(){
if(this.recommend.checked == false){
  document.getElementById('CHECKBOX').innerHTML="*You didn't choose any of the checkboxes!";
}
}


//gender
function validateform14(){
var ml = document.getElementsByName('male');
  var genValue = false;
    for(var i=0; i<ml.length;i++){
      if(ml[i].checked == true){
        genValue = true;    
        }
      }
      if(!genValue){
      document.getElementById('MALE').innerHTML="*Please Choose the gender";
    }
  }
  