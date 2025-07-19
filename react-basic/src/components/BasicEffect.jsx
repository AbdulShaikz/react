import { useEffect } from "react";

const BasicEffect = () => {

  useEffect(()=> {
    console.log('BasicEffect component mounted');
  });
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect