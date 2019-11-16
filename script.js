window.onload = function () {
    gsap.registerPlugin(MotionPathPlugin);
    headerAnimation();
    addEventListeners();
}

function addEventListeners() {

    const resumeLinks = document.querySelectorAll('.resume-links');
    resumeLinks.forEach(link => {
        link.addEventListener('mouseover', mouseoverResumeLinksListener);
        link.addEventListener('click', clickResumeLinksListener);
    });
    document.body.addEventListener('wheel', scrollListener)
    document.body.addEventListener('scroll', scrollListener)
}

/**
 * Header animation using GSAP
 */
function headerAnimation() {
    gsap.to('#svg-text', {
        attr: {
            x: 65,
            textLength: 400
        },
        duration: 1.3,
        repeatDelay: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power4.inOut',
        motionPath: {
            path: '#svg-path',
            end: 0
        }
    });
    gsap.to('#svg-textpath', {
        attr: {
            textLength: 390
        },
        yoyo: true
    });
}

/**
 * 
 * @param {MouseEvent} event 
 */
function mouseoverResumeLinksListener(event) {
    event.target.classList.add('shadow-border')
    event.target.onmouseout = function () {
        this.classList.toggle('shadow-border')
    };
}

/**
 * 
 * @param {MouseEvent} event 
 */
function clickResumeLinksListener(event) {
    $('.target').not('#resume-content' + event.target.getAttribute('target')).hide();
    $('#resume-content' + event.target.getAttribute('target')).fadeToggle('slow');
}

/**
 * Make text content fade out
 * @param {WheelEvent} event 
 */
function scrollListener(event) {
    const element = document.querySelector('#resume')
    const viewportPosition = element.getBoundingClientRect()

    const resumeContent = document.querySelectorAll('.target')

    let maxScrollDown = -(event.view.innerHeight / 2)
    let maxScrollUp = event.view.innerHeight / 2

    if (viewportPosition.y > maxScrollDown &&
        viewportPosition.y < maxScrollUp) {
        for (let i = 0; i < resumeContent.length; i++) {
            const resumeElement = resumeContent[i];
            if ($(resumeElement).is(':visible')) {
                $(resumeElement).fadeOut();
            }
        }
    }
};