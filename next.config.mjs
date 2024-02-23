/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "images.pexels.com",
            "cdn.dummyjson.com"
        ]
    },
    javascript:{
        IgnoreBuildErrors:true
    }
};

export default nextConfig;
