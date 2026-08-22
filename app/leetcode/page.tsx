import React from 'react';
import LeetCodeStats from '../../components/LeetCodeStats';

export default function LeetCodePage() {
  return (
    <main className="canvas-content leetcode-page pt-8">
      <a href="/" className="leetcode-page-nav font-mono text-xs text-cp-subtext transition-colors hover:text-cp-text">
        ← Back to home
      </a>
      <LeetCodeStats />
    </main>
  );
}
