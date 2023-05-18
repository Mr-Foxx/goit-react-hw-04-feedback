import { SraisticsCountainer,Item,Total,Positive } from "../Statistics/Statistics.style";
import PropTypes from 'prop-types';


export const Statistics =({good,neutral,bad,totalFeedback,positiveFeedback})=>{

    return(
        <SraisticsCountainer>
              
              <Item style={{backgroundColor: 'green'}}>Good:{good}</Item>
              <Item style={{backgroundColor: 'grey'}}>Neutral:{neutral}</Item>
              <Item style={{backgroundColor: 'red'}}>Bad:{bad}</Item>
              <Total style={{backgroundColor: '#5c4762'}}>Total:{totalFeedback}</Total>
              <Positive style={{backgroundColor: '#7eb4c7'}}>Positive feedback:{positiveFeedback}%</Positive>
       
        </SraisticsCountainer>
    )
}

Statistics.propTypes={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    totalFeedback:PropTypes.number.isRequired,
    positiveFeedback:PropTypes.number.isRequired,
}