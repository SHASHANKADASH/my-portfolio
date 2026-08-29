import React from 'react';
import LeetCodeStats from '../../components/LeetCodeStats';

export default function LeetCodePage() {
  return (
    <main className="canvas-content leetcode-page pt-8 mx-auto max-w-7xl px-6 md:px-10">
      <a href="/" className="leetcode-page-nav font-mono text-xs text-cp-subtext transition-colors hover:text-cp-text">
        ← Back to home
      </a>
      <LeetCodeStats />
    </main>
  );
}
