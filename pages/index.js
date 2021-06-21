import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePageClientBlock from '../components/HomePageClientBlock'
import HomePageHeroBanner from '../components/HomePageHeroBanner'
import HomePageStatsBlock from '../components/HomePageStatsBlock'
import HomePageServiceBlock from '../components/HomePageServiceBlock'
import HomePageFeatureBlock from '../components/HomePageFeatureBlock'
import HomePageIntegrationBlock from '../components/HomePageIntegrationBlock'
import HomePageTestimonial from '../components/HomePageTestimonial'
import HomePageComplianceBlock from '../components/HomePageComplianceBlock'
import HomePageSignupBlock from '../components/HomePageSignupBlock'
// import { SmoothScrollProvider } from '../utils/smooth-scroll';
import dynamic from 'next/dynamic'
const RequestForm =  dynamic(() => import("../components/RequestForm"),{loading: () => null, ssr:false});



import { useState } from 'react';

export default function Home() {

  
  
  const [ formState, setFormState ] = useState('close');

  return (
   
      <div className="main" id="main-target"  data-scroll-container>
        <Header setFormState={setFormState} />
        <HomePageHeroBanner setFormState={setFormState}/>
        <HomePageClientBlock />
        <HomePageStatsBlock />
        <HomePageServiceBlock />
        <HomePageFeatureBlock />
        <HomePageIntegrationBlock/>
        <HomePageTestimonial />
        <HomePageComplianceBlock />
        <HomePageSignupBlock/>
        <RequestForm formState={formState} setFormState={setFormState}/>
        <Footer />
      </div>

  )
}
