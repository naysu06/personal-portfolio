function calculateAverage() {
  const name = document.getElementById("txtName").value;
  const section = document.getElementById("txtSection").value;
  const Yearlvl = document.getElementById("txtYearlvl").value;
  const grade1 = parseFloat(document.getElementById("intGrade1").value);
  const grade2 = parseFloat(document.getElementById("intGrade2").value);
  const grade3 = parseFloat(document.getElementById("intGrade3").value);
  const grade4 = parseFloat(document.getElementById("intGrade4").value);
  const grade5 = parseFloat(document.getElementById("intGrade5").value);

  const average = (grade1+grade2+grade3+grade4+grade5) / 5;

  var result = "";
  if (average > 90) {
    result = "WITH HONORS";
  }else if(average >= 75){
    result = "PASSED";
  }else{
    result = "FAILED";
  }
  const outputDiv = document.getElementById("outputDiv");
  outputDiv.innerHTML = `Name: ${name}<br> Section: ${section}<br> Year: ${Yearlvl}<br> Average: ${average}<br>${result}`;
}