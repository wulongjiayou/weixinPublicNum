@echo on
cd %cd%
ngrok -config ittun.yml -subdomain wl 6004
pause
# ttt.ittun.com/
#ngrok 9090