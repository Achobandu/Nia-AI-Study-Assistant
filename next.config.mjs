/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        LAMBDA_URL: process.env.LAMBDA_URL,
      },
};

export default nextConfig;
