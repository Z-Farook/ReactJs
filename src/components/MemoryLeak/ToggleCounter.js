import { useState } from 'react';
import MemLeakCounter from './LeakyCounter';
import NoLeakCounter from './NoLeakCounter';

function CounterController() {
    const [displayCounter, setDisplayCounter] = useState(true);
    function toggleCounter() {
        setDisplayCounter(!displayCounter);
    };
    return (
        <div className="App">
            {/* {displayCounter ? <MemLeakCounter/> : null} */}
            {displayCounter ? <NoLeakCounter/> : null}

            <button onClick={toggleCounter}>Toggle Count</button>
        </div>
    );
}
export default CounterController;
