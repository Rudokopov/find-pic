import React from "react";
import api from "../api/Api";
import "./App.css";
import Search from "./Search";
import Button from "./Button";
import Card from "./Card";
import Download from "./Download";
import Header from "./Header";

function App() {
  const [value, setValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoding] = React.useState(false);

  const handleInputValue = (evt) => {
    setValue(evt.target.value);
  };

  const handleClickButton = (value) => {
    setSearchValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearchValue(value);
    }
  };

  React.useEffect(() => {
    setIsLoding(true);
    api
      .search(value)
      .then((data) => {
        const newCard = data.results.map((card) => {
          return {
            id: card.id,
            src: card.urls.regular,
            name: card.alt_description,
          };
        });
        setCards(newCard);
        setIsLoding(false);
      })
      .catch((err) => console.log(err));
  }, [searchValue]);
  return (
    <div className="App">
      <Header />
      <div className="App-search">
        <Search
          placeholder={"Write any word"}
          value={value}
          onChange={handleInputValue}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleClickButton} text="Search" />
      </div>
      <div className="App-cards">
        {isLoading ? (
          <Download />
        ) : (
          cards.map(({ id, src, name }) => {
            return <Card key={id} src={src} name={name} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
