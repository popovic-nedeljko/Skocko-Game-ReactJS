import React from "react";
import "./Rules.scss";

const SYMBOLS = [
  { label: "HEART", icon: "♥", color: "#e03232" },
  { label: "DIAMOND", icon: "♦", color: "#ff6600" },
  { label: "CLUB", icon: "♣", color: "#3db843" },
  { label: "SPADE", icon: "♠", color: "#4a9edd" },
  { label: "STAR", icon: "★", color: "#ffd700" },
  { label: "JOKER", icon: "🃏", color: "#9b59b6" },
];

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
            Klasičan srpski kviz na TV <span className="hl-y">od 1993</span>.
          </p>
        </div>
        <div className="rules-title-center">
          <div className="rules-sym-row">
            {SYMBOLS.map((s) => (
              <div
                key={s.label}
                className="rules-sym-circle"
                style={{
                  borderColor: s.color,
                  boxShadow: `0 0 8px ${s.color}66`,
                  color: s.color,
                }}
              >
                {s.icon}
              </div>
            ))}
          </div>
          <h1 className="rules-title">SKOČKO</h1>
          <p className="rules-sub">— QUIZ GAME —</p>
        </div>
        <div className="rules-info-box">
          <span style={{ color: "#ffd700" }}>★</span>
          <p>
            Jedna od najpopularnijih igara u{" "}
            <span className="hl-y">Slagalici</span>.
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
              CILJ IGRE
            </div>
            <p className="rt">
              Pogodi skrivenu kombinaciju od{" "}
              <span className="hl-y">4 simbola</span> u najviše{" "}
              <span className="hl-y">6 pokušaja</span>. Simboli mogu da se
              ponavljaju, a redosled je važan.
            </p>
          </div>

          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="2" />
              SIMBOLI
            </div>
            <p className="rt rt--sm">
              U igri se koristi 6 simbola. Simboli mogu da se ponavljaju.
            </p>
            <div className="sym-grid">
              {SYMBOLS.map((s) => (
                <div key={s.label} className="sym-item">
                  <div
                    className="sym-icon"
                    style={{
                      color: s.color,
                      borderColor: `${s.color}66`,
                      boxShadow: `0 0 8px ${s.color}55`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <small className="sym-lbl">{s.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="3" />
              TOK IGRE
            </div>
            <div className="steps">
              {[
                "Na početku se nasumično generiše tajna kombinacija od 4 simbola.",
                "Vi unosite svoju pretpostavku (guess) od 4 simbola.",
                "Dobijate povratnu informaciju nakon svakog pokušaja.",
                "Igra traje dok ne pogodite kombinaciju ili ne potrošite sve pokušaje (najčešće 6).",
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
              STRATEGIJE
            </div>
            <div className="strats">
              {[
                {
                  icon: "★",
                  color: "#3db843",
                  title: "Koristite različite simbole na početku",
                  desc: "Prvi pokušaji treba da pokriju što više opcija.",
                },
                {
                  icon: "◎",
                  color: "#ff8800",
                  title: "Pratite povratne informacije pažljivo",
                  desc: "Crveni kružići su najvredniji – potvrđuju i simbol i poziciju.",
                },
                {
                  icon: "✕",
                  color: "#e03232",
                  title: "Eliminacija",
                  desc: "Ako simbol ne daje nikakav feedback, verovatno nije deo kombinacije.",
                },
                {
                  icon: "⊙",
                  color: "#4a9edd",
                  title: "Testiranje pozicija",
                  desc: "Kada znate da simbol postoji, menjajte mu poziciju da pronađete pravo mesto.",
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
            PRAVILA IGRE
            <span className="center-line" />
          </div>

          {/* 5. Feedback */}
          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="5" />
              POVRATNA INFORMACIJA (FEEDBACK)
            </div>
            <div className="fb-grid">
              <div className="fb-block">
                <div className="fb-block__hd">
                  <Peg type="red" />
                  <span className="hl-r fb-block__name">CRVENI KRUŽIĆ</span>
                </div>
                <p className="rt rt--sm">
                  Simbol je tačan i nalazi se na tačnoj poziciji.
                </p>
                <div className="fb-rows">
                  <FbRow label="TAJNA">
                    {SECRET.map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="VAŠ POKUŠAJ">
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
                <p className="rt rt--xs">♥ i ♣ su na tačnim pozicijama.</p>
              </div>

              <div className="fb-block">
                <div className="fb-block__hd">
                  <Peg type="yellow" />
                  <span className="hl-y fb-block__name">ŽUTI KRUŽIĆ</span>
                </div>
                <p className="rt rt--sm">
                  Simbol postoji u kombinaciji, ali je na pogrešnoj poziciji.
                </p>
                <div className="fb-rows">
                  <FbRow label="TAJNA">
                    {SECRET.map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="VAŠ POKUŠAJ">
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
                  ♠ i ♥ postoje ali nisu na pravom mestu.
                </p>
              </div>
            </div>
          </div>

          {/* Važna pravila */}
          <div className="r-card">
            <div className="r-card__hd--center">
              VAŽNA PRAVILA FEEDBACK SISTEMA
            </div>
            <div className="imp-grid">
              <div className="imp-card">
                <div className="imp-num">1</div>
                <p className="imp-title">CRVENI IMAJU PRIORITET</p>
                <p className="rt rt--sm">
                  Prvo se računaju tačne pozicije (crveni), pa tek onda pogrešne
                  (žuti).
                </p>
                <div className="sbox-row" style={{ margin: "0.4vh 0" }}>
                  {SECRET.map((s, i) => (
                    <SBox key={i} icon={s.icon} color={s.color} />
                  ))}
                </div>
                <span className="imp-arrow">↓</span>
                <p className="rt rt--xs">
                  sprečava duplo brojanje istog simbola.
                </p>
              </div>

              <div className="imp-card">
                <div className="imp-num">2</div>
                <p className="imp-title">JEDAN SIMBOL = JEDAN POGODAK</p>
                <p className="rt rt--sm">
                  Simbol može biti uračunat samo jednom, čak i ako se ponavlja u
                  pokušaju.
                </p>
                <div className="fb-rows" style={{ marginTop: "0.3vh" }}>
                  <FbRow label="TAJNA:">
                    {SECRET.map((s, i) => (
                      <SBox key={i} icon={s.icon} color={s.color} />
                    ))}
                  </FbRow>
                  <FbRow label="POKUŠAJ:">
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
                  REDOSLED FEEDBACK KRUŽIĆA NIJE BITAN
                </p>
                <p className="rt rt--sm">
                  Feedback ne govori koji simbol je pogođen. Samo ukupno stanje
                  pokušaja.
                </p>
                <div
                  className="sbox-row"
                  style={{ margin: "0.4vh 0", gap: "0.3rem" }}
                >
                  <Peg type="red" sm />
                  <Peg type="yellow" sm />
                </div>
                <p className="rt rt--xs">ne znači da je prvi simbol tačan.</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="r-note">
            <span className="r-note__icon">💡</span>
            <p className="rt rt--sm">
              Igrač dobija samo informaciju{" "}
              <strong className="hl-y">KOLIKO</strong> je simbola tačno na
              pravom mestu i <strong className="hl-y">KOLIKO</strong> ih je
              tačno ali na pogrešnom mestu.
            </p>
          </div>
        </div>

        {/* ═══ RIGHT ═══ */}
        <div className="rules-col rules-col--right">
          {/* 6. Primer */}
          <div className="r-card">
            <div className="r-card__hd">
              <SecNum n="6" />
              PRIMER CELE PARTIJE
            </div>
            <div className="ex-secret">
              <span className="ex-secret__lbl">TAJNA KOMBINACIJA</span>
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
                  expl: "♥ je tačan i na pravom mestu, ♦ postoji ali je na pogrešnom mestu.",
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
                  expl: "♥ i ♠ su tačni, ♦ i ♣ postoje ali su zamenjeni.",
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
                  expl: "Svi simboli su tačni i na pravim mestima.",
                },
              ].map(({ n, guess, pegs, expl }) => (
                <div key={n} className="ex-attempt">
                  <div className="ex-attempt__left">
                    <span className="ex-attempt__lbl">POKUŠAJ {n}</span>
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
                    <span className="ex-expl__lbl">Objašnjenje:</span>
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
              KRAJ IGRE
            </div>
            <div className="end-grid">
              <div className="end-card end-card--win">
                <span className="end-icon">🏆</span>
                <p className="end-title">POBEDA</p>
                <div className="sbox-row sbox-row--center">
                  <Peg type="red" />
                  <Peg type="red" />
                  <Peg type="red" />
                  <Peg type="red" />
                </div>
                <p className="rt rt--sm">
                  Pogađate kombinaciju pre nego što potrošite sve pokušaje.
                </p>
                <p className="rt rt--sm">Svi simboli i pozicije tačni.</p>
              </div>
              <div className="end-card end-card--lose">
                <span className="end-icon">💀</span>
                <p className="end-title">PORAZ</p>
                <p className="rt rt--sm">
                  Potrošili ste sve pokušaje, a niste pogodili kombinaciju.
                </p>
                <p className="rt rt--sm">Tajna kombinacija se otkriva.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
