// ========================================
// NotesAI-RNA Website JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileMenu();
    initHeaderScroll();
    initContactForm();
    initRevealAnimations();
    initAnchorScroll();
});

function initTheme() {
    const themeToggle = document.getElementById("themeToggle");
    const storageKey = "notesai-theme";
    const savedTheme = localStorage.getItem(storageKey);
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    const setTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(storageKey, theme);
        if (themeToggle) {
            themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
            themeToggle.setAttribute(
                "aria-label",
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            );
            themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        }
    };

    setTheme(initialTheme);

    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const nav = document.getElementById("nav");

    if (!mobileMenuBtn || !nav) {
        return;
    }

    const closeMenu = () => {
        nav.classList.remove("active");
        mobileMenuBtn.classList.remove("is-active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    const openMenu = () => {
        nav.classList.add("active");
        mobileMenuBtn.classList.add("is-active");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
    };

    mobileMenuBtn.setAttribute("aria-expanded", "false");

    mobileMenuBtn.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            closeMenu();
        }
    });

    nav.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            closeMenu();
        }
    });
}

function initHeaderScroll() {
    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    const updateHeaderState = () => {
        header.classList.toggle("scrolled", window.scrollY > 24);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
}

function initContactForm() {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const mailtoSubject = encodeURIComponent(`[NotesAI-RNA Contact] ${subject}`);
        const mailtoBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:nzemberichard398@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        window.alert("Your email app will open with the message ready to send.");
        contactForm.reset();
    });
}

function initRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.revealDelay;
                    if (delay) {
                        entry.target.style.transitionDelay = `${Number(delay) * 90}ms`;
                    }
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    elements.forEach((element) => observer.observe(element));
}

function initAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });
}
