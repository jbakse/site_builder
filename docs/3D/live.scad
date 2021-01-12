difference() {

    union() {
        cylinder(r = 5, h = 20, center = true);
        rotate([90, 0, 0]) cylinder(r = 5, h = 20, center = true);
    }

    color("green") {
        cylinder(r = 3, h = 30, center = true);
        rotate([90, 0, 0]) cylinder(r = 3, h = 30, center = true);
    }

};
