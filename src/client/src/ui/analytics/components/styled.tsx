import { styled } from 'rt-theme'
import { barBgColor, pointerColor, transparentColor } from '../globals/variables'

export const AnalyticsStyle = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.analytics.textColor};
  background-color: ${({ theme }) => theme.analytics.backgroundColor};
  height: 100%;
  position: relative;
  padding: 0 1rem;
  font-size: 1rem;

  /* axis */
  .nvd3 .nv-axis path,
  .nvd3 .nv-axis .tick.zero line {
    stroke: currentColor;
  }

  /* grid */
  .nvd3 .nv-axis line {
    stroke: ${transparentColor};
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const Title = styled.div`
  padding-bottom: 0.5rem;
`

export const BubbleChart = styled.div`
  text-anchor: middle;
  height: 18rem;
`

export const Chart = styled.div`
  position: relative;

  .nv-lineChart {
    .nv-axis.nv-y {
      text {
        font-size: 0.5rem;
        fill: ${({ theme }) => theme.analytics.textColor};
      }
    }

    .nv-axis.nv-x {
      text {
        font-size: 0.5rem;
        fill: ${({ theme }) => theme.analytics.textColor};
      }
    }
  }

  /* axis labels */
  .nv-lineChart .nv-axis.nv-x text,
  .nv-lineChart .nv-axis.nv-y text {
    fill: currentColor;
  }
`

export const Disconnected = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`

export const Root = styled.div`
  height: 100%;

  .analytics__positions-tooltip {
    position: absolute;
    width: auto;
    height: auto;
    padding: 2px 0.5rem;
    font-size: 0.75rem;
    background-color: ${({ theme }) => theme.analytics.textColor};
    color: ${({ theme }) => theme.analytics.backgroundColor};
    opacity: 1;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.4);
    pointer-events: none;
    z-index: 1;
  }

  .analytics__barchart-indicator--negative {
    background-color: ${({ theme }) => theme.analytics.red.normal};
  }

  .analytics__barchart-indicator--positive {
    background-color: ${({ theme }) => theme.analytics.green.normal};
  }

  .analytics__header-value {
    font-weight: bold;
  }

  .analytics__header-value--negative {
    color: ${({ theme }) => theme.analytics.red.normal};
  }

  .analytics__header-value--positive {
    color: ${({ theme }) => theme.analytics.green.normal};
  }

  .analytics__header-title-icon {
    margin-right: 17px;
  }

  .analytics__barchart-container {
    vertical-align: middle;
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
    height: 3rem;
  }

  .analytics__barchart-bar {
    height: 0.125rem;
    overflow: hidden;
  }

  .analytics__barchart-bar-background {
    height: 0.125rem;
    width: 100%;
    background-color: ${barBgColor};
    position: absolute;
    margin-top: 0.125rem;
    opacity: 0.125;
  }

  .analytics__barchart-bar-wrapper {
    position: absolute;
    height: 0.25rem;
    width: 100%;
    margin-top: 2rem;
    vertical-align: middle;
  }

  .analytics__barchart-border {
    height: 0.325rem;
    width: 0.125rem;
    background-color: currentColor;
    opacity: 0;
  }

  .analytics__barchart-border--center {
    position: absolute;
    left: calc(50% - 0.125rem);
  }

  .analytics__barchart-border--left {
    display: inline;
  }

  .analytics__barchart-border--right {
    right: 0;
    position: absolute;
  }

  .analytics__barchart-title-wrapper {
    width: 100%;
    height: 2rem;
    position: absolute;
  }

  .analytics__barchart-pointer-container,
  .analytics__barchart-label-pusher {
    transition: all ease ${({ theme }) => theme.motion.duration};
  }
  .analytics__barchart-pointer-container {
    position: absolute;
    margin-top: 1.5rem;
    transition: left ease ${({ theme }) => theme.motion.duration};
    z-index: 1;
    mix-blend-mode: exclusion;
  }

  .analytics__barchart-pointer {
    position: absolute;
    width: 0;
    height: 0;
    z-index: 1;
    top: 0.125rem;
    left: -0.375rem;
    border-width: 0.75rem 0.25rem 0 0.25rem;
    border-color: ${pointerColor} transparent transparent transparent;
    border-style: inset;
    border-radius: 50%;
    transform: rotate(360deg);
  }

  .analytics__barchart-label {
    font-size: 0.75rem;
    line-height: 2rem;
    white-space: nowrap;
  }

  .analytics__barchart-label-amount {
    font-weight: 900;
    margin-right: 0.25rem;
  }

  .analytics__barchart-label-pusher {
    height: 0.5rem;
    display: inline-block;
  }
  .analytics__barchart-label-wrapper {
    position: absolute;
    width: 100%;
    white-space: nowrap;
  }

  .analytics__barchart-container .analytics__barchart-amount {
    visibility: hidden;
    font-size: 18px;
    display: inline;
  }

  .analytics__barchart-container:hover .analytics__barchart-amount {
    visibility: visible;
  }

  .analytics__chart-title {
    font-size: 1rem;
    line-height: 2rem;
  }

  .analytics__bubblechart-title {
    position: absolute;
  }

  .analytics__positions-label {
    fill: currentColor;
    font-size: 0.75rem;
    pointer-events: none;
    user-select: none;
    user-select: none;
  }

  .new-chart-area {
    stroke-width: 2px !important;
    fill: url('#areaGradient');
  }
  .new-chart-stroke {
    stroke: url('#chartStrokeLinearGradient');
  }

  .stop1,
  .lineStop1 {
    stop-color: ${({ theme }) => theme.analytics.green.normal};
    stop-opacity: 0.5;
  }

  .stop1End,
  .lineStop1End {
    stop-color: ${({ theme }) => theme.analytics.green.normal};
  }

  .stop2,
  .lineStop2 {
    stop-color: ${({ theme }) => theme.analytics.red.normal};
  }

  .stop2End,
  .lineStop2End {
    stop-color: ${({ theme }) => theme.analytics.red.normal};
    stop-opacity: 0.5;
  }

  .analytics__chart-tooltip {
    font-weight: 500;
    display: block;
    mix-blend-mode: difference !important;
  }

  .analytics__chart-tooltip-date {
    font-weight: 600;
  }
`

export const Controls = styled('div')`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.2s;
  padding: 0.25rem;

  ${Root}:hover & {
    opacity: 0.75;
  }
`

export const PopoutButton = styled('button')`
  .svg-icon {
    stroke: ${({ theme }) => theme.analytics.textColor};
    fill: ${({ theme }) => theme.analytics.textColor};
  }
`
