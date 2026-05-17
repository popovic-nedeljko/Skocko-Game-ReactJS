import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import {
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from 'react-icons/bs';
import { GiDiamonds, GiCardJoker } from 'react-icons/gi';
import { FaPlay, FaBook, FaBrain, FaTrophy, FaUndoAlt, FaStar } from 'react-icons/fa';
import { MdOutlineGpsFixed } from 'react-icons/md';

const SYMBOL_CIRCLES = [
  { icon: <BsFillSuitHeartFill />, color: '#cc2233', glow: 'rgba(200,30,50,0.7)' },
  { icon: <GiDiamonds />,          color: '#ff6600', glow: 'rgba(255,102,0,0.7)' },
  { icon: <BsFillSuitClubFill />,  color: '#22aa44', glow: 'rgba(30,180,60,0.7)' },
  { icon: <BsFillSuitSpadeFill />, color: '#22a0cc', glow: 'rgba(30,160,210,0.7)' },
  { icon: <FaStar />,              color: '#ffd700', glow: 'rgba(255,215,0,0.7)' },
  { icon: <GiCardJoker />,         color: '#9933cc', glow: 'rgba(150,40,210,0.7)' },
];

const PREVIEW_FEEDBACK = [
  ['red', 'yellow', 'none', 'none'],
  ['yellow', 'yellow', 'none', 'none'],
  ['red', 'red', 'none', 'none'],
  ['red', 'red', 'yellow', 'none'],
  ['red', 'yellow', 'yellow', 'none'],
  ['red', 'red', 'red', 'red'],
];

const SECRET = [
  { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
  { icon: <BsFillSuitHeartFill />, color: '#cc2233' },
  { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
  { icon: <GiDiamonds />,          color: '#ff6600' },
];

const GUESS_ROWS = [
  [
    { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
    { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
    { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
    { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
  ],
  [
    { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
    { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
    { icon: <FaStar />,              color: '#ffd700' },
    { icon: <FaStar />,              color: '#ffd700' },
  ],
  [
    { icon: <BsFillSuitHeartFill />, color: '#cc2233' },
    { icon: <GiDiamonds />,          color: '#ff6600' },
    { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
    { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
  ],
  [
    { icon: <GiDiamonds />,          color: '#ff6600' },
    { icon: <BsFillSuitHeartFill />, color: '#cc2233' },
    { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
    { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
  ],
  [
    { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
    { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
    { icon: <BsFillSuitHeartFill />, color: '#cc2233' },
    { icon: <GiDiamonds />,          color: '#ff6600' },
  ],
  [
    { icon: <BsFillSuitSpadeFill />, color: '#22a0cc' },
    { icon: <BsFillSuitHeartFill />, color: '#cc2233' },
    { icon: <BsFillSuitClubFill />,  color: '#22aa44' },
    { icon: <GiDiamonds />,          color: '#ff6600' },
  ],
];

const PREVIEW_SYMBOLS = [
  { icon: <BsFillSuitHeartFill />, color: '#cc2233', label: 'HEART' },
  { icon: <GiDiamonds />,          color: '#ff6600', label: 'DIAMOND' },
  { icon: <BsFillSuitClubFill />,  color: '#22aa44', label: 'CLUB' },
  { icon: <BsFillSuitSpadeFill />, color: '#22a0cc', label: 'SPADE' },
  { icon: <FaStar />,              color: '#ffd700', label: 'STAR' },
  { icon: <GiCardJoker />,         color: '#9933cc', label: 'JOKER' },
];

function PreviewPeg({ type }) {
  return <span className={`prev-peg prev-peg--${type}`} />;
}

function GamePreview() {
  return (
    <div className='preview-board'>
      {/* YOUR GUESS */}
      <div className='preview-col preview-col--guess'>
        <div className='preview-col__header'>YOUR GUESS</div>
        <div className='preview-col__body'>
          {GUESS_ROWS.map((row, i) => (
            <div key={i} className='preview-row'>
              {row.map((s, j) => (
                <div
                  key={j}
                  className={`prev-cell prev-cell--sym${i < 5 ? ' prev-cell--dark' : ''}`}
                  style={{ color: s.color }}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Secret reveal — outside body so separator is flush with row 6 */}
        <div className='preview-secret'>
          <div className='preview-row'>
            {SECRET.map((s, j) => (
              <div key={j} className='prev-cell prev-cell--secret' style={{ color: s.color }}>
                {s.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEEDBACK */}
      <div className='preview-col'>
        <div className='preview-col__header'>FEEDBACK</div>
        <div className='preview-col__body'>
          {PREVIEW_FEEDBACK.map((row, i) => (
            <div key={i} className='preview-row preview-row--feedback'>
              {row.map((p, j) => (
                <PreviewPeg key={j} type={p} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SYMBOLS */}
      <div className='preview-col preview-col--symbols'>
        <div className='preview-col__header'>SYMBOLS</div>
        <div className='preview-col__body'>
          {PREVIEW_SYMBOLS.map((s, i) => (
            <div key={i} className='prev-sym-btn' style={{ '--sc': s.color }}>
              <span className='prev-sym-btn__icon' style={{ color: s.color }}>
                {s.icon}
              </span>
              <span className='prev-sym-btn__track' style={{ color: s.color }}>
                {s.label}
              </span>
            </div>
          ))}
          <div className='prev-action-btn prev-action-btn--check'>
            CHECK RESULT <FaTrophy />
          </div>
          <div className='prev-action-btn prev-action-btn--undo'>
            UNDO SYMBOL <FaUndoAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className='landing'>
      <div className='landing__main'>
        {/* ── Left ── */}
        <div className='landing__left'>
          <div className='landing__symbol-row'>
            {SYMBOL_CIRCLES.map((s, i) => (
              <div
                key={i}
                className='landing__sym-circle'
                style={{
                  color: s.color,
                  boxShadow: `0 0 14px 3px ${s.glow}`,
                  borderColor: s.color,
                }}
              >
                {s.icon}
              </div>
            ))}
          </div>

          <h1 className='landing__title'>SKOČKO</h1>
          <p className='landing__subtitle'>— QUIZ GAME —</p>
          <p className='landing__desc'>
            The classic Serbian quiz that has been on TV{' '}
            <span className='landing__highlight'>since 1993</span>.
          </p>

          <div className='landing__btns'>
            <Link to='/game' className='landing__btn landing__btn--start'>
              <span className='landing__btn-icon landing__btn-icon--play'>
                <FaPlay />
              </span>
              <div className='landing__btn-text'>
                <span className='landing__btn-name'>START GAME</span>
                <span className='landing__btn-sub'>★ BEST OF 6</span>
              </div>
            </Link>

            <Link to='/about' className='landing__btn landing__btn--rules'>
              <span className='landing__btn-icon landing__btn-icon--book'>
                <FaBook />
              </span>
              <div className='landing__btn-text'>
                <span className='landing__btn-name'>RULES</span>
                <span className='landing__btn-sub'>How to play</span>
              </div>
            </Link>
          </div>

          <div className='landing__features'>
            <div className='landing__feature'>
              <span className='landing__feat-icon landing__feat-icon--blue'>
                <FaBrain />
              </span>
              <div>
                <h3 className='landing__feat-title landing__feat-title--blue'>THINK</h3>
                <p className='landing__feat-desc'>Analyze and make smart guesses.</p>
              </div>
            </div>
            <div className='landing__feature'>
              <span className='landing__feat-icon landing__feat-icon--gold'>
                <MdOutlineGpsFixed />
              </span>
              <div>
                <h3 className='landing__feat-title landing__feat-title--gold'>GUESS</h3>
                <p className='landing__feat-desc'>Find the hidden code of symbols.</p>
              </div>
            </div>
            <div className='landing__feature'>
              <span className='landing__feat-icon landing__feat-icon--purple'>
                <FaTrophy />
              </span>
              <div>
                <h3 className='landing__feat-title landing__feat-title--purple'>WIN</h3>
                <p className='landing__feat-desc'>Guess the code within 6 tries!</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right (preview) ── */}
        <div className='landing__right'>
          <GamePreview />
        </div>
      </div>

      {/* ── Tagline ── */}
      <div className='landing__tagline'>
        <span className='landing__tagline-line' />
        <span className='tagline-think'>THINK.</span>
        <span className='tagline-guess'>GUESS.</span>
        <span className='tagline-win'>WIN.</span>
        <span className='landing__tagline-line' />
      </div>
    </div>
  );
}

export default Landing;
