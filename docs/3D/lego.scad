$fn = 20;

difference() {
union() {
    cylinder(h=20, r=5, center=true);
    rotate([90, 0, 0])cylinder(h=20, r=5, center=true);

}

union() {
    cylinder(h=21, r=4, center=true);
    rotate([90, 0, 0])cylinder(h=21, r=4, center=true);

}
}


