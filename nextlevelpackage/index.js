//index.js

'use client'

import { useReportWebVitals } from 'next/web-vitals'
 
export default function NextWebVitals() {

  useReportWebVitals((metric) => {
    const body = JSON.stringify(metric)
    const url = 'http://localhost:3000/dashboard/api'

    console.log('in use report web vitals func');

    if(navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, {
        method: 'POST',
        body,
        keepalive: true
      })
    }
    // switch (metric.name) {
    //   case 'FCP': {
    //     console.log('FCP val:', metric.value);
        
    //     break;
    //   }
    //   case 'TTFB': {
    //     console.log('TTFB val:', metric.value);
    //     console.log('TTFB:', metric);
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    // }
  })
}