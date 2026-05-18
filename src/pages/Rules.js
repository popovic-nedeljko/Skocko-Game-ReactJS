import React from "react";
import "./Rules.scss";
import { SYMBOL_CONFIG } from "../constants";

const SECRET = [
  { icon: "♥", color: "#e03232" },
  { icon: "♠", color: "#4a9edd" },
  { icon: "♣", color: "#3db843" },
  { icon: "♦", color: "#ff6600" },
];

function Peg({ type, sm }) {
  return <span className={`peg peg--${type}${sm ? " peg--sm" : ""}`} />;
}

function SBox({ icon, color }) {
  return (
    <span
      className="sbox"
      style={{
        color,
        borderColor: `${color}80`,
        boxShadow: `0 0 5px ${color}44`,
      }}
    >
      {icon}
    </span>
  );
}

function SecNum({ n }) {
  return <span className="sec-num">{n}</span>;
}

function FbRow({ label, children }) {
  return (
    <div className="fb-row">
      <span className="fb-lbl">{label}</span>
      <div className="fb-row__content">{children}</div>
    </div>
  );
}

export default function Rules() {
  return (
    <div className="rules-page">
      {/* ── HEADER ── */}
      <div className="rules-header">
        <div className="rules-info-box">
          <span>🏆</span>
          <p>
            Classic Serbian quiz on TV <span className="hl-y">since 1993</span>.
          </p>
        </div>
        <div className="rules-title-center">
          <div className="rules-sym-row">
            {SYMBOL_CONFIG.map(({ Icon, color, label }) => (
              <div
                key={label}
                className="rules-sym-circle"
                style={{
                  borderColor: color,
                  boxShadow: `0 0 8px ${color}66`,
                  color: color,
                }}
              >
                <Icon />
              </div>
            ))}
          </div>
          <h1 className="rules-title">SKOČKO</h1>
          <p className="rules-sub">— QUIZ GAME —</p>
        </div>
        <div className="rules-info-box">
          <span style={{ color: "#ffd700" }}>★</span>
          <p>
            One of the most popular games on{" "}
            <span className="hl-y">Slagalica</span>.
          </p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="rules-body">
        {/* ═══ LEFT ═══ */}
        <div className="rules-col rules-col--left">
          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="1" />
              GOAL
            </div>
            <p className="rt">
              Guess the hidden combination of{" "}
              <span className="hl-y">4 symbols</span> in at most{" "}
              <span className="hl-y">6 attempts</span>. Symbols can repeat,
              and the order matters.
            </p>
          </div>

          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="2" />
              SYMBOLS
            </div>
            <p className="rt rt--sm">
              The game uses 6 symbols. Symbols can repeat.
            </p>
            <div className="sym-grid">
              {SYMBOL_CONFIG.map(({ Icon, color, label }) => (
                <div key={label} className="sym-item">
                  <div
                    className="sym-icon"
                    style={{
                      color: color,
                      borderColor: `${color}66`,
                      boxShadow: `0 0 8px ${color}55`,
                    }}
                  >
                    <Icon />
                  </div>
                  <small className="sym-lbl">{label.toUpperCase()}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="3" />
              HOW TO PLAY
            </div>
            <div className="steps">
              {[
                "At the start, a secret combination of 4 symbols is randomly generated.",
                "You enter your guess of 4 symbols.",
                "You receive feedback after each attempt.",
                "The game continues until you guess the combination or use all attempts (usually 6).",
              ].map((t, i) => (
                <div key={i} className="step">
                  <span className="step__n">{i + 1}</span>
                  <p className="rt rt--sm">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="4" />
              STRATEGIES
            </div>
            <div className="strats">
              {[
                {
                  icon: "★",
                  color: "#3db843",
                  title: "Use different symbols early on",
                  desc: "Your first guesses should cover as many options as possible.",
                },
                {
                  icon: "◎",
                  color: "#ff8800",
                  title: "Track feedback carefully",
                  desc: "Red pegs are the most valuable — they confirm both the symbol and position.",
                },
                {
                  icon: "✕",
                  color: "#e03232",
                  title: "Elimination",
                  desc: "If a symbol gives no feedback, it is likely not part of the combination.",
                },
                {
                  icon: "⊙",
                  color: "#4a9edd",
                  title: "Position testing",
                  desc: "Once you know a symbol exists, move it around to find the right position.",
                },
              ].map(({ icon, color, title, desc }, i) => (
                <div key={i} className="strat">
                  <span
                    className="strat__icon"
                    style={{ color, borderColor: `${color}66` }}
                  >
                    {icon}
                  </span>
                  <div>
                    <p className="strat__title" style={{ color }}>
                      {title}
                    </p>
                    <p className="rt rt--sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ CENTER ═══ */}
        <div className="rules-col rules-col--center">
          <div className="center-hd">
            <span className="center-line" />
            GAME RULES
            <span className="center-line" />
          </div>

          {/* 5. Feedback */}
          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="5" />
              FEEDBACK
            </div>
            <div className="fb-grid">
              <div className="fb-block">
                <div className="fb-block__hd">
                  <Peg type="red" />
                  <span className="hl-r fb-block__name">RED PEG</span>
                </div>
                <p className="rt rt--sm">
                  The symbol is correct and in the right position.
                </p>
                <div className="fb-rows">
                  <FbRow label="SECRET">
                    {SECRET.map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="YOUR GUESS">
                    {[
                      { icon: "♥", color: "#e03232" },
                      { icon: "★", color: "#ffd700" },
                      { icon: "♣", color: "#3db843" },
                      { icon: "🃏", color: "#9b59b6" },
                    ].map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="FEEDBACK">
                    <Peg type="red" sm />
                    <Peg type="red" sm />
                    <Peg type="empty" sm />
                    <Peg type="empty" sm />
                  </FbRow>
                </div>
                <p className="rt rt--xs">♥ and ♣ are in the correct positions.</p>
              </div>

              <div className="fb-block">
                <div className="fb-block__hd">
                  <Peg type="yellow" />
                  <span className="hl-y fb-block__name">YELLOW PEG</span>
                </div>
                <p className="rt rt--sm">
                  The symbol exists in the combination but is in the wrong position.
                </p>
                <div className="fb-rows">
                  <FbRow label="SECRET">
                    {SECRET.map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="YOUR GUESS">
                    {[
                      { icon: "♠", color: "#4a9edd" },
                      { icon: "♥", color: "#e03232" },
                      { icon: "★", color: "#ffd700" },
                      { icon: "★", color: "#ffd700" },
                    ].map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="FEEDBACK">
                    <Peg type="yellow" sm />
                    <Peg type="yellow" sm />
                    <Peg type="empty" sm />
                    <Peg type="empty" sm />
                  </FbRow>
                </div>
                <p className="rt rt--xs">
                  ♠ and ♥ exist but are not in the right position.
                </p>
              </div>
            </div>
          </div>

          {/* Važna pravila */}
          <div className="r-card">
            <div className="r-card__hd--center">
              IMPORTANT FEEDBACK RULES
            </div>
            <div className="imp-grid">
              <div className="imp-card">
                <div className="imp-num">1</div>
                <p className="imp-title">RED PEGS HAVE PRIORITY</p>
                <p className="rt rt--sm">
                  Correct positions (red) are counted first, then wrong positions
                  (yellow).
                </p>
                <div className="sbox-row" style={{ margin: "0.4vh 0" }}>
                  {SECRET.map((s, i) => (
                    <SBox key={i} icon={s.icon} color={s.color} />
                  ))}
                </div>
                <span className="imp-arrow">↓</span>
                <p className="rt rt--xs">
                  prevents double-counting the same symbol.
                </p>
              </div>

              <div className="imp-card">
                <div className="imp-num">2</div>
                <p className="imp-title">ONE SYMBOL = ONE MATCH</p>
                <p className="rt rt--sm">
                  A symbol can only be counted once, even if it appears multiple
                  times in your guess.
                </p>
                <div className="fb-rows" style={{ marginTop: "0.3vh" }}>
                  <FbRow label="SECRET:">
                    {SECRET.map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="GUESS:">
                    {[0, 1, 2, 3].map((i) => (
                      <SBox key={i} icon="♥" color="#e03232" />
                    ))}
                  </FbRow>
                  <FbRow label="FEEDBACK:">
                    <Peg type="red" sm />
                  </FbRow>
                </div>
              </div>

              <div className="imp-card">
                <div className="imp-num">3</div>
                <p className="imp-title">
                  PEG ORDER DOES NOT MATTER
                </p>
                <p className="rt rt--sm">
                  Feedback does not tell you which symbol was matched. Only the
                  overall result of the attempt.
                </p>
                <div
                  className="sbox-row"
                  style={{ margin: "0.4vh 0", gap: "0.3rem" }}
                >
                  <Peg type="red" sm />
                  <Peg type="yellow" sm />
                </div>
                <p className="rt rt--xs">does not mean the first symbol is correct.</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="r-note">
            <span className="r-note__icon">💡</span>
            <p className="rt rt--sm">
              The player only learns{" "}
              <strong className="hl-y">HOW MANY</strong> symbols are correct and
              in the right position, and{" "}
              <strong className="hl-y">HOW MANY</strong> are correct but in the
              wrong position.
            </p>
          </div>
        </div>

        {/* ═══ RIGHT ═══ */}
        <div className="rules-col rules-col--right">
          {/* 6. Primer */}
          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="6" />
              EXAMPLE GAME
            </div>
            <div className="ex-secret">
              <span className="ex-secret__lbl">SECRET COMBINATION</span>
              <div className="sbox-row">
                {SECRET.map((s, i) => (
                  <SBox key={i} icon={s.icon} color={s.color} />
                ))}
              </div>
            </div>
            <div className="ex-attempts">
              {[
                {
                  n: 1,
                  guess: [
                    { icon: "♥", color: "#e03232" },
                    { icon: "♦", color: "#ff6600" },
                    { icon: "★", color: "#ffd700" },
                    { icon: "★", color: "#ffd700" },
                  ],
                  pegs: ["red", "yellow", "empty", "empty"],
                  expl: "♥ is correct and in the right position, ♦ exists but is in the wrong position.",
                },
                {
                  n: 2,
                  guess: [
                    { icon: "♥", color: "#e03232" },
                    { icon: "♠", color: "#4a9edd" },
                    { icon: "♦", color: "#ff6600" },
                    { icon: "♣", color: "#3db843" },
                  ],
                  pegs: ["red", "red", "yellow", "yellow"],
                  expl: "♥ and ♠ are correct, ♦ and ♣ exist but are swapped.",
                },
                {
                  n: 3,
                  guess: [
                    { icon: "♥", color: "#e03232" },
                    { icon: "♠", color: "#4a9edd" },
                    { icon: "♣", color: "#3db843" },
                    { icon: "♦", color: "#ff6600" },
                  ],
                  pegs: ["red", "red", "red", "red"],
                  expl: "All symbols are correct and in the right positions.",
                },
              ].map(({ n, guess, pegs, expl }) => (
                <div key={n} className="ex-attempt">
                  <div className="ex-attempt__left">
                    <span className="ex-attempt__lbl">ATTEMPT {n}</span>
                    <div className="ex-attempt__row">
                      <div className="sbox-row">
                        {guess.map((s, i) => (
                          <SBox key={i} icon={s.icon} color={s.color} />
                        ))}
                      </div>
                      <span className="arrow">→</span>
                      <div className="sbox-row">
                        {pegs.map((p, i) => (
                          <Peg key={i} type={p} sm />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="ex-expl">
                    <span className="ex-expl__lbl">Explanation:</span>
                    {expl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Kraj */}
          <div className="r-card r-card--flex">
            <div className="r-card__hd">
              <SecNum n="7" />
              END OF GAME
            </div>
            <div className="end-grid">
              <div className="end-card end-card--win">
                <span className="end-icon">🏆</span>
                <p className="end-title">WIN</p>
                <div className="sbox-row sbox-row--center">
                  <Peg type="red" />
                  <Peg type="red" />
                  <Peg type="red" />
                  <Peg type="red" />
                </div>
                <p className="rt rt--sm">
                  You guess the combination before using all your attempts.
                </p>
                <p className="rt rt--sm">All symbols and positions correct.</p>
              </div>
              <div className="end-card end-card--lose">
                <span className="end-icon">💀</span>
                <p className="end-title">LOSE</p>
                <p className="rt rt--sm">
                  You used all your attempts without guessing the combination.
                </p>
                <p className="rt rt--sm">The secret combination is revealed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
