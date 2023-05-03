/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    PATH : process.env.BASE_PATH,
    URL: process.env.BASE_URL,
    apiKey : process.env.API_KEY ,
  },
  serverRuntimeConfig:{
    //Will only be available on the sever side
    PATH : process.env.BASE_PATH,
    URL: process.env.BASE_URL,
    apiKey : process.env.API_KEY , //Pass through env variables

  },
  publicRuntimeConfiguration:{
    // Will be avaible on both sever and client 
    PATH : process.env.BASE_PATH,
    apiKey : process.env.API_KEY,
    URL: process.env.BASE_URL,
  }
}

module.exports = nextConfig
