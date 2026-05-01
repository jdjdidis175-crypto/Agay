#!/bin/bash

echo "--- 4-Digit PIN Generator ---"
echo "1) Generate Random PIN"
echo "2) Generate Non-Repeating PIN"
read -p "Enter your choice (1 or 2): " choice

case $choice in
    1)
        # Generate 4 random digits (0-9)
        pin=$(printf "%04d" $((RANDOM % 10000)))
        echo "Generated PIN: $pin"
        ;;
    2)
        # Generate 4-digit PIN with no repeating digits
        pin=$(shuf -i 0-9 -n 4 | tr -d '\n')
        echo "Generated Non-Repeating PIN: $pin"
        ;;
    *)
        echo "Invalid choice."
        ;;
esac
