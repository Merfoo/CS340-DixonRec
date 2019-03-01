window.addEventListener("load", () => {
    const instructorFirstNameId = "fname";
    const instructorLastNameId = "lname";
    const instructorSexId = "sex";
    const instructorDescriptionId = "description";

    let $submitInstructor = document.getElementById("submitInstructor");
    let $instructorFirstName = document.getElementsByName(instructorFirstNameId)[0];
    let $instructorLastName = document.getElementsByName(instructorLastNameId)[0];
    let $instructorSexId = document.getElementById(instructorSexId);
    let $instructorDescription = document.getElementsByName(instructorDescriptionId)[0];

    $submitInstructor.addEventListener("click", () => {
        const data = {
            [instructorFirstNameId]: $instructorFirstName.value,
            [instructorLastNameId]: $instructorLastName.value,
            [instructorSexId]: $instructorSexId.value,
            [instructorDescriptionId]: $instructorDescription.value,
        };

        console.log("Posting instructors!");
        console.log(data);

        axios.post("/instructors", data).then((res) => {
            console.log("Success posting instructors!");
            console.log(res);
        }).catch((err) => {
            console.log("Error posting instructors!");
            console.log(err);
        });
    });
});
