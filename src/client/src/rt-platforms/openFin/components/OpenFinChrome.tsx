import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { snapAndDock } from 'openfin-layouts'
import { styled, AccentName } from 'rt-theme'
import { UndockIcon } from '../../../rt-components'

export interface ControlProps {
  minimize?: () => void
  maximize?: () => void
  close: () => void
}

export const OpenFinChrome: React.FC = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <style type="text/css">{`
        :root,
        body,
        #root {
          overflow: hidden;
          min-height: 100%;
          max-height: 100vh;
        }
    `}</style>
    </Helmet>
    <Root>{children}</Root>
  </React.Fragment>
)

export const OpenFinHeader: React.FC<ControlProps> = ({ ...props }) => (
  <Header>
    <OpenFinUndockControl />
    <DragRegion />
    <OpenFinControls {...props} />
  </Header>
)

export const OpenFinControls: React.FC<ControlProps> = ({ minimize, maximize, close }) => (
  <React.Fragment>
    {minimize ? (
      <HeaderControl accent="aware" onClick={minimize} data-qa="openfin-chrome__minimize">
        <i className="fas fa-minus fa-set-position" />
      </HeaderControl>
    ) : null}
    {maximize ? (
      <HeaderControl accent="dominant" onClick={maximize} data-qa="openfin-chrome__maximize">
        <i className="far fa-window-maximize" />
      </HeaderControl>
    ) : null}
    <HeaderControl accent="bad" onClick={close} data-qa="openfin-chrome__close">
      <FontAwesomeIcon icon={faTimes} />
    </HeaderControl>
  </React.Fragment>
)

const OpenFinUndockControl: React.FC = () => {
  const [isWindowDocked, setIsWindowDocked] = useState(false)

  useEffect(() => {
    const handleWindowDocked = () => {
      setIsWindowDocked(true)
    }

    snapAndDock.addEventListener('window-docked', handleWindowDocked)

    return () => snapAndDock.removeEventListener('window-docked', handleWindowDocked)
  }, [])

  const handleUndockClick = () => {
    snapAndDock.undockWindow()
    setIsWindowDocked(false)
  }

  return (
    <>
      {isWindowDocked && (
        <UndockButton
          onClick={handleUndockClick}
        >
          <UndockIcon width={16} height={16} />
          <SubTitle>Undock</SubTitle>
        </UndockButton>
      )
      }
    </>
  )
}

export const OPENFIN_CHROME_HEADER_HEIGHT = '21px'

const Header = styled.div`
  display: flex;
  width: 100%;
  min-height: 1.5rem;
  font-size: 1rem;
  height: ${OPENFIN_CHROME_HEADER_HEIGHT};
`

const DragRegion = styled.div`
  display: flex;
  flex-grow: 1;
  -webkit-app-region: drag;
`

const HeaderControl = styled.div<{ accent?: AccentName }>`
  display: flex;
  justify-content: center;
  align-self: center;
  min-width: 2.3rem;
  padding-top: 7px;

  color: ${props => props.theme.button.secondary.backgroundColor};
  cursor: pointer;

  &:hover {
    color: ${({ theme, accent = 'dominant' }) => theme.button[accent].backgroundColor};
  }
`

const UndockButton = styled.button`
  display: block;
  height: 100%;
  width: max-content;
  padding: 0.625rem 0 0 0.625rem;
  cursor: pointer;
`

const SubTitle = styled.span`
  color: ${props => props.theme.core.offBackground};
  padding: 0.25rem;
  font-size: 0.875rem;
  vertical-align: text-top;
`

export const Root = styled.div`
  background-color: ${props => props.theme.core.darkBackground};
  color: ${props => props.theme.core.textColor};

  height: 100%;
  width: 100%;
`

export default OpenFinChrome
