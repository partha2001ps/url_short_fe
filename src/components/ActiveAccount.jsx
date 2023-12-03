import React from 'react'

function ActiveAccount() {
   const handleactive =async (e) => {
        e.preventDefault();
        const currentURL = window.location.href;
     const match = currentURL.match(/\/activate-account\/(\w{10})/);
   
     if (match) {
       const activationToken = match[1];
       const res = await authInstance.get(`/activate-account/${activationToken}`);
       console.log(res.data);
     } else {
       console.error("URL format doesn't match expected pattern");
     }
   
    }
  return (
    <div><button onSubmit={handleactive}>Active</button></div>
  )
}

export default ActiveAccount