const Test = (props) =>{
     console.log('ff',props.fakedata)
     const color = props.color
     const value = props.code
     return (
          <>
               {/* <h1>TEST</h1>
               <h1>{props.fakedata[0].color}</h1>
               <p>{props.fakedata[0].value}</p>
               <h1>{props.fakedata[1].c  olor}</h1>
               <p>{props.fakedata[1].value}</p>
               <h1>{props.fakedata[2].color}</h1>
               <p>{props.fakedata[2].value}</p> */}
               {/* {data.map((d,key)=>
                    <h1 key={d.color} style={{color:d.value}}>{d.color}</h1>
               )} */}
               <h1 key={color} style={{color:value}}>{color}</h1>
          </>
     )
}

export default Test