const teamMembers = document.querySelectorAll('.team-member');

const checkVisibility = () => {
    teamMembers.forEach(member => {
        const memberTop = member.getBoundingClientRect().top;
        const memberBottom = member.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (memberTop < windowHeight * 0.75 && memberBottom > 0) {
            member.classList.add('visible');
        } else {
            member.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);