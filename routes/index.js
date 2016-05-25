var express 	= require("express"),
	router		= express.Router(),
	passport	= require("passport"),	
	User 		= require("../models/user");

/*====
 ==== BASE ROUTES
 ====*/
	
// ==* Home Route *==
router.get("/", function(req, res){
    res.render("landing");
});
	
// ==* Classes Route *==
router.get("/classes", function(req, res){
    res.render("classes");
});

// ==* Instructors Route *==
router.get("/instructors", function(req, res){
    res.render("instructors");
});

// ==* About Route *==
router.get("/about", function(req, res){
    res.render("about");
});

// ==* Waiver Route *==
router.get("/waiver", function(req, res){
    res.render("waiver");
});

/*====
 ==== SETUP AUTH ROUTES
 ====*/

//*== Register Page *==
router.get("/register", function(req, res){
	res.render("register");
})

//*== Register Post Page *==
router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			req.flash("error", err.message);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/campgrounds");
		});
	});
});

//*== Login Page *==
router.get("/login", function(req, res){
	req.flash("success", "You have now been logged in!");
	res.render("login");
})

//*== Login Post Page *==
router.post("/login", passport.authenticate("local", 
	 {
		successRedirect: "/campgrounds",
		failureRedirect: "/login"	
	}), function(req, res){	
});

//*== Logout Page *==
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged you out!");
	res.redirect("/campgrounds");
});

/*====
 ==== EXPORT ROUTES
 ====*/
module.exports = router;