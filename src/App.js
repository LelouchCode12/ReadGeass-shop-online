import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Level Up. №1',
          img: 'levelup.webp',
          desc: 'Жанры и теги LitRPG, Виртуальные миры, Геймеры, Квест, Сверхспособности',
          category: "Novel",
          price: "990 тг"
        },
        {
          id:2,
          title: "Всё будет по-моему!",
          img: "все.webp",
          desc: "Роман / Боевое фэнтези, Попаданцы в магические миры",
          category: 'Novel',
          price: "9990 тг",
        },
        {
          id: 3,
          title: "Поднятие уровня в одиночку",
          img: "solo.webp",
          desc: "Драма, Игра, Приключения, Сёнэн, Фэнтези",
          category: 'Manhva',
          price: "6000 тг",
        },
        {
          id: 4,
          title: "О моём перерождении в слизь",
          img: "слизь.jpg",
          desc: "Фэнтези, Исекай, Реинкарнация, Зверолюди, Магия",
          category: 'Novel',
          price: "12417 тг",
        },
        {
          id: 5,
          title: "Код Гиасс: Восставший Лелуш",
          img: "кодгиасс.jpg",
          desc: "Фэнтези, Исекай, Реинкарнация, Зверолюди, Магия",
          category: 'Manga',
          price: "10437 тг",
        },
        {
          id: 6,
          title: "Начало после Конца",
          img: "begin.jpg",
          desc: "Фэнтези, Исекай, Реинкарнация, Культивация, Магия, Средневековье",
          category: 'Manhva',
          price: "4523 тг",
        },

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;
