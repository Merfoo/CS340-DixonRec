function addSubmitClub() {
    const clubNameId = "clubName";
    const clubDescriptionId = "clubDescription";

    let $submitClub = document.getElementById("submitClub");
    let $clubName = document.getElementsByName(clubNameId)[0];
    let $clubDescription = document.getElementsByName(clubDescriptionId)[0];

    $submitClub.addEventListener("click", () => {
        const data = {
            [clubNameId]: $clubName.value,
            [clubDescriptionId]: $clubDescription.value,
        };

        console.log("Posting clubs!");
        console.log(data);

        axios.post("/clubs", data).then((res) => {
            console.log("Success posting clubs!");
            console.log(res);
            location.reload(true);
        }).catch((err) => {
            console.log("Error posting clubs!");
            console.log(err);
        });
    });
}

function addSubmitMemberClub() {
    const memberId = "memberId";
    const clubId = "signUpClubId";

    let $submitMemberClub = document.getElementById("submitMemberClub");
    let $memberId = document.getElementById(memberId);
    let $clubId = document.getElementById(clubId);
    let $successNotification = document.getElementById("successNotification");
    let $errorNotification = document.getElementById("errorNotification");

    $submitMemberClub.addEventListener("click", () => {
        const data = {
            [memberId]: $memberId.value,
            [clubId]: $clubId.value,
        };

        console.log("Posting member clubs!");
        console.log(data);

        $successNotification.style.display = "none";
        $errorNotification.style.display = "none";

        axios.post("/member_clubs", data).then((res) => {
            console.log("Success posting member clubs!");
            console.log(res);
            $successNotification.style.display = "block";
        }).catch((err) => {
            console.log("Error posting member clubs!");
            console.log(err);
            $errorNotification.style.display = "block";
        });
    });
}

function addDeleteClub() {
    const clubId = "deleteClubId";

    let $deleteClub = document.getElementById("delete");
    let $clubId = document.getElementById(clubId);

    $deleteClub.addEventListener("click", () => {
        const params = {
            [clubId]: $clubId.value,
        };

        console.log("Deleting clubs!");
        console.log(params);

        axios.delete("/clubs", { params: params }).then((res) => {
            console.log("Success deleting clubs!");
            location.reload(true);
        }).catch((err) => {
            console.log("Error deleting clubs!");
            console.log(err);
        });
    });
}

window.addEventListener("load", () => {
    addSubmitClub();
    addSubmitMemberClub();
    addDeleteClub();
});
