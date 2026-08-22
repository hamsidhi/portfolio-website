@echo off
echo Starting dev server... > server_status.log
call npm run dev >> server_status.log 2>&1
