const Find = ({ width = 30, className = '' }) => {
  return (
    <svg
      width={width}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.1364 18.8636C19.7849 18.5121 19.2151 18.5121 18.8636 18.8636C18.5121 19.2151 18.5121 19.7849 18.8636 20.1364L20.1364 18.8636ZM27.8636 29.1364C28.2151 29.4879 28.7849 29.4879 29.1364 29.1364C29.4879 28.7849 29.4879 28.2151 29.1364 27.8636L27.8636 29.1364ZM12 21.6C6.69807 21.6 2.4 17.3019 2.4 12H0.6C0.6 18.296 5.70395 23.4 12 23.4V21.6ZM2.4 12C2.4 6.69807 6.69807 2.4 12 2.4V0.6C5.70395 0.6 0.6 5.70395 0.6 12H2.4ZM12 2.4C17.3019 2.4 21.6 6.69807 21.6 12H23.4C23.4 5.70395 18.296 0.6 12 0.6V2.4ZM21.6 12C21.6 17.3019 17.3019 21.6 12 21.6V23.4C18.296 23.4 23.4 18.296 23.4 12H21.6ZM18.8636 20.1364L27.8636 29.1364L29.1364 27.8636L20.1364 18.8636L18.8636 20.1364Z'
        fill='#3667EA'
        className={className}
      />
    </svg>
  )
}

export default Find
