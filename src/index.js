import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import BookList from "./BookList";
import {Hello} from "./App";
import {value} from "./App";
import Data from "./Data";
import Form  from "./Form";
import UseEffectEx from "./useEffectEx";
import Fetch from "./Fetch";
import MultipleReturn from "./MultipleReturn";
import A from "./A";

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(

 <React.StrictMode>
 <h1>------------  ** App Component**   ----------</h1>
   <App/>
   <h1>------------  ** Hello Component**   ----------</h1>
   <Hello/>
   <h1>------------  ** BookList Component**   ----------</h1>
   <BookList/>
   <h1>------------  ** Data Component**   ----------</h1>
   <Data/>
   <h1>------------  ** Form Component**   ----------</h1>
   <Form/>
   {value}
   <h1>------------  ** UseEffect Component**   ----------</h1>
   <UseEffectEx/>
   <h1>------------  ** FetchEffect Component**   ----------</h1>
  <Fetch/>
  <h1>------------  ** MultipleReturn Component**   ----------</h1>
  <MultipleReturn/>
  <h1 style={{fontSize:45}}>------------  ** ********   ----------</h1>
  <A/>
 </React.StrictMode>
 
)