'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/404');
  }, [router]);

  return (
    <html lang="en">
      <body>
        <main>some useless shit</main>
      </body>
    </html>
  );
};

export default NotFound;
