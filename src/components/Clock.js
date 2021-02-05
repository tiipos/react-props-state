import React, {Component} from 'react';

export default class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        author: props.name ? props.name : 'anônimo'
      }
    }
  
    tick() {
      this.setState({
        date: new Date()
      })
      // this.state.date = new Date()
      // const date = new Date();
      // this.setState((state, date) => ({
      //   date: date
      // }));
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000)
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    componentDidUpdate() {
      console.log(this.state.author, this.state.date)
    }
  
    render() {
      let hora = this.state.date.toLocaleTimeString();
      let author = this.state.author;
      return (
        <div className='App'>
          <h1>Relógio de {author}</h1>
          <h2>O horário fictício é {hora}</h2>
        </div>
      );
    }
  }
  
  