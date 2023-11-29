import { useState } from "react";

const defaultStatus = {
  '1':'Cart Review',
  '2':'Checkout',
  '3':'Special Offer',
  '4':'Confirmation'
};

function Status() {
  const [status, setState] = useState(3);
  
  return(
    <div className="status">
      {Object.keys(defaultStatus).map((statusNumber)=> {
        let className = ''
        if (status === Number(statusNumber)){
          className = 'selected'
        } else if(Number(statusNumber) < status) {
          className = 'ok'
        }
        return (
          <div key={statusNumber} >
            <div className={`status-number ${className}`}>{statusNumber}</div>
            <p className={ className === 'selected' ? 'strong' : ''}> <span>{`Step ${statusNumber} : `}</span>{defaultStatus[statusNumber as keyof typeof defaultStatus]}</p>
          </div>
        )
      } )}
    </div>
  );
}

export default Status;