import React, {useState, useEffect} from 'react';

export const Clock = () => {
    const [time, setTime] = useState(new Date());
    const tick = () =>{
        setTime(new Date());
        console.log('Tick');
    };

    useEffect( () => {
      const timer = setInterval(()=>tick(), 1000);
      return () => clearInterval(timer);
    }, []);

    return(
        <div>
            <div>It is clock</div>
            <div>Time: {time.toLocaleTimeString()}</div>
        </div>
    );
};


