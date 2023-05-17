// import React from 'react'

// const Footer = () => {
    
//   return (
    
//     
        
//   )
// }

// export default Footer;

import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"relative",
        top:"70vh",
        width:'100%',
        color:'white'
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerstyle}>
         <p className="text-center"> Copyright &copy; Mytodolist.com </p>
         </footer>
  )
}
