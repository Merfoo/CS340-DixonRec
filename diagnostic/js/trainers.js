function addSubmitTrainer() {
    const trainerFirstNameId = "fname";
    const trainerLastNameId = "lname";
    const trainerSexId = "sex";
    const trainerDescriptionId = "description";
    const trainerHourlyRateId = "hourlyRate";

    let $submitTrainer = document.getElementById("submitTrainer");
    let $trainerFirstName = document.getElementsByName(trainerFirstNameId)[0];
    let $trainerLastName = document.getElementsByName(trainerLastNameId)[0];
    let $trainerSexId = document.getElementById(trainerSexId);
    let $trainerDescription = document.getElementsByName(trainerDescriptionId)[0];
    let $trainerHourlyRate = document.getElementsByName(trainerHourlyRateId)[0];

    $submitTrainer.addEventListener("click", () => {
        const data = {
            [trainerFirstNameId]: $trainerFirstName.value,
            [trainerLastNameId]: $trainerLastName.value,
            [trainerSexId]: $trainerSexId.value,
            [trainerDescriptionId]: $trainerDescription.value,
            [trainerHourlyRateId]: $trainerHourlyRate.value,
        };

        console.log("Posting trainers!");
        console.log(data);

        axios.post("/trainers", data).then((res) => {
            console.log("Success posting trainers!");
            console.log(res);
            location.reload(true);
        }).catch((err) => {
            console.log("Error posting trainers!");
            console.log(err);
        });
    });
}

function addSubmitMemberTrainer() {
    const memberId = "memberId";
    const trainerId = "trainerId";

    let $submitMemberTrainer = document.getElementById("submitMemberTrainer");
    let $memberId = document.getElementById(memberId);
    let $trainerId = document.getElementById(trainerId);
    let $successNotification = document.getElementById("successNotification");
    let $errorNotification = document.getElementById("errorNotification");

    $submitMemberTrainer.addEventListener("click", () => {
        const data = {
            [memberId]: $memberId.value,
            [trainerId]: $trainerId.value,
        };

        console.log("Posting member trainers!");
        console.log(data);

        $successNotification.style.display = "none";
        $errorNotification.style.display = "none";

        axios.post("/member_trainers", data).then((res) => {
            console.log("Success posting member trainers!");
            console.log(res);
            $successNotification.style.display = "block";
        }).catch((err) => {
            console.log("Error posting member trainers!");
            console.log(err);
            $errorNotification.style.display = "block";
        });
    });
}

window.addEventListener("load", () => {
    addSubmitTrainer();
    addSubmitMemberTrainer();
});
