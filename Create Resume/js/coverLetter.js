function save_data_cl() {

    localStorage.setItem("ssName", document.getElementById("name").value);
    localStorage.setItem("ssEmail", document.getElementById("email").value);
    localStorage.setItem("ssPhone", document.getElementById("phone").value);
    localStorage.setItem("ssAddress", document.getElementById("address").value);
    localStorage.setItem("ssDate", document.getElementById("date").value);

    var e = document.getElementById("sel1");
    var str1 = e.options[e.selectedIndex].text;
    localStorage.setItem("ssSel1", str1);

    localStorage.setItem("sscName", document.getElementById("cName").value);
    localStorage.setItem("sscTitle", document.getElementById("cTitle").value);
    localStorage.setItem("sscOrg", document.getElementById("cOrg").value);
    localStorage.setItem("sscAddress", document.getElementById("cAddress").value);
    localStorage.setItem("ssStart", document.getElementById("cStart").value);
    localStorage.setItem("ssMid", document.getElementById("cMid").value);
    localStorage.setItem("ssEnd", document.getElementById("cEnd").value);

    var f = document.getElementById("sel2");
    var str2 = f.options[f.selectedIndex].text;
    localStorage.setItem("ssSel2", str2);

    window.open("templates/coverletter.html", "_self");
}