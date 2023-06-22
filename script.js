  // function store(){
  // var firstname = document.getElementById('firstname');
  // var email = document.getElementById('email');
  // var lastname = document.getElementById('lastname');
 
 
  
  

  // localStorage.setItem("firstname",name.value);
  // localStorage.setItem("email",email.value);
  // localStorage.setItem("lastname",lastname.value);
  

  // }

  function savedata(){

    var students = {
    
    firstName:document.getElementById('firstname').value,
  
    lastName:document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    contact: document.getElementById('contact').value
  }
  
  var array = JSON.parse(localStorage.getItem('students') || '[]');
  array.push(students);
  localStorage.setItem('students', JSON.stringify(array));
  
}
  
  

 
  