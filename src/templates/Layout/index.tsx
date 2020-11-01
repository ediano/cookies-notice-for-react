import React, { ReactNode, useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

import { ListTemplate, Text, Display, Context } from './styles'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const displayRef = useRef<HTMLDivElement>(null)
  const lisLinks = useRef<HTMLUListElement>(null)

  window.addEventListener('resize', () => {
    setWidth(displayRef.current?.offsetWidth as number)
    setHeight(displayRef.current?.offsetHeight as number)
  })

  useEffect(() => {
    setWidth(displayRef.current?.offsetWidth as number)
    setHeight(displayRef.current?.offsetHeight as number)
  }, [])

  const handleButtonClick = useCallback(() => {
    lisLinks.current?.classList.toggle('active')
  }, [])

  return(
    <>
      <ListTemplate>
        <div className="wrapper">
          <ul ref={lisLinks}>
            <li><Link to="/">Default</Link></li>
            <li><Link to="/top-screen">Top Screen</Link></li>
            <li><Link to="/floating-screen">Floating Screen</Link></li>
          </ul>

          <button 
            className={`menu`}
            type="button"
            onClick={handleButtonClick}
            >
              <FiMenu size={32} color="#000" />
            </button>

          <Context>
            <button type="button">Limpar</button>

            <a 
              href="https://github.com/ediano/cookies-notice-for-react" 
              target="blank"
              title="Doc GitHub"
              >
                <FaGithub size={32} color="#000"/>
            </a>
          </Context>
        </div>
      </ListTemplate>

      <Text>Display {width - 20} x {height - 20}</Text>
      <Display ref={displayRef}>
        {children}
      </Display>
    </>
  )
}

export default Layout