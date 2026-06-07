;(function(){
/* global React, Eyebrow, SectionNumber, Btn */

window.EngagementPage = function EngagementPage({
  navigate
}) {
  const C = window.SITE && window.SITE.engagement || {};
  const CC = window.SITE && window.SITE.common || {};
  const lines = C.lines && C.lines.length ? C.lines : [{
    n: "01",
    id: "retainer",
    k: "The Retainer",
    v: "Two leadership sessions a month, plus a survey that tracks how your team is really using AI.",
    meta: "$2,000 / mo",
    dividerMeta: "$2,000 / mo \xB7 month-to-month"
  }, {
    n: "02",
    id: "expert",
    k: "Expert Calls",
    v: "Calls with AI builders and startup operators when you want a fresh take, not the usual playbook.",
    meta: "$450 / hr",
    dividerMeta: "$450 / hr \xB7 retainer clients"
  }, {
    n: "03",
    id: "events",
    k: "Events & Workshops",
    v: "Workshops that bring together leaders from companies that don't compete, usually in Cambridge.",
    meta: "By cohort",
    dividerMeta: "Cambridge \xB7 by cohort"
  }, {
    n: "04",
    id: "placement",
    k: "Talent Placement",
    v: "Students from MIT, Harvard, and Stanford, placed into roles on your team.",
    meta: "By search",
    dividerMeta: "Cambridge & San Francisco \xB7 by search"
  }];
  const goTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "mp-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-hero-inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "01"
  }, C.heroEyebrow || "What we do"), /*#__PURE__*/React.createElement("h1", {
    className: "section-title-lg"
  }, C.heroTitle || "Four ways we work with you."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, C.heroLede || "We're not the firm that installs the software. We work on everything around it: a steady monthly relationship with your leadership, outside experts when you need them, events to learn from other companies, and help hiring the people who'll run it."))), /*#__PURE__*/React.createElement("section", {
    className: "lines-overview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lines-overview-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lines-list"
  }, lines.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.n,
    className: "line-row",
    onClick: () => goTo(l.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-row-num"
  }, l.n), /*#__PURE__*/React.createElement("div", {
    className: "line-row-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "line-row-k"
  }, l.k), /*#__PURE__*/React.createElement("p", {
    className: "line-row-v"
  }, l.v)), /*#__PURE__*/React.createElement("div", {
    className: "line-row-meta"
  }, l.meta), /*#__PURE__*/React.createElement("div", {
    className: "line-row-arrow"
  }, "\u2193")))))), /*#__PURE__*/React.createElement("div", {
    className: "line-divider",
    id: "retainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-divider-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ld-num"
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "ld-title"
  }, lines[0].k), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, lines[0].dividerMeta || "$2,000 / mo \xB7 month-to-month"))), /*#__PURE__*/React.createElement("section", {
    className: "surfaces"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surfaces-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.1",
    title: C.retainerHowLabel || "How the retainer works"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginTop: 18
    }
  }, C.retainerH2 || "Two sides of the same work."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0
    }
  }, C.retainerLede || "Every month we work both ends: the leaders making the calls, and the people actually using the tools day to day. We meet with your steering committee and survey the wider team, and the picture gets clearer the longer we do it."), /*#__PURE__*/React.createElement("div", {
    className: "surfaces-grid"
  }, (C.surfaces && C.surfaces.length ? C.surfaces : [{
    tag: "Surface A \xB7 Leadership",
    h: "The Steering Committee.",
    p: "A standing pair of monthly sessions with your AI steering committee \u2014 usually the CEO, the COO or head of ops, and the product or function lead.",
    list: ["Priorities for the next 30 days", "Which workflows to work on, drop, or leave alone", "How last month's rollout actually landed with the team", "One written recommendation, signed"]
  }, {
    tag: "Surface B \xB7 The Line",
    h: "The monthly adoption survey.",
    p: "A short survey that goes to the people actually using the tools each day. It tracks what they're using, what for, and where it's helping.",
    list: ["Which AI tools they use, and on which task", "Where the tools save time, and where they cost it", "What they have stopped using, and why", "One signal we carry into the next SteerCo"]
  }]).map(function (card) {
    return /*#__PURE__*/React.createElement("article", {
      className: "surface-card",
      key: card.h
    }, /*#__PURE__*/React.createElement("div", {
      className: "sc-tag"
    }, card.tag), /*#__PURE__*/React.createElement("h3", {
      className: "sc-h"
    }, card.h), /*#__PURE__*/React.createElement("p", {
      className: "sc-p"
    }, card.p), /*#__PURE__*/React.createElement("ul", {
      className: "sc-list"
    }, (card.list || []).map(function (it, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i
      }, it);
    })));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "cadence"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cadence-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.2",
    title: C.cadenceLabel || "How a month looks"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, C.cadenceH2 || "How a month works."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0,
      marginBottom: 56,
      maxWidth: "56ch"
    }
  }, C.cadenceLede || "About three hours of our time and one hour of your leadership's, every month."), /*#__PURE__*/React.createElement("div", {
    className: "cadence-grid"
  }, (C.cadenceItems && C.cadenceItems.length ? C.cadenceItems : [{
    week: "Week 01", h: "Working session", p: "One hour with the person who owns your AI program. We pick what we're looking at this month."
  }, {
    week: "Week 02", h: "Survey goes out", p: "The monthly survey goes to the team. Five minutes, anonymous, broken out by group."
  }, {
    week: "Week 03", h: "Working session", p: "One hour. We walk the program owner through what the survey turned up and draft the write-up."
  }, {
    week: "Week 04", h: "Steering committee", p: "One hour with the steering committee. Recommendations, decisions, and what we look at next."
  }]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cadence-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "cad-week"
    }, it.week), /*#__PURE__*/React.createElement("h4", {
      className: "cad-h"
    }, it.h), /*#__PURE__*/React.createElement("p", {
      className: "cad-p"
    }, it.p));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "survey-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "survey-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.3",
    title: C.surveyLabel || "What we measure"
  }), /*#__PURE__*/React.createElement("div", {
    className: "survey-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: 0
    }
  }, C.surveyH2 || "What the survey asks."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      marginBottom: 0,
      maxWidth: "44ch"
    }
  }, C.surveyLede || "It takes about five minutes, it's anonymous, and it goes to the people doing the work rather than the executives. The answers get more useful the longer we run it.")), /*#__PURE__*/React.createElement("ol", {
    className: "survey-list"
  }, (C.surveyQuestions && C.surveyQuestions.length ? C.surveyQuestions : [{
    n: "Q1", h: "Tools in hand", p: "Which AI tools did you use this month, and on which task?"
  }, {
    n: "Q2", h: "Time saved", p: "Estimate the hours this tool saved you, on which workflow."
  }, {
    n: "Q3", h: "Time lost", p: "Where did the tool cost you time, or break a working process?"
  }, {
    n: "Q4", h: "What you stopped", p: "What did you stop using this month, and what made you stop?"
  }, {
    n: "Q5", h: "What you want", p: "What would you most like us to look at next?"
  }]).map(function (q, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "sq-n"
    }, q.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, q.h), /*#__PURE__*/React.createElement("p", null, q.p)));
  })))), /*#__PURE__*/React.createElement(SignalChart, null), /*#__PURE__*/React.createElement(HoursTable, null), /*#__PURE__*/React.createElement("section", {
    className: "memo-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.6",
    title: C.memoLabel || "What we bring each month"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, C.memoH2 || "The monthly write-up."), /*#__PURE__*/React.createElement("div", {
    className: "memo-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "memo-card-eyebrow"
  }, C.memoCardEyebrow || "SteerCo memo"), /*#__PURE__*/React.createElement("div", {
    className: "memo-card-title"
  }, C.memoCardTitle || "<Company> \xB7 <Month> 2026")), /*#__PURE__*/React.createElement("div", {
    className: "memo-card-prep"
  }, C.memoCardPrep || "Prepared by Threadline \xB7 Cambridge, MA")), /*#__PURE__*/React.createElement("div", {
    className: "memo-rows"
  }, (C.memoRows && C.memoRows.length ? C.memoRows : [{
    k: "01 \u2014 What the team told us", v: "A few things the team flagged this month, and anything they've stopped using."
  }, {
    k: "02 \u2014 Last month, in review", v: "The workflow we worked on last month, whether the team actually took to it, and whether to keep it, drop it, or fix what's around it."
  }, {
    k: "03 \u2014 What we'd do next", v: "One thing to work on, one to drop, and one question for the CEO. Signed by the partner on your account."
  }, {
    k: "04 \u2014 Decisions made", v: "What the committee agreed in the room, and who owns each decision. We carry it into next month's write-up."
  }]).map(function (row, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "memo-row",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "memo-k"
    }, row.k), /*#__PURE__*/React.createElement("div", {
      className: "memo-v"
    }, row.v));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.7",
    title: C.pricingLabel || "The engagement"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pricing-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-headline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pricing-num-v"
  }, C.priceNum || "$2,000"), /*#__PURE__*/React.createElement("span", {
    className: "pricing-num-u"
  }, C.priceUnit || "per month")), /*#__PURE__*/React.createElement("p", {
    className: "pricing-blurb"
  }, C.priceBlurb || "Month-to-month. No setup fee. Cancel at the end of any month, in writing.")), /*#__PURE__*/React.createElement("div", {
    className: "pricing-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-k"
  }, C.pricingIncludedLabel || "Included"), /*#__PURE__*/React.createElement("ul", null, (C.pricingIncluded && C.pricingIncluded.length ? C.pricingIncluded : ["Two monthly working sessions with the AI program owner", "One monthly SteerCo hour with the leadership team", "Monthly employee AI-use survey, fielded and analyzed", "A signed, written SteerCo memo every month"]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, it);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pc-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-k"
  }, C.pricingAddonLabel || "Add-on"), /*#__PURE__*/React.createElement("ul", null, (C.pricingAddon && C.pricingAddon.length ? C.pricingAddon : ["Expert calls at $450/hr (Line 02), priority event seats (Line 03), and talent search (Line 04) \u2014 all open to retainer clients."]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, it);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pc-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-k"
  }, C.pricingNotLabel || "Not included"), /*#__PURE__*/React.createElement("ul", null, (C.pricingNot && C.pricingNot.length ? C.pricingNot : ["We don't pick vendors, do the integration work, or build the model. You're not paying us for any of that."]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, it);
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "line-divider",
    id: "expert"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-divider-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ld-num"
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "ld-title"
  }, lines[1].k), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, lines[1].dividerMeta || "$450 / hr \xB7 retainer clients"))), /*#__PURE__*/React.createElement("section", {
    className: "expert-network surface-dark",
    style: {
      background: "var(--ink)",
      color: "var(--ink-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "02.1",
    dark: true
  }, C.enEyebrow || "A fresh take, when you want one"), /*#__PURE__*/React.createElement("div", {
    className: "en-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      color: "var(--ink-paper)",
      marginBottom: 0
    }
  }, C.enH2 || "Not the expert network you already pay for."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: "var(--ink-paper-2)",
      marginTop: 24,
      marginBottom: 0,
      maxWidth: "46ch"
    }
  }, C.enLede || "Networks like GLG connect you with people who've already run the playbook you know. We do something different. We put you in touch with AI builders and younger startup operators doing things your industry hasn't tried yet \u2014 so you hear a new approach, not a version of your own.")), /*#__PURE__*/React.createElement("div", {
    className: "en-contrast"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-col en-contrast-them"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-k"
  }, C.enThemLabel || "The traditional network"), /*#__PURE__*/React.createElement("ul", null, (C.enThem && C.enThem.length ? C.enThem : ["Retired operators and industry veterans", "How they did it at a big incumbent", "Tends to confirm what you already do", "Priced for the occasional deep dive"]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, it);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-col en-contrast-us"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-k"
  }, C.enUsLabel || "The Threadline network"), /*#__PURE__*/React.createElement("ul", null, (C.enUs && C.enUs.length ? C.enUs : ["Founders, builders, and applied researchers", "How they'd build it from scratch today", "More likely to challenge your approach", "Priced so you can use it often"]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, it);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "en-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-rate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-rate-num"
  }, C.enRateNum || "$450 / hr"), /*#__PURE__*/React.createElement("p", null, C.enRateP || "Retainer clients only. No minimum, no commitment, no markup beyond the expert's rate.")), /*#__PURE__*/React.createElement("div", {
    className: "en-howto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-howto-k"
  }, C.enHowtoLabel || "How it works"), /*#__PURE__*/React.createElement("ol", null, (C.enHowto && C.enHowto.length ? C.enHowto : ["You name the question in your SteerCo memo.", "We match a builder from the network within 48 hours.", "One-hour session, recorded, transcript filed.", "Billed monthly, on top of the retainer."]).map(function (it, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, it);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "en-domains"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row en-domain-head"
  }, /*#__PURE__*/React.createElement("div", null, C.enDomainsHeadWho || "Who you'd talk to"), /*#__PURE__*/React.createElement("div", null, C.enDomainsHeadWhat || "What you'd get from them")), (C.enDomains && C.enDomains.length ? C.enDomains : [{
    who: "AI-native founders", what: "How they'd build your workflow with no legacy system to work around."
  }, {
    who: "Applied ML researchers", what: "Whether the model behind your tool is current or a couple of years behind."
  }, {
    who: "Startup operators", what: "How a small team ships in weeks what a big company would scope for a year."
  }, {
    who: "Product designers", what: "What the workflow could feel like if you started from the user, not the org chart."
  }, {
    who: "Growth & GTM builders", what: "Channels and tactics that haven't reached your category yet."
  }, {
    who: "Data & infra engineers", what: "What it really takes to set things up, from people who've done it on a budget."
  }]).map(function (d, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "en-domain-row",
      key: i
    }, /*#__PURE__*/React.createElement("div", null, d.who), /*#__PURE__*/React.createElement("div", null, d.what));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "line-divider",
    id: "events"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-divider-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ld-num"
  }, "03"), /*#__PURE__*/React.createElement("span", {
    className: "ld-title"
  }, lines[2].k), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, lines[2].dividerMeta || "Cambridge \xB7 by cohort"))), /*#__PURE__*/React.createElement("section", {
    className: "events"
  }, /*#__PURE__*/React.createElement("div", {
    className: "events-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "03.1",
    title: C.eventsLabel || "Learning from other companies"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, C.eventsH2 || "Getting the right people in a room."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0,
      maxWidth: "56ch"
    }
  }, C.eventsLede || "A few times a year we bring together leaders from companies that don't compete \u2014 usually in Cambridge, sometimes on the road \u2014 to work through what AI is actually changing about how they run things. Working sessions, not keynotes."), /*#__PURE__*/React.createElement("div", {
    className: "events-grid"
  }, (C.eventsCards && C.eventsCards.length ? C.eventsCards : [{
    tag: "Format", h: "Half-day & full-day workshops", p: "Hands-on sessions on one topic \u2014 setting up tracking for a workflow, reading an adoption survey, deciding what to drop. Run by the partners, kept small."
  }, {
    tag: "Format", h: "Leader cohorts", p: "Small standing groups of CEOs and AI sponsors from non-competing companies who meet over a season to compare notes and not feel like they're figuring it out alone."
  }, {
    tag: "Where", h: "Cambridge, or your city", p: "We're based in Cambridge, close to the labs and the people we came up with. If a group would rather meet somewhere else, we'll come to you."
  }]).map(function (card, i) {
    return /*#__PURE__*/React.createElement("article", {
      className: "event-card",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "ev-tag"
    }, card.tag), /*#__PURE__*/React.createElement("h3", {
      className: "ev-h"
    }, card.h), /*#__PURE__*/React.createElement("p", {
      className: "ev-p"
    }, card.p));
  })), /*#__PURE__*/React.createElement("p", {
    className: "events-note"
  }, C.eventsNote || "Retainer clients get priority seats and member pricing. Standalone seats are available to qualifying companies."))), /*#__PURE__*/React.createElement("div", {
    className: "line-divider",
    id: "placement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-divider-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ld-num"
  }, "04"), /*#__PURE__*/React.createElement("span", {
    className: "ld-title"
  }, lines[3].k), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, lines[3].dividerMeta || "Cambridge & San Francisco \xB7 by search"))), /*#__PURE__*/React.createElement("section", {
    className: "placement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "placement-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "04.1",
    title: C.placementLabel || "Hiring"
  }), /*#__PURE__*/React.createElement("div", {
    className: "placement-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: 0
    }
  }, C.placementH2 || "Hiring the people who'll run it."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      marginBottom: 0,
      maxWidth: "46ch"
    }
  }, C.placementLede || "We're based in two of the best places in the world to find AI talent. We help place graduate and undergraduate students into roles on your team \u2014 people who grew up with these tools and can bring that to your company.")), /*#__PURE__*/React.createElement("div", {
    className: "placement-geo"
  }, (C.placementGeo && C.placementGeo.length ? C.placementGeo : [{
    k: "Cambridge", schools: "MIT \xB7 Harvard", p: "Our home. Engineers, applied scientists, and early-career operators out of the labs and the business schools."
  }, {
    k: "San Francisco", schools: "Stanford & the Bay", p: "Our west-coast pipeline. Product builders and ML talent from Stanford and the surrounding startup ecosystem."
  }]).map(function (g, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "geo-col",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "geo-k"
    }, g.k), /*#__PURE__*/React.createElement("div", {
      className: "geo-schools"
    }, g.schools), /*#__PURE__*/React.createElement("p", {
      className: "geo-p"
    }, g.p));
  })), /*#__PURE__*/React.createElement("div", {
    className: "placement-roles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "placement-roles-k"
  }, C.placementRolesLabel || "Typical placements"), /*#__PURE__*/React.createElement("div", {
    className: "placement-roles-grid"
  }, (C.placementRoles && C.placementRoles.length ? C.placementRoles : ["AI program analysts", "Applied ML interns", "Operations & data roles", "Founder's-office / chief-of-staff", "Product & design", "Summer & full-time"]).map(function (r, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i
    }, r);
  }))), /*#__PURE__*/React.createElement("p", {
    className: "events-note"
  }, C.placementNote || "Placement runs as a search, scoped to the role. Available to retainer clients first."))), /*#__PURE__*/React.createElement("section", {
    className: "closer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "closer-inner closer-light"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "05",
    title: C.closerLabel || "Next step"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "closer-title"
  }, C.closerTitle || "A 30-minute call with the partners.")), /*#__PURE__*/React.createElement("div", {
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

// ════════════════════════════════════════════════════════════════════════
// SignalChart — illustrative trajectories for three teams across M01–M06,
// calibrated to the Microsoft Work Trend Index 2024 + St. Louis Fed data
// the deck cites.
// ════════════════════════════════════════════════════════════════════════
function SignalChart() {
  // Three teams. Y values are weekly-active-use % across months 01–06.
  const teams = [{
    name: "Product & Eng",
    pts: [22, 36, 48, 53, 58, 60],
    hi: true
  }, {
    name: "Operations",
    pts: [18, 24, 31, 38, 44, 48],
    hi: false
  }, {
    name: "Customer Support",
    pts: [26, 33, 39, 42, 38, 36],
    hi: false
  }];
  const W = 880,
    H = 380,
    PADX_L = 56,
    PADX_R = 196,
    PADY = 48;
  const months = ["M01", "M02", "M03", "M04", "M05", "M06"];
  const xAt = i => PADX_L + (W - PADX_L - PADX_R) * i / 5;
  const yAt = v => H - PADY - (H - 2 * PADY) * v / 100;
  return /*#__PURE__*/React.createElement("section", {
    className: "signal-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "signal-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.4",
    title: "What the data shows"
  }), /*#__PURE__*/React.createElement("div", {
    className: "signal-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: 0
    }
  }, "It gets clearer over time."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      marginBottom: 0,
      maxWidth: "48ch"
    }
  }, "The first month is mostly noise. By the third you can see a pattern, and by the sixth your leadership can tell, team by team and tool by tool, what people are really using and what they've quietly dropped.")), /*#__PURE__*/React.createElement("figure", {
    className: "signal-chart-wrap"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    className: "signal-chart",
    role: "img",
    "aria-label": "Illustrative monthly active AI use across three teams over six months."
  }, [0, 25, 50, 75, 100].map(v => /*#__PURE__*/React.createElement("g", {
    key: v
  }, /*#__PURE__*/React.createElement("line", {
    x1: PADX_L,
    y1: yAt(v),
    x2: W - PADX_R,
    y2: yAt(v),
    stroke: "currentColor",
    strokeOpacity: "0.08"
  }), /*#__PURE__*/React.createElement("text", {
    x: PADX_L - 12,
    y: yAt(v) + 4,
    textAnchor: "end",
    className: "signal-axis-label"
  }, v))), months.map((m, i) => /*#__PURE__*/React.createElement("text", {
    key: m,
    x: xAt(i),
    y: H - PADY + 22,
    textAnchor: "middle",
    className: "signal-axis-label"
  }, m)), /*#__PURE__*/React.createElement("line", {
    x1: xAt(2),
    y1: PADY,
    x2: xAt(2),
    y2: H - PADY,
    stroke: "var(--cinnabar)",
    strokeWidth: "1",
    strokeDasharray: "3 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: xAt(2) + 8,
    y: PADY + 12,
    className: "signal-annot"
  }, "M03 \u2014 SteerCo retires legacy tool"), teams.map((t, ti) => {
    const d = t.pts.map((v, i) => `${i === 0 ? "M" : "L"}${xAt(i)},${yAt(v)}`).join(" ");
    return /*#__PURE__*/React.createElement("g", {
      key: t.name
    }, /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: t.hi ? "var(--cinnabar)" : "currentColor",
      strokeOpacity: t.hi ? 1 : 0.35,
      strokeWidth: t.hi ? 2.5 : 1.5
    }), t.pts.map((v, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: xAt(i),
      cy: yAt(v),
      r: t.hi && i === 5 ? 5 : 3,
      fill: t.hi ? "var(--cinnabar)" : "currentColor",
      fillOpacity: t.hi ? 1 : 0.45
    })), /*#__PURE__*/React.createElement("text", {
      x: xAt(5) + 10,
      y: yAt(t.pts[5]) + 4,
      className: "signal-line-label",
      fill: t.hi ? "var(--cinnabar)" : "currentColor"
    }, t.name));
  })), /*#__PURE__*/React.createElement("figcaption", {
    className: "signal-caption"
  }, "Illustrative \xB7 trajectories calibrated to McKinsey State of AI 2024 + Microsoft Work Trend Index 2024.")), /*#__PURE__*/React.createElement("div", {
    className: "signal-callouts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "signal-callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-num-v"
  }, "+38"), /*#__PURE__*/React.createElement("span", {
    className: "sc-num-u"
  }, "pt")), /*#__PURE__*/React.createElement("p", null, "Product-team weekly active use, M01 \u2192 M06. In line with Microsoft Work Trend 2024: 75% of knowledge workers now use AI, up from \u224822% a year earlier.")), /*#__PURE__*/React.createElement("div", {
    className: "signal-callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-num-v"
  }, "2 of 6")), /*#__PURE__*/React.createElement("p", null, "Internal tools retired by the SteerCo in six months \u2014 a third are now seeing net-negative time effects (Federal Reserve, 2024).")), /*#__PURE__*/React.createElement("div", {
    className: "signal-callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-num-v"
  }, "2.2"), /*#__PURE__*/React.createElement("span", {
    className: "sc-num-u"
  }, "hr")), /*#__PURE__*/React.createElement("p", null, "Median weekly hours saved per gen-AI user. Source: St. Louis Fed (Bick, Blandin & Deming, 2024).")))));
}

// ════════════════════════════════════════════════════════════════════════
// HoursTable — every workflow has two numbers.
// ════════════════════════════════════════════════════════════════════════
function HoursTable() {
  const rows = [{
    wf: "Customer reply drafting",
    saved: 42,
    lost: 5,
    net: 37,
    retired: false
  }, {
    wf: "Meeting & call summaries",
    saved: 28,
    lost: 9,
    net: 19,
    retired: false
  }, {
    wf: "Code & content review",
    saved: 22,
    lost: 11,
    net: 11,
    retired: false
  }, {
    wf: "Internal knowledge search",
    saved: 17,
    lost: 8,
    net: 9,
    retired: false
  }, {
    wf: "Forecasting & planning",
    saved: 12,
    lost: 15,
    net: -3,
    retired: false
  }, {
    wf: "Legacy chat assistant",
    saved: 7,
    lost: 19,
    net: -12,
    retired: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "hours-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hours-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.5",
    title: "Time saved and time lost"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hours-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: 0
    }
  }, "Saved time, and lost time."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      marginBottom: 0,
      maxWidth: "48ch"
    }
  }, "The survey captures both sides: the time a tool saves and the time people spend fighting it. Your leadership decides what to keep, fix, or drop based on where it nets out.")), /*#__PURE__*/React.createElement("div", {
    className: "hours-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hours-row hours-row-head"
  }, /*#__PURE__*/React.createElement("div", null, "Workflow"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Saved / wk \xB7 team"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Lost / wk \xB7 team"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Net")), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.wf,
    className: "hours-row" + (r.retired ? " is-retired" : "") + (r.net < 0 ? " is-negative" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "hours-wf"
  }, /*#__PURE__*/React.createElement("span", null, r.wf), r.retired ? /*#__PURE__*/React.createElement("span", {
    className: "hours-retired"
  }, "Retired M03") : null), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r.saved), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r.lost), /*#__PURE__*/React.createElement("div", {
    className: "num hours-net"
  }, r.net > 0 ? `+${r.net}` : r.net)))), /*#__PURE__*/React.createElement("div", {
    className: "hours-foot"
  }, "Illustrative \xB7 hours-per-week magnitudes calibrated to St. Louis Fed (Bick, Blandin & Deming, 2024): median gen-AI user saves \u22482.2 hr/wk; daily users 4+ hr/wk. Customer-support and developer productivity benchmarks from Brynjolfsson, Li & Raymond (QJE 2025) and Microsoft/Accenture RCTs (2025).")));
}
})();
