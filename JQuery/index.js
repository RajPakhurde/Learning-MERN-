// document.querySelector
// document.querySelectorAll
// we can write above line in jQuery as jQuery() or $
$("h1").css("color","red");
jQuery("h1").css("color", "blue");

// Adding and removing class of element
$("h1").addClass("big-title change-color");
$("h1").removeClass("big-title");

// if we want to check wheather the perticular class is attached or not.
$("h1").hasClass("margin-50");
 
// Manipulating Text
$("h1").text("Bye");
$("h1").html("<em>Bye</em>");

// Manipulating Atrributes
// get attribute
$("a").attr("href");
// set attribute
$("a").attr("href", "https://www.yahoo.com");

// Adding event listeners
$("h1").click(function(){
    $("h1").css("color", "green");
})

$(document).keypress(function (event) {
    $("h1").text(event.key);
})

$("h1").on("click" , function (){
    $("h1").css("color", "blue");
    console.log("hello");
})

// Adding and Removing Elements
$("h1").before("<button>Before</button");          
$("h1").after("<button>After</button");
$("h1").prepend("<button>Prepend</button");
$("h1").append("<button>Append</button");

// Website Animation
$("button").on("click", function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    $("h1").animate({opacity: 0.5});
})