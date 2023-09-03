import { ShoppingBag } from 'lucide-react';

import { Button, PageContainer, ProductList } from '@/components';
import { LoginIsRequiredServer } from '@/lib/auth/LoginIsRequiredServer';

const products = [
  {
    id: '1',
    category: 'Camera',
    name: 'Sony FX3',
    price: '$3,999.00',
    images: ['/img/products/FX3.png'],
  },
  {
    id: '2',
    category: 'Camera',
    name: 'Sony A7S III',
    price: '$3,499.00',
    images: ['/img/products/7SIII.png'],
  },
  {
    id: '3',
    category: 'Camera',
    name: 'Sony A7C',
    price: '$1,599.00',
    images: ['/img/products/7C.png'],
  },
  {
    id: '4',
    category: 'Camera',
    name: 'Sony A7 IV',
    price: '$2,399.00',
    images: ['/img/products/7IV.png'],
  },
  {
    id: '5',
    category: 'Camera',
    name: 'Sony A7R III',
    price: '$2,499.00',
    images: ['/img/products/7RIII.png'],
  },
  {
    id: '6',
    category: 'Camera',
    name: 'Sony A7R V',
    price: '$3,899.00',
    images: ['/img/products/7RV.png'],
  },
  {
    id: '7',
    category: 'Camera',
    name: 'Sony A6700',
    price: '$1,799.00',
    images: ['/img/products/6700.png'],
  },
  {
    id: '8',
    category: 'Camera',
    name: 'Sony AZV-E10',
    price: '$699.00',
    images: ['/img/products/ZVE10.png'],
  },
];

export default async function Home(): Promise<JSX.Element> {
  await LoginIsRequiredServer();

  return (
    <PageContainer>
      <div className='space-y-10 pb-10'>
        <div className='overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8'>
          <div
            style={{ backgroundImage: `url(/img/hero-1920x1080.jpg)` }}
            className='relative aspect-square overflow-hidden rounded-lg bg-cover md:aspect-[2.4/1]'
          >
            <div className='flex h-full w-full flex-col items-center justify-center gap-y-8 text-center'>
              <div className='max-w-xs rounded-lg bg-secondary/60 p-4 text-3xl font-bold text-black dark:text-white sm:max-w-xl sm:text-5xl lg:text-6xl'>
                Featured Products
                <Button size='lg' className='w-full py-6 text-xl'>
                  <ShoppingBag className='mr-2' />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList items={products} />
        </div>
      </div>
    </PageContainer>
  );
}
