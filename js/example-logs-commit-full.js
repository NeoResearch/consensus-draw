
// ==================================== BEGIN EXAMPLE ============================================

function exdata1() { return ' \n\
[15:00:24.829] OnPrepareResponseReceived: height=1116 view=0 index=1 \n\
[15:00:24.839] send commit \n\
[15:00:24.840] OnPrepareResponseReceived: height=1116 view=0 index=3 \n\
[15:00:24.866] OnCommitReceived: height=1116 view=0 index=3 \n\
[15:00:24.880] OnCommitReceived: height=1116 view=0 index=2 \n\
[15:00:24.908] relay block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.928] persist block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.929] initialize: height=1117 view=0 index=0 role=Backup \n\
[15:00:25.932] OnPrepareRequestReceived: height=1117 view=0 index=1 tx=1 \n\
[15:00:25.942] send prepare response \n\
[15:00:25.950] OnPrepareResponseReceived: height=1117 view=0 index=2 \n\
[15:00:25.952] send commit \n\
[15:00:25.973] OnPrepareResponseReceived: height=1117 view=0 index=3 \n\
[15:00:25.979] OnCommitReceived: height=1117 view=0 index=2 \n\
[15:00:25.994] OnCommitReceived: height=1117 view=0 index=3 \n\
[15:00:26.018] relay block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.078] persist block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.079] initialize: height=1118 view=0 index=0 role=Backup \n\
[15:00:27.036] OnPrepareRequestReceived: height=1118 view=0 index=2 tx=1 \n\
[15:00:27.036] send prepare response \n\
[15:00:27.060] OnPrepareResponseReceived: height=1118 view=0 index=1 \n\
[15:00:27.080] send commit \n\
[15:00:27.092] OnCommitReceived: height=1118 view=0 index=1 \n\
[15:00:27.101] OnCommitReceived: height=1118 view=0 index=2 \n\
[15:00:27.139] relay block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.168] persist block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.168] initialize: height=1119 view=0 index=0 role=Backup \n\
[15:00:28.215] OnPrepareRequestReceived: height=1119 view=0 index=3 tx=1 \n\
[15:00:28.215] send prepare response \n\
[15:00:28.236] OnPrepareResponseReceived: height=1119 view=0 index=1 \n\
[15:00:28.242] send commit \n\
[15:00:28.256] OnCommitReceived: height=1119 view=0 index=3 \n\
[15:00:28.283] OnPrepareResponseReceived: height=1119 view=0 index=2 \n\
[15:00:28.298] OnCommitReceived: height=1119 view=0 index=2 \n\
[15:00:28.326] relay block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.358] persist block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.359] initialize: height=1120 view=0 index=0 role=Primary \n\
[15:00:29.368] timeout: height=1120 view=0 state=Primary \n\
[15:00:29.369] send prepare request: height=1120 view=0 \n\
[15:00:29.390] OnPrepareResponseReceived: height=1120 view=0 index=3 \n\
[15:00:29.400] OnPrepareResponseReceived: height=1120 view=0 index=2 \n\
[15:00:29.414] send commit \n\
[15:00:29.417] OnPrepareResponseReceived: height=1120 view=0 index=1 \n\
[15:00:29.429] OnCommitReceived: height=1120 view=0 index=3 \n\
[15:00:29.441] OnCommitReceived: height=1120 view=0 index=1 \n\
[15:00:29.473] relay block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.523] persist block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.523] initialize: height=1121 view=0 index=0 role=Backup \n\
[15:00:30.525] OnPrepareRequestReceived: height=1121 view=0 index=1 tx=1 \n\
[15:00:30.537] send prepare response \n\
[15:00:30.563] OnPrepareResponseReceived: height=1121 view=0 index=2 \n\
[15:00:30.586] send commit \n\
[15:00:30.590] OnPrepareResponseReceived: height=1121 view=0 index=3 \n\
[15:00:30.602] OnCommitReceived: height=1121 view=0 index=3 \n\
[15:00:30.630] OnCommitReceived: height=1121 view=0 index=2 \n\
[15:00:30.678] relay block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.688] persist block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.692] initialize: height=1122 view=0 index=0 role=Backup \n\
[15:00:31.717] OnPrepareRequestReceived: height=1122 view=0 index=2 tx=1 \n\
[15:00:31.717] send prepare response \n\
[15:00:31.809] OnPrepareResponseReceived: height=1122 view=0 index=3 \n\
[15:00:31.837] send commit \n\
[15:00:31.839] OnCommitReceived: height=1122 view=0 index=3 \n\
[15:00:31.855] OnPrepareResponseReceived: height=1122 view=0 index=1 \n\
[15:00:31.896] OnCommitReceived: height=1122 view=0 index=1 \n\
[15:00:31.901] relay block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:31.928] persist block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:31.928] initialize: height=1123 view=0 index=0 role=Backup \n\
[15:00:33.019] OnPrepareRequestReceived: height=1123 view=0 index=3 tx=1 \n\
[15:00:33.020] send prepare response \n\
[15:00:33.047] OnPrepareResponseReceived: height=1123 view=0 index=1 \n\
[15:00:33.051] send commit \n\
[15:00:33.075] OnPrepareResponseReceived: height=1123 view=0 index=2 \n\
[15:00:33.081] OnCommitReceived: height=1123 view=0 index=1 \n\
[15:00:33.112] OnCommitReceived: height=1123 view=0 index=2 \n\
[15:00:33.181] relay block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.209] persist block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.224] initialize: height=1124 view=0 index=0 role=Primary \n\
[15:00:34.229] timeout: height=1124 view=0 state=Primary \n\
[15:00:34.229] send prepare request: height=1124 view=0 \n\
[15:00:34.243] OnPrepareResponseReceived: height=1124 view=0 index=3 \n\
[15:00:34.264] OnPrepareResponseReceived: height=1124 view=0 index=2 \n\
[15:00:34.270] send commit \n\
[15:00:34.312] OnPrepareResponseReceived: height=1124 view=0 index=1 \n\
[15:00:34.347] OnCommitReceived: height=1124 view=0 index=1 \n\
[15:00:34.357] OnCommitReceived: height=1124 view=0 index=2 \n\
[15:00:34.373] relay block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.406] persist block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.407] initialize: height=1125 view=0 index=0 role=Backup \n\
[15:00:35.443] OnPrepareRequestReceived: height=1125 view=0 index=1 tx=1 \n\
[15:00:35.443] send prepare response \n\
[15:00:35.467] OnPrepareResponseReceived: height=1125 view=0 index=2 \n\
[15:00:35.478] send commit \n\
[15:00:35.505] OnPrepareResponseReceived: height=1125 view=0 index=3 \n\
[15:00:35.546] OnCommitReceived: height=1125 view=0 index=2 \n\
[15:00:35.584] OnCommitReceived: height=1125 view=0 index=3 \n\
[15:00:35.604] relay block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.676] persist block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.679] initialize: height=1126 view=0 index=0 role=Backup \n\
[15:00:36.636] OnPrepareRequestReceived: height=1126 view=0 index=2 tx=1 \n\
[15:00:36.637] send prepare response \n\
[15:00:36.662] OnPrepareResponseReceived: height=1126 view=0 index=1 \n\
[15:00:36.665] send commit \n\
[15:00:36.681] OnCommitReceived: height=1126 view=0 index=2 \n\
[15:00:36.727] OnCommitReceived: height=1126 view=0 index=1 \n\
[15:00:36.821] relay block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:36.869] persist block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:36.873] initialize: height=1127 view=0 index=0 role=Backup \n\
[15:00:37.862] OnPrepareRequestReceived: height=1127 view=0 index=3 tx=1 \n\
[15:00:37.862] send prepare response \n\
[15:00:37.970] OnPrepareResponseReceived: height=1127 view=0 index=2 \n\
[15:00:37.973] send commit \n\
[15:00:38.045] OnCommitReceived: height=1127 view=0 index=2 \n\
[15:00:38.089] OnPrepareResponseReceived: height=1127 view=0 index=1 \n\
[15:00:38.143] OnCommitReceived: height=1127 view=0 index=1 \n\
[15:00:38.197] relay block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.383] persist block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.383] initialize: height=1128 view=0 index=0 role=Primary \n\
[15:00:39.389] timeout: height=1128 view=0 state=Primary \n\
[15:00:39.389] send prepare request: height=1128 view=0 \n\
[15:00:39.409] OnPrepareResponseReceived: height=1128 view=0 index=2 \n\
[15:00:39.454] OnPrepareResponseReceived: height=1128 view=0 index=1 \n\
[15:00:39.489] send commit \n\
[15:00:39.490] OnPrepareResponseReceived: height=1128 view=0 index=3 \n\
[15:00:39.507] OnCommitReceived: height=1128 view=0 index=3 \n\
[15:00:39.539] OnCommitReceived: height=1128 view=0 index=2 \n\
[15:00:39.557] relay block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.570] persist block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.570] initialize: height=1129 view=0 index=0 role=Backup \n\
[15:00:40.563] OnPrepareRequestReceived: height=1129 view=0 index=1 tx=1 \n\
[15:00:40.572] send prepare response \n\
[15:00:40.582] OnPrepareResponseReceived: height=1129 view=0 index=3 \n\
[15:00:40.597] send commit \n\
[15:00:40.612] OnPrepareResponseReceived: height=1129 view=0 index=2 \n\
[15:00:40.656] OnCommitReceived: height=1129 view=0 index=3 \n\
[15:00:40.688] OnCommitReceived: height=1129 view=0 index=1 \n\
[15:00:40.701] relay block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.794] persist block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.795] initialize: height=1130 view=0 index=0 role=Backup \n\
[15:00:41.777] OnPrepareRequestReceived: height=1130 view=0 index=2 tx=1 \n\
[15:00:41.778] send prepare response \n\
[15:00:41.820] OnPrepareResponseReceived: height=1130 view=0 index=3 \n\
[15:00:41.822] send commit \n\
[15:00:41.850] OnCommitReceived: height=1130 view=0 index=3 \n\
[15:00:41.898] OnPrepareResponseReceived: height=1130 view=0 index=1 \n\
[15:00:41.905] OnCommitReceived: height=1130 view=0 index=1 \n\
[15:00:41.989] relay block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:42.041] persist block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:42.041] initialize: height=1131 view=0 index=0 role=Backup \n\
[15:00:42.933] OnPrepareRequestReceived: height=1131 view=0 index=3 tx=1 \n\
[15:00:42.934] send prepare response \n\
[15:00:42.947] OnPrepareResponseReceived: height=1131 view=0 index=1 \n\
[15:00:42.977] send commit \n\
[15:00:42.977] OnPrepareResponseReceived: height=1131 view=0 index=2 \n\
[15:00:42.983] OnCommitReceived: height=1131 view=0 index=3 \n\
[15:00:43.006] OnCommitReceived: height=1131 view=0 index=2 \n\
[15:00:43.038] relay block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.071] persist block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.072] initialize: height=1132 view=0 index=0 role=Primary \n\
[15:00:44.078] timeout: height=1132 view=0 state=Primary \n\
[15:00:44.078] send prepare request: height=1132 view=0 \n\
[15:00:44.113] OnPrepareResponseReceived: height=1132 view=0 index=1 \n\
[15:00:44.146] OnPrepareResponseReceived: height=1132 view=0 index=2 \n\
[15:00:44.148] send commit \n\
[15:00:44.175] OnPrepareResponseReceived: height=1132 view=0 index=3 \n\
[15:00:44.175] OnCommitReceived: height=1132 view=0 index=2 \n\
[15:00:44.189] OnCommitReceived: height=1132 view=0 index=1 \n\
[15:00:44.198] relay block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.239] persist block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.239] initialize: height=1133 view=0 index=0 role=Backup \n\
[15:00:45.245] OnPrepareRequestReceived: height=1133 view=0 index=1 tx=1 \n\
[15:00:45.246] send prepare response \n\
[15:00:45.281] OnPrepareResponseReceived: height=1133 view=0 index=2 \n\
[15:00:45.292] send commit \n\
[15:00:45.315] OnPrepareResponseReceived: height=1133 view=0 index=3 \n\
[15:00:45.335] OnCommitReceived: height=1133 view=0 index=2 \n\
[15:00:45.364] OnCommitReceived: height=1133 view=0 index=1 \n\
[15:00:45.388] relay block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.424] persist block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.425] initialize: height=1134 view=0 index=0 role=Backup \n\
[15:00:46.447] OnPrepareRequestReceived: height=1134 view=0 index=2 tx=1 \n\
[15:00:46.448] send prepare response \n\
[15:00:46.465] OnPrepareResponseReceived: height=1134 view=0 index=1 \n\
[15:00:46.470] send commit \n\
[15:00:46.478] OnPrepareResponseReceived: height=1134 view=0 index=3 \n\
[15:00:46.551] OnCommitReceived: height=1134 view=0 index=3 \n\
[15:00:46.566] OnCommitReceived: height=1134 view=0 index=1 \n\
[15:00:46.607] relay block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.647] persist block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.648] initialize: height=1135 view=0 index=0 role=Backup \n\
[15:00:47.635] OnPrepareRequestReceived: height=1135 view=0 index=3 tx=1 \n\
[15:00:47.635] send prepare response \n\
[15:00:47.669] OnPrepareResponseReceived: height=1135 view=0 index=2 \n\
[15:00:47.670] send commit \n\
[15:00:47.684] OnPrepareResponseReceived: height=1135 view=0 index=1 \n\
[15:00:47.691] OnCommitReceived: height=1135 view=0 index=2 \n\
[15:00:47.707] OnCommitReceived: height=1135 view=0 index=3 \n\
[15:00:47.737] relay block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.755] persist block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.755] initialize: height=1136 view=0 index=0 role=Primary \n\
[15:00:48.759] timeout: height=1136 view=0 state=Primary \n\
[15:00:48.759] send prepare request: height=1136 view=0 \n\
[15:00:48.800] OnPrepareResponseReceived: height=1136 view=0 index=1 \n\
[15:00:48.826] OnPrepareResponseReceived: height=1136 view=0 index=2 \n\
[15:00:48.829] send commit \n\
[15:00:48.854] OnCommitReceived: height=1136 view=0 index=2 \n\
[15:00:48.888] OnPrepareResponseReceived: height=1136 view=0 index=3 \n\
[15:00:48.903] OnCommitReceived: height=1136 view=0 index=3 \n\
[15:00:48.969] relay block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:48.995] persist block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:49.007] initialize: height=1137 view=0 index=0 role=Backup \n\
[15:00:49.968] OnPrepareRequestReceived: height=1137 view=0 index=1 tx=1 \n\
[15:00:49.970] send prepare response \n\
[15:00:49.996] OnPrepareResponseReceived: height=1137 view=0 index=2 \n\
[15:00:50.012] send commit \n\
[15:00:50.017] OnPrepareResponseReceived: height=1137 view=0 index=3 \n\
[15:00:50.080] OnCommitReceived: height=1137 view=0 index=3 \n\
[15:00:50.088] OnCommitReceived: height=1137 view=0 index=1 \n\
[15:00:50.143] relay block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.200] persist block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.202] initialize: height=1138 view=0 index=0 role=Backup \n\
[15:00:51.286] OnPrepareRequestReceived: height=1138 view=0 index=2 tx=1 \n\
[15:00:51.287] send prepare response \n\
[15:00:51.302] OnPrepareResponseReceived: height=1138 view=0 index=3 \n\
[15:00:51.306] send commit \n\
[15:00:51.320] OnPrepareResponseReceived: height=1138 view=0 index=1 \n\
[15:00:51.325] OnCommitReceived: height=1138 view=0 index=1 \n\
[15:00:51.379] OnCommitReceived: height=1138 view=0 index=3 \n\
[15:00:51.407] relay block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.439] persist block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.443] initialize: height=1139 view=0 index=0 role=Backup \n\
[15:00:52.515] OnPrepareRequestReceived: height=1139 view=0 index=3 tx=1 \n\
[15:00:52.525] send prepare response \n\
[15:00:52.552] OnPrepareResponseReceived: height=1139 view=0 index=1 \n\
[15:00:52.554] send commit \n\
[15:00:52.556] OnPrepareResponseReceived: height=1139 view=0 index=2 \n\
[15:00:52.564] OnCommitReceived: height=1139 view=0 index=2 \n\
[15:00:52.573] OnCommitReceived: height=1139 view=0 index=3 \n\
[15:00:52.594] relay block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.619] persist block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.627] initialize: height=1140 view=0 index=0 role=Primary \n\
[15:00:53.628] timeout: height=1140 view=0 state=Primary \n\
[15:00:53.628] send prepare request: height=1140 view=0 \n\
[15:00:53.642] OnPrepareResponseReceived: height=1140 view=0 index=2 \n\
[15:00:53.649] OnPrepareResponseReceived: height=1140 view=0 index=1 \n\
[15:00:53.668] send commit \n\
[15:00:53.680] OnPrepareResponseReceived: height=1140 view=0 index=3 \n\
[15:00:53.699] OnCommitReceived: height=1140 view=0 index=1 \n\
[15:00:53.722] OnCommitReceived: height=1140 view=0 index=2 \n\
[15:00:53.819] relay block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.854] persist block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.855] initialize: height=1141 view=0 index=0 role=Backup \n\
[15:00:54.803] OnPrepareRequestReceived: height=1141 view=0 index=1 tx=1 \n\
[15:00:54.804] send prepare response \n\
[15:00:54.832] OnPrepareResponseReceived: height=1141 view=0 index=2 \n\
[15:00:54.849] send commit \n\
[15:00:54.850] OnPrepareResponseReceived: height=1141 view=0 index=3 \n\
[15:00:54.865] OnCommitReceived: height=1141 view=0 index=2 \n\
[15:00:54.878] OnCommitReceived: height=1141 view=0 index=1 \n\
[15:00:54.915] relay block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:54.930] persist block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:54.930] initialize: height=1142 view=0 index=0 role=Backup \n\
[15:00:56.905] OnPrepareRequestReceived: height=1142 view=0 index=2 tx=1 \n\
[15:00:56.929] send prepare response \n\
[15:00:56.939] timeout: height=1142 view=0 state=Backup, RequestReceived, ResponseSent \n\
[15:00:56.939] request change view: height=1142 view=0 nv=1 state=Backup, RequestReceived, ResponseSent, ViewChanging \n\
[15:00:56.946] OnPrepareResponseReceived: height=1142 view=0 index=1 \n\
[15:00:56.958] send commit \n\
[15:00:56.979] OnPrepareResponseReceived: height=1142 view=0 index=3 \n\
[15:00:56.988] OnCommitReceived: height=1142 view=0 index=1 \n\
[15:00:57.011] OnPrepareResponseReceived: height=1142 view=0 index=3 \n\
[15:00:57.046] OnCommitReceived: height=1142 view=0 index=3 \n\
[15:00:57.061] relay block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.104] persist block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.105] initialize: height=1143 view=0 index=0 role=Backup \n\
[15:00:58.104] OnPrepareRequestReceived: height=1143 view=0 index=3 tx=1 \n\
[15:00:58.129] send prepare response \n\
[15:00:58.162] OnPrepareResponseReceived: height=1143 view=0 index=1 \n\
[15:00:58.199] send commit \n\
[15:00:58.203] OnPrepareResponseReceived: height=1143 view=0 index=2 \n\
[15:00:58.221] OnCommitReceived: height=1143 view=0 index=1 \n\
[15:00:58.226] OnCommitReceived: height=1143 view=0 index=3 \n\
[15:00:58.241] relay block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.302] persist block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.304] initialize: height=1144 view=0 index=0 role=Primary \n\
[15:00:59.308] timeout: height=1144 view=0 state=Primary \n\
[15:00:59.308] send prepare request: height=1144 view=0 \n\
[15:00:59.327] OnPrepareResponseReceived: height=1144 view=0 index=1 \n\
[15:00:59.361] OnPrepareResponseReceived: height=1144 view=0 index=2 \n\
[15:00:59.373] send commit \n\
[15:00:59.385] OnPrepareResponseReceived: height=1144 view=0 index=3 \n\
[15:00:59.401] OnCommitReceived: height=1144 view=0 index=3 \n\
[15:00:59.415] OnCommitReceived: height=1144 view=0 index=2 \n\
[15:00:59.453] relay block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.471] persist block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.471] initialize: height=1145 view=0 index=0 role=Backup \n\
[15:01:00.472] OnPrepareRequestReceived: height=1145 view=0 index=1 tx=1 \n\
[15:01:00.472] send prepare response \n\
[15:01:00.497] OnPrepareResponseReceived: height=1145 view=0 index=3 \n\
[15:01:00.520] send commit \n\
[15:01:00.535] OnPrepareResponseReceived: height=1145 view=0 index=2 \n\
[15:01:00.543] OnCommitReceived: height=1145 view=0 index=1 \n\
[15:01:00.556] OnCommitReceived: height=1145 view=0 index=2 \n\
[15:01:00.573] relay block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.610] persist block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.611] initialize: height=1146 view=0 index=0 role=Backup \n\
[15:01:01.763] OnPrepareRequestReceived: height=1146 view=0 index=2 tx=1 \n\
[15:01:01.764] send prepare response \n\
[15:01:01.810] OnPrepareResponseReceived: height=1146 view=0 index=1 \n\
[15:01:01.813] send commit \n\
[15:01:01.825] OnPrepareResponseReceived: height=1146 view=0 index=3 \n\
[15:01:01.850] OnCommitReceived: height=1146 view=0 index=2 \n\
[15:01:01.897] OnCommitReceived: height=1146 view=0 index=1 \n\
[15:01:01.902] relay block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.952] persist block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.960] initialize: height=1147 view=0 index=0 role=Backup \n\
[15:01:02.983] OnPrepareRequestReceived: height=1147 view=0 index=3 tx=1 \n\
[15:01:02.984] send prepare response \n\
[15:01:02.999] OnPrepareResponseReceived: height=1147 view=0 index=1 \n\
[15:01:03.015] send commit \n\
[15:01:03.027] OnPrepareResponseReceived: height=1147 view=0 index=2 \n\
[15:01:03.033] OnCommitReceived: height=1147 view=0 index=2 \n\
[15:01:03.063] OnCommitReceived: height=1147 view=0 index=1 \n\
[15:01:03.080] relay block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:03.105] persist block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:03.106] initialize: height=1148 view=0 index=0 role=Primary \n\
[15:01:04.108] timeout: height=1148 view=0 state=Primary \n\
[15:01:04.108] send prepare request: height=1148 view=0 \n\
[15:01:04.122] OnPrepareResponseReceived: height=1148 view=0 index=1 \n\
[15:01:04.132] OnPrepareResponseReceived: height=1148 view=0 index=3 \n\
[15:01:04.182] send commit \n\
[15:01:04.199] OnCommitReceived: height=1148 view=0 index=3 \n\
[15:01:04.228] OnCommitReceived: height=1148 view=0 index=1 \n\
[15:01:04.248] relay block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.257] persist block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.257] initialize: height=1149 view=0 index=0 role=Backup \n\
[15:01:05.241] OnPrepareRequestReceived: height=1149 view=0 index=1 tx=1 \n\
[15:01:05.254] send prepare response \n\
[15:01:05.276] OnPrepareResponseReceived: height=1149 view=0 index=2 \n\
[15:01:05.284] send commit \n\
[15:01:05.289] OnCommitReceived: height=1149 view=0 index=2 \n\
[15:01:05.323] OnPrepareResponseReceived: height=1149 view=0 index=3 \n\
[15:01:05.330] OnCommitReceived: height=1149 view=0 index=1 \n\
[15:01:05.379] relay block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.453] persist block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.454] initialize: height=1150 view=0 index=0 role=Backup \n\
[15:01:06.515] OnPrepareRequestReceived: height=1150 view=0 index=2 tx=1 \n\
[15:01:06.515] send prepare response \n\
[15:01:06.533] OnPrepareResponseReceived: height=1150 view=0 index=1 \n\
[15:01:06.539] send commit \n\
[15:01:06.596] OnPrepareResponseReceived: height=1150 view=0 index=3 \n\
[15:01:06.615] OnCommitReceived: height=1150 view=0 index=1 \n\
[15:01:06.628] OnCommitReceived: height=1150 view=0 index=3 \n\
[15:01:06.646] relay block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.672] persist block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.672] initialize: height=1151 view=0 index=0 role=Backup \n\
[15:01:07.703] OnPrepareRequestReceived: height=1151 view=0 index=3 tx=1 \n\
[15:01:07.704] send prepare response \n\
[15:01:07.730] OnPrepareResponseReceived: height=1151 view=0 index=1 \n\
[15:01:07.736] send commit \n\
[15:01:07.752] OnPrepareResponseReceived: height=1151 view=0 index=2 \n\
[15:01:07.773] OnCommitReceived: height=1151 view=0 index=2 \n\
[15:01:07.789] OnCommitReceived: height=1151 view=0 index=1 \n\
[15:01:07.838] relay block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.857] persist block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.857] initialize: height=1152 view=0 index=0 role=Primary \n\
[15:01:08.859] timeout: height=1152 view=0 state=Primary \n\
[15:01:08.859] send prepare request: height=1152 view=0 \n\
[15:01:08.868] OnPrepareResponseReceived: height=1152 view=0 index=3 \n\
[15:01:08.876] OnPrepareResponseReceived: height=1152 view=0 index=1 \n\
[15:01:08.895] send commit \n\
[15:01:08.931] OnPrepareResponseReceived: height=1152 view=0 index=2 \n\
[15:01:08.938] OnCommitReceived: height=1152 view=0 index=2 \n\
[15:01:08.954] OnCommitReceived: height=1152 view=0 index=3 \n\
[15:01:08.972] relay block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.022] persist block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.023] initialize: height=1153 view=0 index=0 role=Backup \n\
[15:01:10.123] OnPrepareRequestReceived: height=1153 view=0 index=1 tx=1 \n\
[15:01:10.129] send prepare response \n\
[15:01:10.161] OnPrepareResponseReceived: height=1153 view=0 index=3 \n\
[15:01:10.184] send commit \n\
[15:01:10.187] OnPrepareResponseReceived: height=1153 view=0 index=2 \n\
[15:01:10.213] OnCommitReceived: height=1153 view=0 index=2 \n\
[15:01:10.233] OnCommitReceived: height=1153 view=0 index=3 \n\
[15:01:10.266] relay block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.297] persist block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.299] initialize: height=1154 view=0 index=0 role=Backup \n\
[15:01:11.330] OnPrepareRequestReceived: height=1154 view=0 index=2 tx=1 \n\
[15:01:11.330] send prepare response \n\
[15:01:11.346] OnPrepareResponseReceived: height=1154 view=0 index=1 \n\
[15:01:11.360] send commit \n\
[15:01:11.394] OnPrepareResponseReceived: height=1154 view=0 index=3 \n\
[15:01:11.399] OnCommitReceived: height=1154 view=0 index=1 \n\
[15:01:11.435] OnCommitReceived: height=1154 view=0 index=3 \n\
[15:01:11.466] relay block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.489] persist block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.489] initialize: height=1155 view=0 index=0 role=Backup \n\
[15:01:12.514] OnPrepareRequestReceived: height=1155 view=0 index=3 tx=1 \n\
[15:01:12.515] send prepare response \n\
[15:01:12.546] OnPrepareResponseReceived: height=1155 view=0 index=2 \n\
[15:01:12.552] send commit \n\
[15:01:12.573] OnPrepareResponseReceived: height=1155 view=0 index=1 \n\
[15:01:12.586] OnCommitReceived: height=1155 view=0 index=1 \n\
[15:01:12.599] OnCommitReceived: height=1155 view=0 index=2 \n\
[15:01:12.637] relay block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.701] persist block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.702] initialize: height=1156 view=0 index=0 role=Primary \n\
[15:01:13.708] timeout: height=1156 view=0 state=Primary \n\
[15:01:13.708] send prepare request: height=1156 view=0 \n\
[15:01:13.727] OnPrepareResponseReceived: height=1156 view=0 index=1 \n\
[15:01:13.753] OnPrepareResponseReceived: height=1156 view=0 index=3 \n\
[15:01:13.766] send commit \n\
[15:01:13.848] OnCommitReceived: height=1156 view=0 index=1 \n\
[15:01:13.902] OnPrepareResponseReceived: height=1156 view=0 index=2 \n\
[15:01:13.923] OnCommitReceived: height=1156 view=0 index=2 \n\
[15:01:13.956] relay block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:13.977] persist block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:13.978] initialize: height=1157 view=0 index=0 role=Backup \n\
[15:01:15.041] OnPrepareRequestReceived: height=1157 view=0 index=1 tx=1 \n\
[15:01:15.042] send prepare response \n\
[15:01:15.054] OnPrepareResponseReceived: height=1157 view=0 index=2 \n\
[15:01:15.056] send commit \n\
[15:01:15.088] OnPrepareResponseReceived: height=1157 view=0 index=3 \n\
[15:01:15.098] OnCommitReceived: height=1157 view=0 index=2 \n\
[15:01:15.111] OnCommitReceived: height=1157 view=0 index=1 \n\
[15:01:15.144] relay block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.181] persist block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.181] initialize: height=1158 view=0 index=0 role=Backup \n\
[15:01:16.214] OnPrepareRequestReceived: height=1158 view=0 index=2 tx=1 \n\
[15:01:16.215] send prepare response \n\
[15:01:16.259] OnPrepareResponseReceived: height=1158 view=0 index=1 \n\
[15:01:16.280] send commit \n\
[15:01:16.292] OnPrepareResponseReceived: height=1158 view=0 index=3 \n\
[15:01:16.303] OnCommitReceived: height=1158 view=0 index=1 \n\
[15:01:16.326] OnCommitReceived: height=1158 view=0 index=2 \n\
[15:01:16.354] relay block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.400] persist block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.400] initialize: height=1159 view=0 index=0 role=Backup \n\
[15:01:17.404] OnPrepareRequestReceived: height=1159 view=0 index=3 tx=1 \n\
[15:01:17.414] send prepare response \n\
[15:01:17.425] OnPrepareResponseReceived: height=1159 view=0 index=1 \n\
[15:01:17.460] send commit \n\
[15:01:17.462] OnPrepareResponseReceived: height=1159 view=0 index=2 \n\
[15:01:17.468] OnCommitReceived: height=1159 view=0 index=1 \n\
[15:01:17.472] OnCommitReceived: height=1159 view=0 index=2 \n\
[15:01:17.484] relay block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.497] persist block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.498] initialize: height=1160 view=0 index=0 role=Primary \n\
[15:01:18.498] timeout: height=1160 view=0 state=Primary \n\
[15:01:18.498] send prepare request: height=1160 view=0 \n\
[15:01:18.552] OnPrepareResponseReceived: height=1160 view=0 index=1 \n\
[15:01:18.582] OnPrepareResponseReceived: height=1160 view=0 index=2 \n\
[15:01:18.588] send commit \n\
[15:01:18.594] OnPrepareResponseReceived: height=1160 view=0 index=3 \n\
[15:01:18.610] OnCommitReceived: height=1160 view=0 index=2 \n\
[15:01:18.628] OnCommitReceived: height=1160 view=0 index=1 \n\
[15:01:18.660] relay block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.688] persist block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.699] initialize: height=1161 view=0 index=0 role=Backup \n\
[15:01:19.682] OnPrepareRequestReceived: height=1161 view=0 index=1 tx=1 \n\
[15:01:19.682] send prepare response \n\
[15:01:19.719] OnPrepareResponseReceived: height=1161 view=0 index=3 \n\
[15:01:19.729] send commit \n\
[15:01:19.729] OnPrepareResponseReceived: height=1161 view=0 index=2 \n\
[15:01:19.774] OnCommitReceived: height=1161 view=0 index=3 \n\
[15:01:19.856] OnCommitReceived: height=1161 view=0 index=2 \n\
[15:01:19.886] relay block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.950] persist block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.951] initialize: height=1162 view=0 index=0 role=Backup \n\
[15:01:20.996] OnPrepareRequestReceived: height=1162 view=0 index=2 tx=1 \n\
[15:01:20.996] send prepare response \n\
[15:01:21.026] OnPrepareResponseReceived: height=1162 view=0 index=3 \n\
[15:01:21.028] send commit \n\
[15:01:21.090] OnCommitReceived: height=1162 view=0 index=3 \n\
[15:01:21.108] OnPrepareResponseReceived: height=1162 view=0 index=1 \n\
[15:01:21.129] OnCommitReceived: height=1162 view=0 index=2 \n\
[15:01:21.179] relay block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.207] persist block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.209] initialize: height=1163 view=0 index=0 role=Backup \n\
[15:01:22.225] OnPrepareRequestReceived: height=1163 view=0 index=3 tx=1 \n\
[15:01:22.227] send prepare response \n\
[15:01:22.261] OnPrepareResponseReceived: height=1163 view=0 index=1 \n\
[15:01:22.264] send commit \n\
[15:01:22.272] OnPrepareResponseReceived: height=1163 view=0 index=2 \n\
[15:01:22.293] OnCommitReceived: height=1163 view=0 index=3 \n\
[15:01:22.305] OnCommitReceived: height=1163 view=0 index=1 \n\
[15:01:22.327] relay block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.375] persist block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.375] initialize: height=1164 view=0 index=0 role=Primary \n\
[15:01:23.379] timeout: height=1164 view=0 state=Primary \n\
[15:01:23.379] send prepare request: height=1164 view=0 \n\
[15:01:23.401] OnPrepareResponseReceived: height=1164 view=0 index=1 \n\
[15:01:23.419] OnPrepareResponseReceived: height=1164 view=0 index=2 \n\
[15:01:23.421] send commit \n\
[15:01:23.471] OnPrepareResponseReceived: height=1164 view=0 index=3 \n\
[15:01:23.491] OnCommitReceived: height=1164 view=0 index=1 \n\
[15:01:23.530] OnCommitReceived: height=1164 view=0 index=2 \n\
[15:01:23.586] relay block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.640] persist block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.641] initialize: height=1165 view=0 index=0 role=Backup \n\
'};

function exdata2() {return ' \n\
[15:00:23.706] initialize: height=1116 view=0 index=1 role=Backup \n\
[15:00:24.755] OnPrepareRequestReceived: height=1116 view=0 index=0 tx=1 \n\
[15:00:24.755] send prepare response \n\
[15:00:24.827] OnPrepareResponseReceived: height=1116 view=0 index=2 \n\
[15:00:24.865] send commit \n\
[15:00:24.867] OnPrepareResponseReceived: height=1116 view=0 index=3 \n\
[15:00:24.882] OnCommitReceived: height=1116 view=0 index=3 \n\
[15:00:24.890] OnCommitReceived: height=1116 view=0 index=2 \n\
[15:00:24.920] relay block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.925] persist block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.926] initialize: height=1117 view=0 index=1 role=Primary \n\
[15:00:25.926] timeout: height=1117 view=0 state=Primary \n\
[15:00:25.927] send prepare request: height=1117 view=0 \n\
[15:00:25.940] OnPrepareResponseReceived: height=1117 view=0 index=2 \n\
[15:00:25.983] OnPrepareResponseReceived: height=1117 view=0 index=0 \n\
[15:00:25.985] send commit \n\
[15:00:26.003] OnPrepareResponseReceived: height=1117 view=0 index=3 \n\
[15:00:26.021] OnCommitReceived: height=1117 view=0 index=0 \n\
[15:00:26.038] OnCommitReceived: height=1117 view=0 index=3 \n\
[15:00:26.101] relay block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.157] persist block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.175] initialize: height=1118 view=0 index=1 role=Backup \n\
[15:00:27.036] OnPrepareRequestReceived: height=1118 view=0 index=2 tx=1 \n\
[15:00:27.037] send prepare response \n\
[15:00:27.052] OnPrepareResponseReceived: height=1118 view=0 index=0 \n\
[15:00:27.055] send commit \n\
[15:00:27.100] OnCommitReceived: height=1118 view=0 index=2 \n\
[15:00:27.110] OnCommitReceived: height=1118 view=0 index=0 \n\
[15:00:27.158] relay block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.227] persist block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.227] initialize: height=1119 view=0 index=1 role=Backup \n\
[15:00:28.213] OnPrepareRequestReceived: height=1119 view=0 index=3 tx=1 \n\
[15:00:28.213] send prepare response \n\
[15:00:28.240] OnPrepareResponseReceived: height=1119 view=0 index=0 \n\
[15:00:28.246] send commit \n\
[15:00:28.281] OnCommitReceived: height=1119 view=0 index=0 \n\
[15:00:28.308] OnCommitReceived: height=1119 view=0 index=3 \n\
[15:00:28.366] relay block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.421] persist block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.424] initialize: height=1120 view=0 index=1 role=Backup \n\
[15:00:29.372] OnPrepareRequestReceived: height=1120 view=0 index=0 tx=1 \n\
[15:00:29.373] send prepare response \n\
[15:00:29.402] OnPrepareResponseReceived: height=1120 view=0 index=3 \n\
[15:00:29.418] send commit \n\
[15:00:29.424] OnPrepareResponseReceived: height=1120 view=0 index=2 \n\
[15:00:29.433] OnCommitReceived: height=1120 view=0 index=3 \n\
[15:00:29.458] OnCommitReceived: height=1120 view=0 index=2 \n\
[15:00:29.492] relay block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.512] persist block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.513] initialize: height=1121 view=0 index=1 role=Primary \n\
[15:00:30.516] timeout: height=1121 view=0 state=Primary \n\
[15:00:30.516] send prepare request: height=1121 view=0 \n\
[15:00:30.557] OnPrepareResponseReceived: height=1121 view=0 index=2 \n\
[15:00:30.574] OnPrepareResponseReceived: height=1121 view=0 index=3 \n\
[15:00:30.577] send commit \n\
[15:00:30.610] OnCommitReceived: height=1121 view=0 index=3 \n\
[15:00:30.630] OnPrepareResponseReceived: height=1121 view=0 index=0 \n\
[15:00:30.641] OnCommitReceived: height=1121 view=0 index=2 \n\
[15:00:30.687] relay block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.745] persist block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.752] initialize: height=1122 view=0 index=1 role=Backup \n\
[15:00:31.726] OnPrepareResponseReceived: height=1122 view=0 index=0 \n\
[15:00:31.786] OnPrepareRequestReceived: height=1122 view=0 index=2 tx=1 \n\
[15:00:31.806] send prepare response \n\
[15:00:31.836] send commit \n\
[15:00:31.836] OnPrepareResponseReceived: height=1122 view=0 index=3 \n\
[15:00:31.848] OnCommitReceived: height=1122 view=0 index=3 \n\
[15:00:31.859] OnCommitReceived: height=1122 view=0 index=0 \n\
[15:00:31.899] relay block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:31.935] persist block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:31.935] initialize: height=1123 view=0 index=1 role=Backup \n\
[15:00:33.016] OnPrepareRequestReceived: height=1123 view=0 index=3 tx=1 \n\
[15:00:33.017] send prepare response \n\
[15:00:33.044] OnPrepareResponseReceived: height=1123 view=0 index=0 \n\
[15:00:33.046] send commit \n\
[15:00:33.058] OnPrepareResponseReceived: height=1123 view=0 index=2 \n\
[15:00:33.079] OnCommitReceived: height=1123 view=0 index=0 \n\
[15:00:33.097] OnCommitReceived: height=1123 view=0 index=2 \n\
[15:00:33.112] relay block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.162] persist block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.163] initialize: height=1124 view=0 index=1 role=Backup \n\
[15:00:34.233] OnPrepareRequestReceived: height=1124 view=0 index=0 tx=1 \n\
[15:00:34.234] send prepare response \n\
[15:00:34.261] OnPrepareResponseReceived: height=1124 view=0 index=3 \n\
[15:00:34.270] send commit \n\
[15:00:34.281] OnCommitReceived: height=1124 view=0 index=0 \n\
[15:00:34.303] OnPrepareResponseReceived: height=1124 view=0 index=2 \n\
[15:00:34.315] OnPrepareResponseReceived: height=1124 view=0 index=2 \n\
[15:00:34.335] OnCommitReceived: height=1124 view=0 index=2 \n\
[15:00:34.354] relay block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.416] persist block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.417] initialize: height=1125 view=0 index=1 role=Primary \n\
[15:00:35.427] timeout: height=1125 view=0 state=Primary \n\
[15:00:35.427] send prepare request: height=1125 view=0 \n\
[15:00:35.447] OnPrepareResponseReceived: height=1125 view=0 index=2 \n\
[15:00:35.506] OnPrepareResponseReceived: height=1125 view=0 index=3 \n\
[15:00:35.528] send commit \n\
[15:00:35.528] OnPrepareResponseReceived: height=1125 view=0 index=0 \n\
[15:00:35.543] OnCommitReceived: height=1125 view=0 index=0 \n\
[15:00:35.557] OnCommitReceived: height=1125 view=0 index=2 \n\
[15:00:35.596] relay block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.621] persist block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.622] initialize: height=1126 view=0 index=1 role=Backup \n\
[15:00:36.636] OnPrepareRequestReceived: height=1126 view=0 index=2 tx=1 \n\
[15:00:36.637] send prepare response \n\
[15:00:36.652] OnPrepareResponseReceived: height=1126 view=0 index=0 \n\
[15:00:36.654] send commit \n\
[15:00:36.717] OnCommitReceived: height=1126 view=0 index=2 \n\
[15:00:36.732] OnCommitReceived: height=1126 view=0 index=0 \n\
[15:00:36.920] relay block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:37.004] persist block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:37.005] initialize: height=1127 view=0 index=1 role=Backup \n\
[15:00:37.857] OnPrepareRequestReceived: height=1127 view=0 index=3 tx=1 \n\
[15:00:37.858] send prepare response \n\
[15:00:37.959] OnPrepareResponseReceived: height=1127 view=0 index=2 \n\
[15:00:37.961] send commit \n\
[15:00:37.997] OnPrepareResponseReceived: height=1127 view=0 index=0 \n\
[15:00:38.075] OnCommitReceived: height=1127 view=0 index=2 \n\
[15:00:38.091] OnCommitReceived: height=1127 view=0 index=0 \n\
[15:00:38.130] relay block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.344] persist block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.345] initialize: height=1128 view=0 index=1 role=Backup \n\
[15:00:39.393] OnPrepareRequestReceived: height=1128 view=0 index=0 tx=1 \n\
[15:00:39.396] send prepare response \n\
[15:00:39.428] OnPrepareResponseReceived: height=1128 view=0 index=2 \n\
[15:00:39.449] send commit \n\
[15:00:39.452] OnPrepareResponseReceived: height=1128 view=0 index=3 \n\
[15:00:39.479] OnCommitReceived: height=1128 view=0 index=3 \n\
[15:00:39.514] OnCommitReceived: height=1128 view=0 index=2 \n\
[15:00:39.529] relay block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.554] persist block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.555] initialize: height=1129 view=0 index=1 role=Primary \n\
[15:00:40.556] timeout: height=1129 view=0 state=Primary \n\
[15:00:40.556] send prepare request: height=1129 view=0 \n\
[15:00:40.583] OnPrepareResponseReceived: height=1129 view=0 index=3 \n\
[15:00:40.617] OnPrepareResponseReceived: height=1129 view=0 index=0 \n\
[15:00:40.642] send commit \n\
[15:00:40.645] OnCommitReceived: height=1129 view=0 index=0 \n\
[15:00:40.670] OnPrepareResponseReceived: height=1129 view=0 index=2 \n\
[15:00:40.677] OnCommitReceived: height=1129 view=0 index=3 \n\
[15:00:40.725] relay block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.786] persist block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.793] initialize: height=1130 view=0 index=1 role=Backup \n\
[15:00:41.779] OnPrepareRequestReceived: height=1130 view=0 index=2 tx=1 \n\
[15:00:41.780] send prepare response \n\
[15:00:41.828] OnPrepareResponseReceived: height=1130 view=0 index=0 \n\
[15:00:41.836] send commit \n\
[15:00:41.856] OnPrepareResponseReceived: height=1130 view=0 index=3 \n\
[15:00:41.871] OnCommitReceived: height=1130 view=0 index=3 \n\
[15:00:41.883] OnCommitReceived: height=1130 view=0 index=0 \n\
[15:00:41.975] relay block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:42.014] persist block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:42.018] initialize: height=1131 view=0 index=1 role=Backup \n\
[15:00:42.933] OnPrepareRequestReceived: height=1131 view=0 index=3 tx=1 \n\
[15:00:42.934] send prepare response \n\
[15:00:42.958] OnPrepareResponseReceived: height=1131 view=0 index=2 \n\
[15:00:42.972] send commit \n\
[15:00:43.002] OnPrepareResponseReceived: height=1131 view=0 index=0 \n\
[15:00:43.015] OnCommitReceived: height=1131 view=0 index=3 \n\
[15:00:43.041] OnCommitReceived: height=1131 view=0 index=0 \n\
[15:00:43.083] relay block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.104] persist block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.105] initialize: height=1132 view=0 index=1 role=Backup \n\
[15:00:44.083] OnPrepareRequestReceived: height=1132 view=0 index=0 tx=1 \n\
[15:00:44.085] send prepare response \n\
[15:00:44.112] OnPrepareResponseReceived: height=1132 view=0 index=2 \n\
[15:00:44.113] send commit \n\
[15:00:44.143] OnPrepareResponseReceived: height=1132 view=0 index=3 \n\
[15:00:44.152] OnCommitReceived: height=1132 view=0 index=2 \n\
[15:00:44.171] OnCommitReceived: height=1132 view=0 index=3 \n\
[15:00:44.204] relay block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.224] persist block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.232] initialize: height=1133 view=0 index=1 role=Primary \n\
[15:00:45.236] timeout: height=1133 view=0 state=Primary \n\
[15:00:45.237] send prepare request: height=1133 view=0 \n\
[15:00:45.251] OnPrepareResponseReceived: height=1133 view=0 index=0 \n\
[15:00:45.311] OnPrepareResponseReceived: height=1133 view=0 index=2 \n\
[15:00:45.312] send commit \n\
[15:00:45.330] OnPrepareResponseReceived: height=1133 view=0 index=3 \n\
[15:00:45.334] OnCommitReceived: height=1133 view=0 index=0 \n\
[15:00:45.354] OnCommitReceived: height=1133 view=0 index=2 \n\
[15:00:45.379] relay block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.386] persist block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.386] initialize: height=1134 view=0 index=1 role=Backup \n\
[15:00:46.445] OnPrepareRequestReceived: height=1134 view=0 index=2 tx=1 \n\
[15:00:46.446] send prepare response \n\
[15:00:46.467] OnPrepareResponseReceived: height=1134 view=0 index=0 \n\
[15:00:46.489] send commit \n\
[15:00:46.490] OnPrepareResponseReceived: height=1134 view=0 index=3 \n\
[15:00:46.506] OnCommitReceived: height=1134 view=0 index=3 \n\
[15:00:46.525] OnCommitReceived: height=1134 view=0 index=0 \n\
[15:00:46.560] relay block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.594] persist block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.595] initialize: height=1135 view=0 index=1 role=Backup \n\
[15:00:47.639] OnPrepareRequestReceived: height=1135 view=0 index=3 tx=1 \n\
[15:00:47.639] send prepare response \n\
[15:00:47.649] OnPrepareResponseReceived: height=1135 view=0 index=2 \n\
[15:00:47.691] send commit \n\
[15:00:47.705] OnPrepareResponseReceived: height=1135 view=0 index=0 \n\
[15:00:47.705] OnCommitReceived: height=1135 view=0 index=0 \n\
[15:00:47.713] OnCommitReceived: height=1135 view=0 index=3 \n\
[15:00:47.810] relay block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.880] persist block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.880] initialize: height=1136 view=0 index=1 role=Backup \n\
[15:00:48.766] OnPrepareRequestReceived: height=1136 view=0 index=0 tx=1 \n\
[15:00:48.767] send prepare response \n\
[15:00:48.786] OnPrepareResponseReceived: height=1136 view=0 index=2 \n\
[15:00:48.832] send commit \n\
[15:00:48.835] OnPrepareResponseReceived: height=1136 view=0 index=3 \n\
[15:00:48.865] OnCommitReceived: height=1136 view=0 index=2 \n\
[15:00:48.877] OnCommitReceived: height=1136 view=0 index=3 \n\
[15:00:48.898] relay block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:48.938] persist block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:48.939] initialize: height=1137 view=0 index=1 role=Primary \n\
[15:00:49.946] timeout: height=1137 view=0 state=Primary \n\
[15:00:49.947] send prepare request: height=1137 view=0 \n\
[15:00:49.973] OnPrepareResponseReceived: height=1137 view=0 index=2 \n\
[15:00:50.010] OnPrepareResponseReceived: height=1137 view=0 index=0 \n\
[15:00:50.029] send commit \n\
[15:00:50.055] OnPrepareResponseReceived: height=1137 view=0 index=3 \n\
[15:00:50.091] OnCommitReceived: height=1137 view=0 index=0 \n\
[15:00:50.110] OnCommitReceived: height=1137 view=0 index=3 \n\
[15:00:50.211] relay block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.299] persist block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.299] initialize: height=1138 view=0 index=1 role=Backup \n\
[15:00:51.287] OnPrepareRequestReceived: height=1138 view=0 index=2 tx=1 \n\
[15:00:51.288] send prepare response \n\
[15:00:51.313] OnPrepareResponseReceived: height=1138 view=0 index=3 \n\
[15:00:51.320] send commit \n\
[15:00:51.328] OnPrepareResponseReceived: height=1138 view=0 index=0 \n\
[15:00:51.348] OnCommitReceived: height=1138 view=0 index=0 \n\
[15:00:51.374] OnCommitReceived: height=1138 view=0 index=3 \n\
[15:00:51.400] relay block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.444] persist block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.445] initialize: height=1139 view=0 index=1 role=Backup \n\
[15:00:52.503] OnPrepareRequestReceived: height=1139 view=0 index=3 tx=1 \n\
[15:00:52.504] send prepare response \n\
[15:00:52.531] OnPrepareResponseReceived: height=1139 view=0 index=2 \n\
[15:00:52.537] send commit \n\
[15:00:52.549] OnCommitReceived: height=1139 view=0 index=2 \n\
[15:00:52.565] OnPrepareResponseReceived: height=1139 view=0 index=0 \n\
[15:00:52.592] OnCommitReceived: height=1139 view=0 index=3 \n\
[15:00:52.646] relay block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.671] persist block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.672] initialize: height=1140 view=0 index=1 role=Backup \n\
[15:00:53.633] OnPrepareRequestReceived: height=1140 view=0 index=0 tx=1 \n\
[15:00:53.634] send prepare response \n\
[15:00:53.657] OnPrepareResponseReceived: height=1140 view=0 index=2 \n\
[15:00:53.664] send commit \n\
[15:00:53.672] OnPrepareResponseReceived: height=1140 view=0 index=3 \n\
[15:00:53.703] OnCommitReceived: height=1140 view=0 index=0 \n\
[15:00:53.716] OnCommitReceived: height=1140 view=0 index=3 \n\
[15:00:53.751] relay block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.786] persist block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.787] initialize: height=1141 view=0 index=1 role=Primary \n\
[15:00:54.796] timeout: height=1141 view=0 state=Primary \n\
[15:00:54.796] send prepare request: height=1141 view=0 \n\
[15:00:54.810] OnPrepareResponseReceived: height=1141 view=0 index=2 \n\
[15:00:54.834] OnPrepareResponseReceived: height=1141 view=0 index=3 \n\
[15:00:54.836] send commit \n\
[15:00:54.855] OnPrepareResponseReceived: height=1141 view=0 index=0 \n\
[15:00:54.909] OnCommitReceived: height=1141 view=0 index=2 \n\
[15:00:54.929] OnCommitReceived: height=1141 view=0 index=0 \n\
[15:00:54.940] relay block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:54.964] persist block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:54.964] initialize: height=1142 view=0 index=1 role=Backup \n\
[15:00:56.906] OnPrepareRequestReceived: height=1142 view=0 index=2 tx=1 \n\
[15:00:56.907] send prepare response \n\
[15:00:56.917] OnPrepareResponseReceived: height=1142 view=0 index=3 \n\
[15:00:56.927] send commit \n\
[15:00:56.944] OnPrepareResponseReceived: height=1142 view=0 index=0 \n\
[15:00:56.966] timeout: height=1142 view=0 state=Backup, RequestReceived, ResponseSent, CommitSent \n\
[15:00:56.985] OnCommitReceived: height=1142 view=0 index=0 \n\
[15:00:56.998] OnCommitReceived: height=1142 view=0 index=3 \n\
[15:00:57.052] relay block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.101] persist block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.101] initialize: height=1143 view=0 index=1 role=Backup \n\
[15:00:58.115] OnPrepareRequestReceived: height=1143 view=0 index=3 tx=1 \n\
[15:00:58.115] send prepare response \n\
[15:00:58.199] OnPrepareResponseReceived: height=1143 view=0 index=2 \n\
[15:00:58.201] send commit \n\
[15:00:58.218] OnPrepareResponseReceived: height=1143 view=0 index=0 \n\
[15:00:58.233] OnCommitReceived: height=1143 view=0 index=0 \n\
[15:00:58.286] OnCommitReceived: height=1143 view=0 index=3 \n\
[15:00:58.304] relay block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.343] persist block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.343] initialize: height=1144 view=0 index=1 role=Backup \n\
[15:00:59.313] OnPrepareRequestReceived: height=1144 view=0 index=0 tx=1 \n\
[15:00:59.314] send prepare response \n\
[15:00:59.336] OnPrepareResponseReceived: height=1144 view=0 index=2 \n\
[15:00:59.341] send commit \n\
[15:00:59.359] OnPrepareResponseReceived: height=1144 view=0 index=3 \n\
[15:00:59.372] OnCommitReceived: height=1144 view=0 index=3 \n\
[15:00:59.385] OnCommitReceived: height=1144 view=0 index=2 \n\
[15:00:59.445] relay block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.456] persist block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.457] initialize: height=1145 view=0 index=1 role=Primary \n\
[15:01:00.467] timeout: height=1145 view=0 state=Primary \n\
[15:01:00.467] send prepare request: height=1145 view=0 \n\
[15:01:00.477] OnPrepareResponseReceived: height=1145 view=0 index=3 \n\
[15:01:00.482] OnPrepareResponseReceived: height=1145 view=0 index=2 \n\
[15:01:00.502] send commit \n\
[15:01:00.540] OnPrepareResponseReceived: height=1145 view=0 index=0 \n\
[15:01:00.560] OnCommitReceived: height=1145 view=0 index=2 \n\
[15:01:00.579] OnCommitReceived: height=1145 view=0 index=0 \n\
[15:01:00.602] relay block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.663] persist block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.663] initialize: height=1146 view=0 index=1 role=Backup \n\
[15:01:01.773] OnPrepareRequestReceived: height=1146 view=0 index=2 tx=1 \n\
[15:01:01.773] send prepare response \n\
[15:01:01.841] OnPrepareResponseReceived: height=1146 view=0 index=3 \n\
[15:01:01.845] send commit \n\
[15:01:01.859] OnCommitReceived: height=1146 view=0 index=2 \n\
[15:01:01.881] OnPrepareResponseReceived: height=1146 view=0 index=0 \n\
[15:01:01.898] OnCommitReceived: height=1146 view=0 index=0 \n\
[15:01:01.929] relay block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.975] persist block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.975] initialize: height=1147 view=0 index=1 role=Backup \n\
[15:01:02.982] OnPrepareRequestReceived: height=1147 view=0 index=3 tx=1 \n\
[15:01:02.983] send prepare response \n\
[15:01:03.013] OnPrepareResponseReceived: height=1147 view=0 index=0 \n\
[15:01:03.034] send commit \n\
[15:01:03.055] OnPrepareResponseReceived: height=1147 view=0 index=2 \n\
[15:01:03.057] OnCommitReceived: height=1147 view=0 index=2 \n\
[15:01:03.082] OnCommitReceived: height=1147 view=0 index=3 \n\
[15:01:03.106] relay block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:03.119] persist block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:03.119] initialize: height=1148 view=0 index=1 role=Backup \n\
[15:01:04.112] OnPrepareRequestReceived: height=1148 view=0 index=0 tx=1 \n\
[15:01:04.112] send prepare response \n\
[15:01:04.139] OnPrepareResponseReceived: height=1148 view=0 index=3 \n\
[15:01:04.141] send commit \n\
[15:01:04.163] OnCommitReceived: height=1148 view=0 index=3 \n\
[15:01:04.190] OnCommitReceived: height=1148 view=0 index=0 \n\
[15:01:04.220] relay block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.232] persist block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.233] initialize: height=1149 view=0 index=1 role=Primary \n\
[15:01:05.236] timeout: height=1149 view=0 state=Primary \n\
[15:01:05.236] send prepare request: height=1149 view=0 \n\
[15:01:05.249] OnPrepareResponseReceived: height=1149 view=0 index=2 \n\
[15:01:05.287] OnPrepareResponseReceived: height=1149 view=0 index=0 \n\
[15:01:05.301] send commit \n\
[15:01:05.316] OnCommitReceived: height=1149 view=0 index=2 \n\
[15:01:05.331] OnCommitReceived: height=1149 view=0 index=0 \n\
[15:01:05.444] relay block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.592] persist block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.602] initialize: height=1150 view=0 index=1 role=Backup \n\
[15:01:06.516] OnPrepareRequestReceived: height=1150 view=0 index=2 tx=1 \n\
[15:01:06.519] send prepare response \n\
[15:01:06.537] OnPrepareResponseReceived: height=1150 view=0 index=0 \n\
[15:01:06.541] send commit \n\
[15:01:06.549] OnPrepareResponseReceived: height=1150 view=0 index=3 \n\
[15:01:06.552] OnCommitReceived: height=1150 view=0 index=0 \n\
[15:01:06.570] OnCommitReceived: height=1150 view=0 index=3 \n\
[15:01:06.581] relay block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.589] persist block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.590] initialize: height=1151 view=0 index=1 role=Backup \n\
[15:01:07.705] OnPrepareRequestReceived: height=1151 view=0 index=3 tx=1 \n\
[15:01:07.705] send prepare response \n\
[15:01:07.715] OnPrepareResponseReceived: height=1151 view=0 index=0 \n\
[15:01:07.716] send commit \n\
[15:01:07.730] OnPrepareResponseReceived: height=1151 view=0 index=2 \n\
[15:01:07.756] OnCommitReceived: height=1151 view=0 index=2 \n\
[15:01:07.789] OnCommitReceived: height=1151 view=0 index=0 \n\
[15:01:07.856] relay block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.896] persist block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.896] initialize: height=1152 view=0 index=1 role=Backup \n\
[15:01:08.867] OnPrepareRequestReceived: height=1152 view=0 index=0 tx=1 \n\
[15:01:08.867] send prepare response \n\
[15:01:08.884] OnPrepareResponseReceived: height=1152 view=0 index=3 \n\
[15:01:08.931] send commit \n\
[15:01:08.931] OnPrepareResponseReceived: height=1152 view=0 index=2 \n\
[15:01:08.955] OnCommitReceived: height=1152 view=0 index=3 \n\
[15:01:08.969] OnCommitReceived: height=1152 view=0 index=0 \n\
[15:01:09.036] relay block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.112] persist block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.112] initialize: height=1153 view=0 index=1 role=Primary \n\
[15:01:10.116] timeout: height=1153 view=0 state=Primary \n\
[15:01:10.116] send prepare request: height=1153 view=0 \n\
[15:01:10.154] OnPrepareResponseReceived: height=1153 view=0 index=3 \n\
[15:01:10.186] OnPrepareResponseReceived: height=1153 view=0 index=2 \n\
[15:01:10.209] send commit \n\
[15:01:10.211] OnCommitReceived: height=1153 view=0 index=3 \n\
[15:01:10.238] OnCommitReceived: height=1153 view=0 index=2 \n\
[15:01:10.266] relay block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.294] persist block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.325] initialize: height=1154 view=0 index=1 role=Backup \n\
[15:01:11.326] OnPrepareRequestReceived: height=1154 view=0 index=2 tx=1 \n\
[15:01:11.326] send prepare response \n\
[15:01:11.339] OnPrepareResponseReceived: height=1154 view=0 index=0 \n\
[15:01:11.354] send commit \n\
[15:01:11.356] OnPrepareResponseReceived: height=1154 view=0 index=3 \n\
[15:01:11.391] OnCommitReceived: height=1154 view=0 index=2 \n\
[15:01:11.416] OnCommitReceived: height=1154 view=0 index=3 \n\
[15:01:11.456] relay block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.485] persist block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.487] initialize: height=1155 view=0 index=1 role=Backup \n\
[15:01:12.513] OnPrepareRequestReceived: height=1155 view=0 index=3 tx=1 \n\
[15:01:12.518] send prepare response \n\
[15:01:12.537] OnPrepareResponseReceived: height=1155 view=0 index=2 \n\
[15:01:12.546] send commit \n\
[15:01:12.577] OnPrepareResponseReceived: height=1155 view=0 index=0 \n\
[15:01:12.625] OnCommitReceived: height=1155 view=0 index=0 \n\
[15:01:12.645] OnCommitReceived: height=1155 view=0 index=3 \n\
[15:01:12.723] relay block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.733] persist block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.737] initialize: height=1156 view=0 index=1 role=Backup \n\
[15:01:13.714] OnPrepareRequestReceived: height=1156 view=0 index=0 tx=1 \n\
[15:01:13.714] send prepare response \n\
[15:01:13.733] OnPrepareResponseReceived: height=1156 view=0 index=3 \n\
[15:01:13.736] send commit \n\
[15:01:13.838] OnPrepareResponseReceived: height=1156 view=0 index=2 \n\
[15:01:13.879] OnCommitReceived: height=1156 view=0 index=0 \n\
[15:01:13.917] OnPrepareResponseReceived: height=1156 view=0 index=2 \n\
[15:01:13.936] OnCommitReceived: height=1156 view=0 index=3 \n\
[15:01:13.972] relay block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:14.027] persist block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:14.027] initialize: height=1157 view=0 index=1 role=Primary \n\
[15:01:15.036] timeout: height=1157 view=0 state=Primary \n\
[15:01:15.036] send prepare request: height=1157 view=0 \n\
[15:01:15.050] OnPrepareResponseReceived: height=1157 view=0 index=0 \n\
[15:01:15.070] OnPrepareResponseReceived: height=1157 view=0 index=2 \n\
[15:01:15.095] send commit \n\
[15:01:15.097] OnCommitReceived: height=1157 view=0 index=0 \n\
[15:01:15.111] OnPrepareResponseReceived: height=1157 view=0 index=3 \n\
[15:01:15.141] OnCommitReceived: height=1157 view=0 index=2 \n\
[15:01:15.189] relay block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.239] persist block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.239] initialize: height=1158 view=0 index=1 role=Backup \n\
[15:01:16.214] OnPrepareRequestReceived: height=1158 view=0 index=2 tx=1 \n\
[15:01:16.215] send prepare response \n\
[15:01:16.234] OnPrepareResponseReceived: height=1158 view=0 index=0 \n\
[15:01:16.236] send commit \n\
[15:01:16.284] OnPrepareResponseReceived: height=1158 view=0 index=3 \n\
[15:01:16.320] OnCommitReceived: height=1158 view=0 index=2 \n\
[15:01:16.335] OnCommitReceived: height=1158 view=0 index=0 \n\
[15:01:16.373] relay block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.387] persist block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.388] initialize: height=1159 view=0 index=1 role=Backup \n\
[15:01:17.402] OnPrepareRequestReceived: height=1159 view=0 index=3 tx=1 \n\
[15:01:17.405] send prepare response \n\
[15:01:17.431] OnPrepareResponseReceived: height=1159 view=0 index=0 \n\
[15:01:17.441] send commit \n\
[15:01:17.457] OnPrepareResponseReceived: height=1159 view=0 index=2 \n\
[15:01:17.466] OnCommitReceived: height=1159 view=0 index=2 \n\
[15:01:17.482] OnCommitReceived: height=1159 view=0 index=0 \n\
[15:01:17.523] relay block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.573] persist block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.573] initialize: height=1160 view=0 index=1 role=Backup \n\
[15:01:18.504] OnPrepareRequestReceived: height=1160 view=0 index=0 tx=1 \n\
[15:01:18.507] send prepare response \n\
[15:01:18.532] OnPrepareResponseReceived: height=1160 view=0 index=2 \n\
[15:01:18.556] send commit \n\
[15:01:18.587] OnPrepareResponseReceived: height=1160 view=0 index=3 \n\
[15:01:18.606] OnCommitReceived: height=1160 view=0 index=2 \n\
[15:01:18.622] OnCommitReceived: height=1160 view=0 index=3 \n\
[15:01:18.661] relay block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.674] persist block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.674] initialize: height=1161 view=0 index=1 role=Primary \n\
[15:01:19.676] timeout: height=1161 view=0 state=Primary \n\
[15:01:19.677] send prepare request: height=1161 view=0 \n\
[15:01:19.707] OnPrepareResponseReceived: height=1161 view=0 index=3 \n\
[15:01:19.726] OnPrepareResponseReceived: height=1161 view=0 index=2 \n\
[15:01:19.787] send commit \n\
[15:01:19.792] OnPrepareResponseReceived: height=1161 view=0 index=0 \n\
[15:01:19.800] OnCommitReceived: height=1161 view=0 index=3 \n\
[15:01:19.825] OnCommitReceived: height=1161 view=0 index=0 \n\
[15:01:19.902] relay block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.911] persist block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.912] initialize: height=1162 view=0 index=1 role=Backup \n\
[15:01:21.028] OnPrepareRequestReceived: height=1162 view=0 index=2 tx=1 \n\
[15:01:21.028] send prepare response \n\
[15:01:21.046] OnPrepareResponseReceived: height=1162 view=0 index=3 \n\
[15:01:21.068] send commit \n\
[15:01:21.069] OnPrepareResponseReceived: height=1162 view=0 index=0 \n\
[15:01:21.087] OnCommitReceived: height=1162 view=0 index=3 \n\
[15:01:21.110] OnCommitReceived: height=1162 view=0 index=2 \n\
[15:01:21.131] relay block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.189] persist block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.190] initialize: height=1163 view=0 index=1 role=Backup \n\
[15:01:22.222] OnPrepareRequestReceived: height=1163 view=0 index=3 tx=1 \n\
[15:01:22.223] send prepare response \n\
[15:01:22.247] OnPrepareResponseReceived: height=1163 view=0 index=2 \n\
[15:01:22.278] send commit \n\
[15:01:22.308] OnPrepareResponseReceived: height=1163 view=0 index=0 \n\
[15:01:22.310] OnCommitReceived: height=1163 view=0 index=0 \n\
[15:01:22.324] OnCommitReceived: height=1163 view=0 index=3 \n\
[15:01:22.374] relay block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.410] persist block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.411] initialize: height=1164 view=0 index=1 role=Backup \n\
[15:01:23.387] OnPrepareRequestReceived: height=1164 view=0 index=0 tx=1 \n\
[15:01:23.389] send prepare response \n\
[15:01:23.407] OnPrepareResponseReceived: height=1164 view=0 index=2 \n\
[15:01:23.412] send commit \n\
[15:01:23.424] OnPrepareResponseReceived: height=1164 view=0 index=3 \n\
[15:01:23.437] OnCommitReceived: height=1164 view=0 index=0 \n\
[15:01:23.470] OnCommitReceived: height=1164 view=0 index=2 \n\
[15:01:23.502] relay block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.544] persist block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.545] initialize: height=1165 view=0 index=1 role=Primary \n\
'};

function exdata3(){return ' \n\
[15:00:23.723] relay block: 0x72116e11457a43d354694a142824559479bf279d9b6928c5dd73a99768f0d757 \n\
[15:00:23.783] persist block: 0x72116e11457a43d354694a142824559479bf279d9b6928c5dd73a99768f0d757 \n\
[15:00:23.784] initialize: height=1116 view=0 index=2 role=Backup \n\
[15:00:24.755] OnPrepareRequestReceived: height=1116 view=0 index=0 tx=1 \n\
[15:00:24.755] send prepare response \n\
[15:00:24.780] OnPrepareResponseReceived: height=1116 view=0 index=1 \n\
[15:00:24.838] send commit \n\
[15:00:24.851] OnPrepareResponseReceived: height=1116 view=0 index=3 \n\
[15:00:24.858] OnCommitReceived: height=1116 view=0 index=3 \n\
[15:00:24.883] OnCommitReceived: height=1116 view=0 index=0 \n\
[15:00:24.903] relay block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.912] persist block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.912] initialize: height=1117 view=0 index=2 role=Backup \n\
[15:00:25.931] OnPrepareRequestReceived: height=1117 view=0 index=1 tx=1 \n\
[15:00:25.932] send prepare response \n\
[15:00:25.946] OnPrepareResponseReceived: height=1117 view=0 index=0 \n\
[15:00:25.954] send commit \n\
[15:00:25.959] OnPrepareResponseReceived: height=1117 view=0 index=3 \n\
[15:00:25.968] OnCommitReceived: height=1117 view=0 index=0 \n\
[15:00:25.977] OnCommitReceived: height=1117 view=0 index=3 \n\
[15:00:26.002] relay block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.020] persist block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.021] initialize: height=1118 view=0 index=2 role=Primary \n\
[15:00:27.031] timeout: height=1118 view=0 state=Primary \n\
[15:00:27.031] send prepare request: height=1118 view=0 \n\
[15:00:27.042] OnPrepareResponseReceived: height=1118 view=0 index=0 \n\
[15:00:27.053] OnPrepareResponseReceived: height=1118 view=0 index=1 \n\
[15:00:27.065] send commit \n\
[15:00:27.075] OnCommitReceived: height=1118 view=0 index=1 \n\
[15:00:27.104] OnPrepareResponseReceived: height=1118 view=0 index=3 \n\
[15:00:27.114] OnCommitReceived: height=1118 view=0 index=0 \n\
[15:00:27.151] relay block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.169] persist block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.176] initialize: height=1119 view=0 index=2 role=Backup \n\
[15:00:28.217] OnPrepareRequestReceived: height=1119 view=0 index=3 tx=1 \n\
[15:00:28.218] send prepare response \n\
[15:00:28.264] OnPrepareResponseReceived: height=1119 view=0 index=1 \n\
[15:00:28.265] send commit \n\
[15:00:28.280] OnPrepareResponseReceived: height=1119 view=0 index=0 \n\
[15:00:28.320] OnCommitReceived: height=1119 view=0 index=3 \n\
[15:00:28.349] OnCommitReceived: height=1119 view=0 index=0 \n\
[15:00:28.373] relay block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.414] persist block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.415] initialize: height=1120 view=0 index=2 role=Backup \n\
[15:00:29.377] OnPrepareRequestReceived: height=1120 view=0 index=0 tx=1 \n\
[15:00:29.385] send prepare response \n\
[15:00:29.405] OnPrepareResponseReceived: height=1120 view=0 index=3 \n\
[15:00:29.414] send commit \n\
[15:00:29.428] OnPrepareResponseReceived: height=1120 view=0 index=1 \n\
[15:00:29.428] OnCommitReceived: height=1120 view=0 index=3 \n\
[15:00:29.455] OnCommitReceived: height=1120 view=0 index=1 \n\
[15:00:29.489] relay block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.516] persist block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.517] initialize: height=1121 view=0 index=2 role=Backup \n\
[15:00:30.521] OnPrepareRequestReceived: height=1121 view=0 index=1 tx=1 \n\
[15:00:30.521] send prepare response \n\
[15:00:30.557] OnPrepareResponseReceived: height=1121 view=0 index=3 \n\
[15:00:30.562] send commit \n\
[15:00:30.582] OnCommitReceived: height=1121 view=0 index=3 \n\
[15:00:30.597] OnPrepareResponseReceived: height=1121 view=0 index=0 \n\
[15:00:30.617] OnCommitReceived: height=1121 view=0 index=0 \n\
[15:00:30.659] relay block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.709] persist block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.710] initialize: height=1122 view=0 index=2 role=Primary \n\
[15:00:31.710] timeout: height=1122 view=0 state=Primary \n\
[15:00:31.710] send prepare request: height=1122 view=0 \n\
[15:00:31.738] OnPrepareResponseReceived: height=1122 view=0 index=0 \n\
[15:00:31.823] OnPrepareResponseReceived: height=1122 view=0 index=3 \n\
[15:00:31.877] send commit \n\
[15:00:31.878] OnCommitReceived: height=1122 view=0 index=3 \n\
[15:00:31.886] OnPrepareResponseReceived: height=1122 view=0 index=1 \n\
[15:00:31.901] OnCommitReceived: height=1122 view=0 index=0 \n\
[15:00:31.916] relay block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:31.944] persist block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:31.945] initialize: height=1123 view=0 index=2 role=Backup \n\
[15:00:33.017] OnPrepareRequestReceived: height=1123 view=0 index=3 tx=1 \n\
[15:00:33.026] send prepare response \n\
[15:00:33.049] OnPrepareResponseReceived: height=1123 view=0 index=0 \n\
[15:00:33.057] send commit \n\
[15:00:33.064] OnPrepareResponseReceived: height=1123 view=0 index=1 \n\
[15:00:33.083] OnCommitReceived: height=1123 view=0 index=1 \n\
[15:00:33.098] OnCommitReceived: height=1123 view=0 index=0 \n\
[15:00:33.134] relay block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.171] persist block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.172] initialize: height=1124 view=0 index=2 role=Backup \n\
[15:00:34.255] OnPrepareRequestReceived: height=1124 view=0 index=0 tx=1 \n\
[15:00:34.256] send prepare response \n\
[15:00:34.262] OnPrepareResponseReceived: height=1124 view=0 index=3 \n\
[15:00:34.304] send commit \n\
[15:00:34.312] OnPrepareResponseReceived: height=1124 view=0 index=1 \n\
[15:00:34.325] OnCommitReceived: height=1124 view=0 index=1 \n\
[15:00:34.344] OnCommitReceived: height=1124 view=0 index=0 \n\
[15:00:34.386] relay block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.421] persist block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.422] initialize: height=1125 view=0 index=2 role=Backup \n\
[15:00:35.431] OnPrepareRequestReceived: height=1125 view=0 index=1 tx=1 \n\
[15:00:35.434] send prepare response \n\
[15:00:35.464] OnPrepareResponseReceived: height=1125 view=0 index=0 \n\
[15:00:35.477] send commit \n\
[15:00:35.502] OnPrepareResponseReceived: height=1125 view=0 index=3 \n\
[15:00:35.509] OnCommitReceived: height=1125 view=0 index=0 \n\
[15:00:35.566] OnCommitReceived: height=1125 view=0 index=3 \n\
[15:00:35.574] relay block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.622] persist block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.622] initialize: height=1126 view=0 index=2 role=Primary \n\
[15:00:36.631] timeout: height=1126 view=0 state=Primary \n\
[15:00:36.631] send prepare request: height=1126 view=0 \n\
[15:00:36.648] OnPrepareResponseReceived: height=1126 view=0 index=0 \n\
[15:00:36.671] OnPrepareResponseReceived: height=1126 view=0 index=1 \n\
[15:00:36.673] send commit \n\
[15:00:36.701] OnCommitReceived: height=1126 view=0 index=0 \n\
[15:00:36.751] OnCommitReceived: height=1126 view=0 index=1 \n\
[15:00:36.774] relay block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:36.915] persist block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:36.920] initialize: height=1127 view=0 index=2 role=Backup \n\
[15:00:37.863] OnPrepareRequestReceived: height=1127 view=0 index=3 tx=1 \n\
[15:00:37.865] send prepare response \n\
[15:00:37.909] OnPrepareResponseReceived: height=1127 view=0 index=0 \n\
[15:00:37.927] send commit \n\
[15:00:37.966] OnPrepareResponseReceived: height=1127 view=0 index=1 \n\
[15:00:38.007] OnCommitReceived: height=1127 view=0 index=1 \n\
[15:00:38.032] OnCommitReceived: height=1127 view=0 index=0 \n\
[15:00:38.131] relay block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.283] persist block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.283] initialize: height=1128 view=0 index=2 role=Backup \n\
[15:00:39.393] OnPrepareRequestReceived: height=1128 view=0 index=0 tx=1 \n\
[15:00:39.393] send prepare response \n\
[15:00:39.418] OnPrepareResponseReceived: height=1128 view=0 index=1 \n\
[15:00:39.421] send commit \n\
[15:00:39.452] OnPrepareResponseReceived: height=1128 view=0 index=3 \n\
[15:00:39.485] OnCommitReceived: height=1128 view=0 index=3 \n\
[15:00:39.508] OnCommitReceived: height=1128 view=0 index=1 \n\
[15:00:39.520] relay block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.574] persist block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.574] initialize: height=1129 view=0 index=2 role=Backup \n\
[15:00:40.584] OnPrepareRequestReceived: height=1129 view=0 index=1 tx=1 \n\
[15:00:40.585] send prepare response \n\
[15:00:40.620] OnPrepareResponseReceived: height=1129 view=0 index=3 \n\
[15:00:40.641] send commit \n\
[15:00:40.643] OnPrepareResponseReceived: height=1129 view=0 index=0 \n\
[15:00:40.653] OnCommitReceived: height=1129 view=0 index=0 \n\
[15:00:40.667] OnCommitReceived: height=1129 view=0 index=3 \n\
[15:00:40.704] relay block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.762] persist block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.767] initialize: height=1130 view=0 index=2 role=Primary \n\
[15:00:41.770] timeout: height=1130 view=0 state=Primary \n\
[15:00:41.770] send prepare request: height=1130 view=0 \n\
[15:00:41.801] OnPrepareResponseReceived: height=1130 view=0 index=0 \n\
[15:00:41.876] OnPrepareResponseReceived: height=1130 view=0 index=3 \n\
[15:00:41.885] send commit \n\
[15:00:41.892] OnCommitReceived: height=1130 view=0 index=3 \n\
[15:00:41.900] OnCommitReceived: height=1130 view=0 index=0 \n\
[15:00:41.921] relay block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:41.975] persist block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:41.976] initialize: height=1131 view=0 index=2 role=Backup \n\
[15:00:42.935] OnPrepareRequestReceived: height=1131 view=0 index=3 tx=1 \n\
[15:00:42.936] send prepare response \n\
[15:00:42.968] OnPrepareResponseReceived: height=1131 view=0 index=1 \n\
[15:00:42.981] send commit \n\
[15:00:42.985] OnPrepareResponseReceived: height=1131 view=0 index=0 \n\
[15:00:43.008] OnCommitReceived: height=1131 view=0 index=0 \n\
[15:00:43.035] OnCommitReceived: height=1131 view=0 index=3 \n\
[15:00:43.073] relay block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.112] persist block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.113] initialize: height=1132 view=0 index=2 role=Backup \n\
[15:00:44.082] OnPrepareRequestReceived: height=1132 view=0 index=0 tx=1 \n\
[15:00:44.103] send prepare response \n\
[15:00:44.126] OnPrepareResponseReceived: height=1132 view=0 index=1 \n\
[15:00:44.130] send commit \n\
[15:00:44.142] OnPrepareResponseReceived: height=1132 view=0 index=3 \n\
[15:00:44.165] OnCommitReceived: height=1132 view=0 index=3 \n\
[15:00:44.182] OnCommitReceived: height=1132 view=0 index=1 \n\
[15:00:44.231] relay block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.258] persist block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.258] initialize: height=1133 view=0 index=2 role=Backup \n\
[15:00:45.250] OnPrepareRequestReceived: height=1133 view=0 index=1 tx=1 \n\
[15:00:45.252] send prepare response \n\
[15:00:45.272] OnPrepareResponseReceived: height=1133 view=0 index=0 \n\
[15:00:45.304] send commit \n\
[15:00:45.344] OnCommitReceived: height=1133 view=0 index=0 \n\
[15:00:45.353] OnPrepareResponseReceived: height=1133 view=0 index=3 \n\
[15:00:45.369] OnCommitReceived: height=1133 view=0 index=1 \n\
[15:00:45.382] relay block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.439] persist block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.440] initialize: height=1134 view=0 index=2 role=Primary \n\
[15:00:46.441] timeout: height=1134 view=0 state=Primary \n\
[15:00:46.441] send prepare request: height=1134 view=0 \n\
[15:00:46.482] OnPrepareResponseReceived: height=1134 view=0 index=1 \n\
[15:00:46.502] OnPrepareResponseReceived: height=1134 view=0 index=0 \n\
[15:00:46.529] send commit \n\
[15:00:46.552] OnPrepareResponseReceived: height=1134 view=0 index=3 \n\
[15:00:46.566] OnCommitReceived: height=1134 view=0 index=3 \n\
[15:00:46.582] OnCommitReceived: height=1134 view=0 index=1 \n\
[15:00:46.601] relay block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.633] persist block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.633] initialize: height=1135 view=0 index=2 role=Backup \n\
[15:00:47.634] OnPrepareRequestReceived: height=1135 view=0 index=3 tx=1 \n\
[15:00:47.635] send prepare response \n\
[15:00:47.644] OnPrepareResponseReceived: height=1135 view=0 index=1 \n\
[15:00:47.670] send commit \n\
[15:00:47.671] OnPrepareResponseReceived: height=1135 view=0 index=0 \n\
[15:00:47.708] OnCommitReceived: height=1135 view=0 index=3 \n\
[15:00:47.748] OnCommitReceived: height=1135 view=0 index=0 \n\
[15:00:47.783] relay block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.850] persist block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.853] initialize: height=1136 view=0 index=2 role=Backup \n\
[15:00:48.765] OnPrepareRequestReceived: height=1136 view=0 index=0 tx=1 \n\
[15:00:48.773] send prepare response \n\
[15:00:48.791] OnPrepareResponseReceived: height=1136 view=0 index=1 \n\
[15:00:48.793] send commit \n\
[15:00:48.813] OnPrepareResponseReceived: height=1136 view=0 index=3 \n\
[15:00:48.836] OnCommitReceived: height=1136 view=0 index=3 \n\
[15:00:48.864] OnCommitReceived: height=1136 view=0 index=0 \n\
[15:00:48.897] relay block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:48.974] persist block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:48.982] initialize: height=1137 view=0 index=2 role=Backup \n\
[15:00:49.962] OnPrepareRequestReceived: height=1137 view=0 index=1 tx=1 \n\
[15:00:49.963] send prepare response \n\
[15:00:49.995] OnPrepareResponseReceived: height=1137 view=0 index=0 \n\
[15:00:50.037] send commit \n\
[15:00:50.072] OnCommitReceived: height=1137 view=0 index=1 \n\
[15:00:50.087] OnCommitReceived: height=1137 view=0 index=0 \n\
[15:00:50.126] relay block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.279] persist block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.305] initialize: height=1138 view=0 index=2 role=Primary \n\
[15:00:51.281] timeout: height=1138 view=0 state=Primary \n\
[15:00:51.281] send prepare request: height=1138 view=0 \n\
[15:00:51.313] OnPrepareResponseReceived: height=1138 view=0 index=0 \n\
[15:00:51.324] OnPrepareResponseReceived: height=1138 view=0 index=3 \n\
[15:00:51.329] send commit \n\
[15:00:51.362] OnPrepareResponseReceived: height=1138 view=0 index=1 \n\
[15:00:51.369] OnCommitReceived: height=1138 view=0 index=0 \n\
[15:00:51.378] OnCommitReceived: height=1138 view=0 index=1 \n\
[15:00:51.414] relay block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.494] persist block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.497] initialize: height=1139 view=0 index=2 role=Backup \n\
[15:00:52.505] OnPrepareRequestReceived: height=1139 view=0 index=3 tx=1 \n\
[15:00:52.514] send prepare response \n\
[15:00:52.523] OnPrepareResponseReceived: height=1139 view=0 index=1 \n\
[15:00:52.528] send commit \n\
[15:00:52.543] OnPrepareResponseReceived: height=1139 view=0 index=0 \n\
[15:00:52.561] OnCommitReceived: height=1139 view=0 index=3 \n\
[15:00:52.570] OnCommitReceived: height=1139 view=0 index=1 \n\
[15:00:52.588] relay block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.679] persist block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.680] initialize: height=1140 view=0 index=2 role=Backup \n\
[15:00:53.636] OnPrepareRequestReceived: height=1140 view=0 index=0 tx=1 \n\
[15:00:53.636] send prepare response \n\
[15:00:53.665] OnPrepareResponseReceived: height=1140 view=0 index=3 \n\
[15:00:53.692] send commit \n\
[15:00:53.701] OnPrepareResponseReceived: height=1140 view=0 index=1 \n\
[15:00:53.712] OnCommitReceived: height=1140 view=0 index=0 \n\
[15:00:53.724] OnCommitReceived: height=1140 view=0 index=1 \n\
[15:00:53.790] relay block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.908] persist block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.909] initialize: height=1141 view=0 index=2 role=Backup \n\
[15:00:54.802] OnPrepareRequestReceived: height=1141 view=0 index=1 tx=1 \n\
[15:00:54.803] send prepare response \n\
[15:00:54.828] OnPrepareResponseReceived: height=1141 view=0 index=0 \n\
[15:00:54.839] send commit \n\
[15:00:54.867] OnPrepareResponseReceived: height=1141 view=0 index=3 \n\
[15:00:54.878] OnCommitReceived: height=1141 view=0 index=0 \n\
[15:00:54.915] OnCommitReceived: height=1141 view=0 index=1 \n\
[15:00:54.923] relay block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:55.894] persist block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:55.894] initialize: height=1142 view=0 index=2 role=Primary \n\
[15:00:56.900] timeout: height=1142 view=0 state=Primary \n\
[15:00:56.900] send prepare request: height=1142 view=0 \n\
[15:00:56.929] OnPrepareResponseReceived: height=1142 view=0 index=1 \n\
[15:00:56.987] OnPrepareResponseReceived: height=1142 view=0 index=3 \n\
[15:00:56.993] send commit \n\
[15:00:57.001] OnPrepareResponseReceived: height=1142 view=0 index=0 \n\
[15:00:57.039] OnCommitReceived: height=1142 view=0 index=1 \n\
[15:00:57.045] OnCommitReceived: height=1142 view=0 index=0 \n\
[15:00:57.058] relay block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.126] persist block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.127] initialize: height=1143 view=0 index=2 role=Backup \n\
[15:00:58.133] OnPrepareRequestReceived: height=1143 view=0 index=3 tx=1 \n\
[15:00:58.136] send prepare response \n\
[15:00:58.173] OnPrepareResponseReceived: height=1143 view=0 index=1 \n\
[15:00:58.209] send commit \n\
[15:00:58.221] OnPrepareResponseReceived: height=1143 view=0 index=0 \n\
[15:00:58.230] OnCommitReceived: height=1143 view=0 index=0 \n\
[15:00:58.247] OnCommitReceived: height=1143 view=0 index=1 \n\
[15:00:58.262] relay block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.322] persist block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.322] initialize: height=1144 view=0 index=2 role=Backup \n\
[15:00:59.320] OnPrepareRequestReceived: height=1144 view=0 index=0 tx=1 \n\
[15:00:59.322] send prepare response \n\
[15:00:59.344] OnPrepareResponseReceived: height=1144 view=0 index=1 \n\
[15:00:59.346] send commit \n\
[15:00:59.362] OnPrepareResponseReceived: height=1144 view=0 index=3 \n\
[15:00:59.373] OnCommitReceived: height=1144 view=0 index=3 \n\
[15:00:59.396] OnCommitReceived: height=1144 view=0 index=1 \n\
[15:00:59.417] relay block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.470] persist block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.471] initialize: height=1145 view=0 index=2 role=Backup \n\
[15:01:00.470] OnPrepareRequestReceived: height=1145 view=0 index=1 tx=1 \n\
[15:01:00.471] send prepare response \n\
[15:01:00.482] OnPrepareResponseReceived: height=1145 view=0 index=3 \n\
[15:01:00.484] send commit \n\
[15:01:00.525] OnPrepareResponseReceived: height=1145 view=0 index=0 \n\
[15:01:00.548] OnCommitReceived: height=1145 view=0 index=1 \n\
[15:01:00.700] OnCommitReceived: height=1145 view=0 index=3 \n\
[15:01:00.710] relay block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.743] persist block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.745] initialize: height=1146 view=0 index=2 role=Primary \n\
[15:01:01.751] timeout: height=1146 view=0 state=Primary \n\
[15:01:01.751] send prepare request: height=1146 view=0 \n\
[15:01:01.786] OnPrepareResponseReceived: height=1146 view=0 index=1 \n\
[15:01:01.808] OnPrepareResponseReceived: height=1146 view=0 index=3 \n\
[15:01:01.812] send commit \n\
[15:01:01.840] OnPrepareResponseReceived: height=1146 view=0 index=0 \n\
[15:01:01.879] OnCommitReceived: height=1146 view=0 index=0 \n\
[15:01:01.890] OnCommitReceived: height=1146 view=0 index=1 \n\
[15:01:01.918] relay block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.961] persist block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.961] initialize: height=1147 view=0 index=2 role=Backup \n\
[15:01:02.984] OnPrepareRequestReceived: height=1147 view=0 index=3 tx=1 \n\
[15:01:02.987] send prepare response \n\
[15:01:02.994] OnPrepareResponseReceived: height=1147 view=0 index=0 \n\
[15:01:03.001] send commit \n\
[15:01:03.002] OnPrepareResponseReceived: height=1147 view=0 index=1 \n\
[15:01:03.035] OnCommitReceived: height=1147 view=0 index=0 \n\
[15:01:03.100] OnCommitReceived: height=1147 view=0 index=1 \n\
[15:01:03.112] relay block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:04.880] persist block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:04.881] initialize: height=1148 view=0 index=2 role=Backup \n\
[15:01:04.887] OnPrepareResponseReceived: height=1148 view=0 index=3 \n\
[15:01:04.899] OnCommitReceived: height=1148 view=0 index=3 \n\
[15:01:04.904] OnPrepareRequestReceived: height=1148 view=0 index=0 tx=1 \n\
[15:01:04.905] send prepare response \n\
[15:01:04.909] send commit \n\
[15:01:04.909] OnCommitReceived: height=1148 view=0 index=0 \n\
[15:01:04.922] relay block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.959] persist block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.962] initialize: height=1149 view=0 index=2 role=Backup \n\
[15:01:05.240] OnPrepareRequestReceived: height=1149 view=0 index=1 tx=1 \n\
[15:01:05.241] send prepare response \n\
[15:01:05.273] OnPrepareResponseReceived: height=1149 view=0 index=0 \n\
[15:01:05.278] send commit \n\
[15:01:05.314] OnCommitReceived: height=1149 view=0 index=0 \n\
[15:01:05.392] OnCommitReceived: height=1149 view=0 index=1 \n\
[15:01:05.416] relay block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.507] persist block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.509] initialize: height=1150 view=0 index=2 role=Primary \n\
[15:01:06.511] timeout: height=1150 view=0 state=Primary \n\
[15:01:06.511] send prepare request: height=1150 view=0 \n\
[15:01:06.520] OnPrepareResponseReceived: height=1150 view=0 index=0 \n\
[15:01:06.566] OnCommitReceived: height=1150 view=0 index=0 \n\
[15:01:06.583] OnPrepareResponseReceived: height=1150 view=0 index=1 \n\
[15:01:06.598] send commit \n\
[15:01:06.612] OnPrepareResponseReceived: height=1150 view=0 index=3 \n\
[15:01:06.627] OnCommitReceived: height=1150 view=0 index=1 \n\
[15:01:06.644] relay block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.717] persist block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.717] initialize: height=1151 view=0 index=2 role=Backup \n\
[15:01:07.705] OnPrepareRequestReceived: height=1151 view=0 index=3 tx=1 \n\
[15:01:07.705] send prepare response \n\
[15:01:07.723] OnPrepareResponseReceived: height=1151 view=0 index=1 \n\
[15:01:07.725] send commit \n\
[15:01:07.757] OnPrepareResponseReceived: height=1151 view=0 index=0 \n\
[15:01:07.781] OnCommitReceived: height=1151 view=0 index=1 \n\
[15:01:07.817] OnCommitReceived: height=1151 view=0 index=0 \n\
[15:01:07.936] relay block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.996] persist block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.996] initialize: height=1152 view=0 index=2 role=Backup \n\
[15:01:08.863] OnPrepareRequestReceived: height=1152 view=0 index=0 tx=1 \n\
[15:01:08.864] send prepare response \n\
[15:01:08.897] OnPrepareResponseReceived: height=1152 view=0 index=3 \n\
[15:01:08.911] send commit \n\
[15:01:08.921] OnPrepareResponseReceived: height=1152 view=0 index=1 \n\
[15:01:08.928] OnCommitReceived: height=1152 view=0 index=0 \n\
[15:01:08.948] OnCommitReceived: height=1152 view=0 index=3 \n\
[15:01:08.991] relay block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.014] persist block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.014] initialize: height=1153 view=0 index=2 role=Backup \n\
[15:01:10.123] OnPrepareRequestReceived: height=1153 view=0 index=1 tx=1 \n\
[15:01:10.124] send prepare response \n\
[15:01:10.138] OnPrepareResponseReceived: height=1153 view=0 index=3 \n\
[15:01:10.144] send commit \n\
[15:01:10.201] OnCommitReceived: height=1153 view=0 index=3 \n\
[15:01:10.237] OnPrepareResponseReceived: height=1153 view=0 index=0 \n\
[15:01:10.252] OnCommitReceived: height=1153 view=0 index=0 \n\
[15:01:10.270] relay block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.314] persist block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.315] initialize: height=1154 view=0 index=2 role=Primary \n\
[15:01:11.320] timeout: height=1154 view=0 state=Primary \n\
[15:01:11.320] send prepare request: height=1154 view=0 \n\
[15:01:11.342] OnPrepareResponseReceived: height=1154 view=0 index=0 \n\
[15:01:11.373] OnPrepareResponseReceived: height=1154 view=0 index=1 \n\
[15:01:11.379] send commit \n\
[15:01:11.384] OnPrepareResponseReceived: height=1154 view=0 index=3 \n\
[15:01:11.396] OnCommitReceived: height=1154 view=0 index=1 \n\
[15:01:11.407] OnCommitReceived: height=1154 view=0 index=3 \n\
[15:01:11.422] relay block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.473] persist block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.473] initialize: height=1155 view=0 index=2 role=Backup \n\
[15:01:12.513] OnPrepareRequestReceived: height=1155 view=0 index=3 tx=1 \n\
[15:01:12.513] send prepare response \n\
[15:01:12.567] OnPrepareResponseReceived: height=1155 view=0 index=0 \n\
[15:01:12.569] send commit \n\
[15:01:12.578] OnPrepareResponseReceived: height=1155 view=0 index=1 \n\
[15:01:12.600] OnCommitReceived: height=1155 view=0 index=0 \n\
[15:01:12.634] OnCommitReceived: height=1155 view=0 index=1 \n\
[15:01:12.654] relay block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.699] persist block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.700] initialize: height=1156 view=0 index=2 role=Backup \n\
[15:01:13.733] OnPrepareRequestReceived: height=1156 view=0 index=0 tx=1 \n\
[15:01:13.733] send prepare response \n\
[15:01:13.779] OnPrepareResponseReceived: height=1156 view=0 index=1 \n\
[15:01:13.816] send commit \n\
[15:01:13.836] OnCommitReceived: height=1156 view=0 index=1 \n\
[15:01:13.884] OnPrepareResponseReceived: height=1156 view=0 index=3 \n\
[15:01:13.898] OnCommitReceived: height=1156 view=0 index=0 \n\
[15:01:13.912] relay block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:13.978] persist block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:13.978] initialize: height=1157 view=0 index=2 role=Backup \n\
[15:01:15.040] OnPrepareRequestReceived: height=1157 view=0 index=1 tx=1 \n\
[15:01:15.041] send prepare response \n\
[15:01:15.052] OnPrepareResponseReceived: height=1157 view=0 index=0 \n\
[15:01:15.091] send commit \n\
[15:01:15.092] OnCommitReceived: height=1157 view=0 index=0 \n\
[15:01:15.100] OnPrepareResponseReceived: height=1157 view=0 index=3 \n\
[15:01:15.112] OnCommitReceived: height=1157 view=0 index=1 \n\
[15:01:15.153] relay block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.201] persist block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.202] initialize: height=1158 view=0 index=2 role=Primary \n\
[15:01:16.210] timeout: height=1158 view=0 state=Primary \n\
[15:01:16.210] send prepare request: height=1158 view=0 \n\
[15:01:16.223] OnPrepareResponseReceived: height=1158 view=0 index=1 \n\
[15:01:16.241] OnPrepareResponseReceived: height=1158 view=0 index=0 \n\
[15:01:16.261] send commit \n\
[15:01:16.263] OnPrepareResponseReceived: height=1158 view=0 index=3 \n\
[15:01:16.303] OnCommitReceived: height=1158 view=0 index=1 \n\
[15:01:16.320] OnCommitReceived: height=1158 view=0 index=3 \n\
[15:01:16.360] relay block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.383] persist block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.383] initialize: height=1159 view=0 index=2 role=Backup \n\
[15:01:17.405] OnPrepareRequestReceived: height=1159 view=0 index=3 tx=1 \n\
[15:01:17.405] send prepare response \n\
[15:01:17.427] OnPrepareResponseReceived: height=1159 view=0 index=1 \n\
[15:01:17.453] send commit \n\
[15:01:17.461] OnPrepareResponseReceived: height=1159 view=0 index=0 \n\
[15:01:17.471] OnCommitReceived: height=1159 view=0 index=1 \n\
[15:01:17.482] OnCommitReceived: height=1159 view=0 index=0 \n\
[15:01:17.527] relay block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.551] persist block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.551] initialize: height=1160 view=0 index=2 role=Backup \n\
[15:01:18.503] OnPrepareRequestReceived: height=1160 view=0 index=0 tx=1 \n\
[15:01:18.504] send prepare response \n\
[15:01:18.529] OnPrepareResponseReceived: height=1160 view=0 index=1 \n\
[15:01:18.546] send commit \n\
[15:01:18.547] OnPrepareResponseReceived: height=1160 view=0 index=3 \n\
[15:01:18.562] OnCommitReceived: height=1160 view=0 index=1 \n\
[15:01:18.581] OnCommitReceived: height=1160 view=0 index=3 \n\
[15:01:18.612] relay block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.717] persist block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.718] initialize: height=1161 view=0 index=2 role=Backup \n\
[15:01:19.683] OnPrepareRequestReceived: height=1161 view=0 index=1 tx=1 \n\
[15:01:19.693] send prepare response \n\
[15:01:19.721] OnPrepareResponseReceived: height=1161 view=0 index=3 \n\
[15:01:19.753] send commit \n\
[15:01:19.753] OnPrepareResponseReceived: height=1161 view=0 index=0 \n\
[15:01:19.829] OnCommitReceived: height=1161 view=0 index=0 \n\
[15:01:19.849] OnCommitReceived: height=1161 view=0 index=3 \n\
[15:01:19.863] relay block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.982] persist block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.985] initialize: height=1162 view=0 index=2 role=Primary \n\
[15:01:20.991] timeout: height=1162 view=0 state=Primary \n\
[15:01:20.991] send prepare request: height=1162 view=0 \n\
[15:01:21.003] OnPrepareResponseReceived: height=1162 view=0 index=3 \n\
[15:01:21.023] OnPrepareResponseReceived: height=1162 view=0 index=0 \n\
[15:01:21.025] send commit \n\
[15:01:21.054] OnCommitReceived: height=1162 view=0 index=3 \n\
[15:01:21.100] OnPrepareResponseReceived: height=1162 view=0 index=1 \n\
[15:01:21.106] OnCommitReceived: height=1162 view=0 index=1 \n\
[15:01:21.120] relay block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.167] persist block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.178] initialize: height=1163 view=0 index=2 role=Backup \n\
[15:01:22.224] OnPrepareRequestReceived: height=1163 view=0 index=3 tx=1 \n\
[15:01:22.225] send prepare response \n\
[15:01:22.260] OnPrepareResponseReceived: height=1163 view=0 index=1 \n\
[15:01:22.278] send commit \n\
[15:01:22.286] OnPrepareResponseReceived: height=1163 view=0 index=0 \n\
[15:01:22.321] OnCommitReceived: height=1163 view=0 index=3 \n\
[15:01:22.354] OnCommitReceived: height=1163 view=0 index=0 \n\
[15:01:22.391] relay block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.404] persist block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.405] initialize: height=1164 view=0 index=2 role=Backup \n\
[15:01:23.386] OnPrepareRequestReceived: height=1164 view=0 index=0 tx=1 \n\
[15:01:23.386] send prepare response \n\
[15:01:23.408] OnPrepareResponseReceived: height=1164 view=0 index=1 \n\
[15:01:23.410] send commit \n\
[15:01:23.425] OnPrepareResponseReceived: height=1164 view=0 index=3 \n\
[15:01:23.445] OnCommitReceived: height=1164 view=0 index=1 \n\
[15:01:23.462] OnCommitReceived: height=1164 view=0 index=0 \n\
[15:01:23.545] relay block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.638] persist block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.639] initialize: height=1165 view=0 index=2 role=Backup \n\
'};

function exdata4(){ return '\n\
[15:00:24.804] OnPrepareResponseReceived: height=1116 view=0 index=2 \n\
[15:00:24.869] OnCommitReceived: height=1116 view=0 index=2 \n\
[15:00:24.889] OnCommitReceived: height=1116 view=0 index=0 \n\
[15:00:24.933] relay block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.940] persist block: 0x70d0b9dbf043572fd351209231ac27019d48376ac3e032686252b2e2cc1b4efd \n\
[15:00:24.973] initialize: height=1117 view=0 index=3 role=Backup \n\
[15:00:25.931] OnPrepareRequestReceived: height=1117 view=0 index=1 tx=1 \n\
[15:00:25.931] send prepare response \n\
[15:00:25.947] OnPrepareResponseReceived: height=1117 view=0 index=2 \n\
[15:00:25.963] send commit \n\
[15:00:25.968] OnPrepareResponseReceived: height=1117 view=0 index=0 \n\
[15:00:26.020] OnCommitReceived: height=1117 view=0 index=2 \n\
[15:00:26.036] OnCommitReceived: height=1117 view=0 index=0 \n\
[15:00:26.054] relay block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.113] persist block: 0xd60625d4eef2f2ba2020bd1eab6142090f3e0cb9170318d3ed48fb26cd79a429 \n\
[15:00:26.115] initialize: height=1118 view=0 index=3 role=Backup \n\
[15:00:27.058] OnPrepareRequestReceived: height=1118 view=0 index=2 tx=1 \n\
[15:00:27.062] send prepare response \n\
[15:00:27.081] OnPrepareResponseReceived: height=1118 view=0 index=1 \n\
[15:00:27.093] send commit \n\
[15:00:27.105] OnPrepareResponseReceived: height=1118 view=0 index=0 \n\
[15:00:27.120] OnCommitReceived: height=1118 view=0 index=1 \n\
[15:00:27.147] OnCommitReceived: height=1118 view=0 index=2 \n\
[15:00:27.176] relay block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.203] persist block: 0x6cc79b8ff3713f1ae62f654e9427acc6718c359382d51748fba4c4129bdfaa25 \n\
[15:00:27.203] initialize: height=1119 view=0 index=3 role=Primary \n\
[15:00:28.208] timeout: height=1119 view=0 state=Primary \n\
[15:00:28.209] send prepare request: height=1119 view=0 \n\
[15:00:28.220] OnPrepareResponseReceived: height=1119 view=0 index=1 \n\
[15:00:28.233] OnPrepareResponseReceived: height=1119 view=0 index=0 \n\
[15:00:28.236] send commit \n\
[15:00:28.264] OnCommitReceived: height=1119 view=0 index=0 \n\
[15:00:28.316] OnPrepareResponseReceived: height=1119 view=0 index=2 \n\
[15:00:28.353] OnCommitReceived: height=1119 view=0 index=2 \n\
[15:00:28.397] relay block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.417] persist block: 0x31696c3df5b4f30591a949e1ff73527631a0455d65e76ee9e84cf03cf5787fbe \n\
[15:00:28.417] initialize: height=1120 view=0 index=3 role=Backup \n\
[15:00:29.376] OnPrepareRequestReceived: height=1120 view=0 index=0 tx=1 \n\
[15:00:29.376] send prepare response \n\
[15:00:29.393] OnPrepareResponseReceived: height=1120 view=0 index=2 \n\
[15:00:29.396] send commit \n\
[15:00:29.419] OnPrepareResponseReceived: height=1120 view=0 index=1 \n\
[15:00:29.428] OnCommitReceived: height=1120 view=0 index=1 \n\
[15:00:29.442] OnCommitReceived: height=1120 view=0 index=2 \n\
[15:00:29.476] relay block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.485] persist block: 0xf731f9bdc870b0eb156ff224dbb415bbe1cf33df7916e9123c5990238aaec5f9 \n\
[15:00:29.507] initialize: height=1121 view=0 index=3 role=Backup \n\
[15:00:30.522] OnPrepareRequestReceived: height=1121 view=0 index=1 tx=1 \n\
[15:00:30.527] send prepare response \n\
[15:00:30.543] OnPrepareResponseReceived: height=1121 view=0 index=2 \n\
[15:00:30.544] send commit \n\
[15:00:30.564] OnPrepareResponseReceived: height=1121 view=0 index=0 \n\
[15:00:30.597] OnCommitReceived: height=1121 view=0 index=2 \n\
[15:00:30.625] OnCommitReceived: height=1121 view=0 index=0 \n\
[15:00:30.644] relay block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.692] persist block: 0x9c09ac6611094788de59687d87c9d1abb462d9e3e32c93e0249d295aa0b83a25 \n\
[15:00:30.695] initialize: height=1122 view=0 index=3 role=Backup \n\
[15:00:31.716] OnPrepareRequestReceived: height=1122 view=0 index=2 tx=1 \n\
[15:00:31.734] send prepare response \n\
[15:00:31.764] OnPrepareResponseReceived: height=1122 view=0 index=0 \n\
[15:00:31.788] send commit \n\
[15:00:31.819] OnPrepareResponseReceived: height=1122 view=0 index=1 \n\
[15:00:31.857] OnCommitReceived: height=1122 view=0 index=1 \n\
[15:00:31.915] OnCommitReceived: height=1122 view=0 index=0 \n\
[15:00:31.959] relay block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:32.003] persist block: 0xcebccde96ab497df0dc55f07772f22306eb02765fa5b63100fa432aab0f2ac4f \n\
[15:00:32.005] initialize: height=1123 view=0 index=3 role=Primary \n\
[15:00:33.009] timeout: height=1123 view=0 state=Primary \n\
[15:00:33.009] send prepare request: height=1123 view=0 \n\
[15:00:33.047] OnPrepareResponseReceived: height=1123 view=0 index=0 \n\
[15:00:33.066] OnPrepareResponseReceived: height=1123 view=0 index=1 \n\
[15:00:33.077] send commit \n\
[15:00:33.082] OnPrepareResponseReceived: height=1123 view=0 index=2 \n\
[15:00:33.093] OnCommitReceived: height=1123 view=0 index=1 \n\
[15:00:33.122] OnCommitReceived: height=1123 view=0 index=0 \n\
[15:00:33.149] relay block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.175] persist block: 0xb0c2a01bdce54a6898dba06f660aeb76474fc105423ef0863531e0cf7ba10d1d \n\
[15:00:33.176] initialize: height=1124 view=0 index=3 role=Backup \n\
[15:00:34.235] OnPrepareRequestReceived: height=1124 view=0 index=0 tx=1 \n\
[15:00:34.235] send prepare response \n\
[15:00:34.281] OnCommitReceived: height=1124 view=0 index=0 \n\
[15:00:34.313] OnPrepareResponseReceived: height=1124 view=0 index=1 \n\
[15:00:34.317] send commit \n\
[15:00:34.331] OnPrepareResponseReceived: height=1124 view=0 index=2 \n\
[15:00:34.344] OnCommitReceived: height=1124 view=0 index=1 \n\
[15:00:34.389] relay block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.417] persist block: 0xa8d4df1ded91166b4fdba35c26a6d405334cb434c1b11135d75b47322243779b \n\
[15:00:34.420] initialize: height=1125 view=0 index=3 role=Backup \n\
[15:00:35.442] OnPrepareRequestReceived: height=1125 view=0 index=1 tx=1 \n\
[15:00:35.446] send prepare response \n\
[15:00:35.480] OnPrepareResponseReceived: height=1125 view=0 index=2 \n\
[15:00:35.504] send commit \n\
[15:00:35.514] OnPrepareResponseReceived: height=1125 view=0 index=0 \n\
[15:00:35.530] OnCommitReceived: height=1125 view=0 index=0 \n\
[15:00:35.543] OnCommitReceived: height=1125 view=0 index=2 \n\
[15:00:35.609] relay block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.630] persist block: 0xad96dbdb936db0a9fedebe007dd9ccb1c0a2780a7ee1dc1899f7af2ac0191b97 \n\
[15:00:35.631] initialize: height=1126 view=0 index=3 role=Backup \n\
[15:00:36.649] OnPrepareResponseReceived: height=1126 view=0 index=0 \n\
[15:00:36.683] OnPrepareResponseReceived: height=1126 view=0 index=1 \n\
[15:00:36.690] OnPrepareRequestReceived: height=1126 view=0 index=2 tx=1 \n\
[15:00:36.691] send prepare response \n\
[15:00:36.745] send commit \n\
[15:00:36.753] OnCommitReceived: height=1126 view=0 index=2 \n\
[15:00:36.759] OnCommitReceived: height=1126 view=0 index=0 \n\
[15:00:36.800] relay block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:36.839] persist block: 0xb7d9b525ca5bb2a8e1955d97035640d86364e0e7ff039a15cbc6c3d950c04259 \n\
[15:00:36.841] initialize: height=1127 view=0 index=3 role=Primary \n\
[15:00:37.848] timeout: height=1127 view=0 state=Primary \n\
[15:00:37.849] send prepare request: height=1127 view=0 \n\
[15:00:37.904] OnPrepareResponseReceived: height=1127 view=0 index=2 \n\
[15:00:37.970] OnPrepareResponseReceived: height=1127 view=0 index=0 \n\
[15:00:37.973] send commit \n\
[15:00:38.008] OnCommitReceived: height=1127 view=0 index=2 \n\
[15:00:38.039] OnPrepareResponseReceived: height=1127 view=0 index=1 \n\
[15:00:38.163] OnCommitReceived: height=1127 view=0 index=1 \n\
[15:00:38.240] relay block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.326] persist block: 0x4a7e4af8b3eebca3fb12a551c0bedd8c9c5d64faf41468497eed8e27b1716dda \n\
[15:00:38.330] initialize: height=1128 view=0 index=3 role=Backup \n\
[15:00:39.400] OnPrepareRequestReceived: height=1128 view=0 index=0 tx=1 \n\
[15:00:39.401] send prepare response \n\
[15:00:39.440] OnPrepareResponseReceived: height=1128 view=0 index=2 \n\
[15:00:39.442] send commit \n\
[15:00:39.480] OnPrepareResponseReceived: height=1128 view=0 index=1 \n\
[15:00:39.490] OnPrepareResponseReceived: height=1128 view=0 index=1 \n\
[15:00:39.498] OnCommitReceived: height=1128 view=0 index=2 \n\
[15:00:39.522] OnCommitReceived: height=1128 view=0 index=1 \n\
[15:00:39.542] relay block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.574] persist block: 0x475a24d695c28ae5b6e5a7a305ac87ae58169cd4bc00215b93beb515794a61f4 \n\
[15:00:39.574] initialize: height=1129 view=0 index=3 role=Backup \n\
[15:00:40.561] OnPrepareRequestReceived: height=1129 view=0 index=1 tx=1 \n\
[15:00:40.561] send prepare response \n\
[15:00:40.581] OnPrepareResponseReceived: height=1129 view=0 index=0 \n\
[15:00:40.589] send commit \n\
[15:00:40.646] OnCommitReceived: height=1129 view=0 index=0 \n\
[15:00:40.681] OnPrepareResponseReceived: height=1129 view=0 index=2 \n\
[15:00:40.755] OnCommitReceived: height=1129 view=0 index=2 \n\
[15:00:40.782] relay block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.865] persist block: 0xa29993f75089caab821634e2a79b80c251cecea5098361f41bc7fece4319773d \n\
[15:00:40.865] initialize: height=1130 view=0 index=3 role=Backup \n\
[15:00:41.778] OnPrepareRequestReceived: height=1130 view=0 index=2 tx=1 \n\
[15:00:41.799] send prepare response \n\
[15:00:41.802] OnPrepareResponseReceived: height=1130 view=0 index=0 \n\
[15:00:41.813] send commit \n\
[15:00:41.837] OnCommitReceived: height=1130 view=0 index=0 \n\
[15:00:41.858] OnPrepareResponseReceived: height=1130 view=0 index=1 \n\
[15:00:41.872] OnCommitReceived: height=1130 view=0 index=1 \n\
[15:00:41.897] relay block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:41.919] persist block: 0xcb6aaff5e860e9b82b046c1aa4a241d2acf66895bcd100b143d7252429683430 \n\
[15:00:41.919] initialize: height=1131 view=0 index=3 role=Primary \n\
[15:00:42.929] timeout: height=1131 view=0 state=Primary \n\
[15:00:42.929] send prepare request: height=1131 view=0 \n\
[15:00:42.940] OnPrepareResponseReceived: height=1131 view=0 index=1 \n\
[15:00:42.948] OnPrepareResponseReceived: height=1131 view=0 index=2 \n\
[15:00:42.954] send commit \n\
[15:00:42.964] OnPrepareResponseReceived: height=1131 view=0 index=0 \n\
[15:00:43.014] OnCommitReceived: height=1131 view=0 index=0 \n\
[15:00:43.033] OnCommitReceived: height=1131 view=0 index=2 \n\
[15:00:43.054] relay block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.096] persist block: 0xe46f6796274e3e1a254d99b5d4a31965b755a6c63984d81ba1f85913bc947cca \n\
[15:00:43.096] initialize: height=1132 view=0 index=3 role=Backup \n\
[15:00:44.087] OnPrepareRequestReceived: height=1132 view=0 index=0 tx=1 \n\
[15:00:44.111] send prepare response \n\
[15:00:44.120] OnPrepareResponseReceived: height=1132 view=0 index=1 \n\
[15:00:44.127] send commit \n\
[15:00:44.132] OnPrepareResponseReceived: height=1132 view=0 index=2 \n\
[15:00:44.144] OnCommitReceived: height=1132 view=0 index=2 \n\
[15:00:44.166] OnCommitReceived: height=1132 view=0 index=1 \n\
[15:00:44.225] relay block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.264] persist block: 0x3e75337e58fe7ff20d032c6f2ed83ead8af4c81b9197c966b2742a3c825ec82d \n\
[15:00:44.264] initialize: height=1133 view=0 index=3 role=Backup \n\
[15:00:45.244] OnPrepareRequestReceived: height=1133 view=0 index=1 tx=1 \n\
[15:00:45.259] send prepare response \n\
[15:00:45.285] OnPrepareResponseReceived: height=1133 view=0 index=0 \n\
[15:00:45.356] send commit \n\
[15:00:45.379] OnPrepareResponseReceived: height=1133 view=0 index=2 \n\
[15:00:45.379] OnPrepareResponseReceived: height=1133 view=0 index=2 \n\
[15:00:45.383] OnCommitReceived: height=1133 view=0 index=0 \n\
[15:00:45.393] OnCommitReceived: height=1133 view=0 index=2 \n\
[15:00:45.409] relay block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.431] persist block: 0x2e954b94e169ac93e3c72675c919f0e61076bea19fb67b704e02146ddefe0624 \n\
[15:00:45.431] initialize: height=1134 view=0 index=3 role=Backup \n\
[15:00:46.460] OnPrepareRequestReceived: height=1134 view=0 index=2 tx=1 \n\
[15:00:46.461] send prepare response \n\
[15:00:46.471] OnPrepareResponseReceived: height=1134 view=0 index=1 \n\
[15:00:46.473] send commit \n\
[15:00:46.514] OnPrepareResponseReceived: height=1134 view=0 index=0 \n\
[15:00:46.525] OnCommitReceived: height=1134 view=0 index=1 \n\
[15:00:46.541] OnCommitReceived: height=1134 view=0 index=0 \n\
[15:00:46.603] relay block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.625] persist block: 0xce3d6be22319fead58fe0c9cb356fca22307585ada9ae385945de922bb8b5979 \n\
[15:00:46.626] initialize: height=1135 view=0 index=3 role=Primary \n\
[15:00:47.629] timeout: height=1135 view=0 state=Primary \n\
[15:00:47.629] send prepare request: height=1135 view=0 \n\
[15:00:47.642] OnPrepareResponseReceived: height=1135 view=0 index=2 \n\
[15:00:47.654] OnPrepareResponseReceived: height=1135 view=0 index=1 \n\
[15:00:47.668] send commit \n\
[15:00:47.712] OnPrepareResponseReceived: height=1135 view=0 index=0 \n\
[15:00:47.743] OnCommitReceived: height=1135 view=0 index=2 \n\
[15:00:47.764] OnCommitReceived: height=1135 view=0 index=1 \n\
[15:00:47.828] relay block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.846] persist block: 0xa54c707aacf4433ccd36094cd854f31870f9985b17c8a736651aa7e505528b2e \n\
[15:00:47.848] initialize: height=1136 view=0 index=3 role=Backup \n\
[15:00:48.768] OnPrepareRequestReceived: height=1136 view=0 index=0 tx=1 \n\
[15:00:48.769] send prepare response \n\
[15:00:48.792] OnPrepareResponseReceived: height=1136 view=0 index=1 \n\
[15:00:48.794] send commit \n\
[15:00:48.805] OnPrepareResponseReceived: height=1136 view=0 index=2 \n\
[15:00:48.821] OnCommitReceived: height=1136 view=0 index=2 \n\
[15:00:48.864] OnCommitReceived: height=1136 view=0 index=1 \n\
[15:00:48.896] relay block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:48.911] persist block: 0x180503f9eeab07894b6924304dbe0fea2e2ea37874872e6b750aca91e9928944 \n\
[15:00:48.940] initialize: height=1137 view=0 index=3 role=Backup \n\
[15:00:49.961] OnPrepareRequestReceived: height=1137 view=0 index=1 tx=1 \n\
[15:00:49.977] send prepare response \n\
[15:00:50.004] OnPrepareResponseReceived: height=1137 view=0 index=2 \n\
[15:00:50.012] send commit \n\
[15:00:50.048] OnPrepareResponseReceived: height=1137 view=0 index=0 \n\
[15:00:50.125] OnCommitReceived: height=1137 view=0 index=0 \n\
[15:00:50.146] OnCommitReceived: height=1137 view=0 index=1 \n\
[15:00:50.216] relay block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.286] persist block: 0x744926746249a3cfa495714361d410f63ed0bcaaece84b0cce6ca1af0b3da81a \n\
[15:00:50.286] initialize: height=1138 view=0 index=3 role=Backup \n\
[15:00:51.286] OnPrepareRequestReceived: height=1138 view=0 index=2 tx=1 \n\
[15:00:51.287] send prepare response \n\
[15:00:51.309] OnPrepareResponseReceived: height=1138 view=0 index=0 \n\
[15:00:51.313] send commit \n\
[15:00:51.343] OnPrepareResponseReceived: height=1138 view=0 index=1 \n\
[15:00:51.352] OnCommitReceived: height=1138 view=0 index=0 \n\
[15:00:51.383] OnCommitReceived: height=1138 view=0 index=1 \n\
[15:00:51.412] relay block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.489] persist block: 0xda0e39b8455aead78b46c00b53941edc838dd2a0806141c2bc47a7199b495245 \n\
[15:00:51.489] initialize: height=1139 view=0 index=3 role=Primary \n\
[15:00:52.498] timeout: height=1139 view=0 state=Primary \n\
[15:00:52.499] send prepare request: height=1139 view=0 \n\
[15:00:52.519] OnPrepareResponseReceived: height=1139 view=0 index=1 \n\
[15:00:52.528] OnPrepareResponseReceived: height=1139 view=0 index=2 \n\
[15:00:52.536] send commit \n\
[15:00:52.577] OnCommitReceived: height=1139 view=0 index=2 \n\
[15:00:52.583] OnPrepareResponseReceived: height=1139 view=0 index=0 \n\
[15:00:52.598] OnCommitReceived: height=1139 view=0 index=1 \n\
[15:00:52.629] relay block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.659] persist block: 0x9389d9cda4612eadca03c38b4cf08c33ce73a5fb2fb67e30dadd49189e7a17c4 \n\
[15:00:52.660] initialize: height=1140 view=0 index=3 role=Backup \n\
[15:00:53.643] OnPrepareRequestReceived: height=1140 view=0 index=0 tx=1 \n\
[15:00:53.644] send prepare response \n\
[15:00:53.678] OnPrepareResponseReceived: height=1140 view=0 index=2 \n\
[15:00:53.685] send commit \n\
[15:00:53.694] OnPrepareResponseReceived: height=1140 view=0 index=1 \n\
[15:00:53.716] OnCommitReceived: height=1140 view=0 index=0 \n\
[15:00:53.733] OnCommitReceived: height=1140 view=0 index=1 \n\
[15:00:53.780] relay block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.804] persist block: 0x5b9d56d9951cfea625ad7947f73e2cf5649183d5a3e68b9dca8ee194a4b0076a \n\
[15:00:53.806] initialize: height=1141 view=0 index=3 role=Backup \n\
[15:00:54.802] OnPrepareRequestReceived: height=1141 view=0 index=1 tx=1 \n\
[15:00:54.803] send prepare response \n\
[15:00:54.846] OnPrepareResponseReceived: height=1141 view=0 index=2 \n\
[15:00:54.848] send commit \n\
[15:00:54.865] OnPrepareResponseReceived: height=1141 view=0 index=0 \n\
[15:00:54.938] OnCommitReceived: height=1141 view=0 index=2 \n\
[15:00:54.952] OnCommitReceived: height=1141 view=0 index=1 \n\
[15:00:54.969] relay block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:55.006] persist block: 0x75f0c5aa1cd3a1802a4cbb1071deac4e13cea8cbdc04b1bb72153a6de4b465c6 \n\
[15:00:55.008] initialize: height=1142 view=0 index=3 role=Backup \n\
[15:00:56.904] OnPrepareRequestReceived: height=1142 view=0 index=2 tx=1 \n\
[15:00:56.904] send prepare response \n\
[15:00:56.947] OnPrepareResponseReceived: height=1142 view=0 index=1 \n\
[15:00:56.979] send commit \n\
[15:00:56.998] OnPrepareResponseReceived: height=1142 view=0 index=0 \n\
[15:00:56.998] OnCommitReceived: height=1142 view=0 index=1 \n\
[15:00:57.021] timeout: height=1142 view=0 state=Backup, RequestReceived, ResponseSent, CommitSent \n\
[15:00:57.038] OnCommitReceived: height=1142 view=0 index=0 \n\
[15:00:57.072] relay block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.095] persist block: 0x0163de493ac123101cc00ab3fe6d57a3dccf16aae0e71de98bccd28ebbf90306 \n\
[15:00:57.096] initialize: height=1143 view=0 index=3 role=Primary \n\
[15:00:58.098] timeout: height=1143 view=0 state=Primary \n\
[15:00:58.099] send prepare request: height=1143 view=0 \n\
[15:00:58.167] OnPrepareResponseReceived: height=1143 view=0 index=1 \n\
[15:00:58.182] OnPrepareResponseReceived: height=1143 view=0 index=2 \n\
[15:00:58.196] send commit \n\
[15:00:58.215] OnPrepareResponseReceived: height=1143 view=0 index=0 \n\
[15:00:58.241] OnCommitReceived: height=1143 view=0 index=0 \n\
[15:00:58.247] OnCommitReceived: height=1143 view=0 index=1 \n\
[15:00:58.290] relay block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.303] persist block: 0x9cafdbf8cb4d1573d36ce2ffe07f5f41e82d86e4a53e007fff0b0cad61643293 \n\
[15:00:58.303] initialize: height=1144 view=0 index=3 role=Backup \n\
[15:00:59.327] OnPrepareRequestReceived: height=1144 view=0 index=0 tx=1 \n\
[15:00:59.335] send prepare response \n\
[15:00:59.343] OnPrepareResponseReceived: height=1144 view=0 index=1 \n\
[15:00:59.345] send commit \n\
[15:00:59.362] OnPrepareResponseReceived: height=1144 view=0 index=2 \n\
[15:00:59.372] OnCommitReceived: height=1144 view=0 index=1 \n\
[15:00:59.391] OnCommitReceived: height=1144 view=0 index=2 \n\
[15:00:59.425] relay block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.461] persist block: 0xfd363a561579b69e449cc32af475bfe810f21d36e4dc9d631990b53ee1eeee95 \n\
[15:00:59.461] initialize: height=1145 view=0 index=3 role=Backup \n\
[15:01:00.470] OnPrepareRequestReceived: height=1145 view=0 index=1 tx=1 \n\
[15:01:00.472] send prepare response \n\
[15:01:00.484] OnPrepareResponseReceived: height=1145 view=0 index=2 \n\
[15:01:00.533] send commit \n\
[15:01:00.536] OnPrepareResponseReceived: height=1145 view=0 index=0 \n\
[15:01:00.556] OnCommitReceived: height=1145 view=0 index=2 \n\
[15:01:00.570] OnCommitReceived: height=1145 view=0 index=1 \n\
[15:01:00.628] relay block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.647] persist block: 0xf8a33340ad74494fac7a89ed472d936f30e5754cf1cf38ea3088ed99e49238fc \n\
[15:01:00.647] initialize: height=1146 view=0 index=3 role=Backup \n\
[15:01:01.771] OnPrepareRequestReceived: height=1146 view=0 index=2 tx=1 \n\
[15:01:01.771] send prepare response \n\
[15:01:01.814] OnPrepareResponseReceived: height=1146 view=0 index=1 \n\
[15:01:01.844] send commit \n\
[15:01:01.852] OnCommitReceived: height=1146 view=0 index=2 \n\
[15:01:01.872] OnPrepareResponseReceived: height=1146 view=0 index=0 \n\
[15:01:01.898] OnCommitReceived: height=1146 view=0 index=0 \n\
[15:01:01.934] relay block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.977] persist block: 0xb7ff0595f644db1a5daab5f420b6feead6361e3cc14a0ccb26b7acc727959063 \n\
[15:01:01.977] initialize: height=1147 view=0 index=3 role=Primary \n\
[15:01:02.979] timeout: height=1147 view=0 state=Primary \n\
[15:01:02.979] send prepare request: height=1147 view=0 \n\
[15:01:02.987] OnPrepareResponseReceived: height=1147 view=0 index=0 \n\
[15:01:03.014] OnPrepareResponseReceived: height=1147 view=0 index=1 \n\
[15:01:03.027] send commit \n\
[15:01:03.044] OnPrepareResponseReceived: height=1147 view=0 index=2 \n\
[15:01:03.080] OnCommitReceived: height=1147 view=0 index=2 \n\
[15:01:03.091] OnCommitReceived: height=1147 view=0 index=0 \n\
[15:01:03.140] relay block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:03.155] persist block: 0x1a957da6b3373a4f12a31ce84421fa023f2b2b7cb351ac094a1c70217b1b53f2 \n\
[15:01:03.156] initialize: height=1148 view=0 index=3 role=Backup \n\
[15:01:04.112] OnPrepareRequestReceived: height=1148 view=0 index=0 tx=1 \n\
[15:01:04.113] send prepare response \n\
[15:01:04.130] OnPrepareResponseReceived: height=1148 view=0 index=1 \n\
[15:01:04.139] send commit \n\
[15:01:04.148] OnCommitReceived: height=1148 view=0 index=1 \n\
[15:01:04.189] OnCommitReceived: height=1148 view=0 index=0 \n\
[15:01:04.206] relay block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.217] persist block: 0x8bf0fa34b9d7c4cf49f08bd0cf47e8b307a263ac499c1c9ba13aedc459a7e121 \n\
[15:01:04.218] initialize: height=1149 view=0 index=3 role=Backup \n\
[15:01:05.251] OnPrepareRequestReceived: height=1149 view=0 index=1 tx=1 \n\
[15:01:05.259] send prepare response \n\
[15:01:05.280] OnPrepareResponseReceived: height=1149 view=0 index=2 \n\
[15:01:05.281] send commit \n\
[15:01:05.287] OnPrepareResponseReceived: height=1149 view=0 index=0 \n\
[15:01:05.327] OnCommitReceived: height=1149 view=0 index=0 \n\
[15:01:05.359] OnCommitReceived: height=1149 view=0 index=2 \n\
[15:01:05.384] relay block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.465] persist block: 0xdf8d17c947be96f22c07c55383f377ed4bdb097375cb00e5ca3946ba650d1974 \n\
[15:01:05.466] initialize: height=1150 view=0 index=3 role=Backup \n\
[15:01:06.527] OnPrepareRequestReceived: height=1150 view=0 index=2 tx=1 \n\
[15:01:06.527] send prepare response \n\
[15:01:06.553] OnPrepareResponseReceived: height=1150 view=0 index=0 \n\
[15:01:06.562] send commit \n\
[15:01:06.573] OnPrepareResponseReceived: height=1150 view=0 index=1 \n\
[15:01:06.595] OnCommitReceived: height=1150 view=0 index=0 \n\
[15:01:06.623] OnCommitReceived: height=1150 view=0 index=1 \n\
[15:01:06.674] relay block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.692] persist block: 0xc93ceaf31abbef0a031b19fa50fa65b1a6d685710893a81a99acd6e32ee7ddcc \n\
[15:01:06.692] initialize: height=1151 view=0 index=3 role=Primary \n\
[15:01:07.699] timeout: height=1151 view=0 state=Primary \n\
[15:01:07.699] send prepare request: height=1151 view=0 \n\
[15:01:07.709] OnPrepareResponseReceived: height=1151 view=0 index=1 \n\
[15:01:07.735] OnPrepareResponseReceived: height=1151 view=0 index=0 \n\
[15:01:07.756] send commit \n\
[15:01:07.777] OnPrepareResponseReceived: height=1151 view=0 index=2 \n\
[15:01:07.803] OnCommitReceived: height=1151 view=0 index=1 \n\
[15:01:07.851] OnCommitReceived: height=1151 view=0 index=2 \n\
[15:01:07.892] relay block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.947] persist block: 0x52b6d6f4ab3039ba5f5f630e3dc00cf806672317206294379a7d029f72d8c17b \n\
[15:01:07.964] initialize: height=1152 view=0 index=3 role=Backup \n\
[15:01:08.864] OnPrepareRequestReceived: height=1152 view=0 index=0 tx=1 \n\
[15:01:08.864] send prepare response \n\
[15:01:08.890] OnPrepareResponseReceived: height=1152 view=0 index=1 \n\
[15:01:08.911] send commit \n\
[15:01:08.911] OnPrepareResponseReceived: height=1152 view=0 index=2 \n\
[15:01:08.962] OnCommitReceived: height=1152 view=0 index=2 \n\
[15:01:08.966] OnCommitReceived: height=1152 view=0 index=0 \n\
[15:01:08.984] relay block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.029] persist block: 0xe4b3d1050484f20383b950fd28a82a55a80643add4d053709553d53ecd7c13c6 \n\
[15:01:09.029] initialize: height=1153 view=0 index=3 role=Backup \n\
[15:01:10.122] OnPrepareRequestReceived: height=1153 view=0 index=1 tx=1 \n\
[15:01:10.123] send prepare response \n\
[15:01:10.136] OnPrepareResponseReceived: height=1153 view=0 index=2 \n\
[15:01:10.145] send commit \n\
[15:01:10.155] OnCommitReceived: height=1153 view=0 index=2 \n\
[15:01:10.185] OnPrepareResponseReceived: height=1153 view=0 index=0 \n\
[15:01:10.236] OnCommitReceived: height=1153 view=0 index=0 \n\
[15:01:10.281] relay block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.334] persist block: 0xd4e1ed2d3d736b98218ca7b2dbed74946aa3de1c64cce806939251e19be422d4 \n\
[15:01:10.334] initialize: height=1154 view=0 index=3 role=Backup \n\
[15:01:11.328] OnPrepareRequestReceived: height=1154 view=0 index=2 tx=1 \n\
[15:01:11.328] send prepare response \n\
[15:01:11.357] OnPrepareResponseReceived: height=1154 view=0 index=1 \n\
[15:01:11.374] send commit \n\
[15:01:11.379] OnPrepareResponseReceived: height=1154 view=0 index=0 \n\
[15:01:11.391] OnCommitReceived: height=1154 view=0 index=1 \n\
[15:01:11.412] OnPrepareResponseReceived: height=1154 view=0 index=0 \n\
[15:01:11.416] OnCommitReceived: height=1154 view=0 index=2 \n\
[15:01:11.454] relay block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.500] persist block: 0xdd8d61e5bf6972b2fc74a30e2009d75057796c8d5da51e9dbc18d47230cb1a3c \n\
[15:01:11.501] initialize: height=1155 view=0 index=3 role=Primary \n\
[15:01:12.508] timeout: height=1155 view=0 state=Primary \n\
[15:01:12.508] send prepare request: height=1155 view=0 \n\
[15:01:12.536] OnPrepareResponseReceived: height=1155 view=0 index=2 \n\
[15:01:12.558] OnPrepareResponseReceived: height=1155 view=0 index=0 \n\
[15:01:12.569] send commit \n\
[15:01:12.571] OnPrepareResponseReceived: height=1155 view=0 index=1 \n\
[15:01:12.663] OnCommitReceived: height=1155 view=0 index=0 \n\
[15:01:12.681] OnCommitReceived: height=1155 view=0 index=1 \n\
[15:01:12.726] relay block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.753] persist block: 0x9b61a264ad94f0cb414b31ca6dc70d6d5c6efbffcf5e645eaf37ce6ea00b7a3b \n\
[15:01:12.753] initialize: height=1156 view=0 index=3 role=Backup \n\
[15:01:13.719] OnPrepareRequestReceived: height=1156 view=0 index=0 tx=1 \n\
[15:01:13.720] send prepare response \n\
[15:01:13.739] OnPrepareResponseReceived: height=1156 view=0 index=1 \n\
[15:01:13.741] send commit \n\
[15:01:13.845] OnCommitReceived: height=1156 view=0 index=1 \n\
[15:01:13.856] OnCommitReceived: height=1156 view=0 index=0 \n\
[15:01:13.885] relay block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:13.986] persist block: 0xc2e9e0a1ab80d79bd91e50ac61ba96c6c67fcea91b2bed980b8237d207b4ad3c \n\
[15:01:13.995] initialize: height=1157 view=0 index=3 role=Backup \n\
[15:01:15.043] OnPrepareRequestReceived: height=1157 view=0 index=1 tx=1 \n\
[15:01:15.044] send prepare response \n\
[15:01:15.094] OnPrepareResponseReceived: height=1157 view=0 index=0 \n\
[15:01:15.096] send commit \n\
[15:01:15.108] OnPrepareResponseReceived: height=1157 view=0 index=2 \n\
[15:01:15.125] OnCommitReceived: height=1157 view=0 index=0 \n\
[15:01:15.157] OnCommitReceived: height=1157 view=0 index=2 \n\
[15:01:15.196] relay block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.223] persist block: 0x55c2e44811a1c74a1deb3abeb32d87c6e91d54d7aba8061adb3d98b60f7f0769 \n\
[15:01:15.223] initialize: height=1158 view=0 index=3 role=Backup \n\
[15:01:16.220] OnPrepareRequestReceived: height=1158 view=0 index=2 tx=1 \n\
[15:01:16.221] send prepare response \n\
[15:01:16.255] OnPrepareResponseReceived: height=1158 view=0 index=1 \n\
[15:01:16.264] send commit \n\
[15:01:16.271] OnPrepareResponseReceived: height=1158 view=0 index=0 \n\
[15:01:16.280] OnCommitReceived: height=1158 view=0 index=2 \n\
[15:01:16.289] OnCommitReceived: height=1158 view=0 index=0 \n\
[15:01:16.328] relay block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.396] persist block: 0x8b9ae340910659ec621e26f71ea0d37e7d6bd6bac70b19516f8275ebf85358b3 \n\
[15:01:16.398] initialize: height=1159 view=0 index=3 role=Primary \n\
[15:01:17.399] timeout: height=1159 view=0 state=Primary \n\
[15:01:17.399] send prepare request: height=1159 view=0 \n\
[15:01:17.443] OnPrepareResponseReceived: height=1159 view=0 index=1 \n\
[15:01:17.467] OnPrepareResponseReceived: height=1159 view=0 index=0 \n\
[15:01:17.470] send commit \n\
[15:01:17.491] OnPrepareResponseReceived: height=1159 view=0 index=2 \n\
[15:01:17.505] OnCommitReceived: height=1159 view=0 index=1 \n\
[15:01:17.525] OnCommitReceived: height=1159 view=0 index=2 \n\
[15:01:17.556] relay block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.578] persist block: 0xd373f0ed1dc5285594d79ee1e9f98de91f0570385bb62ffb23909d4374e4cd20 \n\
[15:01:17.578] initialize: height=1160 view=0 index=3 role=Backup \n\
[15:01:18.504] OnPrepareRequestReceived: height=1160 view=0 index=0 tx=1 \n\
[15:01:18.527] send prepare response \n\
[15:01:18.546] OnPrepareResponseReceived: height=1160 view=0 index=1 \n\
[15:01:18.557] send commit \n\
[15:01:18.583] OnPrepareResponseReceived: height=1160 view=0 index=2 \n\
[15:01:18.583] OnCommitReceived: height=1160 view=0 index=2 \n\
[15:01:18.601] OnCommitReceived: height=1160 view=0 index=1 \n\
[15:01:18.667] relay block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.694] persist block: 0xb346e9a320d5505e2daca068b4a01920e2d2310cd0e49e00c5f78f9ad3c42f05 \n\
[15:01:18.699] initialize: height=1161 view=0 index=3 role=Backup \n\
[15:01:19.683] OnPrepareRequestReceived: height=1161 view=0 index=1 tx=1 \n\
[15:01:19.683] send prepare response \n\
[15:01:19.717] OnPrepareResponseReceived: height=1161 view=0 index=2 \n\
[15:01:19.750] send commit \n\
[15:01:19.751] OnPrepareResponseReceived: height=1161 view=0 index=0 \n\
[15:01:19.808] OnCommitReceived: height=1161 view=0 index=0 \n\
[15:01:19.841] OnCommitReceived: height=1161 view=0 index=2 \n\
[15:01:19.870] relay block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.899] persist block: 0x11520035ea48ba17f1f15c33a8b22efe5ccce3668b921fbab72e70049ecf7b02 \n\
[15:01:19.900] initialize: height=1162 view=0 index=3 role=Backup \n\
[15:01:20.995] OnPrepareRequestReceived: height=1162 view=0 index=2 tx=1 \n\
[15:01:20.996] send prepare response \n\
[15:01:21.010] OnPrepareResponseReceived: height=1162 view=0 index=0 \n\
[15:01:21.012] send commit \n\
[15:01:21.039] OnPrepareResponseReceived: height=1162 view=0 index=1 \n\
[15:01:21.068] OnCommitReceived: height=1162 view=0 index=2 \n\
[15:01:21.151] OnCommitReceived: height=1162 view=0 index=1 \n\
[15:01:21.183] relay block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.208] persist block: 0xc9337a153aff229b9a3802ac854fcaded7d02e51a432a802227879cb3055720f \n\
[15:01:21.218] initialize: height=1163 view=0 index=3 role=Primary \n\
[15:01:22.218] timeout: height=1163 view=0 state=Primary \n\
[15:01:22.219] send prepare request: height=1163 view=0 \n\
[15:01:22.234] OnPrepareResponseReceived: height=1163 view=0 index=1 \n\
[15:01:22.241] OnPrepareResponseReceived: height=1163 view=0 index=2 \n\
[15:01:22.251] send commit \n\
[15:01:22.252] OnPrepareResponseReceived: height=1163 view=0 index=0 \n\
[15:01:22.288] OnCommitReceived: height=1163 view=0 index=0 \n\
[15:01:22.302] OnCommitReceived: height=1163 view=0 index=1 \n\
[15:01:22.342] relay block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.362] persist block: 0x6103d44bf3bafac5b5b35573b4e66e88ef76c00a85988df9c2d6bf14639e1e77 \n\
[15:01:22.363] initialize: height=1164 view=0 index=3 role=Backup \n\
[15:01:23.387] OnPrepareRequestReceived: height=1164 view=0 index=0 tx=1 \n\
[15:01:23.388] send prepare response \n\
[15:01:23.395] OnPrepareResponseReceived: height=1164 view=0 index=1 \n\
[15:01:23.402] send commit \n\
[15:01:23.403] OnPrepareResponseReceived: height=1164 view=0 index=2 \n\
[15:01:23.458] OnCommitReceived: height=1164 view=0 index=0 \n\
[15:01:23.485] OnCommitReceived: height=1164 view=0 index=2 \n\
[15:01:23.529] relay block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.554] persist block: 0x9d4a5eb838cab820087a0de197178ab059e6b6da87af277a6d8a4f5627336db7 \n\
[15:01:23.554] initialize: height=1165 view=0 index=3 role=Backup \n\
'};

function test_example() {
   return parseLogsGenerateJson(exdata1(), exdata2(), exdata3(), exdata4());
}
