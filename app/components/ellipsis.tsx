'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';




interface EllipsisTextProps {
  text: string;
  lines?: number;
}

const EllipsisText: React.FC<EllipsisTextProps> = ({ text, lines = 3 }) => {
  const [expanded, setExpanded] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el && !expanded) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [text, lines, expanded]);

  const clampedStyle: React.CSSProperties = expanded
    ? {}
    : {
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      };

  return (
    <div>
      <p ref={textRef} style={clampedStyle} >{text}</p>
      {isOverflowing && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: 4,
            background: 'none',
            border: 'none',
            color: 'rgba(4, 43, 51, 0.97)',
            cursor: 'pointer',
            padding: 0,
            fontSize: '0.9rem',
          }}
        >
          {expanded ? <ArrowUp className="w-5 h-5" /> : <ArrowDown className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
};

export default EllipsisText;
