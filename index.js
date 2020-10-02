let name_of_students_array = [];
function submit(){
    let display_student_array = [];
    for(var i =1;i<=4;i++){
        let name_of_the_student = document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_the_student);
        name_of_students_array.push(name_of_the_student);
        
    }
    console.log(name_of_students_array);
    let length_of_name_of_the_student = name_of_students_array.length;
    console.log(length_of_name_of_the_student);

    for(var j = 0;j<length_of_name_of_the_student;j++){
        display_student_array.push("<h4>NAME-"+name_of_students_array[j]+"</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    let remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("display_name_with_commas").style.background = "white";
    document.getElementById("display_name_with_commas").style.color= "#fda085";
    document.getElementById("display_name_without_commas").style.color= "#fda085";
    document.getElementById("display_name_without_commas").style.background = "white";
}

function sorting(){
    name_of_students_array.sort();
    console.log(name_of_students_array);
    let display_student_array_sorting = [];
    let length_of_array = name_of_students_array.length;
    console.log(length_of_array);
    for(k=0;k<length_of_array;k++){
        display_student_array_sorting.push("<h4>NAME-"+name_of_students_array[k]+"</h4>");
        console.log(display_student_array_sorting);
    }
    let removecommas = display_student_array_sorting.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
}