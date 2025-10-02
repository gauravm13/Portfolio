import React from 'react'

const Emailbar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center max-sm:hidden">
  <a
    href="mailto:mishragaurav1332@gmail.com"
    className="text-primary text-0.8xl tracking-widest hover:text-primary transition-colors duration-300"
    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
  >
    mishragaurav1332@gmail.com
  </a>
</div>
  )
}

export default Emailbar