"use client"; ///////
// import { useEffect } from "react";


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchIcon from '@/assets/icons/search.png';
import Link from 'next/link'; // Import Link for client-side navigation
import { useRouter } from 'next/navigation'; 

const SearchDrawer = ({ isOpen, toggleDrawer }) => {
  if (!isOpen) return null;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [allData, setAllData] = useState([]);
  const router = useRouter(); // Get router instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fantasia-shop.com/api/products');
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredResults([]);
    } else {
      const results = allData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [searchTerm, allData]);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredResults([]);
  };

  const navigateToProductDetails = (productId) => {
    router.push(`/product_details_page?id=${productId}`); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}>
      <div
        style={{ backgroundColor: '#000112' }}
        className="h-full w-80 p-6 shadow-lg overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="mb-4 flex items-center bg-[#000112] p-2 rounded">
          <Image src={SearchIcon} alt="Search" width={20} height={20} className="mr-2" priority />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full px-4 py-2 bg-transparent text-white rounded focus:outline-none"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="ml-2 text-white text-lg">
              CLEAR
            </button>
          )}
        </div>

        {/* Search Results */}
        <div className="text-white mt-4">
          {filteredResults.length === 0 && searchTerm !== '' ? (
            <p>No results found</p>
          ) : (
            <ul>
              {filteredResults.map((result) => (
                <li 
                  key={result.id} 
                  className="py-2 rounded hover:bg-gray-700 cursor-pointer"
                  onClick={() => navigateToProductDetails(result.id)} // Use the function here
                >
                  <div className="flex items-center">
                    <Image
                      src={result.thumbnail}
                      alt={result.name}
                      width={50}
                      height={50}
                      className="mr-4"
                    />
                    <div>
                      <p className="font-semibold">{result.name}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDrawer;