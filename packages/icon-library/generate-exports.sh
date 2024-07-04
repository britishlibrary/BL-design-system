#!/usr/bin/env bash

set -uo pipefail
trap 's=$?; echo "$0: Error on line "$LINENO": $BASH_COMMAND"; exit $s' ERR
IFS=$'\n\t'

# Clear or create the src/index.ts file
:> src/index.ts

# Add the SVGIconProps export statement to the index.ts file
echo "export type { SVGIconProps } from './types'" >> src/index.ts

# Ensure the file is synchronized
sync

# Loop through each file in the src/icons directory
for file in src/icons/*; do
  if [ -f "$file" ]; then  # Check if it is a file, not a directory
    # Extract the base filename without path
    filename=$(basename -- "$file")
    filename_no_ext=${filename%%.*}

    # Check for default export in the file
    if grep -q 'export default' "$file"; then
      echo "Processing $filename, exporting as Icon${filename_no_ext}"
      export_statement="export { default as Icon${filename_no_ext} } from './icons/${filename_no_ext}'"
      echo "$export_statement" >> src/index.ts
    else
      echo "Skipping $filename, no default export found"
    fi

    # Force file sync to ensure data is written before continuing
    sync
  fi
done

# Final sync to flush all I/O operations
sync