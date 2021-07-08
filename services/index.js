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

const snakeToCamel = (s) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());

export const subscribePhone = (PhoneIn) => {
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
      if (subscriberId) localStorage.setItem(SUBSCRIBE_STORAGE_KEY, subscriberId);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// form submission
export const createOrUpdateRegistration = (data) => {
  return new Promise((resolve, reject) => {
    const { publicId } = JSON.parse(localStorage.getItem(REGISTRATION_STORAGE_KEY)) || {};
    const body = {
      ...data,
      publicId,
      referralSource:
        data.referralSource && (data.referralSource + (data?.referralSourceName?.length ? ` - ${data?.referralSourceName}` : ''))?.trim(),
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
        if (resData.publicId) localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(resData));
        if (isUpdate) {
          localStorage.removeItem(REGISTRATION_STORAGE_KEY);
        }
        console.log('Success:', resData);
        resolve();
      })
      .catch((error) => {
        console.error('Error:', error);
        resolve();
      });
  });
};

export const saveUtmFromParams = () => {
  let result = '';
  try {
    const search = location.search.substring(1);
    result = '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}';
    sessionStorage.setItem(UTM_STORAGE_KEY, result);
  } catch {}

  return result;
};

export const getUtm = () => {
  let result = {};
  try {
    result = JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY));
    result = Object.entries(result).reduce((x, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});
  } catch {}
  return result;
};

export const trackFormSubmission = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'leadFormSubmitSuccess'
  });

  if (window && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {'send_to': 'AW-739656360/M9BLCNKKkdABEKiF2eAC'});
  }
};
