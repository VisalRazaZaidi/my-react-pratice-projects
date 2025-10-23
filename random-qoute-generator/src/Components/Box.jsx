import { Button, Card } from "flowbite-react";
import { useState, useEffect } from "react";

export default function Box() {
  const [qoute, setqoute] = useState("");
  const [author, setAuthor] = useState("")
  const [isloading, setIsLoading] = useState(false); //default value is false

  const fetchQoute = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://api.freeapi.app/api/v1/public/quotes/quote/random'
      ); // fetch the api and store it into a varibal;
      const data = await response.json(); // store data into a variable with converting it into json

      // checking if the api responed or not

      if (data.success && data.data) {
        setqoute(data.data.content);
        setAuthor(data.data.author)
      } else {
        console.log("Failed to fetch api");
      }
    } catch (error) {
      console.log("Error fetching Qoute", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQoute();
  },[])

  return (
    <div className="h-lvh w-7xl flex items-center justify-center bg-gradient-to-r from-cyan-100 to-blue-400 p-6">
      <Card className="max-w-3xl w-full shadow-2xl hover:shadow-2xl transition-shadow duration-300 bg-white/90">
        <div className="space-y-8 px-4">
          <h5 className="text-4xl font-bold tracking-tight text-indigo-700 text-center">
            Random Quote Generator
          </h5>
          
          {isloading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto"></div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-2xl font-normal text-gray-800 italic text-center leading-relaxed">
                "{qoute}"
              </p>
              <p className="text-right text-lg text-indigo-700 font-semibold">
                — {author || "Unknown"}
              </p>
            </div>
          )}

          <Button 
            onClick={fetchQoute} 
            disabled={isloading} 
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 py-3"
            size="xl"
          >
            <span className="mr-2 text-lg">Generate New Quote</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </Card>
    </div>
  );
}
