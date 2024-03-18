scp dist/js/*.js springboot:kob/ktapp/
scp dist/css/*.css springboot:kob/ktapp/

ssh springboot 'cd kob/ktapp && ./rename.sh'
