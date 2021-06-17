import React from 'react';
import ExContext from './ExContext';

const EContext=React.createContext(3);
function Home(){
    return(
        <EContext.Provider value={6}>
  <p>Home Page</p>
<ExContext value={0}></ExContext>
        </EContext.Provider>
        
    );
}
export default Home;
