#!/bin/bash
echo "What do you want to deploy? 'w' for web, 'j' for jstests"

WEB='w'
JS='j'

read LOC

if [[ "$LOC" == "$WEB" ]]; then
    LOC="web"
elif [[ "$LOC" == "$JS" ]]; then
    LOC="js-tests"
else 
    echo "Not valid, defaulting to web"
    $LOC = "web"
fi 

cd ~/FattesSloPizzaMockup
git pull
sudo rm /var/www/html/*
sudo cp ~/FattesSloPizzaMockup/$LOC/* /var/www/html/
