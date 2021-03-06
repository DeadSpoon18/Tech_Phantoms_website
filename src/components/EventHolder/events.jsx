import React from 'react'
import { events } from '../../data/airtable'
import Holder from './holder'
import {
    Box,
   
  } from '@chakra-ui/core'
const Events = props => {
    let [evnts] = events.useEvents()

    return <>
        <Box>
        {evnts.map(el => {
            console.log(el)

            return <>
                <Holder
                    title={el.fields.title}
                    mlsaEvent={el.fields.mlsa_event}
                    eventImg={el.fields.eventImg[0].url}
                    description={el.fields.description}
                    date={el.fields.date}
                /><br/>
            </>
        })}
        </Box>
    </>
}

export default Events