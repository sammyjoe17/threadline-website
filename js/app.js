;(function(){
/* global React, ReactDOM, Header, Footer, ScrollProgress, Hero, FailureModes, Position, Closer, EngagementPage, AboutPage, ContactPage, WritingPage, TweaksApp, lucide */
const {
  useState,
  useEffect
} = React;
function parsePath() {
  const raw = window.location.pathname.replace(/^\/+/, "").replace(/\/+$/, "").split("?")[0];
  const h = raw.split("/")[0]; // first segment is the page; rest (e.g. a post slug) handled by the page
  if (!h || h === "home") return "home";
  // Redirect legacy routes.
  if (h === "work" || h === "method" || h === "services") return "engagement";
  return h;
}
function go(route) {
  const p = route === "home" ? "/" : "/" + route;
  if (window.location.pathname !== p) {
    window.history.pushState({}, "", p);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}
function HomePage({
  navigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    navigate: navigate
  }), /*#__PURE__*/React.createElement(FailureModes, null), /*#__PURE__*/React.createElement(Position, {
    navigate: navigate
  }), /*#__PURE__*/React.createElement(Closer, {
    navigate: navigate
  }));
}
function App() {
  const [route, setRoute] = useState(parsePath());
  useEffect(() => {
    const onPop = () => {
      setRoute(parsePath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const navigate = r => {
    go(r);
    setRoute(r);
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        "stroke-width": 1.5
      }
    });
  }, [route]);
  let view;
  if (route === "engagement") view = /*#__PURE__*/React.createElement(EngagementPage, {
    navigate: navigate
  });else if (route === "about") view = /*#__PURE__*/React.createElement(AboutPage, {
    navigate: navigate
  });else if (route === "writing") view = /*#__PURE__*/React.createElement(WritingPage, {
    navigate: navigate
  });else if (route === "contact") view = /*#__PURE__*/React.createElement(ContactPage, {
    navigate: navigate
  });else view = /*#__PURE__*/React.createElement(HomePage, {
    navigate: navigate
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(Header, {
    route: route,
    navigate: navigate
  }), view, /*#__PURE__*/React.createElement(Footer, {
    navigate: navigate
  }), /*#__PURE__*/React.createElement(TweaksApp, null));
}
document.body.classList.add("density-" + (window.__TWEAKS.density || "comfortable"));

// Load editable content (managed via the /admin CMS) before first render.
// Falls back to built-in defaults in each component if the file is missing.
(async function boot() {
  // Migrate legacy hash URLs (e.g. /#/contact) to clean paths (/contact)
  // so old links and bookmarks still land on the right page.
  if (window.location.hash.indexOf("#/") === 0) {
    const p = window.location.hash.slice(1).replace(/\/+$/, "") || "/";
    window.history.replaceState({}, "", p === "" ? "/" : p);
  }
  const grab = async path => {
    try {
      const res = await fetch(path, {
        cache: "no-store"
      });
      return res.ok ? await res.json() : {};
    } catch (e) {
      return {};
    }
  };
  const [site, writing] = await Promise.all([grab("/content/site.json"), grab("/content/writing.json")]);
  window.SITE = site || {};
  window.SITE.writing = writing || {};
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})();
