/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/66f5c9552fcd83a8f18babc8',
          permanent: true, 
        },
      ];
    },
  };
  
  export default nextConfig;