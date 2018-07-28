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

function addMsg(x, consensus_id, nodelist=[]) {
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
   }
   idstr = "initialize"; //[03:38:47] initialize: height=59 view=0 index=2 role=Backup
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      role   = y.substring(y.indexOf("role=")+"role=".length, y.lenght).split(" ")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "timeout"; //[03:38:42] timeout: height=58 view=0 state=Primary
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      state  = y.substring(y.indexOf("state=")+"state=".length, y.lenght).split(" ")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "send perpare request"; //[03:38:42] send perpare request: height=58 view=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = consensus_id;
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "send perpare response"; //[03:38:53] send perpare response
   if(y.startsWith(idstr)) {
      index  = consensus_id;
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "OnPrepareResponseReceived"; // [03:38:53] OnPrepareResponseReceived: height=59 view=0 index=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "relay block"; // [03:38:53] relay block: 0x06961a306d717d1507bf11704ebf80d59d7e9d42cd2beb410a5d5e01251fc8ae
   if(y.startsWith(idstr)) {
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "persist block"; // [03:38:53] persist block: 0x06961a306d717d1507bf11704ebf80d59d7e9d42cd2beb410a5d5e01251fc8ae
   if(y.startsWith(idstr)) {
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "request change view"; // [03:39:49] request change view: height=66 view=0 nv=1 state=Backup, ViewChanging
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      nv     = Number(y.substring(y.indexOf("nv=")+"nv=".length, y.lenght).split(" ")[0]);
      state  = y.substring(y.indexOf("state=")+"state=".length, y.lenght).split(" ")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
   idstr = "OnChangeViewReceived"; // [17:54:18] OnChangeViewReceived: height=561 view=0 index=3 nv=1
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      nv     = Number(y.substring(y.indexOf("nv=")+"nv=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, state, role, expected, current, nodes));
   }
};

// find "send" message before "timestamp" on other consensus (k != receiver_id)
function findSendBefore(strid, cnode_lsts, timestamp, receiver_id, height, view) {
   for(cid=0; cid<4; cid++) {
      if(cid != receiver_id) {
         for(i=0; i<cnode_lsts[cid].length; i++) {
            if(cnode_lsts[cid][i].timestamp > timestamp)
               break; // ordered list by timestamp
            if((cnode_lsts[cid][i].idstr == strid) && (cnode_lsts[cid][i].height == height) && (cnode_lsts[cid][i].view == view)) {
               return cnode_lsts[cid][i];
            }
         }
      }
   }
   return null;
};

var i = 0;
node1logs = $("#node1data")[0].value.split("\n");
node1list = [];
for(i=0; i<node1logs.length; i++)
   addMsg(node1logs[i], 0, node1list);

node2logs = $("#node2data")[0].value.split("\n");
node2list = [];
for(i=0; i<node2logs.length; i++)
   addMsg(node2logs[i], 1, node2list);

node3logs = $("#node3data")[0].value.split("\n");
node3list = [];
for(i=0; i<node3logs.length; i++)
   addMsg(node3logs[i], 2, node3list);

node4logs = $("#node4data")[0].value.split("\n");
node4list = [];
for(i=0; i<node4logs.length; i++)
   addMsg(node4logs[i], 3, node4list);

var beginTime = 100000000000;
var endTime = 0;

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
var cnode_lists = [];
cnode_lists.push(node1list);
cnode_lists.push(node2list);
cnode_lists.push(node3list);
cnode_lists.push(node4list);

var cnode_json = [];



for(k=0; k<4; k++) {
   console.log("k="+k);

   for(i=0; i<cnode_lists[k].length; i++) {
      console.log("k="+k+" i="+i);
      if(cnode_lists[k][i].idstr == "initialize") {
         begin_times[k] = cnode_lists[k][i].timestamp;
         continue;
      }
      if(cnode_lists[k][i].idstr == "timeout") {
         var values = [];
         values.push({"year" : begin_times[k]+0.01, "position":k});
         values.push({"year" : cnode_lists[k][i].timestamp+0.01, "position":k});
         if(cnode_lists[k][i].state=="Primary")
            cnode_json.push({"name":"PrimaryTimeout_"+k+"_"+begin_times[k]+"_"+cnode_lists[k][i].timestamp, "values":values});
         else
            cnode_json.push({"name":"Timeout_"+k+"_"+begin_times[k]+"_"+cnode_lists[k][i].timestamp, "values":values});
         continue;
      }

      if(cnode_lists[k][i].idstr == "OnPrepareRequestReceived") {
         console.log("findSendBefore for k="+k+" height="+cnode_lists[k][i].height);
         var sendermsg = findSendBefore("send perpare request", cnode_lists, cnode_lists[k][i].timestamp, k, cnode_lists[k][i].height, cnode_lists[k][i].view);
         sendermsg = null;
         if(!sendermsg) {
            console.log("ERROR! could not find origin of message "+JSON.stringify(cnode_lists[k][i]));
            console.log("i="+i+" next i should be "+(i+1));
            continue;
         }
         /*
         var senderc = sendermsg.index;
         var values = [];
         values.push({"year" : begin_times[k]+0.01, "position":k});
         values.push({"year" : cnode_lists[k][i].timestamp+0.01, "position":k});
         if(cnode_lists[k][i].state=="Primary")
            cnode_json.push({"name":"PrimaryTimeout_"+k+"_"+begin_times[k]+"_"+cnode_lists[k][i].timestamp, "values":values});
         else
            cnode_json.push({"name":"Timeout_"+k+"_"+begin_times[k]+"_"+cnode_lists[k][i].timestamp, "values":values});
         */
         continue;
      }

      // TODO: continue...
   }
}

/*
{
"name": "PrimaryTimeout_3_8_29",
"values": [
   {
      "year": 29.01, // +0.01
      "position": 3
   },
   {
      "year": 34.01, // +0.01
      "position": 3
   }
]
},
*/

// "send perpare response" -> SignAndRelay(context.MakePrepareResponse(context.Signatures[context.MyIndex]));
//
