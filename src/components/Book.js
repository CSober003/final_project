import React from 'react'

const Book = ({id,search}) => {

  return (
    <>
      <div className="container">
        <div className="row">
          {id
          .filter(id => id.title.includes(search))
          .slice(0,20)
          .map((datail) => (
            <>
            <div className="col-3">
              <div className="card">
              <img src={datail.thumbnailUrl} className="card-img-top editimg text-center" alt={datail.thumbnailUrl} />
                <div className="card-body">
                  <h5 className="card-title">{datail.title}</h5>
                  <p className="card-text">{datail.shortDescription}</p>
                </div>
              </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Book;