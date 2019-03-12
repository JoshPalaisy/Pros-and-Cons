import React, { Component } from 'react'
import Pros from './pros'
import AddPro from './AddPro'
import Cons from './cons'
import AddCon from './AddCon'

class ProsAndCons extends Component {
  state = {
    pros: [
      { id: 1, content: 'Good salary' },
      { id: 2, content: 'Stable and has benifits' }
    ],
    cons: [
      {id:1, content: 'Long hours'},
      {id:2, content: 'Stressful enviroment'}
    ]
  }
  deletePros = (id) => {
    const pros = this.state.pros.filter(pros => {
      return pros.id !== id
    })
    this.setState({
      pros,
    })
  }
  addPro = (pro) => {
    pro.id = Math.random()
    let pros = [...this.state.pros, pro]
    this.setState({
      pros: pros
    })
  }
  deleteCons = (id) => {
    const cons = this.state.cons.filter(cons => {
      return cons.id !== id
    })
    this.setState({
      cons,
    })
  }
  addCon = (con) => {
    con.id = Math.random()
    let cons = [...this.state.cons, con]
    this.setState({
      cons: cons
    })
  }

  render() {
    return (
      <div className="prosAndConsApp container">
        <h1 className="center">
        <span className="blue-text">Pros</span><span className="grey-text"> vs </span><span className="red-text">Cons</span>
        </h1>
        <div className="row">
          <div className="col s12 l6 left">
            <Pros pros={this.state.pros} deletePros={this.deletePros} />
            <AddPro addPro={this.addPro} />
          </div>
          <div className="col s12 l6 right">
            <Cons cons={this.state.cons} deleteCons={this.deleteCons} />
            <AddCon addCon={this.addCon} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProsAndCons
