import { createMDX } from 'fumadocs-mdx/next';

const withMdx = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

export default withMdx(nextConfig);
