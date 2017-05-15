var page = require('webpage').create();
page.viewportSize = { width: 1600, height: 900 };
page.open('http://runbot2.vauxoo.com/web/login', function(status) {
    page.evaluate(function() {
        document.forms[0].login.value="";
        document.forms[0].password.value="";
        document.forms[0].submit();
    });
    setTimeout(function(){
        page.render("nextPage.png");
        all_builds();
    }, 10000);
    console.log("Global status: " + status);
});
all_builds = function(){
  var inc = 378;
  var page2 = require('webpage').create();
  page2.viewportSize = { width: 1600, height: 900 };
  function builds() {
    console.log("builds iter");
    page2.clipRect = { top: 0, left: 0, width: 1600, height: 900 };
    page2.open('http://runbot2.vauxoo.com/runbot/repo/git-github-com-vauxoo-yoytec-git-7', function(status) {
      console.log('Status: ' + status);
      page2.render("timelapse/builds-"+inc+".png");
      inc += 1;
      console.log("iterated for "+inc+" minutes");
    });
  }
  setInterval(builds, 60000);
}
