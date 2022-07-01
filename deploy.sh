
set -e

npm run build

cd dist

git init 
git add -A
git commit -m 'deploy'

git push -f https://github.com/FunTonw/yueh-menu.git master:gh-pages
cd -

# 執行指令，在終端機輸入 deploy.sh