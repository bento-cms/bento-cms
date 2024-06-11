import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function MainProvider({
  tag,
  children,
}: Readonly<{
  tag?: React.ElementType;
  children: React.ReactNode;
}>) {
  const Comp = tag ?? 'body';

  return (
    <Comp className={cn('font-sans antialiased', fontSans.variable)}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Comp>
  );
}
