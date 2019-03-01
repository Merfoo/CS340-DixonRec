function addSubmitClass() {
    const classNameId = "className";
    const classDescriptionId = "classDescription";
    const classInstructorId = "instructorId";
    const classPriceId = "classPrice";

    let $submitClass = document.getElementById("submitClass");
    let $classFirstName = document.getElementsByName(classNameId)[0];
    let $classDescription = document.getElementsByName(classDescriptionId)[0];
    let $classInstructorId = document.getElementById(classInstructorId);
    let $classPrice = document.getElementsByName(classPriceId)[0];

    $submitClass.addEventListener("click", () => {
        const data = {
            [classNameId]: $classFirstName.value,
            [classDescriptionId]: $classDescription.value,
            [classInstructorId]: $classInstructorId.value,
            [classPriceId]: $classPrice.value,
        };

        console.log("Posting classes!");
        console.log(data);

        axios.post("/classes", data).then((res) => {
            console.log("Success posting classes!");
            console.log(res);
        }).catch((err) => {
            console.log("Error posting classes!");
            console.log(err);
        });
    });
}

function addSubmitMemberclass() {
    const memberId = "memberId";
    const classId = "classId";

    let $submitMemberClass = document.getElementById("submitMemberClass");
    let $memberId = document.getElementById(memberId);
    let $classId = document.getElementById(classId);

    $submitMemberClass.addEventListener("click", () => {
        const data = {
            [memberId]: $memberId.value,
            [classId]: $classId.value,
        };

        console.log("Posting member classes!");
        console.log(data);

        axios.post("/member_classes", data).then((res) => {
            console.log("Success posting member classes!");
            console.log(res);
        }).catch((err) => {
            console.log("Error posting member classes!");
            console.log(err);
        });
    });
}

window.addEventListener("load", () => {
    addSubmitClass();
    addSubmitMemberclass();
});
