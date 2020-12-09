$fn = 20;

difference() {
    union() {
        cylinder(r = 5, h = 5);
        translate([0, -5, 0]) cube([30, 10, 5]);
    }
    color("red") cylinder(r = 3, h = 6, $fn = 50);
}