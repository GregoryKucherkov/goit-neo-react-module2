import css from "./Paginator.module.css";

const Paginator = ({ prev, next, children }) => {
  return (
    <div className={css.paginator}>
      <button onClick={prev}>Prev</button>
      {children}
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Paginator;
