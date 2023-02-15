@echo off

REM Check if there are any uncommitted changes

git diff-index --quiet HEAD 

if %errorlevel% equ 0 (
    REM No changes to commit, so hust push to the remote repository
    git push 
) else (
    REM There are uncommitted changes, so commit them first
    git commit -a -m "Automated commit on shutdown"
    git push
)

REM This has to be as administrator, so that it can run the git commands