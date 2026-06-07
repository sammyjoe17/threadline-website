;(function(){
/* global React, Eyebrow, Btn, SectionNumber */

window.Hero = function Hero({
  navigate
}) {
  const C = window.SITE && window.SITE.home || {};
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero-thesis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid no-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-left"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "00"
  }, C.heroEyebrow || "AI adoption consulting · every industry"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title hero-title-tight"
  }, C.heroTitleBefore || "The ", /*#__PURE__*/React.createElement("span", {
    className: "t-thread"
  }, C.heroTitleHighlight || "people"), C.heroTitleAfter || " make the rollout."), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, C.heroLede || "Most AI rollouts don't stall because the technology is bad. They stall because nobody planned for how people would actually use it. That's the part we help you get right — before, during, and after the tools go in."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-row"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => navigate("engagement")
  }, "How we work \u2192"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => navigate("contact")
  }, "Get in touch \u2192")))));
};

// ── The three failure modes — straight from the deck.
window.FailureModes = function FailureModes() {
  const C = window.SITE && window.SITE.home || {};
  const fallback = [{
    num: "01",
    heading: "The decision happens too far from the work",
    body: "Leadership signs the contract and the team gets told to use it. Nobody asked the people doing the job what was actually slowing them down, so the work stays the same and only the login screen changes.",
    symptom: "Most people quit using it within a month."
  }, {
    num: "02",
    heading: "Nobody actually owns it",
    body: "IT owns the software and operations owns the process, but the handoff between them belongs to no one. The tool produces a recommendation, it lands in a queue, and there's no one whose job is to do something about it.",
    symptom: "Plenty of activity, no change in the numbers."
  }, {
    num: "03",
    heading: "No one is really measuring it",
    body: "Everyone assumes people are using it. Six months later, no one can say who's on the tool, for which tasks, or whether it actually helped — so the contract gets renewed on a hunch.",
    symptom: "The renewal is basically a guess."
  }];
  const modes = C.failures && C.failures.length ? C.failures : fallback;
  return /*#__PURE__*/React.createElement("section", {
    className: "failure-modes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "failure-modes-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "02",
    title: "Why AI rollouts fail"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, C.failuresTitle || "Where it usually goes wrong."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0,
      marginBottom: 64
    }
  }, C.failuresIntro || "We've sat through a lot of stalled pilots, across retail, software, telecom, and healthcare. The software almost always worked fine. A few of the same things went wrong instead."), /*#__PURE__*/React.createElement("div", {
    className: "fm-grid"
  }, modes.map(m => /*#__PURE__*/React.createElement("article", {
    key: m.num,
    className: "fm-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-num"
  }, m.num), /*#__PURE__*/React.createElement("h3", {
    className: "fm-h"
  }, m.heading), /*#__PURE__*/React.createElement("p", {
    className: "fm-p"
  }, m.body), /*#__PURE__*/React.createElement("div", {
    className: "fm-symptom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-symptom-label"
  }, "Symptom"), /*#__PURE__*/React.createElement("span", {
    className: "fm-symptom-text"
  }, m.symptom)))))));
};

// ── The positioning section — "we are not an implementation partner."
window.Position = function Position({
  navigate
}) {
  const C = window.SITE && window.SITE.home || {};
  const fallback = [{
    label: "We don't",
    body: "We don't pick your vendors, run the integration, write your prompts, or build the model. Plenty of firms already do that well."
  }, {
    label: "We do",
    body: "We sit with your leadership team, help them decide which workflows to push on and which to drop, and find out whether people are really using what you've already bought. You get that back in writing every month."
  }, {
    label: "Why it works",
    body: "Once the people side is sorted out — who owns each workflow, who's accountable for the change, who acts on what the tools produce — the technology decisions tend to get a lot easier."
  }];
  const rows = C.positionRows && C.positionRows.length ? C.positionRows : fallback;
  return /*#__PURE__*/React.createElement("section", {
    className: "position surface-dark",
    style: {
      background: "var(--ink)",
      color: "var(--ink-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "position-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "03",
    title: "What we actually do"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      color: "var(--ink-paper)"
    }
  }, C.positionTitle || "We're not an implementation partner."), /*#__PURE__*/React.createElement("div", {
    className: "position-grid"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "position-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "position-k"
  }, r.label), /*#__PURE__*/React.createElement("div", {
    className: "position-v"
  }, r.body))))));
};

// ── Closing — pulls the deck's closing line.
window.Closer = function Closer({
  navigate
}) {
  const C = window.SITE && window.SITE.home || {};
  const CC = window.SITE && window.SITE.common || {};
  const email = CC.email || "hello@threadlineconsulting.co";
  return /*#__PURE__*/React.createElement("section", {
    className: "closer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "closer-inner closer-light"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "04",
    title: "Next step"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "closer-title"
  }, C.closerTitle || "Want to talk it through?"), /*#__PURE__*/React.createElement("p", {
    className: "closer-sub"
  }, C.closerSub || "A 30-minute call with the partners. No pitch deck.")), /*#__PURE__*/React.createElement("div", {
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
  }, email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Phone"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, CC.phone || "205-335-5818")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Office"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, CC.office || "Cambridge, MA"))))));
};
})();
