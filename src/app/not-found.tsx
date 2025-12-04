'use client';

import FuzzyText from '@/components/ui/FuzzyText';
import Link from 'next/link';
import { RippleButton } from '@/components/ui/ripple-button';
import { useTheme } from 'next-themes';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        color={theme === 'dark' ? '#fff' : '#000'}
      >
        404
      </FuzzyText>
      <h2 className="mt-4 text-2xl">Page Not Found</h2>
      <p className="mt-2 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
                <RippleButton
                  className={`mt-6 hover:bg-[#ff00ff] ${theme === 'dark' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}
                >          Go back to Home
        </RippleButton>
      </Link>
    </div>
  );
}
