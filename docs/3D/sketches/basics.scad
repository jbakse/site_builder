$fa = 5;
$fs = .5;

color("gray")  sphere(3);

color("gray") translate([10, 0, 0]) sphere(3);

rotate([0, 90, 0]) cylinder (h=10, r=1);


translate([0, 0, 20]) {
    difference() {
        union() {
            cylinder (h=1, r=3);
            translate([0, -3, 0]) cube([10, 6, 1]);
            }
        cylinder (h=1, r=1);
    }
}