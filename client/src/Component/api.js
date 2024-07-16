import { useState, useEffect } from "react";

export default function useFetch(query) {
  const [search, setSearch] = useState([]);

  async function fetchData(query) {
    try {
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=9999edca&s=${query}`
      );
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (query) {
      async function fetchMovies() {
        const result = await fetchData(query);
        setSearch(result.Search || []);
      }
      fetchMovies();
    }
  }, [query]);

  return search;
}
