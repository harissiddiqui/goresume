/**
 * Created by AdeelAhmedMirza on 7/19/2017.
 */
// Getting the data from user in index.html - START
localStorage.clear();
var eduArray = [];
var workArray = [];
var pSkillArray = [];
var tSkillArray = [];
var qualArray = [];

function addEdu() {

    var ieduDegree = document.getElementById("eduDegree").value;
    var ieduSchool = document.getElementById("eduSchool").value;
    var ieduGraduationDate = document.getElementById("eduGraduationDate").value;

    var eduObject = {
        degree: ieduDegree,
        school: ieduSchool,
        date: ieduGraduationDate
    };

    eduArray.push(eduObject);
    console.log(eduArray);

    var eduArrayString = JSON.stringify(eduArray);
    localStorage.setItem("sEdu", eduArrayString);


    $('#eduInput').find('input[type=text]').each(function(){
        $(this).val($(this).attr("data-default"));
    });

}

function addWork() {

    var iworkPosition = document.getElementById("workPosition").value;
    var iworkOrg = document.getElementById("workOrg").value;
    var iworkDurationStart = document.getElementById("workDurationStart").value;
    var iworkDurationEnd = document.getElementById("workDurationEnd").value;

    var workObject = {
        position: iworkPosition,
        organization: iworkOrg,
        start: iworkDurationStart,
        end: iworkDurationEnd
    };

    workArray.push(workObject);
    console.log(workArray);

    var workArrayString = JSON.stringify(workArray);
    localStorage.setItem("sWork", workArrayString);

    $('#workInput').find('input[type=text]').each(function(){
        $(this).val($(this).attr("data-default"));
    });
}

function addPSkill() {

    var iSkill = document.getElementById("pSkill").value;

    var skillObject = {
        skill: iSkill
    };

    pSkillArray.push(skillObject);
    console.log(pSkillArray);

    var skillArrayString = JSON.stringify(pSkillArray);
    localStorage.setItem("sPSkill", skillArrayString);

    $('#pSkillInput').find('input[type=text]').each(function(){
        $(this).val($(this).attr("data-default"));
    });
}

function addTSkill() {
    console.log("addTSkill is working");
    var iSkill = document.getElementById("tSkill").value;

    var skillObject = {
        skill: iSkill
    };

    tSkillArray.push(skillObject);
    console.log(tSkillArray);

    var skillArrayString = JSON.stringify(tSkillArray);
    localStorage.setItem("sTSkill", skillArrayString);

    $('#tSkillInput').find('input[type=text]').each(function(){
        $(this).val($(this).attr("data-default"));
    });
}

function addQual() {
    console.log("addQual is working");
    var iQual = document.getElementById("qual").value;

    var qualObject = {
        qual: iQual
    };

    qualArray.push(qualObject);
    console.log(qualArray);

    var qualArrayString = JSON.stringify(qualArray);
    localStorage.setItem("sQual", qualArrayString);

    $('#qualInput').find('input[type=text]').each(function(){
        $(this).val($(this).attr("data-default"));
    });
}

function selectTmp(template) {

    window.teeemp = template;

}

function snackbar(val) {
    var x = document.getElementById(val);
    x.className = "show";
    console.log("asdawwqweqwe");
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function createCoverLetter() {
    window.open("localhost://3000", "_self");

}

function save_data(){
    localStorage.setItem("sName", document.getElementById("name").value);
    localStorage.setItem("sEmail", document.getElementById("email").value);
    localStorage.setItem("sPhone", document.getElementById("phone").value);
    localStorage.setItem("sAddress", document.getElementById("address").value);
    // localStorage.setItem("sHistory", document.getElementById("history").value);
    // localStorage.setItem("sDob", document.getElementById("dob").value);
    // localStorage.setItem("sAbout", document.getElementById("about").value);
    window.open(teeemp,"_self");

}
