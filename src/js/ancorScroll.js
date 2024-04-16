document.addEventListener("DOMContentLoaded", function() {
    const scrollToPromo = document.getElementById("scrollToPromo");
    const scrollToSession = document.getElementById("scrollToSession");
    const sectionPromo = document.getElementById("promo");
    const sectionSession = document.getElementById("session");

    scrollToPromo.addEventListener("click", function() {
        sectionPromo.scrollIntoView({ behavior: 'smooth' });
    });

    scrollToSession.addEventListener("click", function() {
        scrollToSession.scrollIntoView({ behavior: 'smooth' });
    })
});
