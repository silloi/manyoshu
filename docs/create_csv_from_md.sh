#!/bin/bash
for FILE in *.md; do
  echo -n $(basename $FILE .md) >> raw_texts.csv;
  echo -n ',' >> raw_texts.csv;
  cat $FILE >> raw_texts.csv;
done;
