'use client';

import { useEffect, useRef, useState } from 'react';

const PLAYER_SRC = 'https://player.vimeo.com/api/player.js';

export default function HeroVideo({
  vimeoId,
  vimeoUrl,
  title = 'Intro video',
  aspect = 'vertical',
}) {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const src = vimeoUrl
    || `https://player.vimeo.com/video/${vimeoId}?controls=0&title=0&byline=0&portrait=0&dnt=1&muted=1&playsinline=1`;

  useEffect(() => {
    let cancelled = false;

    function init() {
      if (cancelled || !iframeRef.current || !window.Vimeo) return;
      const player = new window.Vimeo.Player(iframeRef.current);
      playerRef.current = player;
      player.on('play', () => setPlaying(true));
      player.on('pause', () => setPlaying(false));
      player.on('ended', () => setPlaying(false));
      player.on('volumechange', ({ volume }) => setMuted(volume === 0));
    }

    if (window.Vimeo) {
      init();
    } else {
      let script = document.querySelector(`script[src="${PLAYER_SRC}"]`);
      if (!script) {
        script = document.createElement('script');
        script.src = PLAYER_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener('load', init);
      if (script.readyState === 'complete') init();
    }

    return () => {
      cancelled = true;
      const p = playerRef.current;
      if (p) {
        try { p.unload(); } catch {}
        playerRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pause();
    else {
      p.setMuted(false).catch(() => {});
      p.play().catch(() => {});
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const p = playerRef.current;
    if (!p) return;
    p.setMuted(!muted);
  };

  const embedClass = aspect === 'vertical'
    ? 'video-embed video-embed--vertical'
    : 'video-embed';

  return (
    <div className={embedClass}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
      />
      <button
        type="button"
        className={`video-ctrl video-ctrl--toggle${playing ? ' is-playing' : ''}`}
        onClick={togglePlay}
        aria-label={playing ? 'Pause video' : 'Play video'}
      >
        <span className="video-ctrl__icon" aria-hidden="true">
          {playing ? (
            <svg viewBox="0 0 24 24">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </button>
      <button
        type="button"
        className="video-ctrl video-ctrl--mute"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11 5L6 9H3v6h3l5 4V5z" />
            <path d="M22 9l-5 5m0-5l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11 5L6 9H3v6h3l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
