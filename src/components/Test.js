import React from 'react';
import style from './test.module.css';

const Test = (props) => {
  const { title, body, id, children } = props;

  return (
    <>
      <section className={style.Card}>
        <div className={style.Dflex}>
          <p><b>TITLE:-</b>{title}</p> <p><b>ID :-</b> {id}</p>
        </div>
        <hr />
        <div className={style.Body}>
          {body}
        </div>
      </section>

      <h2>{children}</h2>
    </>
  );
};

export default Test;
