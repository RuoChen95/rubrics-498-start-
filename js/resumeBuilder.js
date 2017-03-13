/*
data
 */
var bio = {
    "name": "Xie Ruochen12",
    "role": "Web Developer",
    "contacts": {
        "mobile": "186-1747-8572",
        "email": "xrc_1995@163.com",
        "github": "Ruochen95",
        "twitter": "ccx!",
        "location": "Hangzhou"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc",
    "skills": ["awesomeness", "js", "html", "CSS"],
    "biopic": "images/fry.jpg"
};

var work = {
    "jobs": [{
        "employer": "GTC",
        "location": "Hangzhou",
        "title": "GTC-TL",
        "dates": "Sep 2016-Dec 2016",
        "description": "translated those courses: 1. Ancient Philosophy: Aristotle and His Successors·Universals and Particulars·Matter, Form, and Change·Nature;2. Understanding Memory: Explaining the Psychology of Memory through Movies·Lecture; 3: Memory's Everyday Function·Lecture 12: Tell Me a Story About You - Film: Slumdog Millionaire3. Data Visualization·SRT 4.2.1. Visualization System Design"
    }] //only one job
};


var projects = {
    "projects": [{
        "title": "tic tac toe game",
        "dates": "2016",
        "description": "using javascript, HTML and CSS to simulate the simple tic tac toe game",
        "images": ["images/tic.png","images/tic.png"]
    }] // only one projects
};

var education = {
    "schools": [{
        "name": "North China Electric power Univercity",
        "location": "Baoding Hebei China",
        "degree": "BA",
        "majors": ["environment"],
        "dates": "2013",
        "url": "http://example.com"
    }],
    "onlineCourses": [{
            "title": "Font-end Development",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://example.com"
        },
        {
            "title": "Font-end Development",
            "school": "Free Code Camp",
            "dates": "2016",
            "url": "http://example.com"
        }
    ] // one school and two online courses
};

/*
using:
1. for loop
2. function
3. encapsulation
4. map
 */

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName); // because name is in front of role

    var formattedmobile = HTMLmobile.replace("%data%", this.contacts.mobile);    
    var formattedemail = HTMLemail.replace("%data%", this.contacts.email);  
    var formattedgithub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%", this.contacts.location);
   	$("#topContacts, #footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedtwitter, formattedlocation); // put information in the contacts and footer at the same time

    var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
    $("#topContacts").after(formattedPic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(formattedMsg);

    $("#header").append(HTMLskillsStart);
    for (var myskills = 0; myskills < this.skills.length; myskills++) {
        var formattedSkill = HTMLskills.replace("%data%", this.skills[myskills]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

work.display = function() {
    for (var job = 0; job < this.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription); // making sure it locats in the last data line
    }
};

work.display();

projects.display = function(){
    for (var project = 0; project < this.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for(var image = 0; image < this.projects[project].images.length; image++){
	        var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
	        $(".project-entry:last").append(formattedImage);
    	}
    }
};

projects.display();

education.display = function(){
    for (var school = 0; school < this.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
        var formattedNameDegree = formattedName+formattedDegree; // another way of combine data
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (var onlineCourse = 0; onlineCourse < this.onlineCourses.length; onlineCourse++) {
        $(".online-entry").after(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
        var formattedDatesedu = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
        var formattedTitleSchool = formattedTitle+formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDatesedu);
        $(".education-entry:last").append(formattedURL);
    }
};

education.display();

$("#mapDiv").append(googleMap);