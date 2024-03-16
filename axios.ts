import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
 const defaultUrl = "https://cultchain.com/api/indexer/";
 let api = axios.create({
   baseURL: defaultUrl,
   headers: {
     common: {},
   },
 });
return {
   provide: {
     api: api,
   },
 };
});
