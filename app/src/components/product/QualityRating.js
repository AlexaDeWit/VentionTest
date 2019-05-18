import * as React from 'react'
import styled from 'styled-components'
import star from '../../assets/star.svg'
import { Image } from '../common'

export const StarWrapper = styled.div`
  display: block;
  text-align: center;
  margin-top: 0.3em;
  margin-bottom: 1em;
`;

export const ActiveStar = styled.span`
  max-with: 10px;
  margin: 2px;
`;
export const InactiveStar = styled.span`
  max-with: 10px;
  opacity: 0.5;
  margin: 2px;
`;

const QualityRating = ({ rating }) => {
  return (
    <StarWrapper>
      {Array.from(Array(5).keys()).map(k => {
        if (rating <= k) {
          return (
            <InactiveStar key={k}>
              <Image src={star} />
            </InactiveStar>
          )
        } else {
          return (
            <ActiveStar key={k}>
              <Image src={star} />
            </ActiveStar>
          )
        }
      })}
    </StarWrapper>
  )
}

export default QualityRating