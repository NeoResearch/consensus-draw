var consensus_data = [
   {
    "name": "Timeout_3_8_29",
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
   {
    "name": "Timeout_0_8_29",
    "values": [
      {
         "year": 29.01,
         "position": 0
      },
      {
         "year": 39.01,
         "position": 0
      }
    ]
   },
   {
    "name": "Timeout_0_9_40",
    "values": [
      {
         "year": 40.01, // +0.01
         "position": 0
      },
      {
         "year": 45.01,
         "position": 0
      }
    ]
   },
   {
    "name": "Timeout_3_9_37",
    "values": [
      {
         "year": 37.03,  // +0.01
         "position": 3
      },
      {
         "year": 47.03, // +0.01
         "position": 3
      }
    ]
   },
   {
    "name": "PrepRequest_3_8_2", // cons_id - block_id - cons_id (destination)
    "values": [
      {
         "year": 34.2, // decimal is destination
         "position": 3
      },
      {
         "year": 35.3, // decimal is origin
         "position": 2
      }
    ]
   },
   {
    "name": "PrepRequest_3_8_1", // cons_id - block_id - cons_id (destination)
    "values": [
      {
         "year": 34.1, // decimal is destination
         "position": 3
      },
      {
         "year": 36.3, // decimal is origin
         "position": 1
      }
    ]
   },
   {
    "name": "PrepRequest_3_8_0", // cons_id - block_id - cons_id (destination)
    "values": [
      {
         "year": 34.0, // decimal is destination
         "position": 3
      },
      {
         "year": 39.3, // decimal is origin
         "position": 0
      }
    ]
   },
]

allMessageNames = [];
messageNamesByID = [];
consensus_data.forEach(function(d,i) {
    allMessageNames[i] = d.name;
	messageNamesByID[d.name] = i;
   //console.log("got "+d.name);
});

var colorMessages = d3.scale.ordinal()
		.range(["#FFC600", "#76448E", "#FEC60B", "#FDC710", "#00FF00", "#FCC61B", "#FCC61F", "#FCC523", "#FBC427",
		"#FBC22B", "#FBC02D", "#FBBD2F", "#FBBA31", "#FBB632", "#FBB132", "#FCAC31", "#FCA730", "#FDA12F", "#FD9B2D",
		"#FE952C", "#FE8F2A", "#FF8929", "#FF8428", "#FF7E27", "#FF7927", "#FF7527", "#FF7128", "#FE6E29", "#FE6A2B",
		"#FD682D", "#FC652F", "#FB6330", "#FA6032", "#F95E33", "#F85C34", "#F65A34", "#F55733", "#F35432", "#F15230",
		"#F04F2D", "#EE4B2A", "#EC4827", "#EA4524", "#E84221", "#E63E1F", "#E43B1D", "#E2381C", "#E0351C", "#DD321E",
		"#DB3020", "#D92E25", "#D62C2B", "#D42A31", "#D22939", "#CF2841", "#CD274A", "#CB2754", "#C8275D", "#C62866",
		"#C4296F", "#C22A77", "#BF2C7F", "#BD2E86", "#BB308C", "#B93391", "#B73596", "#B5389A", "#B33B9D", "#B13EA0",
		"#AE41A2", "#AC43A3", "#A946A4", "#A648A4", "#A349A4", "#9F4AA3", "#9B4BA2", "#974BA1", "#934B9F", "#8E4A9D",
		"#8A499A", "#854897", "#804795", "#7B4692", "#76448E", "#71438B", "#6C4188"])
		.domain(allMessageNames);
