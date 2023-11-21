import mockData from "./mock-data";

/**
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */

export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)];
    return locations;
};

const checkToken = async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    );
    const result = await response.json();
    return result;
  };
  

/** This function will fetch the list of all events */
 export const getEvents = async () => {
    if (window.location.href.startsWith('http://localhost')) {
        return mockData;
    }
    
    const token = await getAccessToken();

    if (token) {
        removeQuery();
        const url =  "YOUR_GET_EVENTS_API_ENDPOINT" + "/" + token;
        const response = await fetch(url);
        const result = await response.json();
        if (result) {
          return result.events;
        } else return null; 
      }
  };

/**This function will get the access token */
export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');

    const tokenCheck = accessToken && (await checkToken(accessToken));

    if (!accessToken || tokenCheck.error) {
        await localStorage.removeItem("access_token");
        const searchParams = new URLSearchParams(window.location.search);
        const code = await searchParams.get("code");
        
        if (!code) {
        const response = await fetch(
        "https://w99kauf38h.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
        );
        const result = await response.json();
        const { authUrl } = result;
        return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;


};
