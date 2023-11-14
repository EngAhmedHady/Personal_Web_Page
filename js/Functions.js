var tabButton = document.querySelectorAll(".Tab");
var tabIcon = document.querySelectorAll(".Icon");
var Icons = ['ProfileIcon', 'ResumeIcon', 'PortfolioIcon', 'ContactMeIcon']
var tabPanels = document.querySelectorAll(".Content");
var PIndex;
var LastObj = 0

// var Exps = ['Experience1', 'Experience2']
// var Tra = ['Training1','Training2','Training3']
// var Edu = ['Education1','Education2','Education3']

let CVList = document.querySelectorAll('.CVlist')
let CVData = document.querySelectorAll('.CVData')

for (let i = 0; i < CVList.length; i++){
    CVList[i].addEventListener("click", function(){
        for (let j = 0; j<CVList.length; j++){
            CVList[j].classList.remove('activated');
        }
        this.classList.add('activated');

        let dataFilter = this.getAttribute('data-filter');
        for (let k =0; k < CVData.length; k++){
            CVData[k].classList.add('hide');
            CVData[k].classList.remove('active');
            if(CVData[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                CVData[k].classList.add('active')
                CVData[k].classList.remove('hide')
            }
        }
    })
}


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
    skillsFile("Documents/Skills.csv");
});

document.addEventListener("DOMContentLoaded", function() {
    readtxtFile("Documents/Profile.txt", 'Profile');
  });

// for (let i = 0; i < Exps.length; i++){
//     document.addEventListener("DOMContentLoaded", function() {
//         readExperienceFile('Documents/'+Exps[i]+'.csv', 'workExperince');
//     });
// }

// for (let i = 0; i < Tra.length; i++){
//     document.addEventListener("DOMContentLoaded", function() {
//         readExperienceFile('Documents/'+Tra[i]+'.csv', 'trainings');
//     });
// }

// for (let i = 0; i < Edu.length; i++){
//     document.addEventListener("DOMContentLoaded", function() {
//         readExperienceFile('Documents/'+Edu[i]+'.csv', 'education');
//     });
// }

// collapsible functions
var coll = document.getElementsByClassName("collapsible");
var Objects = document.getElementsByClassName("Objects")
var subPeriods = document.getElementsByClassName("subPeriod")
var confCont = document.getElementsByClassName("ConferencesContent");
// single Item Collapsible
for (let i = 0; i < coll.length; i++) {coll[i].textContent = '>'}

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    for (let j = 0; j < coll.length; j++) {
        if (this == coll[j]){
            var Object = Objects[j]
            var subPeriod = subPeriods[j]
        }
    } 
       
    if (Object.style.display == "block") {
        Object.style.display = "none";
        subPeriod.style.display = "none";
        Object.style.maxHeight = "0px";
        subPeriod.style.maxHeight = "0px";
        this.textContent = '>'
    } else {
        Object.style.display = "block";
        subPeriod.style.display = "block";
        Object.style.maxHeight = Object.scrollHeight + "px";
        subPeriod.style.maxHeight = subPeriod.scrollHeight + "px";
        this.textContent = '-'
    }

    if (this.id == "ConferencesCol"){
        Object.style.display = "none";
        subPeriod.style.display = "none";
        for (let k = 0; k < confCont.length; k++) {
            if (confCont[k].style.display == "flex") {
                confCont[k].style.display = "none";
                confCont[k].style.maxHeight = "0px";
                confCont[k].style.marginTop = "0px";
                this.textContent = '>'
            } else {
                confCont[k].style.display = "flex";
                confCont[k].style.marginTop = "10px";
                confCont[k].style.maxHeight = confCont[k].scrollHeight + "px";
                this.textContent = '-'
            }
        }
    }

  });
}

// Collapsible all
var ToggleBtn = document.getElementsByClassName("ToggleBtn");
var exp = 0;
var ExpTxt = document.getElementById("ExpAllTxt")
ExpTxt.textContent = "EXPAND ALL"
for (let i = 0; i < ToggleBtn.length; i++) {
    ToggleBtn[i].addEventListener("click", function() {
      this.classList.toggle("Expanded");
      if (exp == 0){
        for (let j = 0; j < Objects.length; j++) {
            Objects[j].style.display = "block";
            subPeriods[j].style.display = "block";
            Objects[j].style.maxHeight = Objects[j].scrollHeight + "px";
            subPeriods[j].style.maxHeight = subPeriods[j].scrollHeight + "px";
            coll[j].textContent = '-'
        }
        for (let k = 0; k < confCont.length; k++) {
            confCont[k].style.display = "flex";
            confCont[k].style.marginTop = "10px";
            confCont[k].style.maxHeight = confCont[k].scrollHeight + "px";
        }
        ExpTxt.textContent = "COLLAPSE ALL"
        exp = 1;
      }
    else{
        for (let j = 0; j < Objects.length; j++) {
            Objects[j].style.display = "none";
            subPeriods[j].style.display = "none";
            Objects[j].style.maxHeight = "0px";
            subPeriods[j].style.maxHeight = "0px";
            coll[j].textContent = '>'
        }
        for (let k = 0; k < confCont.length; k++) {
            confCont[k].style.display = "none";
            confCont[k].style.maxHeight = "0px";
            confCont[k].style.marginTop = "0px";
        }
        exp = 0;
        ExpTxt.textContent = "EXPAND ALL"
    }
    });
  }

// 


 // Tabs functions   
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

function skillsFile(FilePath){   
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
            var SkillsData  = document.createElement("div");
            // Loop on the row Array (change row=0 if you also want to read 1st row)
            for (var row = 0; row < rowData.length; row++) {
                rowColData = rowData[row].split(','); // ------------------------------------------- Split by comma (,) to get column Array
                if (rowColData[0] != 'Other'){
                    var SkillData  = document.createElement("div");
                    // let NewSkill = document.createElement("span"); 
                    SkillData.classList.add("Skill");
                    SkillData.textContent = "Hello " + row;
                    // SkillData.appendChild(NewSkill);

                    console.log(rowColData[1], parseInt(rowColData[2],10))
                    // for (let star = 0; star < 5; star++){
                    //     let NewStar = document.createElement("span");
                    //     NewStar.classList.add("fa");
                    //     NewStar.classList.add("fa-star");
                    //     console.log(parseInt(rowColData[2],10))
                    //     if (star < parseInt(rowColData[2],10)) NewStar.classList.add("Ticks");
                    //     SkillData.appendChild(NewStar);
                    // }
                    
                }
                else {
                    
                }
                SkillsData.appendChild(SkillData);
                document.getElementById("RatedSkills").appendChild(SkillsData)
                RatedSkills.innerHTML = rowColData[1];
            }
            
        }
    };
    request.send();
}


                // Loop on the row column Array
                // for (var col = 0; col < rowColData.length; col++) {
                //     var newCell = newRow.insertCell(); // ----------------------------------------- Insert a cell at the end of the row
                //     if (col == 0) newCell.id = "infoTitle";
                //     else newCell.id = "info";
                //     newCell.innerHTML = rowColData[col];
                // }
                
                       
            // if (rowColData[0] != 'Other'){
            //     let newCell = newRow.insertCell();
            //     let Skill =  document.createElement("div");
            //     newCell.id = "RatedSkills";
            //     let Category = document.createElement("span"); 
            //     Category.classList.add("Skill");
            //     Category.textContent = rowColData[1];
            //     console.log( rowColData[1], parseInt(rowColData[2],10))
            //     Skill.appendChild(Category);
            //     for (let star = 0; star < 5; star++){
            //         let Star = document.createElement("span");
            //         Star.classList.add("fa");
            //         Star.classList.add("fa-star");
            //         console.log(parseInt(rowColData[2],10))
            //         if (star < parseInt(rowColData[2],10)) Star.classList.add("Ticks");
            //         Skill.appendChild(Star);
            //     }
            //     newCell.appendChild(Skill);
            // }
            // else {
                
            // }

            // SkillsContainer.firstElementChild.remove();

            // var SkillsContainer = document.getElementById(SectionId) 
            // console.log('DataURL:', event.target.result);
            // Loop on the row Array (change row=0 if you also want to read 1st row)

            // for (var row = 0; row < rowData.length; row++) {
            //     let rowColData = rowData[row].split(',');
            //     if (rowColData[0] in skills){
            //         let keydata = rowColData[1]
            //         let Valuedata = Number(rowColData[2])
            //         let skill = {}
            //         skill[keydata] = Valuedata; 
            //         skills[rowColData[0]].push(skill)
            //     }
            //     else {
            //         skills[rowColData[0]] = [];
            //         let keydata = rowColData[1]
            //         let Valuedata = Number(rowColData[2])
            //         let skill = {}
            //         skill[keydata] = Valuedata; 
            //         skills[rowColData[0]].push(skill)
            //     }
            // }
            // console.log(skills)
            // for (var row = 0; row < skills.length; row++){
            //     let Category = document.createElement("div"); 
            //     Category.id = skills;
            //     TalkTitle.textContent = Nextres[2];
            //     subEventDetails.appendChild(TalkTitle);
                
            // }