import React, {Component} from 'react';

export default class Item extends Component {
  render() {
    const item = this.props.data;
    return (
      <div className="item">
        <img src={`img/${item.image}`} alt="" className="item__img"/>
        <h1 className="item__title">{item.title}</h1>
        <div className="item__tehnology">
          <h3 className="item__tehnology-head">Технологии:</h3>
          <div className="item__tehnology-item">
            <span className="item__tehnology-item-title">Frontend: </span>
            <span className="item__tehnology-item-disc">{item.technology.frontend}</span>
          </div>
          {item.technology.backend &&
          <div className="item__tehnology-item">
            <span className="item__tehnology-item-title">Backend: </span>
            <span className="item__tehnology-item-disc">{item.technology.backend}</span>
          </div>
          }
          <p className="item__desc">{item.description}</p>
          {item.warning && <p className="item__warning">{item.warning}</p>}
        </div>
        <div className="link-wrapprer">
          <a className="item__link" href={item.github} target="_blank">GitHub</a>
          <a className="item__link item__link_demo" href={item.demo} target="_blank">Демо</a>
        </div>
      </div>
    )
  }
}
