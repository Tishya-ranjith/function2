var name_students_array=[];


function submit(){

    var display_students_array=[];
for(j=1;j<=4;j++){
    var name_of_students=document.getElementById("n"+j).value;
    name_students_array.push(name_of_students);

}
var len=name_students_array.length;

for(k=0;k<len;k++){
display_students_array.push("<h4>name-"+name_students_array[k]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=display_students_array;

var remove_commas=display_students_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;





}

