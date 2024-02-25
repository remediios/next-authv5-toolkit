import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignInButton } from '@/components/auth/sign-in-button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-300 via-red-400 to-red-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">Simple Authentication Service</p>
        <div>
          <SignInButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </div>
    </main>
  );
}
