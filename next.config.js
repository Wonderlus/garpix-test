/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: "/",
                destination: "/partners",
                permanent: false,
            }
        ]
    }
}

module.exports = nextConfig
