const Alert = ({ type, children, hide, number }) => {
  return (
    <>
      {children && (
        <p className={`alert alert-${type} d-flex justify-content-between`}>
          {children}
          <button className="btn-close" onClick={hide}></button>
        </p>
      )}
      <div>
        <h1>Alert number change : {number}</h1>
      </div>
    </>
  );
};

export default Alert;
