;(function(){
/* global React, Eyebrow, SectionNumber, Btn */

window.EngagementPage = function EngagementPage({
  navigate
}) {
  const lines = [{
    n: "01",
    id: "retainer",
    k: "The Retainer",
    v: "Two leadership sessions a month, plus a survey that tracks how your team is really using AI.",
    meta: "$2,000 / mo"
  }, {
    n: "02",
    id: "expert",
    k: "Expert Calls",
    v: "Calls with AI builders and startup operators when you want a fresh take, not the usual playbook.",
    meta: "$450 / hr"
  }, {
    n: "03",
    id: "events",
    k: "Events & Workshops",
    v: "Workshops that bring together leaders from companies that don't compete, usually in Cambridge.",
    meta: "By cohort"
  }, {
    n: "04",
    id: "placement",
    k: "Talent Placement",
    v: "Students from MIT, Harvard, and Stanford, placed into roles on your team.",
    meta: "By search"
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
  }, "What we do"), /*#__PURE__*/React.createElement("h1", {
    className: "section-title-lg"
  }, "Four ways we work with you."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "We're not the firm that installs the software. We work on everything around it: a steady monthly relationship with your leadership, outside experts when you need them, events to learn from other companies, and help hiring the people who'll run it."))), /*#__PURE__*/React.createElement("section", {
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
  }, "The Retainer"), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, "$2,000 / mo \xB7 month-to-month"))), /*#__PURE__*/React.createElement("section", {
    className: "surfaces"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surfaces-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.1",
    title: "How the retainer works"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginTop: 18
    }
  }, "Two sides of the same work."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0
    }
  }, "Every month we work both ends: the leaders making the calls, and the people actually using the tools day to day. We meet with your steering committee and survey the wider team, and the picture gets clearer the longer we do it."), /*#__PURE__*/React.createElement("div", {
    className: "surfaces-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "surface-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-tag"
  }, "Surface A \xB7 Leadership"), /*#__PURE__*/React.createElement("h3", {
    className: "sc-h"
  }, "The Steering Committee."), /*#__PURE__*/React.createElement("p", {
    className: "sc-p"
  }, "A standing pair of monthly sessions with your AI steering committee \u2014 usually the CEO, the COO or head of ops, and the product or function lead."), /*#__PURE__*/React.createElement("ul", {
    className: "sc-list"
  }, /*#__PURE__*/React.createElement("li", null, "Priorities for the next 30 days"), /*#__PURE__*/React.createElement("li", null, "Which workflows to work on, drop, or leave alone"), /*#__PURE__*/React.createElement("li", null, "How last month's rollout actually landed with the team"), /*#__PURE__*/React.createElement("li", null, "One written recommendation, signed"))), /*#__PURE__*/React.createElement("article", {
    className: "surface-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-tag"
  }, "Surface B \xB7 The Line"), /*#__PURE__*/React.createElement("h3", {
    className: "sc-h"
  }, "The monthly adoption survey."), /*#__PURE__*/React.createElement("p", {
    className: "sc-p"
  }, "A short survey that goes to the people actually using the tools each day. It tracks what they're using, what for, and where it's helping."), /*#__PURE__*/React.createElement("ul", {
    className: "sc-list"
  }, /*#__PURE__*/React.createElement("li", null, "Which AI tools they use, and on which task"), /*#__PURE__*/React.createElement("li", null, "Where the tools save time, and where they cost it"), /*#__PURE__*/React.createElement("li", null, "What they have stopped using, and why"), /*#__PURE__*/React.createElement("li", null, "One signal we carry into the next SteerCo")))))), /*#__PURE__*/React.createElement("section", {
    className: "cadence"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cadence-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.2",
    title: "How a month looks"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "How a month works."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0,
      marginBottom: 56,
      maxWidth: "56ch"
    }
  }, "About three hours of our time and one hour of your leadership's, every month."), /*#__PURE__*/React.createElement("div", {
    className: "cadence-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cadence-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cad-week"
  }, "Week 01"), /*#__PURE__*/React.createElement("h4", {
    className: "cad-h"
  }, "Working session"), /*#__PURE__*/React.createElement("p", {
    className: "cad-p"
  }, "One hour with the person who owns your AI program. We pick what we're looking at this month.")), /*#__PURE__*/React.createElement("div", {
    className: "cadence-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cad-week"
  }, "Week 02"), /*#__PURE__*/React.createElement("h4", {
    className: "cad-h"
  }, "Survey goes out"), /*#__PURE__*/React.createElement("p", {
    className: "cad-p"
  }, "The monthly survey goes to the team. Five minutes, anonymous, broken out by group.")), /*#__PURE__*/React.createElement("div", {
    className: "cadence-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cad-week"
  }, "Week 03"), /*#__PURE__*/React.createElement("h4", {
    className: "cad-h"
  }, "Working session"), /*#__PURE__*/React.createElement("p", {
    className: "cad-p"
  }, "One hour. We walk the program owner through what the survey turned up and draft the write-up.")), /*#__PURE__*/React.createElement("div", {
    className: "cadence-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cad-week"
  }, "Week 04"), /*#__PURE__*/React.createElement("h4", {
    className: "cad-h"
  }, "Steering committee"), /*#__PURE__*/React.createElement("p", {
    className: "cad-p"
  }, "One hour with the steering committee. Recommendations, decisions, and what we look at next."))))), /*#__PURE__*/React.createElement("section", {
    className: "survey-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "survey-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.3",
    title: "What we measure"
  }), /*#__PURE__*/React.createElement("div", {
    className: "survey-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: 0
    }
  }, "What the survey asks."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      marginBottom: 0,
      maxWidth: "44ch"
    }
  }, "It takes about five minutes, it's anonymous, and it goes to the people doing the work rather than the executives. The answers get more useful the longer we run it.")), /*#__PURE__*/React.createElement("ol", {
    className: "survey-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sq-n"
  }, "Q1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Tools in hand"), /*#__PURE__*/React.createElement("p", null, "Which AI tools did you use this month, and on which task?"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sq-n"
  }, "Q2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Time saved"), /*#__PURE__*/React.createElement("p", null, "Estimate the hours this tool saved you, on which workflow."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sq-n"
  }, "Q3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Time lost"), /*#__PURE__*/React.createElement("p", null, "Where did the tool cost you time, or break a working process?"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sq-n"
  }, "Q4"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "What you stopped"), /*#__PURE__*/React.createElement("p", null, "What did you stop using this month, and what made you stop?"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "sq-n"
  }, "Q5"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "What you want"), /*#__PURE__*/React.createElement("p", null, "What would you most like us to look at next?")))))), /*#__PURE__*/React.createElement(SignalChart, null), /*#__PURE__*/React.createElement(HoursTable, null), /*#__PURE__*/React.createElement("section", {
    className: "memo-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.6",
    title: "What we bring each month"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "The monthly write-up."), /*#__PURE__*/React.createElement("div", {
    className: "memo-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "memo-card-eyebrow"
  }, "SteerCo memo"), /*#__PURE__*/React.createElement("div", {
    className: "memo-card-title"
  }, "<Company> \xB7 <Month> 2026")), /*#__PURE__*/React.createElement("div", {
    className: "memo-card-prep"
  }, "Prepared by Threadline \xB7 Cambridge, MA")), /*#__PURE__*/React.createElement("div", {
    className: "memo-rows"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-k"
  }, "01 \u2014 What the team told us"), /*#__PURE__*/React.createElement("div", {
    className: "memo-v"
  }, "A few things the team flagged this month, and anything they've stopped using.")), /*#__PURE__*/React.createElement("div", {
    className: "memo-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-k"
  }, "02 \u2014 Last month, in review"), /*#__PURE__*/React.createElement("div", {
    className: "memo-v"
  }, "The workflow we worked on last month, whether the team actually took to it, and whether to keep it, drop it, or fix what's around it.")), /*#__PURE__*/React.createElement("div", {
    className: "memo-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-k"
  }, "03 \u2014 What we'd do next"), /*#__PURE__*/React.createElement("div", {
    className: "memo-v"
  }, "One thing to work on, one to drop, and one question for the CEO. Signed by the partner on your account.")), /*#__PURE__*/React.createElement("div", {
    className: "memo-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "memo-k"
  }, "04 \u2014 Decisions made"), /*#__PURE__*/React.createElement("div", {
    className: "memo-v"
  }, "What the committee agreed in the room, and who owns each decision. We carry it into next month's write-up.")))))), /*#__PURE__*/React.createElement("section", {
    className: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "01.7",
    title: "The engagement"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pricing-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-headline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pricing-num-v"
  }, "$2,000"), /*#__PURE__*/React.createElement("span", {
    className: "pricing-num-u"
  }, "per month")), /*#__PURE__*/React.createElement("p", {
    className: "pricing-blurb"
  }, "Month-to-month. No setup fee. Cancel at the end of any month, in writing.")), /*#__PURE__*/React.createElement("div", {
    className: "pricing-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-k"
  }, "Included"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Two monthly working sessions with the AI program owner"), /*#__PURE__*/React.createElement("li", null, "One monthly SteerCo hour with the leadership team"), /*#__PURE__*/React.createElement("li", null, "Monthly employee AI-use survey, fielded and analyzed"), /*#__PURE__*/React.createElement("li", null, "A signed, written SteerCo memo every month"))), /*#__PURE__*/React.createElement("div", {
    className: "pc-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-k"
  }, "Add-on"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Expert calls at $450/hr (Line 02), priority event seats (Line 03), and talent search (Line 04) \u2014 all open to retainer clients."))), /*#__PURE__*/React.createElement("div", {
    className: "pc-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-k"
  }, "Not included"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "We don't pick vendors, do the integration work, or build the model. You're not paying us for any of that."))))))), /*#__PURE__*/React.createElement("div", {
    className: "line-divider",
    id: "expert"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-divider-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ld-num"
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "ld-title"
  }, "Expert Calls"), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, "$450 / hr \xB7 retainer clients"))), /*#__PURE__*/React.createElement("section", {
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
  }, "A fresh take, when you want one"), /*#__PURE__*/React.createElement("div", {
    className: "en-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      color: "var(--ink-paper)",
      marginBottom: 0
    }
  }, "Not the expert network you already pay for."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: "var(--ink-paper-2)",
      marginTop: 24,
      marginBottom: 0,
      maxWidth: "46ch"
    }
  }, "Networks like GLG connect you with people who've already run the playbook you know. We do something different. We put you in touch with AI builders and younger startup operators doing things your industry hasn't tried yet \u2014 so you hear a new approach, not a version of your own.")), /*#__PURE__*/React.createElement("div", {
    className: "en-contrast"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-col en-contrast-them"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-k"
  }, "The traditional network"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Retired operators and industry veterans"), /*#__PURE__*/React.createElement("li", null, "How they did it at a big incumbent"), /*#__PURE__*/React.createElement("li", null, "Tends to confirm what you already do"), /*#__PURE__*/React.createElement("li", null, "Priced for the occasional deep dive"))), /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-col en-contrast-us"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-contrast-k"
  }, "The Threadline network"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Founders, builders, and applied researchers"), /*#__PURE__*/React.createElement("li", null, "How they'd build it from scratch today"), /*#__PURE__*/React.createElement("li", null, "More likely to challenge your approach"), /*#__PURE__*/React.createElement("li", null, "Priced so you can use it often")))), /*#__PURE__*/React.createElement("div", {
    className: "en-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-rate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-rate-num"
  }, "$450 / hr"), /*#__PURE__*/React.createElement("p", null, "Retainer clients only. No minimum, no commitment, no markup beyond the expert's rate.")), /*#__PURE__*/React.createElement("div", {
    className: "en-howto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-howto-k"
  }, "How it works"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "You name the question in your SteerCo memo."), /*#__PURE__*/React.createElement("li", null, "We match a builder from the network within 48 hours."), /*#__PURE__*/React.createElement("li", null, "One-hour session, recorded, transcript filed."), /*#__PURE__*/React.createElement("li", null, "Billed monthly, on top of the retainer.")))), /*#__PURE__*/React.createElement("div", {
    className: "en-domains"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row en-domain-head"
  }, /*#__PURE__*/React.createElement("div", null, "Who you'd talk to"), /*#__PURE__*/React.createElement("div", null, "What you'd get from them")), /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row"
  }, /*#__PURE__*/React.createElement("div", null, "AI-native founders"), /*#__PURE__*/React.createElement("div", null, "How they'd build your workflow with no legacy system to work around.")), /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row"
  }, /*#__PURE__*/React.createElement("div", null, "Applied ML researchers"), /*#__PURE__*/React.createElement("div", null, "Whether the model behind your tool is current or a couple of years behind.")), /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row"
  }, /*#__PURE__*/React.createElement("div", null, "Startup operators"), /*#__PURE__*/React.createElement("div", null, "How a small team ships in weeks what a big company would scope for a year.")), /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row"
  }, /*#__PURE__*/React.createElement("div", null, "Product designers"), /*#__PURE__*/React.createElement("div", null, "What the workflow could feel like if you started from the user, not the org chart.")), /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row"
  }, /*#__PURE__*/React.createElement("div", null, "Growth & GTM builders"), /*#__PURE__*/React.createElement("div", null, "Channels and tactics that haven't reached your category yet.")), /*#__PURE__*/React.createElement("div", {
    className: "en-domain-row"
  }, /*#__PURE__*/React.createElement("div", null, "Data & infra engineers"), /*#__PURE__*/React.createElement("div", null, "What it really takes to set things up, from people who've done it on a budget."))))), /*#__PURE__*/React.createElement("div", {
    className: "line-divider",
    id: "events"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-divider-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ld-num"
  }, "03"), /*#__PURE__*/React.createElement("span", {
    className: "ld-title"
  }, "Events & Workshops"), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, "Cambridge \xB7 by cohort"))), /*#__PURE__*/React.createElement("section", {
    className: "events"
  }, /*#__PURE__*/React.createElement("div", {
    className: "events-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "03.1",
    title: "Learning from other companies"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Getting the right people in a room."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 0,
      maxWidth: "56ch"
    }
  }, "A few times a year we bring together leaders from companies that don't compete \u2014 usually in Cambridge, sometimes on the road \u2014 to work through what AI is actually changing about how they run things. Working sessions, not keynotes."), /*#__PURE__*/React.createElement("div", {
    className: "events-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "event-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ev-tag"
  }, "Format"), /*#__PURE__*/React.createElement("h3", {
    className: "ev-h"
  }, "Half-day & full-day workshops"), /*#__PURE__*/React.createElement("p", {
    className: "ev-p"
  }, "Hands-on sessions on one topic \u2014 setting up tracking for a workflow, reading an adoption survey, deciding what to drop. Run by the partners, kept small.")), /*#__PURE__*/React.createElement("article", {
    className: "event-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ev-tag"
  }, "Format"), /*#__PURE__*/React.createElement("h3", {
    className: "ev-h"
  }, "Leader cohorts"), /*#__PURE__*/React.createElement("p", {
    className: "ev-p"
  }, "Small standing groups of CEOs and AI sponsors from non-competing companies who meet over a season to compare notes and not feel like they're figuring it out alone.")), /*#__PURE__*/React.createElement("article", {
    className: "event-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ev-tag"
  }, "Where"), /*#__PURE__*/React.createElement("h3", {
    className: "ev-h"
  }, "Cambridge, or your city"), /*#__PURE__*/React.createElement("p", {
    className: "ev-p"
  }, "We're based in Cambridge, close to the labs and the people we came up with. If a group would rather meet somewhere else, we'll come to you."))), /*#__PURE__*/React.createElement("p", {
    className: "events-note"
  }, "Retainer clients get priority seats and member pricing. Standalone seats are available to qualifying companies."))), /*#__PURE__*/React.createElement("div", {
    className: "line-divider",
    id: "placement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-divider-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ld-num"
  }, "04"), /*#__PURE__*/React.createElement("span", {
    className: "ld-title"
  }, "Talent Placement"), /*#__PURE__*/React.createElement("span", {
    className: "ld-meta"
  }, "Cambridge & San Francisco \xB7 by search"))), /*#__PURE__*/React.createElement("section", {
    className: "placement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "placement-inner"
  }, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "04.1",
    title: "Hiring"
  }), /*#__PURE__*/React.createElement("div", {
    className: "placement-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginBottom: 0
    }
  }, "Hiring the people who'll run it."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 18,
      marginBottom: 0,
      maxWidth: "46ch"
    }
  }, "We're based in two of the best places in the world to find AI talent. We help place graduate and undergraduate students into roles on your team \u2014 people who grew up with these tools and can bring that to your company.")), /*#__PURE__*/React.createElement("div", {
    className: "placement-geo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "geo-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "geo-k"
  }, "Cambridge"), /*#__PURE__*/React.createElement("div", {
    className: "geo-schools"
  }, "MIT \xB7 Harvard"), /*#__PURE__*/React.createElement("p", {
    className: "geo-p"
  }, "Our home. Engineers, applied scientists, and early-career operators out of the labs and the business schools.")), /*#__PURE__*/React.createElement("div", {
    className: "geo-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "geo-k"
  }, "San Francisco"), /*#__PURE__*/React.createElement("div", {
    className: "geo-schools"
  }, "Stanford & the Bay"), /*#__PURE__*/React.createElement("p", {
    className: "geo-p"
  }, "Our west-coast pipeline. Product builders and ML talent from Stanford and the surrounding startup ecosystem."))), /*#__PURE__*/React.createElement("div", {
    className: "placement-roles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "placement-roles-k"
  }, "Typical placements"), /*#__PURE__*/React.createElement("div", {
    className: "placement-roles-grid"
  }, /*#__PURE__*/React.createElement("span", null, "AI program analysts"), /*#__PURE__*/React.createElement("span", null, "Applied ML interns"), /*#__PURE__*/React.createElement("span", null, "Operations & data roles"), /*#__PURE__*/React.createElement("span", null, "Founder's-office / chief-of-staff"), /*#__PURE__*/React.createElement("span", null, "Product & design"), /*#__PURE__*/React.createElement("span", null, "Summer & full-time"))), /*#__PURE__*/React.createElement("p", {
    className: "events-note"
  }, "Placement runs as a search, scoped to the role. Available to retainer clients first."))), /*#__PURE__*/React.createElement("section", {
    className: "closer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "closer-inner closer-light"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "05",
    title: "Next step"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "closer-title"
  }, "A 30-minute call with the partners.")), /*#__PURE__*/React.createElement("div", {
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
  }, "hello@threadlineconsulting.co")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Phone"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "205-335-5818")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Office"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Cambridge, MA")))))));
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
