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
        }).catch((err) => {
            console.log("Error posting clubs!");
            console.log(err);
        });
    });
}

function addSubmitMemberClub() {
    const memberId = "memberId";
    const clubId = "clubId";

    let $submitMemberClub = document.getElementById("submitMemberClub");
    let $memberId = document.getElementById(memberId);
    let $clubId = document.getElementById(clubId);

    $submitMemberClub.addEventListener("click", () => {
        const data = {
            [memberId]: $memberId.value,
            [clubId]: $clubId.value,
        };

        console.log("Posting member clubs!");
        console.log(data);

        axios.post("/member_clubs", data).then((res) => {
            console.log("Success posting member clubs!");
            console.log(res);
        }).catch((err) => {
            console.log("Error posting member clubs!");
            console.log(err);
        });
    });
}

function addDeleteClub() {
    const clubId = "clubId";

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
