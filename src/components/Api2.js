const Api2 = () => {
  const baseUrl = 'https://around.nomoreparties.co/v1/cohort-1-es/';
  const token = '716b8afb-3113-4c1d-98fb-541a60ec168d';

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(baseUrl + "cards", {
          method: 'GET',
          headers: {
            authorization: token
          }
        });
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCards();
  }, []);

  const postCard = async (name, link) => {
    try {
      const response = await fetch(baseUrl + "cards", {
        method: 'POST',
        headers: {
          authorization: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, link})
      });
      const data = await response.json();
      setCards([...cards, data]);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return { cards, postCard };
};

export default Api2;
