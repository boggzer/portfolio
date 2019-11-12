window.onload = function () {
    gsap.registerPlugin(MotionPathPlugin);
    
    headerAnimation();
    hideShow();
    addEventListeners();
}

function addEventListeners() {

    const resumeLinks = document.querySelectorAll('.resume-links')

    resumeLinks.forEach(link => {
        link.addEventListener('mouseover', linksEnterListener)
    });
    resumeLinks.forEach(link => {
        link.addEventListener('mouseout', linksLeaveListener)
    });

}

/**
 * 
 * @param {MouseEvent} event 
 */
function linksEnterListener(event) {
    event.target.classList.add('shadow-border')
}

function linksLeaveListener(event) {
    let target = event.target
    $(target).fadeIn('slow', function () {
        $(this).removeClass('shadow-border');
    });
}


/**
 * Header animation using GSAP
 */
function headerAnimation() {
    
    // const duration = 2;
    // const timeline = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 0.05 });
    let tween = gsap.timeline('#svg-textpath', { duration: 2 });
    tween.to('#svg-textpath', { offsetX: '100', opacity: 0, duration: 1});
    // gsap.to('#svg-textpath', duration, {
    //     attr: { startOffset: '10%' },
    //     ease: Back.easeIn
    // });

    // // FireFox
    // timeline.from('#svg-text', duration, {
    //     attr: { textLength: 400 }
    // }, 0);
    // // Chrome
    // timeline.from('#svg-textpath', duration, {
    //     attr: { textLength: 400 }
    // }, 0);
}

function randomNumber() {
    setInterval(function () {
        let degrees = 0;
        degrees += Math.random() * 15;
        return resumeLinksAnimation(degrees);
    }, 250);
}

function resumeLinksAnimation(rNum) {
    const duration = 2;
    const timeline = new TimelineMax({ repeat: -1, repeatDelay: 0.05 });
    const linkSkills = $('.resume-skills');
    const linkEducation = $('.resume-education');

    timeline.from(linkSkills, duration, { x: rNum, ease: 'power2' }, 0);
    timeline.to(linkEducation, duration, { x: rNum * 2, ease: 'power2' }, 0);
}

function scrollNext() {
    const scrollHere = document.querySelector('nav');
    scrollHere.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function hideShow() {
    $('#resume > ul, #resume > h4').hide()
}