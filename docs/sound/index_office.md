---
title: Sound
layout: layouts/compform_chapter.pug
debug: false

header_title: Sound
previous: 
previous_url:
next: 
next_url: 

hero_title: Sound
description: Make some noise
software: p5.js + p5.sound
---


## Warm Up

[Play a little melody.](https://www.youtube.com/watch?v=DGCvo3RsLkU)

[ElectroBOOM: ESD Safety](https://www.youtube.com/watch?v=RtlYi1yLTVQ)

### Key Takeaways

- Computers are physical machines.
- Computers can interface with the physical environment.
- Data flows through our physical environment.
- Our eyes and ears are sensors.
- Our eyes and ears are significantly different in structure.
- The types of information gathered by our eyes and ears are rooted in their structure.
- We miss most of the information.
- Our eyes and ears are just sensors, they provide data.
- Our brain is needed to process this data and provide information.
- Our brain's visual and auditory data processing is powerful and valuable.
- We can take advantage of this power by creating visual and auditory form.


## Drawing Sounds

### Hello, p5.js!

```javascript
function setup() {
    createCanvas(500, 500);
}

function draw() {
    fill(255, 0, 0);
    noStroke();
    ellipse(250, 250, 100, 100);
}
```

### Hello, p5.sound!

```javascript
function setup() {
    myOscillator = new p5.Oscillator('sine');
    myOscillator.amp(1); // set amplitude
    myOscillator.freq(440); // set frequency
    myOscillator.start(); // start oscillating
}
```

## Computers

[Carefully Arranged Sand and Lightning](https://docs.google.com/presentation/d/1JhBhWI8IHTgY59WDwSWg-M0PJtsKe5YRz21G61lI1E4/present)


## Light

### Emissive Color
- Sunlight contains electromagnetic radiation in many wavelengths.
- An LED provides electromagnetic radiation in a very specific wavelength range.
- An LED computer display has LEDs of three colors. It can vary the intensity of those three colors, but can’t provide electromagnetic radiation in the wavelengths between them.
- We perceive the mix of the three colors as a single color.
- Red, green, and blue are used because they correspond with our biology. 


### Reflective/Absorptive Color
- A reflective object doesn’t reflect color of single wavelength. Instead it reflects/absorbs all wavelengths at different amounts.
- We perceive the reflections as a single color.
- We can’t determine what combination of stimulating frequencies contribute to that color.
- A reflective color cannot be brighter than the lighting in any wavelength.
- We adjust our perceived color of an image based on our understanding of the lighting.

![EM](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/EM_Spectrum_Properties_edit.svg/675px-EM_Spectrum_Properties_edit.svg.png)

![Cones](https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cone-fundamentals-with-srgb-spectrum.svg/540px-Cone-fundamentals-with-srgb-spectrum.svg.png)


- Color wheel?
- No such thing as purple light. But the color purple exists.


### Vision

[ElectroBOOM: Thermal Imaging](https://youtu.be/1DiqL8iFD8g?t=22s)

[How the Sun Sees You: UV Imaging](https://www.youtube.com/watch?v=o9BqrSAHbTc)

[Feynman on Light](https://www.youtube.com/watch?v=FjHJ7FmV0M4)


### Our Eyes

- Our eyes have ~120 million rods that detect brightness and ~6.5 million cones that detect color.
- For comparison an HD display has 6.2 million leds, a high end DSLR has ~45 million sensors.
- Angular resolution: 1 arcminute or .02° Thats about 250 dpi at one foot away, 3 pixels/mm at 1 meter. Something 6 inches wide about a mile away. We can see things much smaller than this, when they are bright, we just can’t understand their shape. For example a bright led would be easily visible a mile away in a dark environment.
- Field of View: ~ 160° x 175° But resolution is very center biased. (Foviated rendering.)
- Color Sensitivity: Able to perceive electromagnetic waves from 390 to 700nm, and can differentiate hues as close as 1-10 nm.
- Contrast Sensitivity: Have a contrast range something like 1:1000000 (20+ stops). Film cameras are 9-10, high end digital camera are a little better. A typical screen might have a true contrast ratio of 1:1000.
- We can differentiate a solid light from a flickering one, up to 60+ hz.
- In the US more than 3% of of those 40 years and older are either legally blind (20/200 vision or worse, with corrective lenses) or visually impaired (20/40 or worse).
- In the US more 7% of males and .4% of females have some form of color-blindness.

### Our Visual Cortex

- Depth Perception (Binocular and not)
- Persistance
- Estimation of “True” Color, or Color Under Different Lighting[The Dress](https://en.wikipedia.org/wiki/The_dress)
- Pattern Recognition


### Thoughts

- Our understanding of color/color theory is informed from the anatomy of our eye and the way our mind processes vision.
- We talk about what color something is a single thing: dark blue, pink, vivid green. We don’t think about the color of something as a little bit green, a little bit blue, and a lot red. We definitely don’t think of color as the sum of the many in between wavelengths.
- We talk about primary colors and color wheels. These are properties of **vision** not **light**.


## Sound

Pressure waves propagated in the air.

[How Hearing Works](https://www.youtube.com/watch?v=flIAxGsV1q0)

### Our Ears

- 16,000-20,000 hairs in a curled up tube, the cochlea. Each hair in the cochlea are “tuned” to different frequencies.
- Volume sensitivity: Detect Pressure Changes < 1 billionth of the atmospheric pressure
- Dynamic range: We can hear sounds 10 trillion times louder than that, where they start hurting.
- Frequency Sensitivity: Detect Pitches/Frequencies from 20hz to 20,000hz, and can differentiate frequencies as close as 5 cents (.15hz at Middle C).
- An 88 Key Piano ranges from A0 (27.5 hz) to C8 (4186.01 hz)
- Detect Timbre
- About 20% of Americans have some hearing loss.

### Our Auditory Cortex

- 3D location of sound. We have two sound sensors, and we can detect differences in the amplitude, phase, and timing of signals that reach them. 
- We can turn our head to hear sounds from a different "view point".
- We can infer information from acoustic context including echoes and spectral attenuation.
- Source differentiation. Listen to one person in noisy room, or to a specific instrument in a symphony.
- Very, very good temporal pattern detection.
- Easily noticed off key notes in a song.

[Ears make Mistakes](https://soundphysics.ius.edu/?page_id=1005)

[Sensitivity of Human Ear](http://hyperphysics.phy-astr.gsu.edu/hbase/Sound/earsens.html)


## Hearing vs Sight

[McGurk Effect](https://www.youtube.com/watch?v=G-lN8vWm3m0)

| Eyes  | Ears |
| -- | -- |
| Lens | No Lens |
| Sensitive to four frequency ranges | Sensitive to thousands of frequency ranges |
| Spacial Priority | Frequency Priority |
| 1,000,000:1 | 10,000,000,000:1 |
| 170° FOV | 360° FOV |


- Our vision prioritizes spacial information over spectral information.
- Our hearing prioritizes spectral information over spacial informational.
- We are pretty good at telling where a sound originates, but much better at telling where a light originates.
- We can reduce color to a single value, but we can understand the spectrum of a sound much better.


## Examples

### Hello again, p5.sound!
::: js-lab
/sound/sketches/hello_sound.js
/::


### Oscillator
::: js-lab
/sound/sketches/oscillator.js
/::



### Modulator
::: js-lab
/sound/sketches/modulator.js
/::



::: .activity
## In-class Challenge

[Play a little melody.](https://www.youtube.com/watch?v=DGCvo3RsLkU)

/::



::: .assignment

## Sketch!

### Base
Keep sketching. Make a bunch of noise!


### Challenge 1: Synesthesia 1
Choose a 15 second video clip. Use p5.sound to create a new soundtrack for your clip. Combine audio and sound and post.

### Challenge 2: Synesthesia 2
Choose a 15 second audio clip. Use p5.sound to generate graphics driven by the sound. Combine audio and sound and post.

### Challenge 3: Synesthesia 3
Create a 15 second procedurally generated audio+visual form. Try to "feed" the audio and the video from the same process.

/::
