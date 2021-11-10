## && 确保当前指令成功执行后再执行下一个
rm -rf dist &&
yarn build  &&
cd dist     &&
git init    &&
git add     &&
git commit -m "update"  &&
git branch -M master    &&
git remote add origin git@github.com:LLLXXzz/   guluUI-website.git  &&
git push -f -u origin master    &&
cd ..
