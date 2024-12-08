@echo off
setlocal enabledelayedexpansion

set /a next_day=0
for /d %%d in (day_*) do (
    set "dirname=%%d"
    set "num=!dirname:day_=!"
    if !num! gtr !next_day! set /a next_day=!num!
)
set /a next_day+=1

if %next_day% equ 26 (
    echo Congratulations! You have completed the Advent Calendar!
    exit /b
)

mkdir "day_%next_day%"
cd "day_%next_day%"
type nul > %next_day%.js
type nul > %next_day%.ts 
type nul > %next_day%.py
type nul > README.md
cd ..

echo Created day_%next_day% folder with empty files
