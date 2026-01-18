'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export default function BearPage() {
  const [eyesClosed, setEyesClosed] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [lean, setLean] = useState({ x: 0, y: 0 });
  const [blushOpacity, setBlushOpacity] = useState(0.3);
  const bearRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsTouching(true);

    const rect = bearRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = ((clientX - centerX) / rect.width) * 8;
    const deltaY = ((clientY - centerY) / rect.height) * 5;

    setLean({ x: deltaX, y: deltaY });
    setBlushOpacity(0.55);

    // Close eyes after tiny delay
    setTimeout(() => setEyesClosed(true), 150);

    // Haptic feedback if supported
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);
    setLean({ x: 0, y: 0 });
    setBlushOpacity(0.3);

    // Open eyes after delay
    setTimeout(() => setEyesClosed(false), 500);
  }, []);

  return (
    <div
      className="bear-container"
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={bearRef}
        className={`bear ${isTouching ? 'touching' : ''}`}
        style={{
          transform: `rotate(${lean.x}deg) translateY(${lean.y}px)`,
        }}
        onMouseDown={handleTouchStart}
        onTouchStart={handleTouchStart}
      >
        <svg viewBox="0 0 200 200" className="bear-svg">
          {/* Left Ear */}
          <circle cx="45" cy="45" r="30" fill="#c9a06a" />
          <circle cx="45" cy="45" r="18" fill="#f5d0b9" />

          {/* Right Ear */}
          <circle cx="155" cy="45" r="30" fill="#c9a06a" />
          <circle cx="155" cy="45" r="18" fill="#f5d0b9" />

          {/* Head */}
          <circle cx="100" cy="100" r="70" fill="#d4a574" />

          {/* Muzzle */}
          <ellipse cx="100" cy="125" rx="35" ry="28" fill="#f5e0c9" />

          {/* Nose */}
          <ellipse cx="100" cy="115" rx="12" ry="8" fill="#5c4033" />

          {/* Eyes */}
          {eyesClosed ? (
            <>
              <path
                d="M 62 90 Q 70 96, 78 90"
                stroke="#2c1810"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 122 90 Q 130 96, 138 90"
                stroke="#2c1810"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </>
          ) : (
            <>
              <circle cx="70" cy="90" r="8" fill="#2c1810" />
              <circle cx="130" cy="90" r="8" fill="#2c1810" />
              <circle cx="72" cy="88" r="3" fill="#ffffff" />
              <circle cx="132" cy="88" r="3" fill="#ffffff" />
            </>
          )}

          {/* Mouth */}
          <path
            d="M 88 135 Q 100 142, 112 135"
            stroke="#5c4033"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cheeks */}
          <circle
            cx="55"
            cy="110"
            r="14"
            fill="#f8b4b4"
            style={{ opacity: blushOpacity, transition: 'opacity 1.2s ease-out' }}
          />
          <circle
            cx="145"
            cy="110"
            r="14"
            fill="#f8b4b4"
            style={{ opacity: blushOpacity, transition: 'opacity 1.2s ease-out' }}
          />
        </svg>
      </div>

      <style jsx>{`
        .bear-container {
          width: 100vw;
          height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fef6e4 0%, #f9e4d4 50%, #fce4ec 100%);
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          overflow: hidden;
        }

        .bear {
          width: min(70vw, 70vh, 300px);
          height: min(70vw, 70vh, 300px);
          cursor: pointer;
          transition: transform 0.8s cubic-bezier(0.34, 1.2, 0.64, 1);
          animation: breathe 4s ease-in-out infinite;
          filter: drop-shadow(0 8px 16px rgba(139, 90, 43, 0.15));
        }

        .bear.touching {
          animation: breathe-slow 6s ease-in-out infinite;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1) rotate(0deg) translateY(0px);
          }
          50% {
            transform: scale(1.06) rotate(0deg) translateY(0px);
          }
        }

        @keyframes breathe-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.025);
          }
        }

        .bear-svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
