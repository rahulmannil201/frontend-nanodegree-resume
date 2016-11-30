



 var bio =
 {

    "name" : "Rahul Menon",
    "role": "Web Developer",
    "contacts": {
        "mobile":"9567967498",
        "email" :"rahulmannil201@gmail.com",
        "github" :"rahulmenon",
        "twitter":"rahulmannil201",
        "location":"thrissur"

    },


    "welcomeMessage":"hello im rahul",
    "skills": [
    "html","css","office","sql"
    ],
    "biopic":"images/fry.jpg"
};
    bio.display = function()
    { var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      $('#header').append(formattedPic);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);
    $('#header').append(formattedMessage);
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedLocation);
     $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {


    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
    });




 };

 var education = {

 };

 var education = {
    "schools": [

        {
            "name": "School Of Engineering CUSAT",
            "location": "ERNAKULAM",
            "degree": "B.Tech",
            "majors": ["IT"],
            "dates": "2012-2016",
            "url"   :"http://example.com"
        },
        {
            "name": "Vivekodayam Higher Secondary School",
            "location": "THRISSUR",
            "degree": "12th std",
            "majors": ["CS"],
            "dates": "2010-2012",
            "url"  :"http:://12school.com"

        }

    ],






    "onlineCourses": [{
            "title": "javascript",
            "school": "udacity",
            "dates" :"2016",
             "url"  :"http://www.udacity.com"

        }

    ]
};

    education.display = function()
    { education.schools.forEach(function(school) {
     $("#education").append(HTMLschoolStart);

  var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
  var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
  var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
  var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
  var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
  var formattedurl= HTMLonlineURL.replace("%data%",school.url);
  var formatteduniinfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor + formattedurl;
  $(".education-entry:last").append(formatteduniinfo);
});
    $(".education-entry:last").append(HTMLonlineClasses);



  education.onlineCourses.forEach(function(course) {

    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
    var formattedonlineinfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
    $(".education-entry:last").append(formattedonlineinfo);
  });
};


 var work = {
    "jobs" : [
    {
        "employer" :"jerryrat",
        "title"    :"trainee",
        "location" :"kochi",
        "dates"    :"2016-august 2016",
        "description":"designed webpages using html,css and bootstrap"
    },
    {
       "employer" :"softtech",
        "title"    :"project intern",
        "location"  :"kochi",
        "dates"    :"2016august-november 2016",
        "description":"completed training in java and android"
    }
    ]
};

    work.display = function(){
        work.jobs.forEach(function(job) {
   $("#workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
   var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
   var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
   var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
   var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
   $(".work-entry:last").append(formattedEmployerTitle);
 });
};







var projects = {
    "projects": [
    {
    "title":"railway reservation ",
    "dates":"2015",
    "description":"developed a web based project to mock the railway reservation system",



    "images": [ "images/reservation.jpg"




    ]
}

    ]
};
    projects.display = function()
    { projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedprojectDates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedprojectDescription);
    if (project.images.length > 0){
      var formattedprojectimage = HTMLprojectImage.replace("%data%", project.images);
      $(".project-entry:last").append(formattedprojectimage);
    }
  });
};





       /* $("#header").append(HTMLskillsStart); */
       /* var topContactsArray = [
            formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation
        ];
        for

        (var x in topContactsArray) {
            $("#topContacts").append(topContactsArray[x]);
            $("#footerContacts").append(topContactsArray[x]);
        }
        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        } */
bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);

/*
if(bio.skills.length>0)
{
    $("#header").append("HTMLskillsstart");
    var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
}
function displayWork()
{
for(job in work.jobs)
{
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle= formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription );



}
}
   displayWork();
   function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}
   $(document).click(function(loc) {
  // your code goes here!
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);

});
   function inName(name) {

       // body...
       name=name.trim().split(" ");
       console.log(name);
       name[1]=name[1].toUpperCase();
       name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
       return name[0] +" "+name[1];
       $("#main").append(internationalizeButton);

   }
   inName("sebastin thrun");

   projects.display= function() {

    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

    var formattedTitle=HTMLprojectStart.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].images.length > 0)
    {
        for(image in projects.projects[project].images)
        {
            var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append("formattedImage");
        }
    }

   }
}
projects.display();
*/









