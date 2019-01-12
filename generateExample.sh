#!/bin/bash
echo "generating basic commit example"
cd getremotelog
cp log1.log_commit log1.log
cp log2.log_commit log2.log
cp log3.log_commit log3.log
cp log4.log_commit log4.log
./convertlogstojs.sh
cd ..
echo "finished!"
