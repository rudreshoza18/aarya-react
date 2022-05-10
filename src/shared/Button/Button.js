import {React,useState} from 'react';
import style from './Button.module.css'
const Button = () => {
     let [text, setText] = useState('hi')
     const onTest = () =>{
          console.log('abc')
          // text = 'abc'
          // console.log(text)
          setText('HELLO')
     }
     return (
          <>
           <button className={style.customButton} onClick={onTest}>submit</button> 
           <h1>{text}</h1>   
          </>
     );
}

export default Button;
