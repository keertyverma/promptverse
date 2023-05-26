"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt", { cache: "no-store" });
      const data = await response.json();

      setAllPosts(data);
    };

    fetchPosts();
  }, []);

  const handlerSearchChange = (e) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          value={searchText}
          placeholder="Search for a tag or username"
          onChange={handlerSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={allPosts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
