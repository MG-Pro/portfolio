import React, {Component} from 'react';
import Item from './Components/item';
import list from './Data/list';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <header className="header">
            <div className="container">
              <h1 className="title">Михаил Гладких</h1>
              <h2 className="subtitle">Frontend-разработчик</h2>
            </div>
          </header>
          <div className="container">
            <div className="item-list">
              {list.map(item => <Item key={item.id} data={item}/>)}
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <p className="footer__title">Контакты:</p>
            <p className="footer__item"><b>Тел.</b> +7 930 408 64 93</p>
            <p className="footer__item"><b>GitHub</b> &nbsp;
              <a href="https://github.com/MG-Pro">github.com/MG-Pro</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
