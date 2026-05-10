#!/bin/bash
board=(1 2 3 4 5 6 7 8 9)
turn=1

draw() {
    clear
    echo " ${board[0]} | ${board[1]} | ${board[2]} "
    echo "---|---|---"
    echo " ${board[3]} | ${board[4]} | ${board[5]} "
    echo "---|---|---"
    echo " ${board[6]} | ${board[7]} | ${board[8]} "
}

check_win() {
    local w=("0 1 2" "3 4 5" "6 7 8" "0 3 6" "1 4 7" "2 5 8" "0 4 8" "2 4 6")
    for l in "${w[@]}"; do
        set -- $l
        if [[ "${board[$1]}" == "${board[$2]}" && "${board[$2]}" == "${board[$3]}" ]]; then
            return 0
        fi
    done
    for i in {0..8}; do
        if [[ "${board[$i]}" =~ ^[1-9]$ ]]; then
            return 2
        fi
    done
    return 1
}

comp_move() {
    local empty=()
    for i in {0..8}; do
        if [[ "${board[$i]}" =~ ^[1-9]$ ]]; then
            empty+=($i)
        fi
    done
    local rand=$((RANDOM % ${#empty[@]}))
    local idx=${empty[$rand]}
    board[$idx]="O"
}

while true; do
    draw
    check_win
    res=$?
    if [[ $res -eq 0 ]]; then
        if [[ $turn -eq 0 ]]; then
            echo "Wygrałeś (X)!"
        else
            echo "Wygrał komputer (O)!"
        fi
        break
    elif [[ $res -eq 1 ]]; then
        echo "Remis!"
        break
    fi

    if [[ $turn -eq 1 ]]; then
        read -p "Ruch (1-9): " ch
        if [[ "$ch" =~ ^[1-9]$ ]]; then
            idx=$((ch - 1))
            if [[ "${board[$idx]}" =~ ^[1-9]$ ]]; then
                board[$idx]="X"
                turn=0
            fi
        fi
    else
        comp_move
        turn=1
    fi
done
