//set background and color so that the lines do not dissapear     
    $(document).ready(function(){
    //   $("p").hover(changeParStyle);

    //  function changeParStyle() {
    //    $(this).toggleClass("clicked");
    //  }

     var nounArr = ["aliens", "unicorns", "basketball", "buildings", "arrows"];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });
        
    });
    var adjectiveArr = ["tall", "fast", "confident", "sloppy", "needy"];

    $("button").click(function() {
        $(".adjective").each(function() {
            var randomIndex = Math.floor(Math.random() * adjectiveArr.length);
            $(this).text(adjectiveArr[randomIndex]);
        });

      });
  
      var verbArr = ["flatter", "dread", "emerge", "sprint", "growl"];

      $("button").click(function() {
          $(".verb").each(function() {
              var randomIndex = Math.floor(Math.random() * verbArr.length);
              $(this).text(verbArr[randomIndex]);
          });
  
        });
});
    
