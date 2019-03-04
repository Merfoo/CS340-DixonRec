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
            location.reload(true);
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
    let table = document.getElementById("SearchResultTable");

    $search.addEventListener("click", () => {
        const data = {
            [SearchFirstNameId]: $SearchFirstName.value,
            [SearchLastNameId]: $SearchLastName.value
        };

        console.log("Searching Members!");
        console.log(data);
        
        table.innerHTML = "<tr><th>Member Name</th></tr>";

        axios.get("/members_search", { params: data }).then((res) => {
            console.log("Success posting members!");
            console.log(res);

            for(let i = 0; i < res.data.length; i++){
                var row = table.insertRow(-1);
                var cell = row.insertCell(0);
                var str = document.createTextNode( res.data[i].sFirstName+ " " + res.data[i].sLastName);
                cell.appendChild(str);
            }
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
