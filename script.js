console.log("Hello from script");
function calljs() {
  addRowToTable();
};
function signup()
{
  alert("Registered Sucessfully..Enjoy Music..");
}

function validation() {                                     //validation of form and to check empty fields 
  var valid= true;
    name = document.getElementById("name").value;
    eid = document.getElementById("eid").value;
    male = document.getElementById("male").value;
    female = document.getElementById("female").value;
    other= document.getElementById("other").value;
    phno = document.getElementById("phno").value;
    
    category = document.getElementById("music");
 
    var atposition=eid.indexOf("@");  
    var dotposition=eid.lastIndexOf("."); 
 
  if (name === "") {
    alert("Name cannot be empty");
    valid = false;
  } else if (name.length<3) {
    alert("Name too small");
    valid = false;
  } else if (name.length>30) {
    alert("Name too big");
    valid = false;
  } else if (isNaN(name)==false){
    alert("Name cannot be numeric");
    valid=false;
  } else if (eid === "") {
    alert("Email id cannot be empty");
    valid = false;
  } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=eid.length) {
    alert("Invalid Email id");
    valid = false;
  } else if (phno === "") {
    alert("Contact No. cannot be empty");
    valid = false;
  } else if (isNaN(phno)==true) {
    alert("Enter a Valid Phone Number (Only digits) ");
    valid = false;
  } else if (phno.length !=10 ) {
    alert("Enter a Valid Phone Number (10 digit only)");
    valid = false;
  } 
   else if  (!(document.getElementById('male').checked) && !(document.getElementById('female').checked) && !(document.getElementById('other').checked)) {
    alert("Select a Gender .");
    valid=false;
 
  }
 
 
  return valid;
 };
 
 
 function addRowToTable() {    
   var table = document.getElementById("table");
   if (validation()) {
     var newRow = table.insertRow(table.length);                           //if found valid, add into table
      cell1 = newRow.insertCell(0);
      cell2 = newRow.insertCell(1);
      cell3 = newRow.insertCell(2);
      cell4 = newRow.insertCell(3);
      cell5 = newRow.insertCell(4);
     
 
    name = document.getElementById("name").value,
    eid = document.getElementById("eid").value,
    male = document.getElementById("male").value,
    female = document.getElementById("female").value,
    other= document.getElementById("other").value,
    cno = document.getElementById("phno").value,
    
    music = document.getElementById("music").value;
 
    var e = document.getElementById("music");
    var m = e.options[e.selectedIndex].text;
 
    if (document.getElementById('male').checked) {
    g = document.getElementById('male').value;
    }else if (document.getElementById('female').checked) {
    g = document.getElementById('female').value;
  } else if (document.getElementById('other').checked) {
    g = document.getElementById('other').value;
  }
                          
    cell1.innerHTML = name;
    cell2.innerHTML = eid;
    cell3.innerHTML = g;
    cell4.innerHTML = cno;
    cel5.innerHTML = m;
    
    
    document.getElementById("reg").reset();
    selectedRowToInput();                                       
    document.getElementById("reg").reset();  
