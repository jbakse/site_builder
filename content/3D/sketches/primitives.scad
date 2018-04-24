//!OpenSCAD

$fn = 20;
// $fn controls the detail on curves

% cube([8,8,9.6], true);
// what does removing the % do?
// what if `true` were `false`?

cylinder(h=1.8, r=2.4, center=true);
// OpenSCAD supports both named parameters, which can make code more clear.
// You can also use ordered params, this works too:
// cylinder(1.8, 2.4, 2.4, true);