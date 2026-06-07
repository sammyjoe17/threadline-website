;(function(){
/* global React, Eyebrow, SectionNumber, Btn, marked */
const {
  useState,
  useEffect
} = React;
function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Read the post slug (second hash segment), e.g. #/writing/my-post -> "my-post"
function currentSlug() {
  const raw = (window.location.hash || "").replace(/^#\/?/, "").split("?")[0];
  const parts = raw.split("/");
  return parts[0] === "writing" && parts[1] ? decodeURIComponent(parts[1]) : null;
}
window.WritingPage = function WritingPage({
  navigate
}) {
  const data = window.SITE && window.SITE.writing || {};
  const posts = (data.posts || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const [slug, setSlug] = useState(currentSlug());
  useEffect(() => {
    const onHash = () => setSlug(currentSlug());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const openPost = s => {
    window.location.hash = "#/writing/" + s;
    setSlug(s);
    window.scrollTo(0, 0);
  };
  const backToList = () => {
    window.location.hash = "#/writing";
    setSlug(null);
    window.scrollTo(0, 0);
  };
  const active = slug ? posts.find(p => p.slug === slug) : null;
  if (slug && active) {
    return /*#__PURE__*/React.createElement(PostView, {
      post: active,
      backToList: backToList
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "writing-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "writing-hero-inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "01"
  }, data.introEyebrow || "Writing"), /*#__PURE__*/React.createElement("h1", {
    className: "section-title-lg"
  }, posts.length ? data.title || "Writing." : data.title || "Nothing published yet."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, data.intro || "We don't really blog. We'll write when we have something specific to say, usually off the back of a piece of work. No predictions, no trend pieces. When the first one's up, it'll be here."))), posts.length > 0 ? /*#__PURE__*/React.createElement("section", {
    className: "writing-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "writing-list-inner",
    style: {
      borderTop: "1px solid var(--bone)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "post-index"
  }, posts.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.slug,
    className: "post-row",
    onClick: () => openPost(p.slug)
  }, /*#__PURE__*/React.createElement("div", {
    className: "post-row-date"
  }, fmtDate(p.date)), /*#__PURE__*/React.createElement("div", {
    className: "post-row-main"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "post-row-title"
  }, p.title), p.summary ? /*#__PURE__*/React.createElement("p", {
    className: "post-row-summary"
  }, p.summary) : null), /*#__PURE__*/React.createElement("span", {
    className: "post-row-more"
  }, "Read \u2192")))))) : /*#__PURE__*/React.createElement("section", {
    className: "writing-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "writing-list-inner",
    style: {
      borderTop: "1px solid var(--bone)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty-writing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty-rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "empty-writing-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "02"
  }, "What you'd read here"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      marginTop: 18
    }
  }, "Notes from the work."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--ink)",
      maxWidth: "44ch",
      margin: "0 0 16px"
    }
  }, "Maybe six to ten pieces a year. Each one comes out of something we ran into with a client, or a point we keep finding ourselves making. We're not writing to a calendar.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "topics-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "topic-num"
  }, "A"), /*#__PURE__*/React.createElement("span", {
    className: "topic-h"
  }, "Why most AI pilots quietly get abandoned.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "topic-num"
  }, "B"), /*#__PURE__*/React.createElement("span", {
    className: "topic-h"
  }, "Measuring whether a tool is actually being used.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "topic-num"
  }, "C"), /*#__PURE__*/React.createElement("span", {
    className: "topic-h"
  }, "When we tell a client not to hire us.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "topic-num"
  }, "D"), /*#__PURE__*/React.createElement("span", {
    className: "topic-h"
  }, "Knowing when to drop a tool you paid for."))), /*#__PURE__*/React.createElement("div", {
    className: "topics-foot"
  }, "Rough ideas \xB7 not yet written")))))), /*#__PURE__*/React.createElement("section", {
    className: "closer surface-dark",
    style: {
      background: "var(--ink)",
      color: "var(--ink-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "closer-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionNumber, {
    n: "03",
    title: "Subscribe"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--ink-paper)",
      marginTop: 28
    }
  }, "One email when we publish."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      lineHeight: 1.4,
      color: "var(--ink-paper-2)",
      maxWidth: "40ch",
      marginTop: 24
    }
  }, "We send the essay, a paragraph of context, and nothing else. No drip, no webinar.")), /*#__PURE__*/React.createElement("div", {
    className: "closer-side"
  }, /*#__PURE__*/React.createElement(SubscribeForm, null)))));
};
function PostView({
  post,
  backToList
}) {
  const html = typeof marked !== "undefined" && post.body ? marked.parse(post.body) : "<p>" + (post.body || "") + "</p>";
  return /*#__PURE__*/React.createElement("section", {
    className: "post-view"
  }, /*#__PURE__*/React.createElement("article", {
    className: "post-article"
  }, /*#__PURE__*/React.createElement("a", {
    className: "post-back",
    href: "#/writing",
    onClick: e => {
      e.preventDefault();
      backToList();
    }
  }, "\u2190 All writing"), /*#__PURE__*/React.createElement("div", {
    className: "post-article-meta"
  }, fmtDate(post.date)), /*#__PURE__*/React.createElement("h1", {
    className: "post-article-title"
  }, post.title), /*#__PURE__*/React.createElement("div", {
    className: "post-body",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), /*#__PURE__*/React.createElement("a", {
    className: "post-back post-back-foot",
    href: "#/writing",
    onClick: e => {
      e.preventDefault();
      backToList();
    }
  }, "\u2190 All writing")));
}
function SubscribeForm() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  }
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        lineHeight: 1.4,
        color: "var(--ink-paper)",
        maxWidth: "32ch"
      }
    }, "Subscribed. The first one will be in your inbox.");
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      gap: 0,
      width: "100%",
      maxWidth: 420,
      borderBottom: "1px solid var(--ink-paper)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@company.com",
    required: true,
    style: {
      flex: 1,
      padding: "14px 0",
      background: "transparent",
      border: 0,
      color: "var(--ink-paper)",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      padding: "14px 0 14px 16px",
      background: "transparent",
      border: 0,
      color: "var(--ink-paper)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500
    }
  }, "Subscribe \u2192"));
}
})();
