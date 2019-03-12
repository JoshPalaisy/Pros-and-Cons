import React from 'react'

const Cons = ({ cons, deleteCons }) => {
  const consList = cons.length ? (
    cons.map(cons => {
      return(
        <li className="collection-item" key={ cons.id }>
          <div>{cons.content }
            <a href="#!" onClick={ () => {deleteCons(cons.id)} } className="secondary-content grey-text">
              <i className="material-icons">delete</i>
            </a>
          </div>
        </li>
      )
    })
  ) : (
    <p className="center">You have nothing negitive to say :)</p>
  )
  return (
    <ul className="collection with-header">
      <li className="collection-header red white-text"><h4>Cons</h4></li>
      { consList }
    </ul>

  )

}

export default Cons