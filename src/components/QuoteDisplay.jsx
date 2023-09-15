import { useEffect, useState } from 'react';

function QuoteDisplay() {
  const [state, setState] = useState({
    quote: 'loading...',
    author: '',
    loading: true,
    error: null,
  });

  const {
    quote, author, loading, error,
  } = state;

  useEffect(() => {
    const fetchQuote = async () => {
      const quoteUrl = 'https://api.api-ninjas.com/v1/quotes';
      const apiKey = '0vvAreMbCkJcbEpLLZXr0g==4T5cWEwXr0ei7waX';
      const category = 'learning';

      try {
        const response = await fetch(`${quoteUrl}?category=${category}`, { headers: { 'X-Api-Key': `${apiKey}` } });
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch quote.');
        }

        const { quote, author } = data[0];
        setState((prevState) => ({ ...prevState, quote, author }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, error: error.message }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };

    const timeout = setTimeout(fetchQuote, 1000);

    return () => clearTimeout(timeout);
  }, []);

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
    <>
      {
        loading ? (
          <div className="mt-10">Loading...</div>
        ) : (
          <div className="bg-gray-100 p-5 m-5 text-center rounded shadow-md shadow-gray-500 text-orange-900 text-lg font-black w-screen md:w-2/4">
            <h3>
              &#34;
              {quote}
              &#34;
              {' '}
              by
              {' '}
              <span className="italic font-black decoration-from-font underline">
                {author}
              </span>
            </h3>
          </div>
        )
}
    </>
  );
}

export default QuoteDisplay;
