function LogMsg(timestamp, idstr, height=-1, view=-1, index=-1, tx=-1, nv=-1, status="", role="", expected=-1, current=-1, nodes=-1)
{
   this.timestamp = timestamp;
   this.idstr = idstr;
   this.height = height;
   this.view = view;
   this.index = index;
   this.tx = tx;
   this.nv = nv;
   this.status = status;
   this.role = role;
   this.expected = expected;
   this.current = current;
   this.nodes = nodes;
};

function addMsg(x, nodelist=[]) {
   a = x.substring(1, 9).split(':');
   y = x.substring(10, x.length).trim();
   timestamp = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
   idstr = ""; height = -1; view = -1; index = -1; tx = -1;
   nv = -1; status=""; role=""; expected=-1; current=-1; nodes=-1;
   idstr = "OnPrepareRequestReceived"; // [03:38:53] OnPrepareResponseReceived: height=59 view=0 index=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      tx     = Number(y.substring(y.indexOf("tx=")+"tx=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
   idstr = "initialize"; //[03:38:47] initialize: height=59 view=0 index=2 role=Backup
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      role   = y.substring(y.indexOf("role=")+"role=".length, y.lenght).split(" ")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
   idstr = "timeout"; //[03:38:42] timeout: height=58 view=0 state=Primary
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      state  = y.substring(y.indexOf("state=")+"state=".length, y.lenght).split(" ")[0];
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
   idstr = "send perpare request"; //[03:38:42] send perpare request: height=58 view=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
   idstr = "send perpare response"; //[03:38:53] send perpare response
   if(y.startsWith(idstr)) {
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
   idstr = "OnPrepareResponseReceived"; // [03:38:53] OnPrepareResponseReceived: height=59 view=0 index=0
   if(y.startsWith(idstr)) {
      height = Number(y.substring(y.indexOf("height=")+"height=".length, y.lenght).split(" ")[0]);
      view   = Number(y.substring(y.indexOf("view=")+"view=".length, y.lenght).split(" ")[0]);
      index  = Number(y.substring(y.indexOf("index=")+"index=".length, y.lenght).split(" ")[0]);
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
   idstr = "relay block"; // [03:38:53] relay block: 0x06961a306d717d1507bf11704ebf80d59d7e9d42cd2beb410a5d5e01251fc8ae
   if(y.startsWith(idstr)) {
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
   idstr = "persist block"; // [03:38:53] persist block: 0x06961a306d717d1507bf11704ebf80d59d7e9d42cd2beb410a5d5e01251fc8ae
   if(y.startsWith(idstr)) {
      nodelist.push(new LogMsg(timestamp, idstr, height, view, index, tx, nv, status, role, expected, current, nodes));
   }
};

var i = 0;
node1logs = $("#node1data")[0].value.split("\n");
node1list = [];
for(i=0; i<node1logs.length; i++)
   addMsg(node1logs[i], node1list);

node2logs = $("#node2data")[0].value.split("\n");
node2list = [];
for(i=0; i<node2logs.length; i++)
   addMsg(node2logs[i], node2list);

node3logs = $("#node3data")[0].value.split("\n");
node3list = [];
for(i=0; i<node3logs.length; i++)
   addMsg(node3logs[i], node3list);

node4logs = $("#node4data")[0].value.split("\n");
node4list = [];
for(i=0; i<node4logs.length; i++)
   addMsg(node4logs[i], node4list);

var beginTime = 100000000000;
var endTime = 0;

nodelist = node1list.concat(node2list.concat(node3list.concat(node4list)));
for(i=0; i<nodelist.length; i++) {
   if(nodelist[i].timestamp < beginTime)
      beginTime = nodelist[i].timestamp;
   if(nodelist[i].timestamp > endTime)
      endTime = nodelist[i].timestamp;
}



// "send perpare response" -> SignAndRelay(context.MakePrepareResponse(context.Signatures[context.MyIndex]));
//
