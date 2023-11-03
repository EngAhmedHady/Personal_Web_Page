var tabButton = document.querySelectorAll(".Tab");
var tabIcon = document.querySelectorAll(".Icon");
var Icons = ['ProfileIcon', 'ResumeIcon', 'PortfolioIcon', 'ContactMeIcon']
var tabPanels = document.querySelectorAll(".Content");
var PIndex;
var LastObj = 0

var Exps = ['Experience1', 'Experience2']
var Tra = ['Training1','Training2','Training3']
var Edu = ['Education1','Education2','Education3']

PIndex = sessionStorage.getItem("PIndex");
if (PIndex != null)
{
    try {
        showPanel(PIndex, "white");;
    }
    catch(err) {
    }
    
    if (PIndex == 1) findHeights();
    PanelIndexPass(0);
}
else {
    showPanel(0, "white");
}

document.addEventListener("DOMContentLoaded", function() {
    readCSVFile("Documents/ContactInfo.csv", 'tblcsvdata');
  });


document.addEventListener("DOMContentLoaded", function() {
    skillsFile("Documents/Skills.csv", 'skills');
});
document.addEventListener("DOMContentLoaded", function() {
    readtxtFile("Documents/Profile.txt", 'Profile');
  });

for (let i = 0; i < Exps.length; i++){
    document.addEventListener("DOMContentLoaded", function() {
        readExperienceFile('Documents/'+Exps[i]+'.csv', 'workExperince');
    });
}

for (let i = 0; i < Tra.length; i++){
    document.addEventListener("DOMContentLoaded", function() {
        readExperienceFile('Documents/'+Tra[i]+'.csv', 'trainings');
    });
}

for (let i = 0; i < Edu.length; i++){
    document.addEventListener("DOMContentLoaded", function() {
        readExperienceFile('Documents/'+Edu[i]+'.csv', 'education');
    });
}
    
function showPanel(PanelIndex, ColorCode)
{
    tabButton.forEach(function (node){
        node.style.backgroundColor = "";
        node.style.color = "";
        node.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    });

    tabPanels.forEach(function (node){
        node.style.display = "none";
    });
    i = 0;
    tabIcon.forEach(function (node){
        node.src = 'images/'+Icons[i]+ '.png';
        i++;
    });
    tabIcon[PanelIndex].src = 'images/'+Icons[PanelIndex]+ 'h.png';
    tabButton[PanelIndex].style.backgroundColor="white";
    tabButton[PanelIndex].style.color="#000";
    tabButton[PanelIndex].style.boxShadow = "none";    
    tabPanels[PanelIndex].style.display = "block";
    tabPanels[PanelIndex].style.backgroundColor = ColorCode;
}

function PanelIndexPass(Index)
{
    PIndex = Index;
    sessionStorage.setItem("PIndex", PIndex);
}

// function findHeights(TableId,Data,vl2H,n) {
//     var tblsize = document.getElementById(TableId).rows.length;

//     for (var i = 1; i <= tblsize; i++) {
//         var tbl = document.getElementById(Data+i);
//         var vlH = document.getElementById(vl2H+i);
//         if (i == 2 && n == 1) var tblH = tbl.offsetHeight + 20;
//         else tblH = tbl.offsetHeight - 15;
//         vlH.style.height = tblH + 'px';
//     }
// }

function readCSVFile(FilePath, TableId){    
    var request = new XMLHttpRequest();
    request.open('GET', FilePath, true);
    request.responseType = 'blob';
    request.onload = function() {
        var reader = new FileReader();
        reader.readAsText(request.response); // -------------------------------------- Read file as string
        // ************** Load event **************
        reader.onload = function(event) {
            var csvdata = event.target.result; // ---------------------------------------------------- Read file data
            var rowData = csvdata.split('\n'); // ---------------------------------------------------- Split by line break to gets rows Array
            var tbodyEl = document.getElementById(TableId).getElementsByTagName('tbody')[0]; // - <table > <tbody>
            // console.log('DataURL:', event.target.result);
            // Loop on the row Array (change row=0 if you also want to read 1st row)
            for (var row = 0; row < rowData.length; row++) {
                var newRow = tbodyEl.insertRow(); // ----------------------------------------------- Insert a row at the end of table
                rowColData = rowData[row].split(','); // ------------------------------------------- Split by comma (,) to get column Array

                // Loop on the row column Array
                for (var col = 0; col < rowColData.length; col++) {
                    var newCell = newRow.insertCell(); // ----------------------------------------- Insert a cell at the end of the row
                    if (col == 0) newCell.id = "infoTitle";
                    else newCell.id = "info";
                    newCell.innerHTML = rowColData[col];
                }
            }
            tbodyEl.firstElementChild.remove();
        }

    };
    request.send();
}

function readtxtFile(FilePath, ParagraphId){    
    var request = new XMLHttpRequest();
    request.open('GET', FilePath, true);
    request.responseType = 'blob';
    request.onload = function() {
        var reader = new FileReader();
        reader.readAsText(request.response); // -------------------------------------- Read file as string
        // ************** Load event **************
        reader.onload = function(event) {
            var csvdata = event.target.result; // ---------------------------------------------------- Read file data
            var Paragraph = document.getElementById(ParagraphId)
            // console.log('DataURL:', event.target.result);
            Paragraph.innerHTML = csvdata;
        }

    };
    request.send();
}

function readExperienceFile(FilePath, DivId){    
    var request = new XMLHttpRequest();
    request.open('GET', FilePath, true);
    request.responseType = 'blob';
    request.onload = function() {
        var reader = new FileReader();
        reader.readAsText(request.response); // -------------------------------------- Read file as string
        // ************** Load event **************
        reader.onload = function(event) {
            let csvdata = event.target.result; // ---------------------------------------------------- Read file data
            let rowData = csvdata.split('\n'); // ---------------------------------------------------- Split by line break to gets rows Array
            let expDiv  = document.createElement("div"); // ------------------------------------------ Create main container
            expDiv.id = "Experience"; 
            // ==================== Title and logo =============================================================================
            let expMainInfo  = document.createElement("div"); // ------------------------------------- Title and logo container
            expMainInfo.id = 'expMainInfo'; 
            expDiv.appendChild(expMainInfo);
            // ---------------------------------------------
            let CompanyLogo = document.createElement("div"); // -------------------------------------- logo container
            CompanyLogo.id = 'CompanyLogo';
            expMainInfo.appendChild(CompanyLogo);

            let ExpTitles = document.createElement("div"); // ---------------------------------------- Title container
            ExpTitles.id = 'ExpTitles';
            expMainInfo.appendChild(ExpTitles);
            // ===================== Timeline and events =======================================================================
            let FullEvent  = document.createElement("div"); // ---------------------------------------- Timeline and events container
            expDiv.appendChild(FullEvent);

            let EventPoint  = document.createElement("div"); // --------------------------------------- Event point 
            EventPoint.id = 'Event';
            FullEvent.appendChild(EventPoint);

            let Eventline  = document.createElement("div"); // ---------------------------------------- Timeline 
            Eventline.id = 'EventLine';
            FullEvent.appendChild(Eventline);
            // ===================== Details ===================================================================================
            let ExpDetails  = document.createElement("div"); // -------------------------------------- Details container
            ExpDetails.id = 'ExpDetails';
            expDiv.appendChild(ExpDetails);

            for (let row = 0; row < rowData.length; row++) {
                let rowColData = rowData[row].split(';');
                switch (row){
                    case 0:
                        let workPeriod  = document.createElement("h4"); // -------------------------- 1st line in title (Event period)
                        workPeriod.id = 'workingPeriod';
                        workPeriod.textContent = rowColData[0];
                        ExpTitles.appendChild(workPeriod);
                        break;
                    case 1:
                        if (rowColData[0] != '')
                        {
                            let position  = document.createElement("b"); // ------------------------- 2nd line in title (Title)
                            position.id = 'Jobtitle';
                            position.textContent = rowColData[0];
                            ExpTitles.appendChild(position);
                        }
                        break;
                    case 2:
                        if (rowColData[0] != '') ExpTitles.appendChild(document.createElement("br"));
                        let company  = document.createElement("a"); // ------------------------------ 3nd line in title (Company Name)
                        company.id = 'CompanyLink';
                        if (rowColData[1] != '') company.href = rowColData[1]; // ------------------- Company link
                        company.textContent = rowColData[0]; // ------------------------------------- Company Name
                        ExpTitles.appendChild(company);
                        ExpTitles.appendChild(document.createElement("br"));
                        let companyAdr  = document.createElement("p");
                        companyAdr.id = 'WorkAddress';
                        companyAdr.textContent = rowColData[2];
                        ExpTitles.appendChild(companyAdr);
                        break;
                    case 3:
                        let Complogo  = document.createElement("img");
                        Complogo.id = 'Complogo';
                        Complogo.src = 'images/'+rowColData[0];
                        Complogo.alt = rowColData[1];
                        CompanyLogo.appendChild(Complogo);
                        break;
                
                    case 4:
                        let summary  = document.createElement("p");
                        summary.id = 'jobSummary';
                        summary.textContent = rowColData[0];
                        ExpDetails.appendChild(summary);
                        LastObj = row+1;
                        break;

                    default:
                        if (LastObj < rowData.length-1)
                        {
                            let LastrowData = rowData[LastObj].split(';');
                            let DetailsTitle  = document.createElement("h5");
                            DetailsTitle.id = 'SubTitleEx';
                            DetailsTitle.textContent = LastrowData[0];
                            ExpDetails.appendChild(DetailsTitle); 

                            let DetailsPoints = document.createElement("ul");
                            DetailsPoints.id = 'Objects';

                            let res = 0;
                            let Nextres = rowData[LastObj+res].split(';');
                            if (Nextres[2]==''){
                                ExpDetails.appendChild(DetailsPoints);
                            }
                            else{
                                let subDetails  = document.createElement("div"); // -------------------------------------- Details container
                                subDetails.id = 'subDetails';
                                ExpDetails.appendChild(subDetails);

                                let SubEvent  = document.createElement("div"); // ---------------------------------------- Timeline and events container
                                SubEvent.id = 'SubEvent';
                                subDetails.appendChild(SubEvent);

                                let subEventPoint  = document.createElement("div"); // --------------------------------------- Event point 
                                subEventPoint.id = 'Event';
                                SubEvent.appendChild(subEventPoint);

                                let subEventline  = document.createElement("div"); // ---------------------------------------- Timeline 
                                subEventline.id = 'subEventLine';
                                SubEvent.appendChild(subEventline);

                                var subEventDetails  = document.createElement("div"); // -------------------------------------- Details container
                                subEventDetails.id = 'subEventDetails';
                                subDetails.appendChild(subEventDetails);

                                let subEventPeriod  = document.createElement("h4"); // -------------------------- 1st line in title (Event period)
                                subEventPeriod.id = 'subPeriod';
                                subEventPeriod.textContent = Nextres[2];
                                subEventDetails.appendChild(subEventPeriod);

                                let TitleOfSubDetails = document.createElement("div");
                                TitleOfSubDetails.id = 'TitleOfSubDetails';
                                subEventDetails.appendChild(TitleOfSubDetails);

                                let SubDetailsTitle  = document.createElement("h5");
                                SubDetailsTitle.id = 'SubDetailsTitle';
                                SubDetailsTitle.textContent = Nextres[1];
                                TitleOfSubDetails.appendChild(SubDetailsTitle);

                                // let Space  = document.createElement("div");
                                // Space.id = 'Space';
                                // TitleOfSubDetails.appendChild(Space);

                                // let seeMore  = document.createElement("button");
                                // seeMore.id = 'SeeMore';
                                // seeMore.textContent = 'more⮟';
                                // TitleOfSubDetails.appendChild(seeMore);

                                subEventDetails.appendChild(DetailsPoints);
                            }
                            let FullData =  false
                            while (res == 0 || Nextres[0] == ''){
                                if (Nextres[2]==''){
                                    let NewTitle = Nextres[1].split('|');
                                    if (NewTitle.length > 1){
                                        let NewTitle = Nextres[1].split('|T|');
                                        let SubSubTitle  = document.createElement("h5");
                                        SubSubTitle.id = 'SubTitleEx';
                                        SubSubTitle.textContent = NewTitle[0];
                                        DetailsPoints.appendChild(SubSubTitle);
                                    }
                                    else{
                                        let elm = document.createElement("li");
                                        elm.textContent = Nextres[1];
                                        DetailsPoints.appendChild(elm);
                                    }
                                }
                                else if(Nextres[1]!='' && Nextres[2]==''){
                                        let elm = document.createElement("li");
                                        elm.textContent = Nextres[1];
                                        DetailsPoints.appendChild(elm);
                                }
                                else if(Nextres[1]==''){
                                    switch(res){
                                        case 1:
                                            let TalkTitle = document.createElement("p");
                                            TalkTitle.id = 'TalkTitle';
                                            TalkTitle.textContent = Nextres[2];
                                            subEventDetails.appendChild(TalkTitle);
                                            FullConfData = false;
                                            break;
                                        case 2:
                                            let ConfAdress = document.createElement("p");
                                            ConfAdress.id = 'ConfAdress';
                                            ConfAdress.textContent = Nextres[2];
                                            subEventDetails.appendChild(ConfAdress);
                                            FullConfData = true;
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                res++;
                                if (FullData) break;
                                if (LastObj+res < rowData.length-1)
                                    Nextres = rowData[LastObj+res].split(';');
                                else  break;
                                if (Nextres[1]!='' && Nextres[2]!='') break;
                            }
                            LastObj += res
                            break;
                        }
                    break;
                }
            }            
            document.getElementById(DivId).appendChild(expDiv);
            DivId.innerHTML = csvdata;
        }
    };
    request.send();
}

function skillsFile(FilePath, SectionId){   
    var skills = {}; 
    var request = new XMLHttpRequest();
    request.open('GET', FilePath, true);
    request.responseType = 'blob';
    request.onload = function() {
        var reader = new FileReader();
        reader.readAsText(request.response); // -------------------------------------- Read file as string
        // ************** Load event **************
        reader.onload = function(event) {
            var csvdata = event.target.result; // ---------------------------------------------------- Read file data
            var rowData = csvdata.split('\n'); // ---------------------------------------------------- Split by line break to gets rows Array
            var SkillsContainer = document.getElementById(SectionId) 
            // console.log('DataURL:', event.target.result);
            // Loop on the row Array (change row=0 if you also want to read 1st row)
            for (var row = 0; row < rowData.length; row++) {
                let rowColData = rowData[row].split(',');
                if (rowColData[0] in skills){
                    let keydata = rowColData[1]
                    let Valuedata = Number(rowColData[2])
                    let skill = {}
                    skill[keydata] = Valuedata; 
                    skills[rowColData[0]].push(skill)
                }
                else {
                    skills[rowColData[0]] = [];
                    let keydata = rowColData[1]
                    let Valuedata = Number(rowColData[2])
                    let skill = {}
                    skill[keydata] = Valuedata; 
                    skills[rowColData[0]].push(skill)
                }
            }
            console.log(skills)
            // for (var row = 0; row < skills.length; row++){
            //     let Category = document.createElement("div"); 
            //     Category.id = skills;
            //     TalkTitle.textContent = Nextres[2];
            //     subEventDetails.appendChild(TalkTitle);
                
            // }
        }

    };
    request.send();
}
