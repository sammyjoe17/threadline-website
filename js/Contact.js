;(function(){
/* global React, Eyebrow, SectionNumber, Btn */
const {
  useState
} = React;
window.ContactPage = function ContactPage({
  navigate
}) {
  const C = window.SITE && window.SITE.contact || {};
  const CC = window.SITE && window.SITE.common || {};
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const empty = {
    name: "",
    role: "",
    company: "",
    revenue: "",
    interest: "The monthly retainer",
    note: ""
  };
  const [form, setForm] = useState(empty);
  const REQUIRED = {
    name: "Please add your name.",
    role: "Please add your role.",
    company: "Please add your company.",
    note: "Please tell us a bit about where you are."
  };
  function update(k, v) {
    setForm({
      ...form,
      [k]: v
    });
    if (errors[k]) setErrors(function (prev) {
      const next = {
        ...prev
      };
      delete next[k];
      return next;
    });
  }
  function encode(data) {
    return Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join("&");
  }
  function submit(e) {
    e.preventDefault();
    const missing = {};
    Object.keys(REQUIRED).forEach(function (k) {
      if (!form[k] || !form[k].trim()) missing[k] = REQUIRED[k];
    });
    if (Object.keys(missing).length) {
      setErrors(missing);
      return;
    }
    setErrors({});
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "contact",
        "bot-field": "",
        ...form
      })
    }).then(function (r) {
      if (!r.ok) throw new Error("Form submission failed");
      setSubmitted(true);
    }).catch(function () {
      window.location.href = "mailto:hello@threadlineconsulting.co";
    });
  }
  return /*#__PURE__*/React.createElement("article", {
    className: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-left"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "01"
  }, C.heroEyebrow || "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    className: "section-title-lg"
  }, C.heroTitle || "Tell us where AI is stuck at your company."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, C.heroLede || "We'll set up a 30-minute call. If the retainer makes sense, we go from there. If you're after an expert call or a workshop, same. And if we're not the right people, we'll tell you."), /*#__PURE__*/React.createElement("div", {
    className: "contact-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Office"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, CC.office || "Cambridge, MA")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Email"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, CC.email || "hello@threadlineconsulting.co")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Phone"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, CC.phone || "205-335-5818")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Founded"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, C.foundedValue || "2025, out of MIT"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid var(--bone)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-num"
  }, "02"), /*#__PURE__*/React.createElement("span", null, C.notSureLabel || "If you're not sure yet")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--fg-muted)",
      maxWidth: "44ch",
      margin: 0
    }
  }, C.notSureBefore || "Have a look at the ", /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      navigate("engagement");
    },
    href: "/engagement",
    style: {
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, C.notSureLink1 || "engagement page"), C.notSureMid || " and the ", /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      navigate("about");
    },
    href: "/about",
    style: {
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, C.notSureLink2 || "about"), C.notSureAfter || " page first if you like. Either way, feel free to write \u2014 we read every email."))), /*#__PURE__*/React.createElement("div", {
    className: "contact-right"
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    className: "contact-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thread-rule"
  }), /*#__PURE__*/React.createElement("h3", null, C.successHeading || "Got it."), /*#__PURE__*/React.createElement("p", null, C.successBody || "Thanks for writing \u2014 we read every email and we'll get back to you. If we're not the right fit, we'll tell you that too."), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => {
      setSubmitted(false);
      setForm(empty);
    }
  }, C.successAgain || "Send another \u2192")) : /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.name ? " has-error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Your name"), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: e => update("name", e.target.value),
    placeholder: "Mira Patel"
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    className: "field-error"
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.role ? " has-error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Role"), /*#__PURE__*/React.createElement("input", {
    value: form.role,
    onChange: e => update("role", e.target.value),
    placeholder: "CEO"
  }), errors.role && /*#__PURE__*/React.createElement("span", {
    className: "field-error"
  }, errors.role))),/*#__PURE__*/React.createElement("div", {
    className: "form-row form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.company ? " has-error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    value: form.company,
    onChange: e => update("company", e.target.value),
    placeholder: "Acme Inc."
  }), errors.company && /*#__PURE__*/React.createElement("span", {
    className: "field-error"
  }, errors.company)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Annual revenue (optional)"), /*#__PURE__*/React.createElement("select", {
    value: form.revenue,
    onChange: e => update("revenue", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select\u2026"), /*#__PURE__*/React.createElement("option", null, "Under $50M"), /*#__PURE__*/React.createElement("option", null, "$50M \u2014 $250M"), /*#__PURE__*/React.createElement("option", null, "$250M \u2014 $1B"), /*#__PURE__*/React.createElement("option", null, "$1B+")))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "What we'd start with"), /*#__PURE__*/React.createElement("select", {
    value: form.interest,
    onChange: e => update("interest", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "The monthly retainer"), /*#__PURE__*/React.createElement("option", null, "The expert network (retainer clients)"), /*#__PURE__*/React.createElement("option", null, "Not sure yet \u2014 just a conversation"))), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.note ? " has-error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "A bit about where you are"), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    value: form.note,
    onChange: e => update("note", e.target.value),
    placeholder: "We've put AI tools in front of a few teams, but we honestly don't know if people are using them or if they're helping. We could use an outside read."
  }), errors.note && /*#__PURE__*/React.createElement("span", {
    className: "field-error"
  }, errors.note)), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    arrow: true
  }, "Send"), /*#__PURE__*/React.createElement("span", {
    className: "form-hint"
  }, Object.keys(errors).length ? "Please fill in the highlighted fields." : "We read every email."))))));
};
})();
