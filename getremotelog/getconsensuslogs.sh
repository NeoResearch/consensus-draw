#!/bin/bash
echo "getting logs..."
ECO_LOGS_PATH="../../neocompiler-eco/docker-compose-eco-network"
cp `ls $ECO_LOGS_PATH/logs-neocli-node1/*.log | tail -1` log3.log
cp `ls $ECO_LOGS_PATH/logs-neocli-node2/*.log | tail -1` log1.log
cp `ls $ECO_LOGS_PATH/logs-neocli-node3/*.log | tail -1` log4.log
cp `ls $ECO_LOGS_PATH/logs-neocli-node4/*.log | tail -1` log2.log

echo "Converting logs to js format"
./convertlogstojs.sh

echo "finished"
