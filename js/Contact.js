;(function(){
/* global React, Eyebrow, SectionNumber, Btn */
const {
  useState
} = React;
window.ContactPage = function ContactPage({
  navigate
}) {
  const [submitted, setSubmitted] = useState(false);
  const empty = {
    name: "",
    role: "",
    company: "",
    revenue: "",
    interest: "The monthly retainer ($2,000 / mo)",
    note: ""
  };
  const [form, setForm] = useState(empty);
  function update(k, v) {
    setForm({
      ...form,
      [k]: v
    });
  }
  function encode(data) {
    return Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join("&");
  }
  function submit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "contact",
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
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    className: "section-title-lg"
  }, "Tell us where AI is stuck at your company."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "We'll set up a 30-minute call. If the retainer makes sense, we go from there. If you're after an expert call or a workshop, same. And if we're not the right people, we'll tell you."), /*#__PURE__*/React.createElement("div", {
    className: "contact-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Office"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, "Cambridge, MA")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Email"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, "hello@threadlineconsulting.co")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Phone"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, "205-335-5818")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "meta-k"
  }, "Founded"), /*#__PURE__*/React.createElement("span", {
    className: "meta-v"
  }, "2025, out of MIT"))), /*#__PURE__*/React.createElement("div", {
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
  }, "02"), /*#__PURE__*/React.createElement("span", null, "If you're not sure yet")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--fg-muted)",
      maxWidth: "44ch",
      margin: 0
    }
  }, "Have a look at the ", /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      navigate("engagement");
    },
    href: "#/engagement",
    style: {
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, "engagement page"), " and the ", /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      navigate("about");
    },
    href: "#/about",
    style: {
      textDecoration: "underline",
      textUnderlineOffset: 4
    }
  }, "about"), " page first if you like. Either way, feel free to write \u2014 we read every email."))), /*#__PURE__*/React.createElement("div", {
    className: "contact-right"
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    className: "contact-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thread-rule"
  }), /*#__PURE__*/React.createElement("h3", null, "Got it."), /*#__PURE__*/React.createElement("p", null, "Thanks for writing \u2014 we read every email and we'll get back to you. If we're not the right fit, we'll tell you that too."), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => {
      setSubmitted(false);
      setForm(empty);
    }
  }, "Send another \u2192")) : /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Your name"), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: e => update("name", e.target.value),
    placeholder: "Mira Patel",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Role"), /*#__PURE__*/React.createElement("input", {
    value: form.role,
    onChange: e => update("role", e.target.value),
    placeholder: "CEO",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-row form-row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    value: form.company,
    onChange: e => update("company", e.target.value),
    placeholder: "Acme Inc.",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Annual revenue"), /*#__PURE__*/React.createElement("select", {
    value: form.revenue,
    onChange: e => update("revenue", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select\u2026"), /*#__PURE__*/React.createElement("option", null, "Under $50M"), /*#__PURE__*/React.createElement("option", null, "$50M \u2014 $250M"), /*#__PURE__*/React.createElement("option", null, "$250M \u2014 $1B"), /*#__PURE__*/React.createElement("option", null, "$1B+")))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "What we'd start with"), /*#__PURE__*/React.createElement("select", {
    value: form.interest,
    onChange: e => update("interest", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "The monthly retainer ($2,000 / mo)"), /*#__PURE__*/React.createElement("option", null, "The expert network ($450 / hr, retainer clients)"), /*#__PURE__*/React.createElement("option", null, "Not sure yet \u2014 just a conversation"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "A bit about where you are"), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    value: form.note,
    onChange: e => update("note", e.target.value),
    placeholder: "We've put AI tools in front of a few teams, but we honestly don't know if people are using them or if they're helping. We could use an outside read."
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    arrow: true
  }, "Send"), /*#__PURE__*/React.createElement("span", {
    className: "form-hint"
  }, "We read every email."))))));
};
})();
