
student.map(data  => {

if (data.location == 'Mirpur' || data.location == 'Uttara') {
    console.log(`

Roll       : ${data.roll}
Name       : ${data.name}
age        : ${data.age}
location   : ${data.location}
Income     : ${data.income}
Skill      : ${data.skill}


`);
}
});