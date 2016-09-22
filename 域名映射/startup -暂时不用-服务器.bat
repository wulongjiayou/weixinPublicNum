@echo on
cd %cd%
ngrok -config ittun.yml -subdomain wulong 6001
pause
# ttt.ittun.com/
#ngrok 9090