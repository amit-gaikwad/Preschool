export class AppConstants{
    static youtubeUrl = "https://www.youtube.com/embed/";//Old
    //static youtubeUrl = "https://google.com/+dipakbiranjefunnydayschildcare";//New
    static googleApiKey = "AIzaSyBO9fjMcQN94Wu38Uo-pkqvF9VkfHtEmv0";//OLD
    //static googleApiKey = "AIzaSyAlmxZ2-6JkGN44HPgcdRp00fDt_gWW1zo";//New
    static youtubeChannelId = "UCT51ktKAoNTfXjOnsB-8ixQ"; //Old
    //static youtubeChannelId = "UCITKX8xLM9BvvnMoai9nu6w";//New
    static youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+AppConstants.youtubeChannelId+"&order=date&type=video&key="+AppConstants.googleApiKey;
   // static eventUrl = "http://localhost:4200/assets/events.json";
    static serverUrl ="http://www.angulartric.com:8000/";
    static adminUrl = "http://www.angulartric.com:5555/parentlogin";
}