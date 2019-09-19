import React from 'react'

interface Props {
  width: number
  height: number
}

const DisconnectIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width * 16}
      height={height * 16}
      viewBox="0 0 44 36"
      data-qa="disconnection__svg"
    >
      <path
        fillRule="evenodd"
        d="M22 .227c-4.825 0-9.094 2.63-11.395 6.601L12.5 7.952c1.917-3.308 5.466-5.508 9.5-5.508 6.094 0 11.01 4.967 11.009 11.12-.002.334-.02.67-.052 1.003l-.116 1.22H34.1c4.266 0 7.7 3.466 7.7 7.773a7.774 7.774 0 0 1-2.578 5.803l1.465 1.658A10.025 10.025 0 0 0 44 23.56c0-5.116-3.888-9.193-8.804-9.77.001-.073.012-.15.013-.226C35.209 6.21 29.282.225 22 .227zM3.992 4.918L2.608 6.641l6.097 5.005A11.067 11.067 0 0 0 0 22.449c0 6.122 4.938 11.107 11 11.107h24.402l2.406 1.974 1.384-1.723-35.2-28.889zm7.004 8.607l21.699 17.808H11c-4.873 0-8.8-3.964-8.8-8.884.006-4.546 3.383-8.339 7.859-8.824l.937-.1z"
      />
    </svg>
  )
}

export default DisconnectIcon
