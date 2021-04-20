var present = [];
var absent = [];
var presentRollno = [];
var absentRollno = [];
var students = document.getElementsByTagName("input");


function numericSort(a, b){
    return a-b; 
}

function attendanceCalculator(){
    for (var i = 0; i<50; i++){
        if (students[i].checked){
            if (!present.includes(students[i].name)){
                present.push(students[i].name);
            }
            if (!presentRollno.includes(i+1)){
                presentRollno.push(i+1);
            }
            if (absent.includes(students[i].name)){
                absent.splice(absent.indexOf(students[i].name),1);
            }
            if (absentRollno.includes(i+1)){
                absentRollno.splice(absentRollno.indexOf(i+1),1);
            }
        }
        else {
            if (present.includes(students[i].name)){
                present.splice(present.indexOf(students[i].name),1);
            }
            if (presentRollno.includes(i+1)){
                presentRollno.splice(presentRollno.indexOf(i+1),1);                
            }
            if (!absent.includes(students[i].name)){
                absent.push(students[i].name);
            }
            if (!absentRollno.includes(i+1)){
                absentRollno.push(i+1);
            }
        }
    }


    present.sort();
    absent.sort();
    presentRollno.sort(numericSort);
    absentRollno.sort(numericSort);
    document.getElementById("studentsPresentRollnoLabel").innerHTML="Students Present Rollno, No of Students "+present.length;
    document.getElementById("studentsAbsentRollnoLabel").innerHTML="Students Absent Rollno, No of Students "+absent.length;
    document.getElementById("studentsPresentRollno").value=presentRollno;
    document.getElementById("studentsAbsentRollno").value=absentRollno;
    document.getElementById("studentsPresent").value=present;
    document.getElementById("studentsAbsent").value=absent;
}
