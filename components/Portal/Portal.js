import { useEffect , useRef  } from "react";
import {createPortal} from "react-dom";

const Portal = ({ children, portalId }) => {
    const PortalRef = useRef(null);


    // check if a portal container already extists
   // if not , create one and it to the DOM 
  // store the contanier  refernce 
 //  clean up when component unmonts 

useEffect(() => {
   let Portalcontainer = document.getElementById(portalId)
   if (!Portalcontainer) {
    Portalcontainer = document.createElement('div');
    Portalcontainer.id = portalId;
    document.body.appendChild(Portalcontainer);
   }
   PortalRef.current = Portalcontainer;
   return () => {
    if(Portalcontainer && Portalcontainer.children.length === 0) {
        document.body.removeChild(Portalcontainer)
    }
   };

}, [portalId])


return PortalRef.current ? createPortal(children, PortalRef.current) : null;
};

export default Portal;
