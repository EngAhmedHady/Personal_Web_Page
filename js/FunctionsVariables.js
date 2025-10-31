var tabButton = document.querySelectorAll(".Tab");
var tabIcon = document.querySelectorAll(".Icon");
var Icons = ['ProfileIcon', 'ResumeIcon', 'PortfolioIcon', 'ContactMeIcon'];
var tabPanels = document.querySelectorAll(".Content");
var PIndex;
var LastObj = 0;

// ================== Collapsible =====================
var coll = document.getElementsByClassName("collapsible");
var Objects = document.getElementsByClassName("Objects");
var subPeriods = document.getElementsByClassName("subPeriod");
var confCont = document.getElementsByClassName("ConferencesContent");
var pubCont = document.getElementsByClassName("PublicationsContent");
var SkillsDetails = document.getElementsByClassName("SkillsUndertitle");

// ------------------ Collapsible all -----------------
var ToggleBtn = document.getElementsByClassName("ToggleBtn");
var SkillsDegs = document.getElementsByClassName("SkillsDegree");
var SkillsSum = document.getElementsByClassName("SkillsSummary");
var exp = 0;
var ExpTxt = document.getElementById("ExpAllTxt");

// =================== Activities ======================
var researcherImgList = [
    ['Jabo-1.jpg', 'Jabłonna 2021'], ['Jabo-2.jpg', 'Jabłonna 2021'], 
    ['Jabo-3.jpg', 'Jabłonna 2021'], ['Jabo-4.jpg', 'Jabłonna 2021'],
    ['Scho-1.jpg', 'Secondary schools, Gdansk 2022'], 
    ['Scho-2.jpg', 'Secondary schools, Gdansk 2022'], 
    ['Scho-3.jpg', 'Secondary schools, Gdansk 2022'], 
    ['Scho-4.jpg', 'Secondary schools, Gdansk 2022'], 
    ['Scho-5.jpg', 'Secondary schools, Gdansk 2022']
];

var ROV17ImgList = [
    ['ROV17-0.jpg', 'Team training, 2017'], ['ROV17-2.jpg', 'ROV sketch, 2017'], 
    ['ROV17-3.jpg', 'ROV model evaluation on CFD, 2017']
];

var ROV15_16ImgList = [
    ['Team15.jpg', 'Torpedo team, 2014-2015'], 
    ['Win2nd-1.jpg', 'Winning 2nd place in Regional competition, 2015'], 
    ['canada2015-1.jpg', 'Torpedo team at Memorial University of Newfoundland, Canada (2015)'], 
    ['canada2015-2.jpg', 'Torpedo team at Memorial University of Newfoundland, Canada (2015)'],
    ['Team16.jpg', 'Torpedo team, 2015-2016'],
    ['ROV16.jpg', 'Triton ROV, 2015-2016'], 
    ['Win2nd-2.jpg', 'Winning 2nd place in Regional competition, 2016'], 
    ['NBL16-1.jpg', 'Torpedo team at Neutral Buoyancy Lab, NASA (2016)'], 
    ['NBL16-2.jpg', 'Torpedo team at Neutral Buoyancy Lab, NASA (2016)'],
    ['NBL16-3.jpg', 'Torpedo team at Neutral Buoyancy Lab, NASA (2016)'], 
];

var SC_ImgList = [
    ['Team-14.jpg', 'Scince club team, 2014'],
    ['LMR-14.jpg', "Let's Make a Robot - Organisers and teams, 2014"], 
    ['LMR-15.jpg', 'Competition arena, 2015'], 
    ['Magazines.jpg', 'Science club magazine issues, 2012-2014'], 
    ['Orph-15.jpg', "Orphan's day contribution, 2015"],
    ['Tech15-1.jpg', "Let's Make a Robot - Technical presentations, 2015"], 
    ['Tech15-2.jpg', "Let's Make a Robot - Technical presentations, 2015"], 
    ['Tech15-3.jpg', "Let's Make a Robot - Technical presentations, 2015"],
];

var MIA14ImgList = [
    ['Team14.jpg', 'MIA team, 2013-2014'], 
    ['HumanoidRobot.jpg', 'Performing testing for local computation, 2014'], 
    ['AutomaticRobot.jpg', 'Performing testing for local computation, 2014'], 
    ['LocalRobocon.jpg', 'On ground maintenance, 2014'],
    ['LocalRobocon-2.jpg', 'On ground maintenance, 2014'],
];

var Folders = ['Researchers-talks', 'ROV2017', 'ROV2015-16', 'SC','MIA14']
var ListOfLists = [researcherImgList, ROV17ImgList, ROV15_16ImgList, SC_ImgList, MIA14ImgList]
var ActivImgIndx = new Array(Folders.length).fill(0)

// =====================
var overlay = document.getElementsByClassName("overlay")[0];