import { Menu, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import ProfileButton from '@/components/ui/ProfileButton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import ThemeButton from './ThemeButton';

export function Header(): JSX.Element {
  const routes = [
    {
      href: '/documents',
      label: 'Documents',
    },
    {
      href: '/embedTemplate',
      label: 'Embed Templates',
    },
    {
      href: '/aiTemplate',
      label: 'Ai Templates',
    },
  ];

  return (
    <header className='border-b px-4 py-3 sm:flex sm:justify-between'>
      <div className='relative flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          <Sheet>
            <SheetTrigger>
              <Menu className='h-6 w-6 md:hidden' />
            </SheetTrigger>
            <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
              <nav className='flex flex-col gap-4'>
                {routes.map((route, i) => (
                  <Link key={i} href={route.href} className='block px-2 py-1 text-lg'>
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href='/' className='ml-4 lg:ml-0'>
            <h1 className='text-xl font-bold'>STORE NAME</h1>
          </Link>
        </div>
        <nav className='mx-6 hidden items-center space-x-4 md:flex lg:space-x-6'>
          {routes.map((route, i) => (
            <Button key={i} asChild variant='ghost'>
              <Link href={route.href} className='text-sm font-medium transition-colors'>
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className='flex items-center'>
          <Button variant='ghost' size='icon' className='mr-2' aria-label='Shopping Cart'>
            <ShoppingCart className='h-6 w-6' />
            <span className='sr-only'>Shoppsing Cart</span>
          </Button>
          <ThemeButton />
          <ProfileButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
