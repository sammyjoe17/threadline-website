;(function(){
/* global React, Eyebrow, SectionNumber, Btn */

window.AboutPage = function AboutPage({
  navigate
}) {
  const C = window.SITE && window.SITE.about || {};
  const CC = window.SITE && window.SITE.common || {};
  return /*#__PURE__*/React.createElement("article", {
    className: "about"
  }, /*#__PURE__*/React.createElement("section", {
    className: "about-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-hero-inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "01"
  }, C.heroEyebrow || "Who we are"), /*#__PURE__*/React.createElement("h1", {
    className: "section-title-lg"
  }, C.heroTitle || "Built out of MIT."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, C.heroLede || "Threadline was started by people who built and shipped AI inside large companies before leaving to start the firm. We came up through MIT, where the research and the day-to-day reality of using these tools tend to meet."))), /*#__PURE__*/React.createElement("section", {
    className: "origin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "origin-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "02",
    title: C.originLabel || "What shapes us"
  }), /*#__PURE__*/React.createElement("div", {
    className: "origin-grid"
  }, (C.origin && C.origin.length ? C.origin : [{
    k: "MIT", body: "Where we started, and where a lot of our research network still is. We stay close to the labs and the people we came up with."
  }, {
    k: "Every industry", body: "We work across retail, software, telecom, and healthcare \u2014 wherever people are trying to make AI stick. The hard part is usually the same; the specific workflows are what change."
  }, {
    k: "Operators first", body: "The partners working with you have shipped AI inside real organizations and have sat where you're sitting. That's the perspective we bring \u2014 the one those rooms usually lacked."
  }]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("article", {
      className: "origin-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "o-row-k"
    }, it.k), /*#__PURE__*/React.createElement("div", {
      className: "o-row-v"
    }, /*#__PURE__*/React.createElement("p", null, it.body)));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "founding surface-dark",
    style: {
      background: "var(--ink)",
      color: "var(--ink-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "founding-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "03",
    title: C.foundingLabel || "A founding note"
  }), /*#__PURE__*/React.createElement("div", {
    className: "founding-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      color: "var(--ink-paper)"
    }
  }, C.foundingTitle || "Why we started it.")), /*#__PURE__*/React.createElement("div", {
    className: "founding-body"
  }, (C.foundingBody && C.foundingBody.length ? C.foundingBody : ["Each of us had run an AI pilot inside a large company and watched it stall \u2014 not because the technology was bad, but because no one had figured out who was responsible for changing how people worked.", "The vendors kept talking about the model. So did the board. Meanwhile the team had quietly gone back to the old spreadsheet, and the contract got renewed anyway.", "Threadline is the firm we wish we'd been able to call. We work alongside your leadership for a year, ask the people doing the work what's really happening, and tell you each month, in writing, whether it's working."]).map(function (para, i) {
    return /*#__PURE__*/React.createElement("p", {
      key: i
    }, para);
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "about-team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-team-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "04",
    title: C.teamLabel || "Team"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, C.teamTitle || "Small on purpose."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0
    }
  }, C.teamLede || "The partners who start your engagement are the ones who stay on it \u2014 we don't hand the work down to juniors. We'll name the team here as the firm grows."), /*#__PURE__*/React.createElement("div", {
    className: "hiring-grid"
  }, (C.hiring && C.hiring.length ? C.hiring : [{
    num: "01", label: "If you've run a team", body: "You've taken a team through an AI rollout \u2014 in any function, any industry \u2014 and actually got the tool into daily use. We'd like to hear from you."
  }, {
    num: "02", label: "If you work in research", body: "You're at MIT or a similar lab, working on the kind of applied ML that reaches real users. Tell us what you're working on."
  }]).map(function (h, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow-num"
    }, h.num), /*#__PURE__*/React.createElement("span", null, h.label)), /*#__PURE__*/React.createElement("p", null, h.body));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    arrow: true,
    onClick: () => navigate("contact")
  }, CC.email || "hello@threadlineconsulting.co")))), /*#__PURE__*/React.createElement("section", {
    className: "closer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "closer-inner closer-light"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "05",
    title: C.closerLabel || "Next step"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "closer-title"
  }, C.closerTitle || "Want to talk it through?")), /*#__PURE__*/React.createElement("div", {
    className: "closer-side"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    arrow: true,
    onClick: () => navigate("contact")
  }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    className: "closer-meta closer-meta-light"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, CC.email || "hello@threadlineconsulting.co")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Phone"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, CC.phone || "205-335-5818")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Office"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, CC.office || "Cambridge, MA")))))));
};
})();
