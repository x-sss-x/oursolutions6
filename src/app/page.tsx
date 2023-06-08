"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  searchAllServices,
  searchService,
  searchRecentServices,
  SearchByFeedback,
} from "../store/Search.slice";
import Search from "../components/Search";


const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const searchResults = useSelector(
    (state: RootState) => state.search.searchResults
  );
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const error = useSelector((state: RootState) => state.search.error);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    dispatch(searchService({ searchQuery }));
    setSearchClicked(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleAllServices = () => {
    dispatch(searchAllServices());
  };
  const handleRecentServices = () => {
    dispatch(searchRecentServices());
  };
  const handleSearchByFeedBack = () => {
    dispatch(SearchByFeedback());
  };
  return (
    <div>
      <Search
        placeholder="Search services..."
        inputVariant="default"
        value={searchQuery}
        onChange={handleChange}
        onSearch={handleSearch}
      />

      {searchClicked && (
        <>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : searchResults && searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </>
      )}
      <div>
        <div>
          <button className="border-2 bg-gray-200 border-sky-500 rounded-[10px] w-[260px] h-10 m-2" onClick={handleAllServices}>
            {" "}
            All type of services{" "}
          </button>
        </div>
        <div>
          <button
            className="border-2 bg-gray-200 border-sky-500 rounded-[10px] w-[260px] h-10 m-2"
            onClick={handleRecentServices}
          >
            {" "}
            Most recently used services
          </button>
        </div>
        <button
          className="border-2 bg-gray-200 border-sky-500 rounded-[10px] w-[260px] h-10 m-2"
          onClick={handleSearchByFeedBack}
        >
          {" "}
          Based on feedbacks
        </button>
      </div>
    </div>
  );
};

export default Page;