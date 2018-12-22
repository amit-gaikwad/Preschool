export class AppConstants{
    static youtubeUrl = "https://www.youtube.com/embed/";//Old
    //static youtubeUrl = "https://google.com/+dipakbiranjefunnydayschildcare";//New
    static googleApiKey = "AIzaSyAcviOah4O8RZKGX_BgGQkALryXRqTl-JM";//OLD
    //static googleApiKey = "AIzaSyAlmxZ2-6JkGN44HPgcdRp00fDt_gWW1zo";//New
    static youtubeChannelId = "UCeMSLh2vRcYgV_ahmgYWzRA"; //Old
    //static youtubeChannelId = "UCITKX8xLM9BvvnMoai9nu6w";//New
    static youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+AppConstants.youtubeChannelId+"&order=date&type=video&key="+AppConstants.googleApiKey;
   // static eventUrl = "http://localhost:4200/assets/events.json";
    static serverUrl ="http://54.245.216.148:5000/";
    static adminUrl = "https://funnydayschildcare.com.au:5555/parentlogin";
}   