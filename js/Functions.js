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
    adjustButtonPosition()
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

// document.addEventListener("DOMContentLoaded", function() {
//     skillsFile("Documents/Skills.csv");
// });

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
// single Item Collapsible
for (let i = 0; i < coll.length; i++) {coll[i].textContent = '>'}

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    for (let j = 0; j < coll.length; j++) {
        if (this == coll[j]){
            var Object = Objects[j]
            var subPeriod = subPeriods[j]
            var colindx = j
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
    // 
    if (this.id == "SkillDetail"){
        let skillsDegrees = SkillsDetails[colindx-10].querySelectorAll('.SkillsDegree');
        let SkillsSummary = SkillsDetails[colindx-10].querySelectorAll('.SkillsSummary');
        // console.log(SkillsD[indx-10])
        // Object.style.display = "none";
        // subPeriod.style.display = "none";
        for (let k = 0; k < skillsDegrees.length; k++) {
            if (skillsDegrees[k].style.maxHeight > "0px") {
                skillsDegrees[k].style.display = "none";
                skillsDegrees[k].style.maxHeight = "0px";
                skillsDegrees[k].style.overflow = "hidden";
                SkillsSummary[k].style.width = "auto";
                this.textContent = '>'
            } else {
                skillsDegrees[k].style.display = "inline-block";
                skillsDegrees[k].style.maxHeight = skillsDegrees[k].scrollHeight + "px";
                skillsDegrees[k].style.overflow = "visible";
                SkillsSummary[k].style.width = "120px";
                this.textContent = '-'
            }
        }
    }

  });
}

// Collapsible all
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
        for (let k = 0; k < SkillsDegs.length; k++) {
            SkillsDegs[k].style.display = "inline-block";
            SkillsDegs[k].style.maxHeight = SkillsDegs[k].scrollHeight + "px";
            SkillsSum[k].style.width = "120px";
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
        for (let k = 0; k < SkillsDegs.length; k++) {
            SkillsSum[k].style.width = "auto";
            SkillsDegs[k].style.display = "none";
            SkillsDegs[k].style.maxHeight = "0px";
            SkillsDegs[k].style.overflow = "hidden";
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
    adjustButtonPosition()
}

function PanelIndexPass(Index)
{
    PIndex = Index;
    sessionStorage.setItem("PIndex", PIndex);
}


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
        reader.readAsText(request.response); // ------------------ Read file as string
        // ************** Load event **************
        reader.onload = function(event) {
            var csvdata = event.target.result; // -------------------------- Read file data
            var Paragraph = document.getElementById(ParagraphId)
            // console.log('DataURL:', event.target.result);
            Paragraph.innerHTML = csvdata;
        }

    };
    request.send();
}

function myNewFunction(sel) {
    if (sel.options[sel.selectedIndex].value == 'Aero') {window.open("Documents/Ahmed_Hanfy_Resume.pdf");}
    else if (sel.options[sel.selectedIndex].value == 'Mech') {window.open("Documents/Resume_Ahmed_Hanfy.pdf");}
    else if (sel.options[sel.selectedIndex].value == 'Data') {window.open("Documents/Ahmed-Hanfy-Resume.pdf");}
    // alert(sel.options[sel.selectedIndex].value == );
}


// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-red", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-red";
// }

// var resurcherImgPaths;


// console.log("Image Path List:", resurcherImgPaths);
var ActivIndex = 0;
function LOADActiv(){
    let Activ = document.getElementsByClassName("activity")
    for (let i = 0; i < Activ.length; i++) {
        ActivImgShow(`images/${Folders[i]}/${ListOfLists[i][0][0]}`, 
            ListOfLists[i][ActivImgIndx[i]][1], i
        )
    }
}
LOADActiv()

function AddImg(i, divID) {
    imgList = ListOfLists[divID]
    n = imgList.length
    ActivImgIndx[divID] += i
    if (ActivImgIndx[divID] > n-1) {ActivImgIndx[divID] = 0}
    if (ActivImgIndx[divID] < 0) {ActivImgIndx[divID] = n-1}
    imgDirc = `images/${Folders[divID]}/${imgList[ActivImgIndx[divID]][0]}`
    ActivImgShow(imgDirc, imgList[ActivImgIndx[divID]][1], divID);    
}

function ActivImgShow(imgPath, lable, divID) {
    var imgContainer = document.getElementsByClassName("ActivImg")[divID];
    var lableContainer = document.getElementsByClassName("ActivImg-txt")[divID];
    imgContainer.src = imgPath
    lableContainer.textContent = lable
    if (lableContainer.clientHeight > 0){
        imgContainer.style.height = `calc(100% - ${lableContainer.clientHeight}px)`
    }
    else{
        imgContainer.style.height = `calc(100% - 27px)`
    }
   
    adjustButtonPosition()
}

function adjustButtonPosition() {
    let img = document.getElementsByClassName("Activ-imgs");
    const btnRight = document.querySelectorAll('.btnRight');
    const btnLeft = document.querySelectorAll('.btnLeft');
    for (let i = 0; i < img.length; i++) {
        if (img[i]) {
            const imgRect = img[i].getBoundingClientRect();
            // Adjust right button position
            btnRight[i].style.left = `${imgRect.width - 15}px`;
            btnLeft[i].style.left = `${20}px`;
            btnRight[i].style.top = `${imgRect.height/2+10}px`;
            btnLeft[i].style.top = `${imgRect.height/2+10}px`;
        }
    }
}
window.addEventListener('resize', () => adjustButtonPosition());
window.addEventListener('load', () => adjustButtonPosition());

var slideshow = document.getElementById("Researchers");
var imgsprop = document.getElementsByClassName("ActivImg");

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

function adjustoverlayheight() {
    let overlay = document.getElementsByClassName("overlay")[0]
    let vwh = document.documentElement.clientHeight
    overlay.style.height = `${vwh-20}px`;
    overlay.scrollIntoView(true)
}

window.addEventListener('resize', () => adjustoverlayheight());

function ActivImgShowOverlay(imgPath, lable) {
    var imgContainer = document.getElementsByClassName("img-Privew");
    var lableContainer = document.getElementsByClassName("overlayFooter");
    imgContainer[0].src = imgPath
    lableContainer[0].textContent = lable
    // adjustButtonPosition()
}

function openNav(divID) {
    let overlay = document.getElementsByClassName("overlay")[0];
    let vwh = document.documentElement.clientHeight;
    overlay.style.display = "block";
    overlay.scrollIntoView(true);
    overlay.style.height = `${vwh-20}px`;
    unloadScrollBars()
    imgList = ListOfLists[divID]
    imgDirc = `images/${Folders[divID]}/${imgList[ActivImgIndx[divID]][0]}`
    ActivImgShowOverlay(imgDirc, imgList[ActivImgIndx[divID]][1]);
}

/* Close */
function closeNav() {
    document.getElementsByClassName("overlay")[0].style.display = "none";
    reloadScrollBars()
}

window.onscroll = function() {myFunction()};

function myFunction() {
    let overlay = document.getElementsByClassName("overlay")[0];
    let scrollPos = document.documentElement.scrollTop
    overlay.style.top = `${scrollPos+10}px`;
}
// --------------------- Activities -------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  let controlbox = document.getElementsByClassName("ActivityControllers")[0];
  controlbox.scrollIntoView(true);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
  let controlbox = document.getElementsByClassName("ActivityControllers")[0];
  controlbox.scrollIntoView(true);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("activity");
  let activLen = x.length
  let dots = document.getElementsByClassName("demo");
  if (n > activLen) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" buttonRed", "");
  }
  x[slideIndex-1].style.display = "flex";
  if (activLen > 3 && slideIndex > 1 && slideIndex < activLen){
    dots[1].className += " buttonRed";
    dots[1].textContent = slideIndex
    dots[1].setAttribute('onclick',`currentDiv(${slideIndex})`)

    dots[0].textContent = slideIndex-1
    dots[0].setAttribute('onclick',`currentDiv(${slideIndex-1})`)
    dots[2].textContent = slideIndex+1
    dots[2].setAttribute('onclick',`currentDiv(${slideIndex+1})`)
  }
  else if(activLen > 3 && slideIndex == 1){
    dots[0].className += " buttonRed";
    dots[0].textContent = slideIndex
    dots[1].textContent = slideIndex+1
    dots[2].textContent = slideIndex+2
  }
  else if(activLen > 3 && (slideIndex) == activLen){
    // console.log('Iamthere')
    dots[2].className += " buttonRed";
    dots[2].textContent = slideIndex
    dots[1].textContent = slideIndex-1
    dots[0].textContent = slideIndex-2
  }
  else{
    // console.log('Iamhere')
    dots[slideIndex-1].className += " buttonRed";
  }
  adjustButtonPosition()
}