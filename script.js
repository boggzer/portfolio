window.addEventListener('load', function () {
    headerAnimation();
    addEventListeners();
    checkViewportSize();
});

function addEventListeners() {
    window.addEventListener('resize', checkViewportSize);

    const resumeLinks = document.querySelectorAll('.resume-links');
    for (const link of resumeLinks) {
        link.addEventListener('touchmove', headingHoverListener);
        link.addEventListener('mouseover', headingHoverListener);
        link.addEventListener('click', clickResumeLinksListener);
    }
    const contactLinks = document.querySelectorAll('#contact a');
    for (const link of contactLinks) {
        link.addEventListener('touchmove', headingHoverListener);
        link.addEventListener('mouseover', headingHoverListener);
        link.addEventListener('click', clickResumeLinksListener);
    }

    document.body.addEventListener('scroll', scrollListener);
    document.body.addEventListener('wheel', scrollListener);

    document.querySelector('.portfolio-link').addEventListener('mouseover', headingHoverListener);
    document.querySelector('.portfolio-link').addEventListener('click', portfolioLinkListener);
}

/** Header animation using GSAP */
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
 * Add and toggle class to portfolio link and resumé links on hover.
 * @param {MouseEvent} event 
 */
function headingHoverListener(event) {
    event.target.classList.add('shadow-border')
    event.target.onmouseout = function () {
        this.classList.toggle('shadow-border')
    };
    event.preventDefault();
}

/**
 * Fade in resume content and animate opacity on resume title links.
 * @param {MouseEvent} event click event
 */
function clickResumeLinksListener(event) {
    let delay = 1000;

    if ($('.resume-content1').css('display') == 'none' &&
        $('.resume-content2').css('display') == 'none') {
        $('.resume-links-con').stop().animate({ opacity: 0 }, 400);
        setTimeout(() => {
            $('.resume-links-con').stop().animate({ opacity: 100 }, 600)
        }, delay);
    }
    else {
        delay = 100;
    }

    setTimeout(function () {
        $('.target').not('.resume-content' + event.target.getAttribute('target')).hide();
        $('.resume-content' + event.target.getAttribute('target')).fadeIn(1000);

    }, delay);

    event.preventDefault();
}

/**
 * Make visible content fade out on element DOM rect
 * @param {WheelEvent} event 
 */
function scrollListener(event) {
    let maxScrollDown = -(event.view.innerHeight / 2)
    let maxScrollUp = event.view.innerHeight / 2
    const elements = document.querySelectorAll('.content');

    if ('321' <= window.innerWidth) {
        for (const element of elements) {
            let viewportPosition = element.getBoundingClientRect();
            if ($(element).is(':visible')) {
                if (viewportPosition.y < maxScrollDown || viewportPosition.y > maxScrollUp) {
                    $(element).fadeOut(1000);
                }
            }
        }
    }
}

/** Fade in portfolio content on click and keep portfolio title centered on fade in. */
function portfolioLinkListener() {
    const portfolioTitle = document.querySelector('.portfolio-link');

    if ('321' <= window.innerWidth) {
        $('#portfolio .content').fadeIn(1000);
        portfolioTitle.scrollIntoView({ block: 'center', inline: 'center' });
    }
}

/* Always scroll portfolio title into view on viewport resize
    Always show portfolio content on mobile view */
function checkViewportSize() {
    if (window.innerWidth <= 320) {
        $('#portfolio > .content').show()
    }

    resizePortfolioAndScrollBy();
}
/* Resize portfolio page and scroll title to horizontal center of parent */
function resizePortfolioAndScrollBy() {
    const portfolioLinkElement = document.querySelector('#portfolio div.h2')
    const portfolioContainer = document.querySelector('#portfolio')
    let viewportPosition = portfolioLinkElement.getBoundingClientRect()

    portfolioContainer.scrollBy(viewportPosition.x, 0);
}

