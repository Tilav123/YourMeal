/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/burgers',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;