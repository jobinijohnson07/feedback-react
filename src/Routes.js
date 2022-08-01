import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css'
import Header from "./components/Header" 
import Rive from 'rive-react'
import React,{lazy,Suspense} from 'react'
import Loader from "./assets/lazy.riv"
import { FeedbackProvider } from './context/FeedbackContext';

const FeedbackList=lazy(()=>import (  './components/FeedbackList'))
const FeedbackStats=lazy(()=>import (  './components/FeedbackStats'))
const FeedbackForm=lazy(()=>import (  './components/FeedbackForm'))
const AboutIconLink=lazy(()=>import (  './components/AboutIconLink'))
const AboutPage=lazy(()=>import (  './pages/AboutPage'))

function App() {
  return(
    <FeedbackProvider>
      <BrowserRouter>
        <Header />         
        <Switch> 
        <Suspense fallback={<Rive className="vectoranimation" src={Loader}/>}>
          <div className="container">
            <Route exact path='/' >
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />  
            </Route>      
            <Route path='/about' component={AboutPage} /> 
            <AboutIconLink />
          </div> 
         </Suspense>  
        </Switch>   
      </BrowserRouter>
    </FeedbackProvider>
  )
} 

export default App; 