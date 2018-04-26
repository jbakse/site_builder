function booleanChoice(odds) = rands(0,1,1)[0] < odds ? true : false;






module brick_ring(
    radius = 5,
    brick_x_pitch = 2,
    brick_y_pitch = 1,
    mortar_width = .1,
    mortar_depth = .8,
    brick_depth = 1,
) {
    brick_width = brick_x_pitch - mortar_width ;
    brick_height = brick_y_pitch - mortar_width;
    mortar_inset = brick_depth - mortar_depth;
    
    bricks = floor((PI  * radius) / brick_y_pitch);
    
    // mortar
    color("gray")
        rotate([-90,0,0]) {
            render() difference() {
                cylinder(brick_y_pitch, r = radius - mortar_inset, $fn = bricks * 4 );
                cylinder(brick_y_pitch, r = radius - brick_depth, $fn = bricks * 4 );
            }
        }
    
    for (i = [0 : bricks - 1]) {
        shouldPokeOut = booleanChoice(.1);
        offset = shouldPokeOut ? brick_depth * .25 : 0;
        
        a = 360 / bricks * i;
        
        color("red")
            rotate([0, a, 0]) 
                translate([brick_x_pitch * -.5, 0, radius - brick_depth + offset ])
                    cube([brick_width, brick_height, brick_depth]);
    }
}

module brick_tower(
    rows = 10,
    radius = 5,
    brick_x_pitch = 2,
    brick_y_pitch = 1,
    mortar_width = .1,
    mortar_depth = .8,
    brick_depth = 1,
) {
    
    for (y = [0 : rows - 1]) {
        
        bricks = floor((PI  * radius) / brick_y_pitch);
        stagger = (y % 2) * (360 / bricks) * .5;
        
        translate([0, y * brick_y_pitch, 0])
            rotate([0, stagger, 0])
            {
                brick_ring(radius, brick_x_pitch, brick_y_pitch, mortar_width, mortar_depth, brick_depth);
            }
    }
    
}

module cone(radius = 5, height = 5) {
    echo(radius, height);
    linear_extrude(height = height * .3, scale = .5, slices = 20)
        circle(radius, $fn = 6);
    
    translate([0, 0, height * .3])
        linear_extrude(height = height * .7, scale = 0, slices = 20)
            circle(radius * .5, $fn = 6);
}

module spire(radius = 5, height = 5, wall = 1) {
    render() rotate([-90,0,0]) difference(){
        cone(radius, height);
        cone(radius - wall, height - wall);
    }
}


color("white") {
brick_tower(18, radius = 3);
translate([0,8,0]) spire(5, 6, 2);
}

 
module brick_wall(
    columns = 10,
    rows = 10,
    brick_x_pitch = 2,
    brick_y_pitch = 1,
    mortar_width = .1,
    mortar_depth = .8,
    brick_depth = 1,
) {
    brick_width = brick_x_pitch - mortar_width;
    brick_height = brick_y_pitch - mortar_width;


    // draw mortar
    color("gray")
        cube([brick_x_pitch * columns, brick_y_pitch * rows, mortar_depth]);  
            
    // draw bricks
    for(x = [0:columns-1], y = [0:rows-1]) {
        shouldPokeOut = booleanChoice(.1);
        offset = shouldPokeOut ? .1 : 0;
        stagger = (y % 2) * (brick_x_pitch * .5);
       
        
      
        // shorten right-side half bricks
        brick_width = (y % 2 && x == columns-1) ? brick_x_pitch * .5 : brick_width;
        
        // create brick
        color("red")
           translate([x * brick_x_pitch + stagger, y * brick_y_pitch, offset])
               cube([brick_width, brick_height, brick_depth]);
        
        // add left-side half bricks
        if (y % 2 && x == 0) {
                color("red")
                    translate([0, y * brick_y_pitch, offset])
                        cube([brick_x_pitch * .5 - mortar_width, brick_height, brick_depth]);
        }
    }
}

// brick_wall();