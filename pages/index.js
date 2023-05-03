import Image from "next/image";
import Head from "next/head";
import getConfig from "next/config";
import Movie from "@/components/movies";
import { useState , useEffect } from "react";

const { severRuntimeConfig, publicRuntimeConfiguration } = getConfig();

export default function Home(initialData) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(initialData.response.results);
  }, [initialData]);
  return (
    <div className="container">
      <Head>
        <h1>Movies App</h1>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet " href="/styles.css" />
      </Head>

       <div className="movie-serach-result-grid">
        {searchResults.map((each, index) => {
          return (
            <Movie 
              index={each.id}
              title={each.title}
              poster_path={each.poster_path}
              overview={each.overview} 
            />
          )
        })
        }
      </div> 
    </div>
  );
}

export async function getServerSideProps(context) {
  const URL = process.env.BASE_URL;
  const apikey = process.env.API_KEY;

  // console.log(URL);
  // console.log(apikey);

  // const response = await fetch(`${URL}/api/v1/movies?apikey=${apikey}`);
  let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`) 
  response = await response.json();

  return {
    props: {
      response : response,
    },
  };
}
