
$fn = 20;

module dumbbell() {
    rotate([90, 0, 0]) {
      cylinder (h=20, r=1, center = true);
    }

    color("gray") {
        translate([0, 10, 0]) sphere(3, $fn = 20);
        translate([0, -10, 0]) sphere(3, $fn = 4);
    }
}


module fob() {
    difference() {
        color("blue") union(){
          cylinder (h=1, r=5, center = true);
          translate([10, 0, 0]) cube([20, 10, 1], center = true);
        }
        cylinder (h=2, r=3, center = true);
    }
}

fob();

dumbbell();
