import { useEffect, useState } from 'react';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchQuote = async () => {
        const quoteUrl = process.env.REACT_APP_QUOTE_URL;
        const apiKey = process.env.REACT_APP_API_KEY;
        const category = 'learning';

        try {
          const response = await fetch(`${quoteUrl}?category=${category}`, { headers: { 'X-Api-Key': `${apiKey}` } });
          const data = await response.json();

          if (!response.ok) {
            throw new Error('Failed to fetch quote.');
          }

          const { quote, author } = data[0];
          setQuote(quote);
          setAuthor(author);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchQuote();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div className="mt-10">Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 w-2/4 p-5 m-5 text-center rounded shadow-md shadow-gray-500 text-orange-900 text-lg font-black">
      <h3>
        &#34;
        {quote}
        &#34;
        {' '}
        by
        {' '}
        <span>
          &#34;
          {author}
          &#34;
        </span>
      </h3>
    </div>
  );
}

export default QuoteDisplay;
