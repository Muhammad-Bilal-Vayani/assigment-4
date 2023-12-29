import "./App.css";
import { First_Component } from './component/component1';
import { Second_Component } from "./component/component2";
import { Third_Component } from "./component/component3";
import { Fourth_Component } from "./component/component4";
import { Five_Component } from "./component/component5";
import { Sixth_Component } from "./component/component6";
import { Seven_Component } from "./component/component7";
import  {Eight_Component} from "./component/component8";
import  {Footer} from "./component/component9";
const App = () => {

  return (
    <div>
      <First_Component />
      <Second_Component/>
      <Third_Component/>
      <Fourth_Component/>
      <Five_Component/>
      <Sixth_Component/>
      <Seven_Component/>
      <Eight_Component/>
      <Footer/>
    </div>
  );
};

export default App;