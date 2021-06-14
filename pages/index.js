import HomePageClientBlock from '../components/HomePageClientBlock'
import HomePageHeroBanner from '../components/HomePageHeroBanner'
import HomePageStatsBlock from '../components/HomePageStatsBlock'
import HomePageServiceBlock from '../components/HomePageServiceBlock'
import HomePageFeatureBlock from '../components/HomePageFeatureBlock'
import HomePageIntegrationBlock from '../components/HomePageIntegrationBlock'
import HomePageTestimonial from '../components/HomePageTestimonial'
import HomePageComplianceBlock from '../components/HomePageComplianceBlock'
import HomePageSignupBlock from '../components/HomePageSignupBlock'


export default function Home() {
 
  return (

      <div className="main" id="main-container">
        <HomePageHeroBanner/>
        <HomePageClientBlock />
        <HomePageStatsBlock />
        <HomePageServiceBlock />
        <HomePageFeatureBlock />
        <HomePageIntegrationBlock/>
        <HomePageTestimonial />
        <HomePageComplianceBlock />
        <HomePageSignupBlock/>
      </div>

  )
}
