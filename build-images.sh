#!/bin/bash

# React 앱 이미지 빌드
docker build -t react-app ./frontend

# Express 앱 이미지 빌드
docker build -t express-app ./backend

# Nginx 이미지 빌드
docker build -t nginx ./nginx
