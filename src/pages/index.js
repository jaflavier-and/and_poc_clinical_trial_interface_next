import { MarketingPricing, NavBar, HeroLayout3, HeroLayout1 } from '../ui-components';
import {Box} from '@mui/material/Box'
import DefaultLayout from '../layouts/defaultLayout';

function Home(){
  return(
    <div style={{width:'100%'}} >
      
      {/* <NavBar/> */}
      <HeroLayout1/>
<MarketingPricing/>
    </div>
    
  )
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Home;