import style from './test.module.css'
const Test = (props) => {
  console.log("ff", props.fakedata, props);
  const title = props.title;
  const body = props.body;
  const id = props.id;
  return (
    <>
      <section className={style.Card}>
        <div  className={style.Dflex}>
          <p><b>TITLE:-</b>{title}</p> <p><b>ID :-</b> {id}</p>
        </div>
        <hr />
        <div className={style.Body}>
             {body}
        </div>
      </section>
      
      <h2>{props.children}</h2>
    </>
  );
};

export default Test;
