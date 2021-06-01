#!/bin/sh
env=`python3 -c 'import json, os;
env_variables={}
for key, value in iter(os.environ.items()):
  if(key.startswith("API_CONNECTION")):
    env_variables[key]=value
print(json.dumps(env_variables))'`
echo $env > /app/dist/my-notes/assets/env.json