import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { CardUnidadesCounter } from '../component/CardUnidades';

export function TabGroupCounters() {
  return (
    <TabGroup>
        <div className='py-2 bg-[#F9F9F9]'>
            
        <TabList>
            <div className='flex flex-wrap justify-center items-center gap-6'>
                <Tab className=' data-[selected]:text-primary data-[selected]:font-medium hover:text-primary transition-colors'>En servicio</Tab>
                <Tab className=' data-[selected]:text-primary data-[selected]:font-medium hover:text-primary transition-colors'>Disponibles</Tab>
            </div>
         </TabList>
         
        </div>
        <div className='border-b-2 border-[#242424] border-opacity-10'></div>
      
      <TabPanels>
        <TabPanel>
            <div className='grid grid-cols-3 gap-2 mt-2'>
                <CardUnidadesCounter card="bravo" totalUnidades="5" nameUnidad="Bravo"/>
                <CardUnidadesCounter card="alfa" totalUnidades="1" nameUnidad="Alfa"/>
                <CardUnidadesCounter card="delta" totalUnidades="8" nameUnidad="Delta"/>
            </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-3 gap-2 mt-2'>
                <CardUnidadesCounter card="bravo" totalUnidades="2" nameUnidad="Bravo"/>
                <CardUnidadesCounter card="alfa" totalUnidades="14" nameUnidad="Alfa"/>
                <CardUnidadesCounter card="delta" totalUnidades="3" nameUnidad="Delta"/>
            </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
