export class AppConstants{
    static youtubeUrl = "https://www.youtube.com/embed/";
    static googleApiKey = "AIzaSyAcviOah4O8RZKGX_BgGQkALryXRqTl-JM";
    static youtubeChannelId = "UCeMSLh2vRcYgV_ahmgYWzRA";
    static youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+AppConstants.youtubeChannelId+"&order=date&type=video&key="+AppConstants.googleApiKey;
   // static eventUrl = "http://localhost:4200/assets/events.json";
    static serverUrl ="http://54.245.216.148:5000/";
    static adminUrl = "http://34.213.109.136:4200/login";
}