import "../globals.css";
import Link from 'next/link';
import { getDictionary } from '../dictionaries';
export default async function Layout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const translation = await getDictionary(lang);
  return (
    <html lang={lang}>
      <head>
        <title>{translation.header.yourmeal}</title>
        <link rel="icon" href="/images/logo_two.png" />
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <header className="p-5 flex justify-between items-center bg-black bg-opacity-30">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className='flex gap-[20px]'>
              <Link href={`/`}>Home</Link>
              <Link href={`/dashboard/menu`}>Menu</Link>
              <Link href={`/dashboard/order`}>Orders</Link>
            </div>
          </header>
          <main className="p-10">{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
