import React, { Component } from 'react'
import logo from './Puce.png'
import master from './master.jpg'

export default class Crad extends Component {
    constructor(props) {
        super(props)
        this.state={
            numbercart:'',
            date:'',
            user:''
        }
    }

    changenumber=(e) =>{
        var patt = /[^0-9 ]/gi
        if(e.target.value.length<20 && !e.target.value.match(patt))
            this.setState({
            numbercart: e.target.value.replace(/[ ]/g, '')
        })
    }
    testnbrcart = (x) => {
        let str =''
        for(let i=0; i<x.length; i+= 4) {
            str += x.slice(i, i+4) + ' '
        }
        return str.trim()
    } 

    changedate=(e) =>{
        var patt = /[^0-9]/gi
        if((e.target.value.length<=4) && (!e.target.value.match(patt)) && (e.target.value.slice(0,2)<13) )
        this.setState({
            date: e.target.value
        })
    }
    testdate= (x) => {
        return x.slice(0, 2) + '/' + x.slice(2)
    }

    changeuser=(e) =>{
        var patt = /[^a-z]/gi
        if((e.target.value.length<20) && (!e.target.value.match(patt)))
        this.setState({
            user: e.target.value
        })
    }


  render() {
    return (
      <div>
            <div className="card">
                <h1>Credit card</h1>
                <img src={logo} alt="puce" className="puce"></img>
                <div>
                <p className="rib" >{this.testnbrcart((this.state.numbercart).toString().padEnd(16, '*'))}</p>
                <span className="my">month/year</span>
                </div>
                <div className="data">
                <p className="id"><strong>5422</strong></p>
                <p className='date'><span>valid</span><strong>{this.testdate((this.state.date).toString().padEnd(4, '.'))}</strong></p>
                </div>
                <h2>{this.state.user.toUpperCase().padEnd(4, '.')}</h2>
                <img src={master} alt="master" className="master"></img>
            </div>
            <div className="information">
                <label>Number Card: </label><input type="text" onChange={(e)=>this.changenumber(e)} value={this.testnbrcart(this.state.numbercart)} />
                <label>Date: </label><input type="text" onChange={(e)=>this.changedate(e)} value={this.state.date}/>
                <label>user: </label><input type="text" onChange={(e)=>this.changeuser(e)} value={this.state.user}/>
            </div>
      </div>
    )
  }
}
