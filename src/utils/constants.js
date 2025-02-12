export const NETFLIX_LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg";
export const NETFLIX_USER_AVATAR = "https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWWnPg18kE1U1aF3Svxfn8gQ_BQ_cjwXjDhVl_CZHZAAdzWNBzZoy_PEB5t2umb9tMlbFXHTtBzCSdg3zaIu7bsLr6HqtZPmUQ.png?r=fd1";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_TOKEN
    }
  };
export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [
  {identifier:"en",name:"English"},
  {identifier:"hi",name:"हिन्दी"},
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY