import { meteor } from 'globals';
import react , { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(()=>{
    createStars();
    createMeteors();

    const handleResize = () => {
        createStars();
    }
    window.addEventListener('resize', handleResize);

    return (()=>{
        window.removeEventListener('resize', handleResize);
    })
  },[]);
  

  const createStars =()=>{
    
    const numofStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const starArray = [];
    
    for ( let i=0 ; i<numofStars ; i++){
      starArray.push({ 
        id: i,
        x :  Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity : Math.random()*0.5 + 0.5,
        animationDuration: Math.random()*4 +2,
    })
    }
     
    setStars(starArray);

  };


   const createMeteors =()=>{
    
    const numofMeteors = 5;
    const starMetor = [];
    
    for ( let i=0 ; i<numofMeteors; i++){
      starMetor.push({ 
        id: i,
        x :  Math.random() * 100,
        y: Math.random() * 15,
        size: Math.random() * 2 + 1,
       delay: Math.random()*15,
        animationDuration: Math.random()*3 +3,
    })
    }
     
    setMeteors(starMetor);

  };

    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((elem) => (
        <div
          key={elem.id}
          className="star animate-pulse-subtle "
          style={{
            left: elem.x + '%',
            top: elem.y + '%',
            opacity: elem.opacity,
            width: elem.size + 'px',
            height: elem.size + 'px',
            animationDuration: elem.animationDuration + 's',
          }}
        />
      ))}

        {meteors.map((elem) => (
        <div
          key={elem.id}
          className="meteor animate-meteor"
          style={{
            left: elem.x + '%',
            top: elem.y + '%',
            delay: elem.dealy,
            width: elem.size*55 + 'px',
            height: elem.size*0.5 + 'px',
            animationDuration: elem.animationDuration + 's',
          }}
        />
      ))}
    </div>
  );
};

export default Background;

