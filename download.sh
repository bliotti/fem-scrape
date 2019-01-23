#!/bin/bash
while read p; do
  curl $p -O $p
done <test.txt