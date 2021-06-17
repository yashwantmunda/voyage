import { useState, useEffect, useRef } from 'react';
import { requestFormData } from '../data/requestForm';

import gsap from 'gsap';

export default function RequestForm({formState,setFormState}) {

const [registerData,setRegisterData] = useState({
      name:'',
      companyName:'',
      email:'',
      phone:'',
      // companySize,
      // emailSubscriberSize,
      websiteVisitors:'',
      website:'',
      referralSource:'',
      referralSourceName:'',
      utm:{}
});
//   const [hasError,setHasError] = useState(false);
const nameRef = useRef();
const phoneRef = useRef();
const emailRef = useRef();
const emailRecordRef = useRef();
const webRef = useRef();
const companyRef = useRef();
const referralRef = useRef();
const referralSourceName = useRef();
const visitorRef = useRef();

const emailErrorRef = useRef();
const nameErrorRef = useRef();
const phoneErrorRef = useRef();
const webErrorRef = useRef();
const companyErrorRef = useRef();
const webVisitorErrorRef = useRef();
const referralErrorRef = useRef();



const updatePhone = (e) => {
  const key = e.charCode || e.keyCode || 0;
     let value = e.target.value;
     if (![109, 189, 8, 9].includes(key)) {
         if (value.length === 3) value = value + '-';
         if (value.length === 7) value = value + '-';
         setRegisterData({
          ...registerData,
          phone: value
         })
     }
}


      // GA event tracking
  window.dataLayer = window.dataLayer || [];
  const trackFormSubmission = () => {
    window.dataLayer.push({
    'event': 'leadFormSubmitSuccess'
    });
  }


  // const TRACKER_HOST_URL = 'https://localhost:6001'; // Local Environment
  // const TRACKER_HOST_URL = 'https://tst.vyg.mobi'; // Test Environment
  // const TRACKER_HOST_URL = 'https://stg.vyg.mobi'; // Staging Environment
  const TRACKER_HOST_URL = 'https://vyg.mobi'; // Production Environment
  const REGISTRATION_API_URL = `${TRACKER_HOST_URL}/api/registration`; // Local Environment
  const SUBSCRIBE_API_URL = `${TRACKER_HOST_URL}/api/TrackingEvents/SubscribeNumber`;
  const REGISTRATION_STORAGE_KEY = 'voyage_registration';
  const SUBSCRIBE_STORAGE_KEY = 'voyage_s';
  const SUBSCRIBE_CAMPAIGN_ID = 4199; //Campaign ID of API Opt-in
  const UTM_STORAGE_KEY = 'voyage_utm';

  const FORM_IDS = {
    CONTAINER_STEP1: '#form-container-s1',
    CONTAINER_STEP2: '#form-container-s2',
    CONTAINER_STEP3: '#form-container-s3',
    SUBMIT_BTN_STEP1: '#form-submit-s1',
    SUBMIT_BTN_STEP2: '#form-submit-s2',
    SUBMIT_BTN_STEP3: '#form-submit-s3',
  }

  // utils
  const snakeToCamel = s => s.replace(/(_\w)/g, k => k[1].toUpperCase())
  const capitalize = s => s.replace(/(^\w|\s\w)/g, m => m.toUpperCase());;
  const ePattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const normalizePhoneNumber = (v) => v && v.length >= 10 && `+1${v.replace(/[^\d]/g, '').slice(-10)}`;
  const isFormValid = ({firstName, lastName, email, phone, companyName, referralSource, referralSourceName }) =>
    (firstName || lastName) && (referralSource || referralSourceName) && email && companyName && phone.length == 12;


  // utm tracking  
  const saveUtmFromParams = () => {
    let result = '';
    try {
      const search = location.search.substring(1);
      result = '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}';
      sessionStorage.setItem(UTM_STORAGE_KEY, result);
    } catch {};

    return result
  };
  saveUtmFromParams();
  
  const getUtm = () => {
    let result = {};
    try {
      result = JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY));
      result = Object.entries(result).reduce((x,[k,v]) => (x[snakeToCamel(k)]=v) && x, {})
    } catch {};
    setRegisterData({
      ...registerData,
      utm:result
    });
    return result;
  };
  // end utm tracking 



  // form submission
  const createOrUpdateRegistration = (data) => {
    const { publicId } =
    JSON.parse(localStorage.getItem(REGISTRATION_STORAGE_KEY)) || {};
    const body = {
      ...data,
      publicId,
      referralSource: data.referralSource && (data.referralSource + (data?.referralSourceName?.length ? ` - ${data?.referralSourceName}` : ''))?.trim()
    };
    const isUpdate = !!publicId;
    fetch(REGISTRATION_API_URL, {
      method: isUpdate ? 'PUT' : 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.publicId)
          localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(resData));
        if (isUpdate) {
          localStorage.removeItem(REGISTRATION_STORAGE_KEY);
        }
        console.log('Success:', resData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const subscribePhone = PhoneIn => {
    fetch(SUBSCRIBE_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        PhoneIn,
        CampaignId: SUBSCRIBE_CAMPAIGN_ID,
      }),
    })
      .then((response) => response.json())
      .then(({ subscriberId }) => {
        if (subscriberId)
          localStorage.setItem(SUBSCRIBE_STORAGE_KEY, subscriberId);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
// form submission 
const getFormData = () => {
    const utm = getUtm();
    var name = capitalize(registerData.name.trim());
    var phone = normalizePhoneNumber(registerData.phone);
    var email = registerData.email.trim();
    var companyName = capitalize(registerData.companyName.trim());
    // var companySize = +(document.getElementById('company-size').getAttribute('v-value'));
    // var emailSubscriberSize = +(document.getElementById('subscribers').getAttribute('v-value'));
    var websiteVisitors = +(registerData.websiteVisitors);
    var website = registerData.website.trim();
    var referralSource = registerData.referralSource;
    var referralSourceName = registerData.referralSourceName;

    const [firstName, ...lastName] = name.split(' ');
    const data = {
      firstName,
      lastName: lastName.join(' '),
      companyName,
      email,
      phone,
      // companySize,
      // emailSubscriberSize,
      websiteVisitors,
      website,
      referralSource,
      referralSourceName,
      ...utm,
    };
    return data;
  };
  // close function

// step 1 form submit handler
const formStepOneSubmit = (e) => {
    e.preventDefault();
    
    let hasError = false;
    const formData = getFormData();
    const { email } = formData;
    console.log(email);
    if (email.length == 0) {
        emailErrorRef.current.textContent = 'Please enter your work email';
        gsap.to('#email-error',{opacity:1,display:'block'});
        hasError = true;
    } else {
        emailErrorRef.current.textContent = '';
        gsap.to('#email-error',{opacity:0,display:'none'});
    }
    if (!ePattern.test(email)) {
        emailErrorRef.current.textContent = 'Please enter a valid work email';
        gsap.to('#email-error',{opacity:1,display:'block'});
        hasError = true;
    }
    
    if (hasError) return false;

    createOrUpdateRegistration(formData);

    if (window.innerWidth < 769 ) {
        document.getElementById('left-form-wrap').style.display = 'none';
        document.getElementsByClassName('registration-wrapper')[0].classList.add('extra-margin');
    }
    
    gsap.to('#email-error',{opacity:0,autoAlpha:0,duration:0.3});
    emailRecordRef.current.value = email;
    document.getElementById('form-container-s1').style.display = 'none';
    document.getElementById('form-container-s2').style.display = 'block';
    // gsap.to(FORM_IDS.CONTAINER_STEP1,{display:'none'});
    // gsap.to(FORM_IDS.CONTAINER_STEP2,{display:'block'});
}


// step 2 form submit handler
const formStepTwoSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const formData = getFormData();
    const { phone, companyName, firstName, lastName, website } = formData;
    console.log(website);
    if (companyName.length == 0) {
        companyErrorRef.current.textContent = 'Please enter your company name';
        gsap.to('#company_error',{opacity:1,display:'block'});
        hasError = true;
    } else {
        gsap.to('#company_error',{opacity:0,display:'none'});
    }

    if (phone.length == 0) {
        phoneErrorRef.current.textContent = 'Please enter a valid US phone number';
        gsap.to('#phone_error',{opacity:1,display:'block'});
        hasError = true;
    } else if (phone.length !== 12) {
        phoneErrorRef.current.textContent = 'Please enter a valid US phone number';
        gsap.to('#phone_error',{opacity:1,display:'block'});
        hasError = true;
    } else {
        phoneErrorRef.current.textContent = '';
        gsap.to('#phone_error',{opacity:0,display:'none'});
    }

    
    if (`${firstName}${lastName}`.length == 0) {
        nameErrorRef.current.textContent = 'Please enter your name';
        gsap.to('#name_error',{opacity:1,display:'block'});
        hasError = true;
    } else {
        nameErrorRef.current.textContent = 'Please enter your name';
        gsap.to('#name_error',{opacity:0,display:'none'});
    }
    if (website.length == 0) {
        webErrorRef.current.textContent = 'Please enter E-commerce website';
        gsap.to('#website-error',{opacity:1,display:'block'});
        hasError = true;
    } else {
        webErrorRef.current.textContent = '';
        gsap.to('#website-error',{opacity:0,display:'none'});
    }
    if (!urlPattern.test(website) && website.length != 0) {
        webErrorRef.current.textContent = 'Please enter a valid website';
        gsap.to('#website-error',{opacity:1,display:'block'});
      hasError = true;
    }

    if (hasError) return false;

    // createOrUpdateRegistration(formData);
    subscribePhone(phone);
    document.getElementById('form-container-s2').style.display = 'none';
    document.getElementById('form-container-s3').style.display = 'block';
    // gsap.to(FORM_IDS.CONTAINER_STEP2,{display:'none'});
    // gsap.to(FORM_IDS.CONTAINER_STEP3,{display:'block'});
}


  // step 3 form submit handler
  const formStepThreeSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const formData = getFormData();
    const { referralSource, websiteVisitors } = formData;

    if (!referralSource) {
        referralErrorRef.current.textContent = 'Please select an option';
        gsap.to('#referral_error',{opacity:1,display:'block'});
    } else {
        referralErrorRef.current.textContent = '';
        gsap.to('#referral_error',{opacity:0,display:'none'});
    }

    if (!websiteVisitors) {
        webVisitorErrorRef.current.textContent = "Please select an option even if it's rough estimate";
        gsap.to('#web_visitors_error',{opacity:1,display:'block'});
    } else {
        webVisitorErrorRef.current.textContent = "";
        gsap.to('#web_visitors_error',{opacity:0,display:'none'});
    }

    if (isFormValid(formData)) {
      console.log('valid form');
      document.getElementById('form-container-s3').style.display = 'none';
      if (window.innerWidth < 769) {
        document.getElementsByClassName('registration-wrapper')[0].classList.remove('extra-margin');
      }
      document.getElementById('greeting-block').style.display = 'flex';

      createOrUpdateRegistration(formData);
      trackFormSubmission();
    }
  }

const  referralDropDown = () => {
  
  gsap.to('#referral-value',{duration:0.3, opacity:1,autoAlpha:1});
}

const webVisitorsDropDown = () => {
  gsap.to('#web-visitors-value',{duration:0.3,opacity:1,autoAlpha:1});
}

const referralDropDownBlur = () => {
  
  gsap.to('#referral-value',{duration:0.3, opacity:0,autoAlpha:0});
}
 
const referralDropDownSelection = (e) => {
  let val = e.target.getAttribute('val');
  console.log(val);
  setRegisterData({
    ...registerData,
    referralSource: val
  });
  gsap.to('#referral-value',{opacity:0, autoAlpha:0});
  const  referralSource  = val;
  if (referralSource === 'Referral' || referralSource === 'Other') {
    gsap.to('#referral-name',{display:'block'});
    gsap.to('#referral',{width:'115px'});
    referralSourceName.current.value = '';
    referralSourceName.current.focus();
  }
  else{
    gsap.to('#referral-name',{display:'none'});
    gsap.to('#referral',{width:'100%'});
    referralSourceName.current.value = '';
  }
}

const webDropDownSelection = (e) => {
  let val = e.target.getAttribute('val');
  setRegisterData({
    ...registerData,
    websiteVisitors: val
  });
  visitorRef.current.value = val;
  gsap.to('#web-visitors-value',{opacity:0, autoAlpha:0});
}


 
useEffect(() => {
    if(formState == 'open'){
        gsap.to('#registration-form-modal',{duration:0.3,opacity:1,autoAlpha:1});
    }
    else{
        gsap.to('#registration-form-modal',{duration:0.3,opacity:0,autoAlpha:0});
    }
},[formState])


return ( 
    <div id="registration-form-modal" onClick={() => setFormState('close')}>
            <div className="registration-wrapper" onClick={(e) => e.stopPropagation()}>

            <div id="close-registration-modal" onClick={() => setFormState('close')}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="21" height="21" fill="#162740"></rect>
					<path d="M7.18194 16.1384L11.105 12.2154L15.028 16.1384L16.1602 15.0062L12.2371 11.0832L16.1602 7.16017L15.028 6.02802L11.105 9.95105L7.18194 6.02802L6.04979 7.16017L9.97283 11.0832L6.04979 15.0062L7.18194 16.1384Z" fill="white"></path>
				</svg>
            </div>
           
            <div className="inner-block-wrap">
               
                <div id="left-form-wrap" style={{backgroundImage: `url("/images/voyage-form-left-banner.jpeg")`}}></div>
           
                <div id="right-form-wrap">

                
                    <div className="email-check-wrapper" id="form-container-s1">
                        <h2>
                            <span>Get started with</span>
                            <span className="underline">Voyage SMS</span>
                        </h2>
                        <form id="email-check-form" className="registration">

                            <div className="form-group">
                                <label htmlFor="email">Business Email</label>
                                <input onChange={(e) => setRegisterData({...registerData,email:e.target.value})} value={registerData.email} ref={emailRef} type="email" name="email" id="email" placeholder="phil@nike.com" autoComplete="on" />
                                <span ref={emailErrorRef} className="error-response" id="email-error"></span>
                            </div>

                            <button onClick={(e) => formStepOneSubmit(e) } type="submit" id="form-submit-s1" data-track="lead-form-next">Get Started</button>

                        </form>
                        <div id="instrinsic-layout">
                            <img src="/images/backfade.png" alt="voyage form" />
                        </div>
                    </div>
                    {/* <!-- Form step 1 --> */}

                    {/* <!-- form step 2 --> */}
                    <div className="final-contact-wrapper" id="form-container-s2">
                        <form id="complete-data-form" className="registration">
                            <input ref={emailRecordRef} type="email" name="" id="email_record" defaultValue={registerData.email} hidden/>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input onChange={(e) => setRegisterData({...registerData,companyName:e.target.value})} ref={companyRef} type="text" value={registerData.companyName}  name="company" id="company" placeholder="Nike" autoComplete="on" />
                                <span ref={companyErrorRef} className="error-response" id="company_error"></span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="website">E-commerce Website URL</label>
                                <input onChange={(e) => setRegisterData({...registerData,website:e.target.value})} ref={webRef} type="text" value={registerData.website} name="website" id="website" placeholder="https://www.nike.com" autoComplete="on" />
                                <span ref={webErrorRef} className="error-response" id="website-error"></span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input onChange={updatePhone} ref={phoneRef} type="text" value={registerData.phone} name="phone" id="phone" placeholder="415-497-3732" autoComplete="on" maxLength="12" />
                                <span ref={phoneErrorRef} className="error-response" id="phone_error"></span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input onChange={(e) => setRegisterData({...registerData,name:e.target.value})} ref={nameRef} type="text" name="name" id="name" value={registerData.name} placeholder="Phil Smith" autoComplete="on" />
                                <span ref={nameErrorRef} className="error-response" id="name_error"></span>
                            </div>

                            <button onClick={(e) => formStepTwoSubmit(e)} type="submit" id="form-submit-s2" data-track="lead-form-submit">Next</button>

                        </form>

                    </div>
                    {/* <!-- form step 2 -->

                    <!-- form step 3 --> */}
                    <div className="final-contact-wrapper" id="form-container-s3">
                        <form id="complete-data-form-new" className="registration">
                            <input type="email" name="" id="email_record" defaultValue="" hidden />

                            <div className="form-group" id="referral-block">
                                <label htmlFor="referral">Where did you hear about us?</label>

                                <div className="input-wrap" style={{display:'flex'}}>
                                    <input onBlur={referralDropDownBlur} onFocus={referralDropDown} ref={referralRef} type="text" name="referral" defaultValue={registerData.referralSource} id="referral" className="dropdown-input" placeholder="Select an option" readOnly/>
                                    <input onChange={(e) => setRegisterData({...registerData,referralSourceName:e.target.value})} ref={referralSourceName} type="text" value={registerData.referralSourceName} name="referral-name" id="referral-name"  autoComplete="on" />

                                    <span ref={referralErrorRef} className="error-response" id="referral_error"></span>
                                    <div className="dropdown-icon">
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L4.2 5L7.4 1" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
										</svg>
                                    </div>
                                    <ul id="referral-value" className="dropdown-option">
                                        {
                                            requestFormData.referralBlock.map((option,i) => (
                                                <li onClick={referralDropDownSelection} key={i} val={option.val}>{option.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="form-group" id="subscriber-block">
                                <label htmlFor="web-visitors">Monthly Website Visitors</label>

                                <div className="input-wrap">
                                    <input onFocus={webVisitorsDropDown} ref={visitorRef} type="text" name="web-visitors" defaultValue={registerData.websiteVisitors} id="web-visitors" className="dropdown-input" placeholder="Select an option"/>
                                    <span ref={webVisitorErrorRef} className="error-response" id="web_visitors_error"></span>
                                    <div className="dropdown-icon">
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L4.2 5L7.4 1" stroke="white" strokeWidth="1.5" strokeLinejoin="round"></path>
										</svg>
                                    </div>
                                    <ul id="web-visitors-value" className="dropdown-option">
                                        {
                                            requestFormData.monthlyVisitorsBlock.map((option,i) => (
                                                <li onClick={webDropDownSelection} key={i} val={option.val}>{option.name}</li>
                                            ))
                                        }
                
                                    </ul>
                                </div>
                            </div>

                            <button onClick={(e) => formStepThreeSubmit(e)} type="submit" id="form-submit-s3" data-track="lead-form-submit-3rd">Submit</button>

                        </form>

                    </div>
                    {/* <!-- form step 3 --> */}

                    <div id="greeting-block">
                        <h2>
                            <span className="underline">Thank you,</span>
                            <span>we’ll be in touch!</span>
                        </h2>
                        <div id="mobile-icon-greet">
                            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.7692 17.6925C16.7692 21.7284 13.4974 25.0001 9.4615 25.0001C5.42557 25.0001 2.15381 21.7284 2.15381 17.6925C2.15381 13.6565 5.42557 10.3848 9.4615 10.3848C13.4974 10.3848 16.7692 13.6565 16.7692 17.6925Z" fill="#4262F7"></path>
							<path d="M18.3076 10.3848L0.230713 10.3848L9.26917 0.000151239L18.3076 10.3848Z" fill="#5BEBC1"></path>
							</svg>
                        </div>
                        <div className="instrinsic-layout">
                            <img src="/images/backfade.png" alt="voyage form" />
                        </div>
                    </div>

                </div>
             
            </div>
          


        </div>
    </div>

    )
}
