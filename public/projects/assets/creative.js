var windowHeight = window.innerHeight;
var authorNotes = ['This probably uses a bit more math (well, code) compared to your average powerpoint.<br/><br/>You can keep this panel open while you scroll, if you want.', 'I did Level 3 Calc in Year 12. Looking back, I actually did pretty well in the exams and things, but I just couldn\’t pick up my pen to do another question from thereon.',
                'Floating point math: In short, computers store decimals as formula, leading to funky errors. <br /><br />Take Python: \>\> 1.1 x 3 = 3.3000000000000003. <br /><br />While easy to work around, it can be a surprise to a beginner.',
                'If I had to pick only two lines out of my poem to represent what maths means to me, I would pick this one and the one above.<br /><br />Did I love math so much I cried out of love? Or was it frustration that I felt so unworthy of the math I loved? Or was I just in denial that maybe I didn’t like math as much as I thought I did. But then did I hate the fact I tried? Or maybe I just tried so hard to hate math? Or did I simply just hate math? Perhaps I hated all the barriers I felt the world created yet knew that many were created by my head? <br/><br/>I don’t really know you see.'];
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 500 + "px";
    } 
  });  
}

/** All scroll effects */
function scrollEffects() {
    var sections = document.querySelectorAll("section");

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionPosition = section.getBoundingClientRect();

        /** get variables used in javascript */
        if(sectionPosition.top < windowHeight){
            document.getElementById("notes").innerHTML = 
                authorNotes[i];
        }

        /** when area scrolled to viewport */
        if (sectionPosition.top < windowHeight) {
            /** fade in effect */
            if(section.classList.contains('fade-in')){
                section.style.opacity = '100%';
            }

            /** scroll from left to right effect */
            if(section.classList.contains('scroll-lr')){
                section.style.marginRight = '0%';
                section.style.maxWidth = '100%';
            }

            /** scroll from right to left effect */
            if(section.classList.contains('scroll-rl')){
                section.style.marginLeft = '0%';
                section.style.maxWidth = '100%';
            }

            /** style transition timing (i.e. fade & scroll effect) */
            section.style.transition = 'all 1.5s';

            /** when viewport section contains one of the effect classes, remove previous & next css */
            if(section.classList.contains('fade-in') || section.classList.contains('scroll-lr') || section.classList.contains('scroll-rl')){
                sections[i-1].style = null;
                sections[i-1].style.transition = 'all 1s';
                sections[i+1].style = null;
                sections[i+1].style.transition = 'all 1s';
            }
        }
    }
}
