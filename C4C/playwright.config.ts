import { PlaywrightTestConfig } from '@playwright/test';
    const config: PlaywrightTestConfig = {
       timeout: 60 * 1000,
       expect:
        { 
          timeout: 5000,
         },
         use: {
          //    viewport: { width: 1920, height: 1080 },  
          //  baseURL: 'https://google.com/',
            //    viewport: { width: 1920, height: 1080 }, 
             //  baseURL: 'https://google.com/',  
              browserName: 'chromium',
             //  browserName: 'firefox', 
             trace: 'on-first-retry',
              screenshot: 'only-on-failure',
               headless: false,
               },
                reporter:'html',
                //  reporter: [ ['junit', { outputFile: 'reports.xml' }] ],
              };export default config;