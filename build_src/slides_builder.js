let yaml = require('js-yaml');
let t = require('./template_util.js');

// slides counter used to provide unique id to each carousel
let slidesCounter = 0;

module.exports = function slidesBuilder(classes, ids, content) {
    slidesCounter++;

    // parse data
    let data = yaml.safeLoad(content);



    console.log("Data", data);

    // build slides markup
    let slides = '';
    data.forEach((slide, i) => {
        slides += t.trimLines(`
      <div class="carousel-item ${i == 0?'active':''}">
				<img class="d-block" src="${slide.image}" alt="${slide.title}">

        <div class="slide-info">
          <div class="slide-info-middle">
              <hr>
              <h6>${slide.artist}!</h6>
              <h5>${slide.title}</h5>
           </div>
           <div class="slide-info-bottom">
             <hr>
              <a href="#">link 1</a><br>
              <a href="#">link 1</a><br>
              <a href="#">link 1</a>
           </div>
         </div>
     </div>`);
    });

    content = t.trimLines(`
      <div id="carousel-${slidesCounter}" class="carousel slide" data-ride="carousel">

      <div class="carousel-inner" role="listbox">
            ${slides}
      </div>

      <div class="slide-info-top">
        <a class="carousel-control-prev" href="#carousel-${slidesCounter}" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-${slidesCounter}" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`);




    classes.push("slides");
    classes.push("slideInfos");
    return [classes, ids, content];
}
