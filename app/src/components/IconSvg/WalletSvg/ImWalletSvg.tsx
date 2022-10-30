import React from 'react'

const ImWalletSvg: React.FC<{ width?: number }> = ({ width = 36 }) => {
  return (
    <svg
      width={width}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='36'
        height='36'
        rx='18'
        fill='url(#paint0_linear_352_2731)'
      />
      <path
        d='M18.2484 26.6051C12.5462 27.0857 7.25956 23.7459 6.84409 18.557C6.46126 14.2804 9.19013 12.4394 11.3488 12.2765C12.3113 12.1369 13.2903 12.3778 14.0781 12.9481C14.8659 13.5184 15.4004 14.3733 15.5684 15.3312C15.7231 17.0337 14.6153 17.8402 13.8414 17.8972C13.5085 17.942 13.1713 17.8558 12.9007 17.6567C12.6302 17.4576 12.4476 17.1612 12.3915 16.8301C12.3344 16.1702 12.6033 16.0806 12.5218 15.3882C12.5018 15.1742 12.4362 14.9669 12.3295 14.7802C12.2227 14.5936 12.0773 14.432 11.9029 14.3062C11.7285 14.1805 11.5292 14.0935 11.3185 14.0511C11.1077 14.0087 10.8903 14.0119 10.6808 14.0605C9.94769 14.1175 8.59546 14.9647 8.76653 17.0581C8.93759 19.1516 11.0474 20.8378 13.7844 20.5853C15.2004 20.4819 16.5239 19.8433 17.4862 18.7994C18.4484 17.7555 18.9772 16.3844 18.9652 14.9647C18.9651 14.8003 19.0042 14.6384 19.0792 14.4922C19.1136 14.4354 19.1517 14.381 19.1933 14.3293C19.2662 14.2149 19.3509 14.1085 19.4458 14.0116L19.7146 13.7428C21.0017 12.5698 25.6774 9.75131 30.068 10.631C30.1 10.622 30.1338 10.622 30.1658 10.631C30.3368 10.631 30.4346 10.7451 30.4509 10.9162C31.1433 21.1963 24.3496 26.0675 18.2484 26.6051Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_352_2731'
          x1='35.0181'
          y1='1.14267'
          x2='0.0640301'
          y2='35.9714'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#11C4D1' />
          <stop offset='1' stopColor='#0062AD' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ImWalletSvg