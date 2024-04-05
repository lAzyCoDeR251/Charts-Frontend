// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async rewrites() {
//         return [
//           {
//             source: '/api/:path*',
//             destination: 'http://127.0.0.1:8000/:path*', // Proxy to Backend
//           },
//         ];
//       },
// };
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "https://chart-backend-nura.onrender.com/api/:path*"
            : "/api/",
      },
    ];
  },
};

export default nextConfig;

