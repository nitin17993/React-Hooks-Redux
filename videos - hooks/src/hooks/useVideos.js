import { useState, useEffect } from "react";
import youtube from "../APIs/youtube";

const KEY = "AIzaSyDudAv4gZacza9bN5dmMHpmbe3JY5OXqQk";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxresults: 5,
        key: KEY,
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [ videos, search ];
};

export default useVideos;
