import { REPL_MODE_SLOPPY } from "repl";

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
        
        axios.post("/members_search", data).then((res) => {
            console.log("Success posting members!");
            console.log(res);
        }).catch((err) => {
            console.log("Error posting members!");
            console.log(err);
        });

        var table = document.getElementById("SearchResultTable");
        var row = table.insertRow(-1);
        var cell = row.insertCell(0);
        var str = document.createTextNode($SearchFirstName.value + " " + $SearchLastName.value);
        cell.appendChild(str);

    });
}



window.addEventListener("load", () => {
    addSubmitMemeber();
    addSearchMemeber();
});
