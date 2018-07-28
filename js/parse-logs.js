function LogMsg(timestamp, idstr, height=-1, view=-1, index=-1, tx=-1, nv=-1, status="", state="", role="", expected=-1, current=-1, nodes=-1)
{
   this.timestamp = timestamp;
   this.idstr = idstr;
   this.height = height;
   this.view = view;
   this.index = index;
   this.tx = tx;
   this.nv = nv;
   this.status = status;
   this.state = state;
   this.role = role;
   this.expected = expected;
   this.current = current;
   this.nodes = nodes;
};

// adds message from consensus_id to nodelist (and returns block height if known, otherwise -1)
function addMsg(x, consensus_id, nodelist=[], currentheight=-1) {
   a = x.substring(1, 9).split(':');
   y = x.substring(10, x.length).trim();
   timestamp = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
   idstr = ""; height = -1; view = -1; index = -1; tx = -1;
   nv = -1; status=""; state=""; role=""; expected=-1; current=-1; nodes=-1;
   idstr = "OnPrepareRequestReceived"; // [03:38:53] OnPrepareResponseReceived: height=59 view=0 index=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      tx     = Number(y.substring(y.indexOf("tx=")+"tx=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return -1; // unknown block height
   }
   idstr = "initialize"; //[03:38:47] initialize: height=59 view=0 index=2 role=Backup
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      if(consensus_id != index) {
         console.log("ERROR! consensus "+ consensus_id + " should be "+ index);
         return;
      }
      role   = y.substring(y.indexOf("role=")+"role=".length, y.lenght).split(" ")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   idstr = "timeout"; //[03:38:42] timeout: height=58 view=0 state=Primary
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      state  = y.substring(y.indexOf("state=")+"state=".length, y.lenght).split(" ")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   idstr = "send perpare request"; //[03:38:42] send perpare request: height=58 view=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = consensus_id;
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   idstr = "send perpare response"; //[03:38:53] send perpare response
   if(y.startsWith(idstr)) {
      index  = consensus_id;
      height = currentheight; // receives current height as parameter (important to keep this!)
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   idstr = "OnPrepareResponseReceived"; // [03:38:53] OnPrepareResponseReceived: height=59 view=0 index=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return -1; // unknown block height
   }
   idstr = "relay block"; // [03:38:53] relay block: 0x06961a306d717d1507bf11704ebf80d59d7e9d42cd2beb410a5d5e01251fc8ae
   if(y.startsWith(idstr)) {
      height = currentheight; // receives current height as parameter (important to keep this!)
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   idstr = "persist block"; // [03:38:53] persist block: 0x06961a306d717d1507bf11704ebf80d59d7e9d42cd2beb410a5d5e01251fc8ae
   if(y.startsWith(idstr)) {
      height = currentheight; // receives current height as parameter (important to keep this!)
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   idstr = "request change view"; // [03:39:49] request change view: height=66 view=0 nv=1 state=Backup, ViewChanging
   if(y.startsWith(idstr)) {
      index  = consensus_id;
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      nv     = Number(y.substring(y.indexOf("nv=")+"nv=".length, y.lenght).split(" ")[0]);
      state  = y.substring(y.indexOf("state=")+"state=".length, y.lenght).split("\n")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   idstr = "OnChangeViewReceived"; // [17:54:18] OnChangeViewReceived: height=561 view=0 index=3 nv=1
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      nv     = Number(y.substring(y.indexOf("nv=")+"nv=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
      return height;
   }
   return -1;
};

// find "send" message before "timestamp" on other consensus (k != receiver_id). senderidx = -1 means search all...
function findSendBefore(strid, cnode_lsts, senderidx, timestamp, receiver_id, height, view) {
   for(cid=0; cid<4; cid++) {
      if((senderidx != -1) && (senderidx != cid))
         continue; // specific senderidx must be found
      if(cid != receiver_id) {
         for(j=0; j<cnode_lsts[cid].length; j++) {
            if(cnode_lsts[cid][j].timestamp > timestamp)
               break; // ordered list by timestamp
            if((cnode_lsts[cid][j].idstr == strid) && (cnode_lsts[cid][j].height == height)){ // IGNORE VIEW FOR NOW! && (cnode_lsts[cid][j].view == view)) {
               return cnode_lsts[cid][j];
            }
         }
      }
   }
   return null;
};

// parseLogsGenerateJson($("#node2data")[0].value, $("#node4data")[0].value, $("#node1data")[0].value, $("#node3data")[0].value);
// order of logs is important!
function parseLogsGenerateJson(node1log, node2log, node3log, node4log) {
   var i = 0;
   node1logs = node1log.split("\n");
   node1list = [];
   node1id = 0;
   cheight = -1; // current height
   for(i=0; i<node1logs.length; i++) {
      tmpheight = addMsg(node1logs[i], node1id, node1list, cheight);
      if(tmpheight > 0)
         cheight = tmpheight;
   }

   node2logs = node2log.split("\n");
   node2list = [];
   node2id = 1;
   cheight = -1;
   for(i=0; i<node2logs.length; i++) {
      tmpheight = addMsg(node2logs[i], node2id, node2list, cheight);
      if(tmpheight > 0)
         cheight = tmpheight;
   }

   node3logs = node3log.split("\n");
   node3list = [];
   node3id = 2;
   cheight = -1;
   for(i=0; i<node3logs.length; i++) {
      tmpheight = addMsg(node3logs[i], node3id, node3list, cheight);
      if(tmpheight > 0)
         cheight = tmpheight;
   }

   node4logs = node4log.split("\n");
   node4list = [];
   node4id = 3;
   cheight = -1;
   for(i=0; i<node4logs.length; i++) {
      tmpheight = addMsg(node4logs[i], node4id, node4list, cheight);
      if(tmpheight > 0)
         cheight = tmpheight;
   }

   var beginTime = 100000000000;
   var endTime = 0;

   // any order
   nodelist = node1list.concat(node2list.concat(node3list.concat(node4list)));
   for(i=0; i<nodelist.length; i++) {
      if(nodelist[i].timestamp < beginTime)
         beginTime = nodelist[i].timestamp;
      if(nodelist[i].timestamp > endTime)
         endTime = nodelist[i].timestamp;
   }

   beginTime -= 1; // adjust one before
   endTime += 1;   // adjust one after
   var begin_times = [];
   var k = 0;
   for(k=0; k<4; k++)
      begin_times.push(beginTime);
   var cnode_lists = [null, null, null, null];
   cnode_lists[node1id] = node1list;
   cnode_lists[node2id] = node2list;
   cnode_lists[node3id] = node3list;
   cnode_lists[node4id] = node4list;

   var cnode_json = [];
   var color_list = [];

   for(k=0; k<4; k++) {
      console.log("consensus k="+k);
      for(i=0; i<cnode_lists[k].length; i++) {
         //console.log("consensus k="+k+" i="+i);
         if(cnode_lists[k][i].idstr == "initialize") {
            begin_times[k] = cnode_lists[k][i].timestamp;
            continue;
         }
         if(cnode_lists[k][i].idstr == "timeout") {
            var values = [];
            values.push({"year" : begin_times[k]+0.01, "position":k});
            values.push({"year" : cnode_lists[k][i].timestamp+0.01, "position":k});
            if(cnode_lists[k][i].state=="Primary") {
               cnode_json.push({"name":"PrimaryTimeout_"+k+ "_"+cnode_lists[k][i].height+"_"+begin_times[k]+"_"+cnode_lists[k][i].timestamp, "values":values});
               color_list.push("#76448E");
            }
            else {
               cnode_json.push({"name":"Timeout_"+k+"_"+cnode_lists[k][i].height+"_"+begin_times[k]+"_"+cnode_lists[k][i].timestamp, "values":values});
               color_list.push("#CCCCCC");
            }
         }

         if(cnode_lists[k][i].idstr == "OnPrepareRequestReceived") {
            //console.log("OnPrepareRequestReceived");
            var sendermsg = findSendBefore("send perpare request", cnode_lists, cnode_lists[k][i].index, cnode_lists[k][i].timestamp, k, cnode_lists[k][i].height, cnode_lists[k][i].view);
            if(!sendermsg) {
               console.log("findSendBefore for OnPrepareRequestReceived k="+k+" height="+cnode_lists[k][i].height);
               console.log("WARNING! could not find origin of message.");//+JSON.stringify(cnode_lists[k][i]));
               continue;
            }
            var senderc = sendermsg.index;  // sender consensus (destination is k)
            if(senderc == -1) {
               console.log("ERROR getting findSendBefore (came with height = -1)"+JSON.stringify(sendermsg));
            }
            var values = [];
            values.push({"year" : ""+sendermsg.timestamp+".02"+k, "position": senderc});
            values.push({"year" : ""+cnode_lists[k][i].timestamp+".02"+senderc, "position":k});
            cnode_json.push({"name":"PrepRequest_"+senderc+"_"+sendermsg.height+"_"+k, "values":values});
            color_list.push("#FEC60B");
         }

         if(cnode_lists[k][i].idstr == "OnPrepareResponseReceived") {
            var sendermsg = findSendBefore("send perpare response", cnode_lists, cnode_lists[k][i].index, cnode_lists[k][i].timestamp, k, cnode_lists[k][i].height, cnode_lists[k][i].view);
            if(!sendermsg) {
               console.log("findSendBefore for OnPrepareResponseReceived k="+k+" height="+cnode_lists[k][i].height);
               console.log("WARNING! could not find origin of message.");//+JSON.stringify(cnode_lists[k][i]));
               continue;
            }
            var senderc = sendermsg.index;  // sender consensus (destination is k)
            if(senderc == -1) {
               console.log("ERROR getting findSendBefore (came with height = -1)"+JSON.stringify(sendermsg));
            }
            var values = [];
            values.push({"year" : ""+sendermsg.timestamp+".03"+k, "position": senderc});
            values.push({"year" : ""+cnode_lists[k][i].timestamp+".03"+senderc, "position":k});
            cnode_json.push({"name":"PrepResponse_"+senderc+"_"+sendermsg.height+"_"+k, "values":values});
            color_list.push("#00FF00");
         }

         if(cnode_lists[k][i].idstr == "OnChangeViewReceived") {
            var sendermsg = findSendBefore("request change view", cnode_lists, cnode_lists[k][i].index, cnode_lists[k][i].timestamp, k, cnode_lists[k][i].height, cnode_lists[k][i].view);
            if(!sendermsg) {
               console.log("findSendBefore for OnChangeViewReceived k="+k+" height="+cnode_lists[k][i].height);
               console.log("WARNING! could not find origin of message.");//+JSON.stringify(cnode_lists[k][i]));
               continue;
            }
            var senderc = sendermsg.index;  // sender consensus (destination is k)
            if(senderc == -1) {
               console.log("ERROR getting findSendBefore (came with height = -1)"+JSON.stringify(sendermsg));
            }
            var values = [];
            values.push({"year" : ""+sendermsg.timestamp+".04"+k, "position": senderc});
            values.push({"year" : ""+cnode_lists[k][i].timestamp+".04"+senderc, "position":k});
            cnode_json.push({"name":"ChangeView_"+senderc+"_"+sendermsg.height+"_"+k+"_"+cnode_lists[k][i].nv, "values":values});
            color_list.push("#FF0000");
         }
         // TODO: continue...
      }
   }


   return {"data": cnode_json, "colors" : color_list, "beginTime" : beginTime, "endTime" : endTime, "rawdata" : cnode_lists};
}

// parseLogsGenerateJson($("#node2data")[0].value, $("#node4data")[0].value, $("#node1data")[0].value, $("#node3data")[0].value);

// ==================================== BEGIN EXAMPLE ============================================

function exdata1() { return ' \n\
[17:53:55] send perpare response \n\
[17:53:56] chain sync: expected=559 current: 557 nodes=12 \n\
[17:53:56] persist block: 0xb6fe32f0004194d77b788083f7ff0f15befd5d2a8523dde81b3703f92f55e56d \n\
[17:53:56] initialize: height=559 view=0 index=0 role=Backup \n\
[17:53:58] OnPrepareResponseReceived: height=559 view=0 index=2 \n\
[17:53:59] persist block: 0xeab1b4f74b9da38c9d99eb6a09f666abf08a6fc290eccdbc5a0c5773a2dd3f1d \n\
[17:53:59] initialize: height=560 view=0 index=0 role=Primary \n\
[17:54:04] timeout: height=560 view=0 state=Primary \n\
[17:54:04] send perpare request: height=560 view=0 \n\
[17:54:07] OnPrepareResponseReceived: height=560 view=0 index=3 \n\
[17:54:07] OnPrepareResponseReceived: height=560 view=0 index=2 \n\
[17:54:07] relay block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:07] persist block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:07] initialize: height=561 view=0 index=0 role=Backup \n\
[17:54:14] OnPrepareResponseReceived: height=561 view=0 index=3 \n\
[17:54:17] OnPrepareRequestReceived: height=561 view=0 index=1 tx=1 \n\
[17:54:17] send perpare response \n\
[17:54:17] timeout: height=561 view=0 state=Backup, RequestReceived, SignatureSent \n\
[17:54:17] request change view: height=561 view=0 nv=1 state=Backup, RequestReceived, SignatureSent, ViewChanging \n\
[17:54:18] OnChangeViewReceived: height=561 view=0 index=3 nv=1 \n\
[17:54:20] persist block: 0x61fcd1d36364f111033786d0d8ab067dd1990436883693486d3fdb4ae76ac8f0 \n\
[17:54:20] initialize: height=562 view=0 index=0 role=Backup \n\
[17:54:28] OnPrepareRequestReceived: height=562 view=0 index=2 tx=1 \n\
[17:54:28] send perpare response \n\
[17:54:29] OnPrepareResponseReceived: height=562 view=0 index=3 \n\
[17:54:29] relay block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] persist block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] initialize: height=563 view=0 index=0 role=Backup \n\
[17:54:39] OnPrepareRequestReceived: height=563 view=0 index=3 tx=1 \n\
[17:54:39] send perpare response \n\
[17:54:39] timeout: height=563 view=0 state=Backup, RequestReceived, SignatureSent \n\
[17:54:39] request change view: height=563 view=0 nv=1 state=Backup, RequestReceived, SignatureSent, ViewChanging \n\
[17:54:40] OnPrepareResponseReceived: height=563 view=0 index=1 \n\
[17:54:40] relay block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:40] persist block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:40] OnPrepareResponseReceived: height=563 view=0 index=2 \n\
[17:54:40] initialize: height=564 view=0 index=0 role=Primary \n\
[17:54:45] timeout: height=564 view=0 state=Primary \n\
[17:54:45] send perpare request: height=564 view=0 \n\
[17:54:48] OnPrepareResponseReceived: height=564 view=0 index=3 \n\
[17:54:48] OnPrepareResponseReceived: height=564 view=0 index=1 \n\
[17:54:48] relay block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:48] persist block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:48] initialize: height=565 view=0 index=0 role=Backup \n\
[17:54:54] OnPrepareRequestReceived: height=565 view=0 index=1 tx=1 \n\
[17:54:54] send perpare response \n\
[17:54:55] OnPrepareResponseReceived: height=565 view=0 index=3 \n\
[17:54:55] relay block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:55] persist block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:55] initialize: height=566 view=0 index=0 role=Backup \n\
'};

function exdata2() {return ' \n\
[17:53:57] OnPrepareResponseReceived: height=559 view=0 index=2 \n\
[17:53:57] relay block: 0xeab1b4f74b9da38c9d99eb6a09f666abf08a6fc290eccdbc5a0c5773a2dd3f1d \n\
[17:53:57] persist block: 0xeab1b4f74b9da38c9d99eb6a09f666abf08a6fc290eccdbc5a0c5773a2dd3f1d \n\
[17:53:57] initialize: height=560 view=0 index=1 role=Backup \n\
[17:54:06] OnPrepareRequestReceived: height=560 view=0 index=0 tx=1 \n\
[17:54:06] send perpare response \n\
[17:54:06] OnPrepareResponseReceived: height=560 view=0 index=3 \n\
[17:54:06] relay block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:06] persist block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:06] initialize: height=561 view=0 index=1 role=Primary \n\
[17:54:11] timeout: height=561 view=0 state=Primary \n\
[17:54:11] send perpare request: height=561 view=0 \n\
[17:54:14] OnPrepareResponseReceived: height=561 view=0 index=3 \n\
[17:54:18] OnPrepareResponseReceived: height=561 view=0 index=0 \n\
[17:54:18] relay block: 0x61fcd1d36364f111033786d0d8ab067dd1990436883693486d3fdb4ae76ac8f0 \n\
[17:54:18] persist block: 0x61fcd1d36364f111033786d0d8ab067dd1990436883693486d3fdb4ae76ac8f0 \n\
[17:54:18] initialize: height=562 view=0 index=1 role=Backup \n\
[17:54:27] OnPrepareRequestReceived: height=562 view=0 index=2 tx=1 \n\
[17:54:27] send perpare response \n\
[17:54:28] timeout: height=562 view=0 state=Backup, RequestReceived, SignatureSent \n\
[17:54:28] request change view: height=562 view=0 nv=1 state=Backup, RequestReceived, SignatureSent, ViewChanging \n\
[17:54:29] OnPrepareResponseReceived: height=562 view=0 index=3 \n\
[17:54:29] relay block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] persist block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] initialize: height=563 view=0 index=1 role=Backup \n\
[17:54:36] OnPrepareRequestReceived: height=563 view=0 index=3 tx=1 \n\
[17:54:36] send perpare response \n\
[17:54:37] OnPrepareResponseReceived: height=563 view=0 index=2 \n\
[17:54:37] relay block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:37] persist block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:37] initialize: height=564 view=0 index=1 role=Backup \n\
[17:54:46] OnPrepareRequestReceived: height=564 view=0 index=0 tx=1 \n\
[17:54:46] send perpare response \n\
[17:54:47] OnPrepareResponseReceived: height=564 view=0 index=3 \n\
[17:54:47] relay block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:47] persist block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:47] initialize: height=565 view=0 index=1 role=Primary \n\
[17:54:52] timeout: height=565 view=0 state=Primary \n\
[17:54:52] send perpare request: height=565 view=0 \n\
[17:54:55] OnPrepareResponseReceived: height=565 view=0 index=3 \n\
[17:54:55] OnPrepareResponseReceived: height=565 view=0 index=2 \n\
[17:54:55] relay block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:55] persist block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:55] initialize: height=566 view=0 index=1 role=Backup \n\
[17:55:01] OnPrepareRequestReceived: height=566 view=0 index=2 tx=1 \n\
[17:55:01] send perpare response \n\
[17:55:02] OnPrepareResponseReceived: height=566 view=0 index=3 \n\
[17:55:02] relay block: 0x9f4ff15f315f6a2cf886cd9e521dfb74b2cec8043cc00c22561b1703e953d752 \n\
[17:55:02] persist block: 0x9f4ff15f315f6a2cf886cd9e521dfb74b2cec8043cc00c22561b1703e953d752 \n\
[17:55:02] initialize: height=567 view=0 index=1 role=Backup \n\
'};

function exdata3(){return ' \n\
[17:53:52] persist block: 0xb6fe32f0004194d77b788083f7ff0f15befd5d2a8523dde81b3703f92f55e56d \n\
[17:53:52] initialize: height=559 view=0 index=2 role=Backup \n\
[17:53:56] OnPrepareRequestReceived: height=559 view=0 index=3 tx=1 \n\
[17:53:56] send perpare response \n\
[17:53:57] OnPrepareResponseReceived: height=559 view=0 index=1 \n\
[17:53:57] relay block: 0xeab1b4f74b9da38c9d99eb6a09f666abf08a6fc290eccdbc5a0c5773a2dd3f1d \n\
[17:53:57] persist block: 0xeab1b4f74b9da38c9d99eb6a09f666abf08a6fc290eccdbc5a0c5773a2dd3f1d \n\
[17:53:57] initialize: height=560 view=0 index=2 role=Backup \n\
[17:54:05] OnPrepareRequestReceived: height=560 view=0 index=0 tx=1 \n\
[17:54:05] send perpare response \n\
[17:54:06] OnPrepareResponseReceived: height=560 view=0 index=3 \n\
[17:54:06] relay block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:06] persist block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:06] initialize: height=561 view=0 index=2 role=Backup \n\
[17:54:17] timeout: height=561 view=0 state=Backup \n\
[17:54:17] request change view: height=561 view=0 nv=1 state=Backup, ViewChanging \n\
[17:54:21] OnPrepareRequestReceived: height=561 view=0 index=1 tx=1 \n\
[17:54:21] send perpare response \n\
[17:54:21] OnPrepareResponseReceived: height=561 view=0 index=3 \n\
[17:54:21] relay block: 0x61fcd1d36364f111033786d0d8ab067dd1990436883693486d3fdb4ae76ac8f0 \n\
[17:54:21] persist block: 0x61fcd1d36364f111033786d0d8ab067dd1990436883693486d3fdb4ae76ac8f0 \n\
[17:54:21] initialize: height=562 view=0 index=2 role=Primary \n\
[17:54:26] timeout: height=562 view=0 state=Primary \n\
[17:54:26] send perpare request: height=562 view=0 \n\
[17:54:28] OnPrepareResponseReceived: height=562 view=0 index=1 \n\
[17:54:29] OnPrepareResponseReceived: height=562 view=0 index=0 \n\
[17:54:29] relay block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] persist block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] initialize: height=563 view=0 index=2 role=Backup \n\
[17:54:35] OnPrepareRequestReceived: height=563 view=0 index=3 tx=1 \n\
[17:54:35] send perpare response \n\
[17:54:38] OnPrepareResponseReceived: height=563 view=0 index=1 \n\
[17:54:38] relay block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:38] persist block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:38] initialize: height=564 view=0 index=2 role=Backup \n\
[17:54:46] OnPrepareRequestReceived: height=564 view=0 index=0 tx=1 \n\
[17:54:46] send perpare response \n\
[17:54:47] OnPrepareResponseReceived: height=564 view=0 index=1 \n\
[17:54:47] relay block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:47] persist block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:47] OnPrepareResponseReceived: height=564 view=0 index=3 \n\
[17:54:47] initialize: height=565 view=0 index=2 role=Backup \n\
[17:54:53] OnPrepareRequestReceived: height=565 view=0 index=1 tx=1 \n\
[17:54:53] send perpare response \n\
[17:54:54] OnPrepareResponseReceived: height=565 view=0 index=3 \n\
[17:54:54] relay block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:54] persist block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:54] initialize: height=566 view=0 index=2 role=Primary \n\
[17:54:59] timeout: height=566 view=0 state=Primary \n\
[17:54:59] send perpare request: height=566 view=0 \n\
'};

function exdata4(){ return ' [17:53:57] OnPrepareResponseReceived: height=559 view=0 index=1 \n\
[17:53:57] OnPrepareResponseReceived: height=559 view=0 index=2 \n\
[17:53:57] relay block: 0xeab1b4f74b9da38c9d99eb6a09f666abf08a6fc290eccdbc5a0c5773a2dd3f1d \n\
[17:53:57] persist block: 0xeab1b4f74b9da38c9d99eb6a09f666abf08a6fc290eccdbc5a0c5773a2dd3f1d \n\
[17:53:57] initialize: height=560 view=0 index=3 role=Backup \n\
[17:54:05] OnPrepareRequestReceived: height=560 view=0 index=0 tx=1 \n\
[17:54:05] send perpare response \n\
[17:54:06] OnPrepareResponseReceived: height=560 view=0 index=2 \n\
[17:54:06] relay block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:06] persist block: 0xf00672a199d601be6008cbcb19f9ded60e9017d59c1c81fa9a0558b62de0c91a \n\
[17:54:06] initialize: height=561 view=0 index=3 role=Backup \n\
[17:54:12] OnPrepareRequestReceived: height=561 view=0 index=1 tx=1 \n\
[17:54:12] send perpare response \n\
[17:54:16] timeout: height=561 view=0 state=Backup, RequestReceived, SignatureSent \n\
[17:54:16] request change view: height=561 view=0 nv=1 state=Backup, RequestReceived, SignatureSent, ViewChanging \n\
[17:54:18] OnPrepareResponseReceived: height=561 view=0 index=0 \n\
[17:54:18] relay block: 0x61fcd1d36364f111033786d0d8ab067dd1990436883693486d3fdb4ae76ac8f0 \n\
[17:54:18] persist block: 0x61fcd1d36364f111033786d0d8ab067dd1990436883693486d3fdb4ae76ac8f0 \n\
[17:54:18] initialize: height=562 view=0 index=3 role=Backup \n\
[17:54:27] OnPrepareRequestReceived: height=562 view=0 index=2 tx=1 \n\
[17:54:27] send perpare response \n\
[17:54:28] timeout: height=562 view=0 state=Backup, RequestReceived, SignatureSent \n\
[17:54:28] request change view: height=562 view=0 nv=1 state=Backup, RequestReceived, SignatureSent, ViewChanging \n\
[17:54:29] OnPrepareResponseReceived: height=562 view=0 index=1 \n\
[17:54:29] relay block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] persist block: 0x075bb3251d7c62142f7777547831b09db51ed97d2c7cbfa9a621bfc3cef75935 \n\
[17:54:29] initialize: height=563 view=0 index=3 role=Primary \n\
[17:54:34] timeout: height=563 view=0 state=Primary \n\
[17:54:34] send perpare request: height=563 view=0 \n\
[17:54:36] OnPrepareResponseReceived: height=563 view=0 index=2 \n\
[17:54:37] OnPrepareResponseReceived: height=563 view=0 index=1 \n\
[17:54:37] relay block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:37] persist block: 0x1ac54af7c1846a8c6c505f305bed8f78e071537036df1a544da487b50a68e9db \n\
[17:54:37] initialize: height=564 view=0 index=3 role=Backup \n\
[17:54:46] OnPrepareRequestReceived: height=564 view=0 index=0 tx=1 \n\
[17:54:46] send perpare response \n\
[17:54:47] timeout: height=564 view=0 state=Backup, RequestReceived, SignatureSent \n\
[17:54:47] request change view: height=564 view=0 nv=1 state=Backup, RequestReceived, SignatureSent, ViewChanging \n\
[17:54:47] OnPrepareResponseReceived: height=564 view=0 index=1 \n\
[17:54:47] relay block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:47] persist block: 0x0f04651bbd1e3ca9fe0e68adec2197f0d6ae50d3742668245adbf091dfa88988 \n\
[17:54:47] initialize: height=565 view=0 index=3 role=Backup \n\
[17:54:53] OnPrepareRequestReceived: height=565 view=0 index=1 tx=1 \n\
[17:54:53] send perpare response \n\
[17:54:54] OnPrepareResponseReceived: height=565 view=0 index=2 \n\
[17:54:54] relay block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:54] persist block: 0x5e7c007f5e1b6b310345d4d504131e9785fa1aa03366eaa95bbbcd2242f5b7a2 \n\
[17:54:54] initialize: height=566 view=0 index=3 role=Backup \n\
[17:55:00] OnPrepareRequestReceived: height=566 view=0 index=2 tx=1 \n\
[17:55:00] send perpare response \n\
'};

function test_example() {
   return parseLogsGenerateJson(exdata1(), exdata2(), exdata3(), exdata4());
}
