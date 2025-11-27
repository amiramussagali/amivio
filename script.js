document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if(top < window.innerHeight - 100) {
                sec.classList.add("visible");
            }
        });
    });

    // Trigger the scroll check once in case some sections are already visible
    window.dispatchEvent(new Event('scroll'));
});
