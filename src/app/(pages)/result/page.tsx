// app/(pages)/result/page.tsx
import { Suspense } from 'react';
import ResultContent from './ResultContent';
import { Sparkles } from 'lucide-react';

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 flex items-center justify-center">
        <div className="text-white text-2xl font-bold flex items-center gap-3">
          <Sparkles className="w-8 h-8 animate-spin" />
          Loading...
        </div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}