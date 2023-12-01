
const Card = ({ title, children, footer }) => {
  return (
    <div className="card">
        {title &&   <div className="card-header">
            <h1>{title}</h1>
        </div>}
        <div className="card-body"><p>{children}</p></div>

        {footer &&  <div className="card-footer"> <p>{footer}</p> </div>}

    </div>
  )
}

export default Card