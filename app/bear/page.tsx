'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export default function BearPage() {
  const [eyesClosed, setEyesClosed] = useState(false);
  const [scale, setScale] = useState(1);
  const [lean, setLean] = useState({ x: 0, y: 0 });
  const [blushOpacity, setBlushOpacity] = useState(0.3);
  const bearRef = useRef<HTMLDivElement>(null);
  const breatheRef = useRef<number | null>(null);
  const isTouchingRef = useRef(false);

  // Breathing animation
  const startBreathing = useCallback((touched = false) => {
    const duration = touched ? 6000 : 4000;
    const maxScale = touched ? 1.025 : 1.06;
    const startTime = performance.now();
    const startScale = scale;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = (elapsed % duration) / duration;
      // Sine wave for smooth breathing
      const breathProgress = Math.sin(progress * Math.PI * 2 - Math.PI / 2) * 0.5 + 0.5;
      const newScale = 1 + (maxScale - 1) * breathProgress;
      setScale(newScale);
      breatheRef.current = requestAnimationFrame(animate);
    };

    if (breatheRef.current) {
      cancelAnimationFrame(breatheRef.current);
    }
    breatheRef.current = requestAnimationFrame(animate);
  }, []);

  // Start breathing on mount
  useEffect(() => {
    startBreathing(false);
    return () => {
      if (breatheRef.current) {
        cancelAnimationFrame(breatheRef.current);
      }
    };
  }, []);

  // Animate lean back to center
  const animateLeanReturn = useCallback(() => {
    const startLean = { ...lean };
    const startBlush = blushOpacity;
    const startTime = performance.now();
    const duration = 2000;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease in-out quad
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setLean({
        x: startLean.x * (1 - eased),
        y: startLean.y * (1 - eased),
      });

      // Blush fades over 2500ms
      const blushProgress = Math.min(elapsed / 2500, 1);
      const blushEased = blushProgress < 0.5
        ? 2 * blushProgress * blushProgress
        : 1 - Math.pow(-2 * blushProgress + 2, 2) / 2;
      setBlushOpacity(0.55 - (0.55 - 0.3) * blushEased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [lean, blushOpacity]);

  // Animate lean toward touch
  const animateLeanTo = useCallback((targetX: number, targetY: number) => {
    const startLean = { ...lean };
    const startBlush = blushOpacity;
    const startTime = performance.now();
    const duration = 800;

    const animate = (time: number) => {
      if (!isTouchingRef.current) return;

      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);

      setLean({
        x: startLean.x + (targetX - startLean.x) * eased,
        y: startLean.y + (targetY - startLean.y) * eased,
      });

      // Blush increases over 1200ms
      const blushProgress = Math.min(elapsed / 1200, 1);
      const blushEased = 1 - (1 - blushProgress) * (1 - blushProgress);
      setBlushOpacity(0.3 + (0.55 - 0.3) * blushEased);

      if (progress < 1 && isTouchingRef.current) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [lean, blushOpacity]);

  const handleTouchStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isTouchingRef.current = true;

    // Switch to slower breathing
    startBreathing(true);

    const rect = bearRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = ((clientX - centerX) / rect.width) * 8;
    const deltaY = ((clientY - centerY) / rect.height) * 5;

    animateLeanTo(deltaX, deltaY);

    // Close eyes after tiny delay
    setTimeout(() => {
      if (isTouchingRef.current) setEyesClosed(true);
    }, 150);

    // Haptic feedback if supported
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }, [startBreathing, animateLeanTo]);

  const handleTouchEnd = useCallback(() => {
    isTouchingRef.current = false;

    // Gradual return
    animateLeanReturn();

    // Open eyes after delay
    setTimeout(() => setEyesClosed(false), 500);

    // Resume normal breathing after settling
    setTimeout(() => {
      startBreathing(false);
    }, 1500);
  }, [animateLeanReturn, startBreathing]);

  return (
    <div
      className="bear-container"
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={bearRef}
        className="bear"
        style={{
          transform: `scale(${scale}) rotate(${lean.x}deg) translateY(${lean.y}px)`,
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
            opacity={blushOpacity}
          />
          <circle
            cx="145"
            cy="110"
            r="14"
            fill="#f8b4b4"
            opacity={blushOpacity}
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
          filter: drop-shadow(0 8px 16px rgba(139, 90, 43, 0.15));
          will-change: transform;
        }

        .bear-svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
