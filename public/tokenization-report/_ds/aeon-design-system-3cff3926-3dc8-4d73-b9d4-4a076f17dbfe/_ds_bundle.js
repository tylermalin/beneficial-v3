/* @ds-bundle: {"format":4,"namespace":"AEONDesignSystem_3cff39","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Index","sourcePath":"components/core/Index.jsx"},{"name":"Note","sourcePath":"components/core/Note.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Star","sourcePath":"components/core/Star.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Logo","sourcePath":"components/media/Logo.jsx"},{"name":"RisoImage","sourcePath":"components/media/RisoImage.jsx"}],"sourceHashes":{"components/core/Button.jsx":"e1a273fcf3a7","components/core/Callout.jsx":"4a3872864b58","components/core/Divider.jsx":"0e02f3b93731","components/core/Icon.jsx":"12e3e8c6eb95","components/core/Index.jsx":"9fbaef0eba60","components/core/Note.jsx":"766682f17e04","components/core/Pill.jsx":"24e017835af6","components/core/Rule.jsx":"20886d94ead7","components/core/Star.jsx":"a002e8c5afaf","components/core/Stat.jsx":"a258ceb27500","components/media/Logo.jsx":"edb94d453d77","components/media/RisoImage.jsx":"506f74388b5a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AEONDesignSystem_3cff39 = window.AEONDesignSystem_3cff39 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  variant = "outline",
  size = "md",
  icon,
  children,
  style,
  ...rest
}) {
  const pad = size === "sm" ? "6px 16px" : size === "lg" ? "14px 32px" : "10px 24px";
  const fs = size === "sm" ? "var(--text-body-sm)" : size === "lg" ? "var(--text-body-lg)" : "var(--text-body)";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: pad,
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: fs,
    lineHeight: 1.2,
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid var(--border-ink)",
    cursor: "pointer",
    transition: "opacity var(--duration-base) var(--ease-out),background var(--duration-base),color var(--duration-base)",
    textDecoration: "none",
    whiteSpace: "nowrap"
  };
  const v = {
    outline: {
      background: "transparent",
      color: "var(--ink)"
    },
    solid: {
      background: "var(--ink)",
      color: "var(--text-on-ink)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      borderColor: "var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      border: "1.5px solid transparent",
      textDecoration: "underline",
      textUnderlineOffset: 4,
      textDecorationThickness: 1.5
    }
  }[variant];
  const dis = rest.disabled ? {
    opacity: 0.4,
    cursor: "not-allowed"
  } : {};
  const [h, setH] = React.useState(false);
  const hov = h && !rest.disabled ? variant === "ghost" ? {
    color: "var(--accent)"
  } : {
    opacity: "var(--hover-opacity)"
  } : {};
  return React.createElement("button", {
    ...rest,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      ...v,
      ...dis,
      ...hov,
      ...style
    }
  }, icon ? React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function Callout({
  tone = "ink",
  dashed = false,
  filled = false,
  children,
  style
}) {
  const color = tone === "accent" ? "var(--accent)" : "var(--ink)";
  return React.createElement("div", {
    style: {
      padding: "18px 24px",
      border: "1.5px " + (dashed ? "dashed" : "solid") + " " + color,
      borderRadius: filled ? 0 : "var(--radius-sm)",
      background: filled ? color : "var(--surface-card)",
      color: filled ? "var(--paper)" : "var(--ink)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      lineHeight: 1.4,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  vertical = false,
  tone = "ink",
  style
}) {
  const color = tone === "accent" ? "var(--accent)" : "var(--ink)";
  return React.createElement("div", {
    role: "separator",
    style: vertical ? {
      width: 0,
      alignSelf: "stretch",
      borderLeft: "1.5px dashed " + color,
      ...style
    } : {
      height: 0,
      width: "100%",
      borderTop: "1.5px dashed " + color,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
let loading = null;
function ensureLucide() {
  if (window.lucide) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise(res => {
    const s = document.createElement("script");
    s.src = "https://unpkg.com/lucide@0.475.0/dist/umd/lucide.min.js";
    s.onload = res;
    s.onerror = res;
    document.head.appendChild(s);
  });
  return loading;
}
const pascal = s => s.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join("");
function Icon({
  name,
  size = 28,
  tone = "accent",
  stroke = 1.75,
  style
}) {
  size = typeof size === "string" ? Number(size) : size;
  const [ready, setReady] = React.useState(!!window.lucide);
  React.useEffect(() => {
    ensureLucide().then(() => setReady(true));
  }, []);
  const color = tone === "ink" ? "var(--ink)" : tone === "paper" ? "var(--paper)" : "var(--accent)";
  const def = ready && window.lucide && window.lucide.icons ? window.lucide.icons[pascal(name)] : null;
  const kids = def ? def.map((d, i) => React.createElement(d[0], {
    key: i,
    ...d[1]
  })) : null;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "inline-block",
      flexShrink: 0,
      ...style
    }
  }, kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Index.jsx
try { (() => {
function Index({
  number,
  title,
  tone = "ink",
  rule = "bar",
  style
}) {
  const color = tone === "accent" ? "var(--accent)" : "var(--ink)";
  const n = typeof number === "number" ? String(number).padStart(2, "0") : number;
  return React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "96px 1fr",
      columnGap: 24,
      alignItems: "start",
      ...style
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-sm)",
      lineHeight: 1,
      color: "var(--ink)"
    }
  }, n), React.createElement("div", {
    style: {
      width: 96,
      height: rule === "wave" ? 10 : 8,
      backgroundImage: "radial-gradient(circle," + color + " 1.4px,transparent 1.6px)",
      backgroundSize: "var(--halftone-size)",
      WebkitMaskImage: "linear-gradient(90deg,#000 50%,transparent)",
      maskImage: "linear-gradient(90deg,#000 50%,transparent)",
      borderRadius: rule === "wave" ? "50%" : 0
    }
  })), React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      lineHeight: 1.1,
      color: "var(--ink)",
      textTransform: "uppercase",
      paddingTop: 4
    }
  }, title));
}
Object.assign(__ds_scope, { Index });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Index.jsx", error: String((e && e.message) || e) }); }

// components/core/Note.jsx
try { (() => {
function Note({
  tone = "ink",
  size,
  children,
  style
}) {
  return React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontWeight: 500,
      fontSize: size || "var(--text-script)",
      lineHeight: 1.1,
      color: tone === "accent" ? "var(--accent)" : "var(--ink)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Note.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  tone = "ink",
  filled = false,
  underline = false,
  children,
  style
}) {
  const color = tone === "accent" ? "var(--accent)" : "var(--ink)";
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 22px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid " + color,
      background: filled ? color : "var(--surface-card)",
      color: filled ? "var(--paper)" : color,
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-body)",
      lineHeight: 1.2,
      textDecoration: underline ? "underline" : "none",
      textUnderlineOffset: 3,
      textDecorationThickness: 1.5,
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
const n = v => typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v) ? Number(v) : v;
function Rule({
  tone = "accent",
  shape = "bar",
  width = 320,
  height = 10,
  fade = true,
  style
}) {
  width = n(width);
  height = n(height);
  fade = fade !== "false" && fade !== false;
  const color = tone === "ink" ? "var(--ink)" : "var(--accent)";
  if (shape === "wave") {
    const id = React.useId().replace(/:/g, "");
    return React.createElement("svg", {
      width,
      height: height * 2.4,
      viewBox: "0 0 320 24",
      preserveAspectRatio: "none",
      style: {
        display: "block",
        ...style
      }
    }, React.createElement("defs", null, React.createElement("pattern", {
      id,
      width: 5,
      height: 5,
      patternUnits: "userSpaceOnUse"
    }, React.createElement("circle", {
      cx: 2.5,
      cy: 2.5,
      r: 1.5,
      fill: color
    })), fade ? React.createElement("linearGradient", {
      id: id + "g"
    }, React.createElement("stop", {
      offset: "0",
      stopColor: "#fff"
    }), React.createElement("stop", {
      offset: "0.75",
      stopColor: "#fff"
    }), React.createElement("stop", {
      offset: "1",
      stopColor: "#000"
    })) : null, fade ? React.createElement("mask", {
      id: id + "m"
    }, React.createElement("rect", {
      width: 320,
      height: 24,
      fill: "url(#" + id + "g)"
    })) : null), React.createElement("path", {
      d: "M4 14 C 40 -4, 70 30, 110 12 S 180 -2, 215 12 S 285 28, 316 8",
      fill: "none",
      stroke: "url(#" + id + ")",
      strokeWidth: 8,
      strokeLinecap: "round",
      mask: fade ? "url(#" + id + "m)" : undefined
    }));
  }
  return React.createElement("div", {
    style: {
      width,
      height,
      backgroundImage: "radial-gradient(circle," + color + " 1.4px,transparent 1.6px)",
      backgroundSize: "var(--halftone-size)",
      WebkitMaskImage: fade ? "linear-gradient(90deg,#000 55%,transparent)" : "none",
      maskImage: fade ? "linear-gradient(90deg,#000 55%,transparent)" : "none",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Star.jsx
try { (() => {
const n = v => typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v) ? Number(v) : v;
function Star({
  size = 56,
  tone = "accent",
  circle = true,
  style
}) {
  size = n(size);
  circle = circle !== "false" && circle !== false;
  const color = tone === "ink" ? "var(--ink)" : "var(--accent)";
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    style: {
      display: "inline-block",
      verticalAlign: "-0.1em",
      ...style
    }
  }, circle ? React.createElement("circle", {
    cx: 50,
    cy: 50,
    r: 44,
    stroke: "var(--ink)",
    strokeWidth: 9
  }) : null, React.createElement("path", {
    d: "M50 8 L62 74 L14 34 L88 40 L30 84 Z",
    stroke: color,
    strokeWidth: 5,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { Star });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Star.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function Stat({
  value,
  unit,
  label,
  tone = "ink",
  size = "md",
  style
}) {
  const color = tone === "accent" ? "var(--accent)" : "var(--ink)";
  const fs = size === "lg" ? "var(--text-display-lg)" : size === "sm" ? "var(--text-display-sm)" : "var(--text-display-md)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      color
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: fs,
      lineHeight: 0.95,
      letterSpacing: "var(--tracking-display)"
    }
  }, value), unit ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-h3)",
      lineHeight: 1
    }
  }, unit) : null), label ? React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--text-body)",
      maxWidth: 260
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/media/Logo.jsx
try { (() => {
function Logo({
  variant = "mark",
  height = 48,
  base = "../../assets/",
  style
}) {
  height = typeof height === "string" ? Number(height) : height;
  const file = {
    mark: "logo-mark.png",
    stacked: "logo-stacked.png",
    horizontal: "logo-horizontal.png"
  }[variant];
  return React.createElement("img", {
    src: base + file,
    alt: "AEON Microgrid Data",
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Logo.jsx", error: String((e && e.message) || e) }); }

// components/media/RisoImage.jsx
try { (() => {
const n = v => typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v) ? Number(v) : v;
function RisoImage({
  src,
  alt = "",
  width = "100%",
  height = 320,
  ink = "ink",
  shape = "accent",
  shapeStyle,
  offset = 32,
  blob = true,
  children,
  style
}) {
  width = n(width);
  height = n(height);
  offset = n(offset);
  blob = blob !== "false" && blob !== false;
  const inkColor = ink === "accent" ? "var(--accent)" : "var(--ink)";
  const shapeColor = shape === "ink" ? "var(--ink)" : shape === "accent" ? "var(--accent)" : shape === "tint" ? "var(--accent-tint)" : "transparent";
  return React.createElement("div", {
    style: {
      position: "relative",
      width,
      height,
      ...style
    }
  }, shape !== "none" ? React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: "translate(" + offset + "px," + -offset * 0.6 + "px)",
      background: shapeColor,
      borderRadius: blob ? "58% 42% 55% 45% / 48% 60% 40% 52%" : 0,
      ...shapeStyle
    }
  }) : null, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: inkColor,
      mixBlendMode: "multiply",
      overflow: "hidden"
    }
  }, src ? React.createElement("img", {
    src,
    alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "var(--riso-filter)",
      mixBlendMode: "screen"
    }
  }) : children ? React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      filter: "var(--riso-filter)",
      mixBlendMode: "screen"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { RisoImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/RisoImage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Index = __ds_scope.Index;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Star = __ds_scope.Star;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.RisoImage = __ds_scope.RisoImage;

})();
