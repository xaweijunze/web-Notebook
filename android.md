```
USB:

    USB 3.0 Bus:

      Host Controller Driver: AppleUSBXHCIWPT
      PCI Device ID: 0x9cb1 
      PCI Revision ID: 0x0003 
      PCI Vendor ID: 0x8086 

        BRCM20702 Hub:

          Product ID: 0x4500
          Vendor ID: 0x0a5c  (Broadcom Corp.)
          Version: 1.00
          Manufacturer: Apple Inc.
          Location ID: 0x14300000

            Bluetooth USB Host Controller:

              Product ID: 0x828f
              Vendor ID: 0x05ac (Apple Inc.)
              Version: 1.50
              Manufacturer: Apple Inc.
              Location ID: 0x14330000


Android:

          Product ID: 0xffb0
          Vendor ID: 0x19d2
          Version: ff.ff
          Serial Number: 4d2bc0c1
          Speed: Up to 480 Mb/s
          Manufacturer: Android
          Location ID: 0x14200000 / 10
          Current Available (mA): 500
          Current Required (mA): 500
          Extra Operating Current (mA): 0
          Media:
            Android:
              Capacity: 13.1 MB (13,102,992 bytes)
              Removable Media: No
              BSD Name: disk2
              Logical Unit: 0
              Partition Map Type: Unknown
              S.M.A.R.T. status: Verified
              USB Interface: 2

```

```
package com.example.lifehelper;

import android.app.Activity;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TabHost;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;

public class MusicsActivity extends AppCompatActivity {
    private TabHost tabHost;
    private MediaPlayer mediaPlayer;
    private int fileLength;
    private List<String> audioList = new ArrayList<String>();
    private List<String> searchList = new ArrayList<String>();
    private ArrayList<String> searchId = new ArrayList<String>();
    private String downloadUrlString;
    private String downloadFileUrlString;

    private int currentltem = 0;
    private Button pause;
    private static String[] imageFormatSet = new String[]{"mp3","wav","3gp"};
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_musics);

        //选项卡
        tabHost = findViewById(android.R.id.tabhost);
        tabHost.setup();
        LayoutInflater inflater =LayoutInflater.from(this);
        inflater.inflate(R.layout.tab1,tabHost.getTabContentView());
        inflater.inflate(R.layout.tab2,tabHost.getTabContentView());

        tabHost.addTab(tabHost.newTabSpec("tab01")
                .setIndicator("本地音乐")
                .setContent(R.id.LinearLayout01));
        tabHost.addTab(tabHost.newTabSpec("tab02")
                .setIndicator("线上音乐")
                .setContent(R.id.LinearLayout02));


        //tab1
        mediaPlayer = new MediaPlayer();
        Button stop =  findViewById(R.id.stop);
        pause =  findViewById(R.id.pause);
        Button pre =  findViewById(R.id.pre);
        Button next =  findViewById(R.id.next);
        audioList();

        //为 media player添加监听器
        mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
            @Override
            public void onCompletion(MediaPlayer mp) {
                nextMusic();
            }
        });
        //为上一首按钮添加监听器
        pre.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                preMusic();
            }
        });
        //为暂停按钮添加监听器
        pause.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(mediaPlayer.isPlaying()){
                    mediaPlayer.pause();
                    ((Button)v).setText("继续");
                }else{
                    mediaPlayer.start();
                    ((Button)v).setText("暂停");
                }
            }
        });
        //为停止按钮添加监听器
        stop.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mediaPlayer.isPlaying()){
                    mediaPlayer.stop();
                }
                pause.setEnabled(false);
            }
        });
        //给下一首按钮添加监听器
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                nextMusic();
            }
        });


        // tab2
        Button mbtSearch =  findViewById(R.id.bt_search);

        //搜索按钮事件
        mbtSearch.setOnClickListener(new View.OnClickListener() {
            EditText edSearch = findViewById(R.id.ed_search);
            @Override
            public void onClick(View v) {
                String searchStr=edSearch.getText().toString();
                downloadFileUrlString = "/storage/emulated/0/myMusic/"+searchStr+".mp3";
                Log.i("'search_button' ",searchStr);
                sendRequestWithHttpURLConnection(1,"http://39.105.107.41:3000/search?limit=5&keywords="+java.net.URLEncoder.encode(searchStr));
            }
        });
    }
    //获取SD卡文件，创建一个适配器，与listview关联，并显示
    private void audioList() {

        Log.i("log","This is Information");
        getFiles(Environment.getExternalStorageDirectory().getAbsolutePath()+"/myMusic/");
        ArrayAdapter<String> adapter = new ArrayAdapter(this,android.R.layout.simple_list_item_1,audioList);
        final ListView listView = findViewById(R.id.list);
        listView.setAdapter(adapter);
        //单击列表时
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> listView, View view, int position, long id) {
                currentltem = position;
                playMusic(audioList.get(currentltem));
            }

        });
    }
    //播放音乐
    public void playMusic(String path) {
        try{
            if(mediaPlayer.isPlaying()){
                mediaPlayer.stop();
            }
            mediaPlayer.reset();
            mediaPlayer.setDataSource(path);
            mediaPlayer.prepare();
            mediaPlayer.start();
            pause.setText("暂停");
            pause.setEnabled(true);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    //判断是否为音乐文件
    private static boolean isAudioFile(String path){
        for(String format:imageFormatSet){
            if(path.contains(format)){
                return true;
            }
        }
        return false;
    }
    //通过递归，获取SD卡，所有音频文件
    private void getFiles(String url) {
        audioList.clear();
        Log.i("lcj ",url);
        File files = new File(url);
        File[] file = files.listFiles();
        try{
            for(File f:file){
                if(f.isDirectory()){
                    getFiles(f.getAbsolutePath());
                }else{
                    if(isAudioFile(f.getPath())){
                        audioList.add(f.getPath());
                    }
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }
    //下一首
    void nextMusic(){
        if(++currentltem>=audioList.size()){
            currentltem = 0;
        }
        playMusic(audioList.get(currentltem));
    }
    //上一首
    void  preMusic(){
        if(--currentltem >=0){
            if(currentltem>=audioList.size()){
                currentltem = 0;
            }
        }else {
            currentltem = audioList.size()-1;
        }
        playMusic(audioList.get(currentltem));
    }
    //退出时，停止音乐
    protected void onDestroy(){
        if (mediaPlayer.isPlaying()){
            mediaPlayer.stop();
        }
        mediaPlayer.release();
        super.onDestroy();
    }

// tab2 搜素页面
    // 显示搜索结果
    private void searchList(String str) {
        try {
            JSONObject json = new JSONObject(str);
            JSONObject itemJSON;
            JSONObject artistsJSON;
            String id;
            String name;
            String author;
            json = json.getJSONObject("result");
            JSONArray dataArray = json.getJSONArray("songs");
            JSONArray artistsArray;

            searchList.clear(); //每次搜索之后都清空之前的数据
            searchId.clear();
            for(int i=0;i<dataArray.length();i++){
                itemJSON = new JSONObject(dataArray.get(i).toString());    //每首歌的JSON对象
                artistsArray = itemJSON.getJSONArray("artists");
                artistsJSON = new JSONObject(artistsArray.get(0).toString());    //每首歌的作者JSON对象
                author = artistsJSON.getString("name");
                name = itemJSON.getString("name");
                id = itemJSON.getString("id");
                String result = "歌曲名："+ name +"  演唱者："+author;
                searchList.add(result);
                searchId.add(id);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        final ArrayAdapter<String> adapter = new ArrayAdapter(this,android.R.layout.simple_list_item_1,searchList);
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                final ListView listView = findViewById(R.id.list_search);
                listView.setAdapter(adapter);
                //单击列表时

                listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                    @Override
                    public void onItemClick(AdapterView<?> listView, View view, int position, long id) {
                        Log.v("tag",""+position);

                        sendRequestWithHttpURLConnection(0,"http://39.105.107.41:3000/song/url?id="+searchId.get(position));

                    }
                });
            }
        });

    }
    private Runnable downloadRunn = new  Runnable(){
        @Override
        public void run() {
            try {
                String urlString=downloadUrlString;
                OutputStream output = new FileOutputStream(downloadFileUrlString);
                URL url = new URL(urlString);
                URLConnection connection = url.openConnection();
                connection.connect();
                fileLength = connection.getContentLength();
                InputStream in = new BufferedInputStream(connection.getInputStream());
                byte[] arr = readStream(in);

                output.write(arr,0,fileLength);
                output.flush();
                output.close();
                makeText("下载完成，快去本地音乐看吧");
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        audioList();
                    }
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    };
//    读取数据
    public  byte[] readStream(InputStream in) throws Exception{
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        byte data[] = new byte[1024];
        long total = 0;
        int count;
        while((count = in.read(data))!=-1){
            total+=count;
            bos.write(data,0,count);
        }
        bos.close();
        in.close();
        return bos.toByteArray();
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
//        if (id == R.id.action_settings) {
//            return true;
//        }

        return super.onOptionsItemSelected(item);
    }
//    发送http请求
    void sendRequestWithHttpURLConnection(final int flag ,final String urlStr) {
        // 开启线程来发起网络请求
        Log.i("'search_url' ",urlStr);

        new Thread(new Runnable() {
            @Override
            public void run() {
                HttpURLConnection connection = null;
                BufferedReader reader = null;
                try {
                    Log.i("'search_try' ",urlStr);

                    //获取到HttpConnection的实例，new出一个URL对象，并传入目标的网址，
                    // 然后调用一下openConnection（）方法
                    URL url = new URL(urlStr);
                    connection = (HttpURLConnection) url.openConnection();
                    //得到了HttpConnection的实例后，设置请求所用的方法
                    // （GET：从服务器获取数据，POST：提交数据给服务器）
                    connection.setRequestMethod("GET");
                    //设置连接超时，读取的毫秒数
                    connection.setConnectTimeout(8000);
                    connection.setReadTimeout(8000);
                    //利用getInputStream（）方法获取服务器的返回的输入流，然后读取
                    InputStream in = connection.getInputStream();
                    // 对获取到的输入流进行读取
                    reader = new BufferedReader(new InputStreamReader(in));
                    StringBuilder response = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        response.append(line);
                    }
                    Log.i("'search_try' ",response.toString());
                    if(flag == 1){
                        searchList(response.toString());
                    }else{
                        JSONObject json = new JSONObject(response.toString());
                        JSONArray dataArr = json.getJSONArray("data");
                        json = new JSONObject(dataArr.get(0).toString());
                        downloadUrlString = json.getString("url");
                        Log.i("url",downloadUrlString);
                        if(downloadUrlString == "null"){
                            makeText("暂无资源");
                        }else{
                            makeText("开始下载歌曲");
                            new Thread(downloadRunn).start();
                        }
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (reader != null) {
                        try {
                            reader.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    if (connection != null) {
                        //调用disconnect（）方法将HTTP连接关闭掉
                        connection.disconnect();
                    }
                }
            }
        }).start();
    }

    void makeText(final String text) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(MusicsActivity.this, text, Toast.LENGTH_SHORT).show();
            }
        });
    }
}

```

