const tBody = document.querySelector("tbody");

const xhr = new XMLHttpRequest();
xhr.open("GET", "group_members.json");
xhr.onreadystatechange = function() {
    if( this.readyState === 4 && this.status === 200 ) {
        const data = JSON.parse(xhr.responseText);
        showData(data);
    }
}
xhr.send();


function showData(data) {

    for( let i = 0; i < data.length ; i++ ) {
        const student = data[i];
        const row = document.createElement("tr");
        const nameTH = document.createElement("th");
        nameTH.scope = "row";
        const rolesTD = document.createElement("td");
        rolesTD.setAttribute("data-title", "Roles");

        nameTH.textContent = student.name;

        const rolesUL = document.createElement("ul");
        rolesTD.appendChild(rolesUL);
        for(let j = 0; j < student.roles.length; j++) {
            const roleText = student.roles[j];
            const roleLI = document.createElement("li");
            roleLI.textContent = roleText;
            rolesUL.appendChild(roleLI);
        }

        row.appendChild(nameTH);
        row.appendChild(rolesTD);
        tBody.appendChild(row);
    }
}