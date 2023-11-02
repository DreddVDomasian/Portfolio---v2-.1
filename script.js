    // Define the function to switch tabs
    function opentab(event, tabname) {
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Handle the "See more" button
    document.addEventListener("DOMContentLoaded", function () {
        const seeMoreButton = document.getElementById("see-more-btn");
        const additionalWorkContainer = document.getElementById("additional-work");
        const additionalWorkItems = additionalWorkContainer.querySelectorAll(".work.hidden");

        seeMoreButton.addEventListener("click", function (e) {
            e.preventDefault();

            additionalWorkContainer.classList.toggle("hidden");
            additionalWorkItems.forEach((item) => {
                item.classList.toggle("hidden");
            });

            if (seeMoreButton.textContent === "See more") {
                seeMoreButton.textContent = "See less";
            } else {
                seeMoreButton.textContent = "See more";
            }
        });

        // Scroll to top button
        const backToTopButton = document.getElementById('backToTop');
        backToTopButton.style.display = 'none';

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 1000) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }});

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle the side menu
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    // Handle form submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwmefDFpUEqBs0HR9uMSUVaClnRvGQg-V851THIr9q8FZltShIDDr2aBheAJd9s11jZYQ/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 3000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
