;(function(){
/* global React, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect, TweakToggle */

// Tweaks panel — exposed via the toolbar Tweaks toggle.
window.TweaksApp = function TweaksApp() {
  const [t, setTweak] = useTweaks(window.__TWEAKS);

  // Apply tweaks to <body> + :root so non-React things see them.
  React.useEffect(() => {
    document.body.classList.remove("density-tight", "density-comfortable", "density-airy");
    document.body.classList.add("density-" + t.density);
    document.documentElement.style.setProperty("--font-display", t.displayFont === "Newsreader" ? "Newsreader, 'GT Sectra', serif" : t.displayFont === "Fraunces" ? "Fraunces, Newsreader, serif" : t.displayFont === "Libre" ? "'Libre Caslon Text', Newsreader, serif" : "Newsreader, serif");
  }, [t.density, t.displayFont]);
  return /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Density"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Section padding",
    value: t.density,
    options: [{
      label: "Tight",
      value: "tight"
    }, {
      label: "Comfortable",
      value: "comfortable"
    }, {
      label: "Airy",
      value: "airy"
    }],
    onChange: v => setTweak("density", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Display font"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Headings",
    value: t.displayFont,
    options: ["Newsreader", "Fraunces", "Libre"],
    onChange: v => setTweak("displayFont", v)
  }));
};
})();
