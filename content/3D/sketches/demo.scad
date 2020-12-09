$fa = 5;
$fs = 1;


module ring() {
    difference() {
        cylinder (h=4, r=8, center = true);
        cylinder (h=4.1, r=7, center = true);
    }
}

module bowl() {
      difference() {
        sphere (8);
        sphere (7);
        translate([0,0,10]) cube([20, 20, 20], center = true);
    }   
}

module ramp() {
    translate([-5, -5, 0]){
        hull() {
            #cube([10, 10, 2]);
            #cube([10, 2, 10]);
        }
    }
}

module snowman() {
    $fs = .2;
    color("#ccccff"); 
    sphere (3);
    translate([0, 4, 0])  sphere(2);
    translate([0, -5, 0])  sphere(4);
}

module cross_pipe() {
    $fs = .2;
    difference() {
        union() {
            color ("green") cylinder (h=10, r=3, center = true);
            rotate([0,90,0]) cylinder (h=10, r=3, center = true);
        }
          
        #cylinder (h=18, r=2, center = true);
        #rotate([0,90,0]) cylinder (h=18, r=2, center = true);
    }
}


module flower(petals){
    for(i = [0 : petals]){
     rotate([0, 0, i * (360 / petals)]) translate([0,.75 * petals,0]) cylinder (h=1, r=3,  center = true);
    }
}




translate([-10, 10, 0]) rotate([-10, 45, 0]) flower(6);

translate([10, 10, 0]) rotate([60, -75, 90]) cross_pipe(); 

translate([-10, -10, 0]) rotate([-10, 45, 0]) bowl();

translate([10, -10, 0]) rotate([-10, 45, 0]) ramp();