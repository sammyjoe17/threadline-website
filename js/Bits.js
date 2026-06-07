;(function(){
/* global React */
// Small shared atoms used everywhere.

window.Eyebrow = function Eyebrow({
  children,
  num,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "eyebrow" + (dark ? " eyebrow-dark" : "")
  }, num ? /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-num"
  }, num) : null, /*#__PURE__*/React.createElement("span", null, children));
};
window.ThreadRule = function ThreadRule({
  width = 80,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "thread-rule",
    style: {
      width,
      ...style
    }
  });
};
window.Tag = function Tag({
  children,
  variant = "outline"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "tag tag-" + variant
  }, children);
};
window.Btn = function Btn({
  children,
  variant = "primary",
  onClick,
  href,
  arrow,
  size
}) {
  const cls = "btn btn-" + variant + (size === "sm" ? " btn-sm" : "");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), arrow ? /*#__PURE__*/React.createElement("span", {
    className: "btn-arrow"
  }, "\u2192") : null);
  if (href !== undefined) {
    return /*#__PURE__*/React.createElement("a", {
      className: cls,
      href: href,
      onClick: onClick
    }, content);
  }
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick
  }, content);
};
window.Stat = function Stat({
  value,
  label,
  footnote
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, label), footnote ? /*#__PURE__*/React.createElement("div", {
    className: "stat-footnote"
  }, footnote) : null);
};
window.SectionNumber = function SectionNumber({
  n,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, title));
};
window.Icon = function Icon({
  name,
  size = 20
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size
    }
  });
};
})();
