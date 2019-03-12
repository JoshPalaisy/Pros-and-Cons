import React from 'react'

const Pros = ({ pros, deletePros }) => {
  const prosList = pros.length ? (
    pros.map(pros => {
      return(
        <li className="collection-item" key={ pros.id }>
          <div>{ pros.content }
            <a href="#!" onClick={ () => {deletePros(pros.id)} } className="secondary-content grey-text">
              <i className="material-icons">delete</i>
            </a>
          </div>
        </li>
      )
    })
  ) : (
    <p className="center">You have nothing positive to say :(</p>
  )
  return (
    <ul className="collection with-header">
      <li className="collection-header blue white-text"><h4>Pros</h4></li>
      { prosList }
    </ul>

  )

}

export default Pros