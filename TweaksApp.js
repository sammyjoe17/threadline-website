;(function(){
/* global React */
const {
  useState,
  useEffect
} = React;

// Header — sticky, with a "scrolled" class for tighter contrast on scroll,
// and a full-screen mobile menu below the desktop breakpoint.
window.Header = function Header({
  route,
  navigate
}) {
  const CC = window.SITE && window.SITE.common || {};
  const email = CC.email || "hello@threadlineconsulting.co";
  const phone = CC.phone || "205-335-5818";
  const office = CC.office || "Cambridge, MA";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const nav = [{
    id: "engagement",
    label: "Engagement"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "writing",
    label: "Writing"
  }, {
    id: "contact",
    label: "Contact"
  }];
  const go = id => {
    setMenuOpen(false);
    navigate(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "site-brand",
    href: "#/",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-wordmark.svg",
    alt: "Threadline"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, nav.slice(0, 3).map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: "site-nav-link" + (route === n.id ? " is-active" : ""),
    href: "#/" + n.id,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "site-header-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-sm",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      go("contact");
    }
  }, /*#__PURE__*/React.createElement("span", null, "Get in touch"), /*#__PURE__*/React.createElement("span", {
    className: "btn-arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("button", {
    className: "menu-toggle" + (menuOpen ? " is-open" : ""),
    "aria-label": menuOpen ? "Close menu" : "Open menu",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu" + (menuOpen ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("nav", {
    className: "mobile-menu-nav"
  }, nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: "mobile-menu-link" + (route === n.id ? " is-active" : ""),
    href: "#/" + n.id,
    style: {
      transitionDelay: (menuOpen ? 0.06 + i * 0.05 : 0) + "s"
    },
    onClick: e => {
      e.preventDefault();
      go(n.id);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "mm-label"
  }, n.label)))), /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu-foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + email
  }, email), /*#__PURE__*/React.createElement("span", null, phone), /*#__PURE__*/React.createElement("span", null, office))));
};

// Footer — dark surface with the inverse wordmark.
window.Footer = function Footer({
  navigate
}) {
  const CC = window.SITE && window.SITE.common || {};
  const email = CC.email || "hello@threadlineconsulting.co";
  const phone = CC.phone || "205-335-5818";
  const office = CC.office || "Cambridge, MA";
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer surface-dark",
    style: {
      background: "var(--ink)",
      color: "var(--ink-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-wordmark-inverse.svg",
    alt: "Threadline"
  }), /*#__PURE__*/React.createElement("p", {
    className: "footer-blurb"
  }, CC.footerBlurb || "AI consulting, across every industry. Built out of MIT.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow-dark"
  }, "Firm"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/engagement",
    onClick: e => {
      e.preventDefault();
      navigate("engagement");
    }
  }, "Engagement")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/about",
    onClick: e => {
      e.preventDefault();
      navigate("about");
    }
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/writing",
    onClick: e => {
      e.preventDefault();
      navigate("writing");
    }
  }, "Writing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      navigate("contact");
    }
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow-dark"
  }, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + email
  }, email)), /*#__PURE__*/React.createElement("li", null, phone), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      navigate("contact");
    }
  }, "Fit call")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow-dark"
  }, "Office"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, office)))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer-meta"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Threadline LLC"), /*#__PURE__*/React.createElement("span", null, "Founded out of MIT, 2025"), /*#__PURE__*/React.createElement("span", null, "Cambridge, MA")));
};

// Scroll progress bar — thin ink line at top of viewport.
window.ScrollProgress = function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setW(max > 0 ? window.scrollY / max * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-progress",
    style: {
      width: w + "%"
    }
  });
};
})();
