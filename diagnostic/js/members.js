function addSubmitMemeber() {
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
}

function addSearchMemeber() {
    const SearchFirstNameId = "fnameSearch";
    const SearchLastNameId = "lnameSearch";

    let $search = document.getElementById("search");
    let $SearchFirstName = document.getElementsByName(SearchFirstNameId)[0];
    let $SearchLastName = document.getElementsByName(SearchLastNameId)[0];

    $search.addEventListener("click", () => {
        const data = {
            [SearchFirstNameId]: $SearchFirstName.value,
            [SearchLastNameId]: $SearchLastName.value
        };

        console.log("Searching Members!");
        console.log(data);
        
        axios.get("/members_search", { params: data }).then((res) => {
            console.log("Success posting members!");
            console.log(res);
        }).catch((err) => {
            console.log("Error posting members!");
            console.log(err);
        });

    });
}



window.addEventListener("load", () => {
    addSubmitMemeber();
    addSearchMemeber();
});
