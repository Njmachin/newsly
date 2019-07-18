import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    view: "card",
    light: true

  }

  renderArticles = () => {
    
    return this.state.articles.map(article => {
      if (this.state.view === "card") {
      console.log(this.state)
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              />
      } else {
        return <ArticleItem
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              />
      }
    })
  }
  switchViews = () => {
    if (this.state.view === 'card') {
      this.setState({
        view: "list"
      }) 
    } else {
      this.setState({
        view: "card"
      })
    }
  }

  changeView = () => {
      this.setState({
        light: !this.state.light
      })
  }

  render(){
    return (
      <div className={this.state.light ? "light" : "dark"}>
        <button onClick={this.changeView}>{this.state.light ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
        <button onClick={this.switchViews}>{this.state.view === 'card' ? "Switch to List View" : "Switch to Card View"}</button>
        <div className={this.state.view === 'card' ? "cards" : "list"}>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;
