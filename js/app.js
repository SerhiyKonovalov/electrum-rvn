(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    //! Add class active to current menu item
    document.addEventListener("DOMContentLoaded", (function() {
        const currentUrl = window.location.pathname;
        const menuItems = document.querySelectorAll(".menu__link");
        menuItems.forEach((item => {
            const href = item.getAttribute("href");
            if (href.includes(".html")) {
                const hrefWithoutHtml = href.slice(0, -5);
                if (currentUrl.includes(hrefWithoutHtml) || currentUrl === "/" && hrefWithoutHtml === "") item.classList.add("active");
            } else if (currentUrl.includes(href) || currentUrl === "/" && href === "") item.classList.add("active");
        }));
    }));
    window["FLS"] = false;
})();