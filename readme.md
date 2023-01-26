Certification app server

vercel deploy:

remove "build": "babel src/index.js -d lib", from package.json file

create vercel.json file and put inside:
{
"version": 2,
"builds": [
{
"src": "src/index.js",
"use": "@vercel/node"
}
],
"routes": [
{
"src": "/(.*)",
"dest": "src/index.js"
}
]
}

