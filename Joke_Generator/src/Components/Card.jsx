import React from "react";
import { useEffect, useState } from "react";

function Card() {
  // Manage joke content and loading state
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
      const data = await response.json();
      
      // Update joke if API request successful
      if (data.success && data.data) {
        setJoke(data.data.content);
      } else {
        console.error("Failed to fetch joke");
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch initial joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="card w-full bg-base-100 card-xl shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-5">Random Joke Generator</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{joke}</p>
        )}
        <div className="justify-center-safe card-actions ">
          <button 
            className="btn btn-primary mt-4" 
            onClick={fetchJoke}
            disabled={isLoading}
          >
            New Joke
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
