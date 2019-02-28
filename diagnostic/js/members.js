window.addEventListener("load", () => {
    const memberFirstNameId = "fname";
    const memberLastNameId = "lname";
    const trainerSelectId = "trainerId";

    let $submit = document.getElementById("submit");
    let $memberFirstName = document.getElementsByName(memberFirstNameId)[0];
    let $memberLastName = document.getElementsByName(memberLastNameId)[0];
    let $trainerId = document.getElementById(trainerSelectId);

    $submit.addEventListener("click", () => {
        const data = {
            [memberFirstNameId]: $memberFirstName.value,
            [memberLastNameId]: $memberLastName.value,
            [trainerSelectId]: $trainerId.value,
        };

        console.log("Posting members!");
        console.log(data);

        axios.post("/members", data).then((res) => {
            console.log("Success posting members!");
            console.log(res);
        }).catch((err) => {
            console.log("Error posting members!");
            console.log(err);
        });
    });
});
